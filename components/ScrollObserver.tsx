import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

interface ScrollObserverContextProps {
  activeId: string | null;
  registerTrigger: (id: string, ref: HTMLElement) => void;
  unregisterTrigger: (id: string) => void;
  registerReactor: (id: string) => number;
  unregisterReactor: (id: string) => void;
  activeIndex: number;
}

const ScrollObserverContext = createContext<ScrollObserverContextProps | null>(null);

export function useScrollObserver() {
  const context = useContext(ScrollObserverContext);
  if (!context) {
    throw new Error('useScrollObserver must be used within a ScrollObserver');
  }
  return context;
}

interface ScrollObserverProps {
  className?: string;
  children: (isHidden: boolean) => React.ReactNode;
}

export function ScrollObserver({ className, children }: ScrollObserverProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const triggersRef = useRef<Map<string, HTMLElement>>(new Map());
  const reactorsRef = useRef<string[]>([]);

  const registerTrigger = (id: string, element: HTMLElement) => {
    triggersRef.current.set(id, element);
  };

  const unregisterTrigger = (id: string) => {
    triggersRef.current.delete(id);
  };

  const registerReactor = (id: string) => {
    if (!reactorsRef.current.includes(id)) {
      reactorsRef.current = [...reactorsRef.current, id];
    }
    return reactorsRef.current.indexOf(id);
  };

  const unregisterReactor = (id: string) => {
    reactorsRef.current = reactorsRef.current.filter(x => x !== id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const triggerPoint = vh * 0.45; // Trigger at center-ish of viewport
      let currentActiveId: string | null = null;

      // Find the trigger closest to the center
      triggersRef.current.forEach((element, id) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          currentActiveId = id;
        }
      });

      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute activeIndex by finding the index of activeId in triggersRef insertion order
  const activeIndex = activeId ? Array.from(triggersRef.current.keys()).indexOf(activeId) : -1;
  const isHidden = activeId === null;

  return (
    <ScrollObserverContext.Provider
      value={{
        activeId,
        registerTrigger,
        unregisterTrigger,
        registerReactor,
        unregisterReactor,
        activeIndex,
      }}
    >
      <div className={className}>
        {children(isHidden)}
      </div>
    </ScrollObserverContext.Provider>
  );
}

interface ScrollObserverChildProps {
  className?: string;
  children: React.ReactNode;
}

ScrollObserver.TriggerGroup = function TriggerGroup({ className, children }: ScrollObserverChildProps) {
  return <div className={className}>{children}</div>;
};

interface TriggerProps {
  id: string;
  className?: string;
  children: (isActive: boolean) => React.ReactNode;
}

ScrollObserver.Trigger = function Trigger({ id, className, children }: TriggerProps) {
  const { activeId, registerTrigger, unregisterTrigger } = useScrollObserver();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      registerTrigger(id, element);
    }
    return () => {
      unregisterTrigger(id);
    };
  }, [id, registerTrigger, unregisterTrigger]);

  const isActive = activeId === id;

  return (
    <div ref={ref} id={id} className={className}>
      {children(isActive)}
    </div>
  );
};

ScrollObserver.ReactorGroup = function ReactorGroup({ className, children }: ScrollObserverChildProps) {
  return <div className={className}>{children}</div>;
};

interface ReactorProps {
  className?: string;
  children: (isActive: boolean) => React.ReactNode;
}

ScrollObserver.Reactor = function Reactor({ className, children }: ReactorProps) {
  const { registerReactor, unregisterReactor, activeIndex } = useScrollObserver();
  const [id] = useState(() => Math.random().toString(36).substr(2, 9));
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const idx = registerReactor(id);
    setIndex(idx);
    return () => {
      unregisterReactor(id);
    };
  }, [id, registerReactor, unregisterReactor]);

  const isActive = activeIndex === index;

  return (
    <div className={className}>
      {children(isActive)}
    </div>
  );
};
