import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export function useLocomotiveScroll() {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: containerRef.current,
        content: containerRef.current,
        lerp: 0.08,
        duration: 1.2,
        orientation: 'vertical',
        smoothWheel: true,
      } as never,
    });

    scrollRef.current = scroll;

    return () => {
      scroll.destroy();
      scrollRef.current = null;
    };
  }, []);

  return { containerRef, scrollRef };
}
