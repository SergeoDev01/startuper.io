import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export function useLocomotiveScroll() {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const scroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: wrapperRef.current,
        content: contentRef.current,
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

  return { wrapperRef, contentRef, scrollRef };
}
