import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const ballRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    const fill = fillRef.current;
    if (!ball || !fill) return;

    let ticking = false;
    let currentPos = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const target = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      currentPos += (target - currentPos) * 0.15;

      const trackHeight = 240;
      const ballPos = currentPos * trackHeight;

      ball.style.transform = `translateY(${ballPos}px)`;
      fill.style.height = `${ballPos}px`;

      if (Math.abs(currentPos - target) > 0.001) {
        requestAnimationFrame(update);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed right-5 top-1/2 z-50 hidden h-72 w-px -translate-y-1/2 md:block">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-full bg-white/10" />
        <div
          ref={fillRef}
          className="absolute bottom-0 left-0 w-full rounded-full bg-[#FF4202]"
          style={{ height: 0 }}
        />
        <div
          ref={ballRef}
          className="absolute -left-[7px] top-0 flex h-3.5 w-3.5 items-center justify-center"
        >
          <div className="h-3.5 w-3.5 rounded-full bg-[#FF4202] shadow-[0_0_10px_rgba(255,66,2,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]" />
        </div>
      </div>
    </div>
  );
}
