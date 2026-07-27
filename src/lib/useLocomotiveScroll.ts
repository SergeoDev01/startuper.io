import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export function useLocomotiveScroll() {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
      } as never,
    });

    scrollRef.current = scroll;

    return () => {
      scroll.destroy();
      scrollRef.current = null;
    };
  }, []);

  return { scrollRef };
}
