import { useEffect, useRef, useId } from 'react';
import { animate, stagger } from 'animejs';

export interface ScrollRevealOptions {
  preset?: 'fadeUp' | 'fadeIn' | 'staggerCards' | 'staggerList' | 'scaleIn' | 'slideRight';
  duration?: number;
  delay?: number;
  stagger?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  easing?: string;
}

const PRESETS: Record<string, { from: Record<string, string | number>; to: Record<string, string | number>; ease?: string; duration?: number; stagger?: number }> = {
  fadeUp: {
    from: { opacity: 0, translateY: 32 },
    to: { opacity: 1, translateY: 0 },
    ease: 'cubicBezier(0.16, 1, 0.3, 1)',
    duration: 800,
    stagger: 80,
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    ease: 'cubicBezier(0.16, 1, 0.3, 1)',
    duration: 600,
  },
  staggerCards: {
    from: { opacity: 0, translateY: 40, scale: 0.97 },
    to: { opacity: 1, translateY: 0, scale: 1 },
    ease: 'cubicBezier(0.16, 1, 0.3, 1)',
    duration: 700,
    stagger: 100,
  },
  staggerList: {
    from: { opacity: 0, translateX: -20 },
    to: { opacity: 1, translateX: 0 },
    ease: 'cubicBezier(0.16, 1, 0.3, 1)',
    duration: 500,
    stagger: 60,
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
    ease: 'cubicBezier(0.16, 1, 0.3, 1)',
    duration: 600,
  },
  slideRight: {
    from: { opacity: 0, translateX: -32 },
    to: { opacity: 1, translateX: 0 },
    ease: 'cubicBezier(0.16, 1, 0.3, 1)',
    duration: 600,
    stagger: 80,
  },
};

export function useScrollReveal<T extends HTMLElement>(
  targetSelector: string,
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const id = useId();

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const preset = PRESETS[options.preset || 'fadeUp'];
    const duration = options.duration ?? preset.duration ?? 700;
    const ease = options.easing ?? preset.ease ?? 'cubicBezier(0.16, 1, 0.3, 1)';
    const staggerVal = options.stagger ?? preset.stagger ?? 0;
    const from = preset.from;
    const to = preset.to;
    const delay = options.delay ?? 0;

    const children = container.querySelectorAll(targetSelector);
    if (!children.length) return;

    children.forEach((child) => {
      const el = child as HTMLElement;
      for (const [key, val] of Object.entries(from)) {
        (el.style as unknown as Record<string, string>)[key] = String(val);
      }
      el.style.willChange = 'transform, opacity';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const targets = container.querySelectorAll(targetSelector);

          animate(targets, {
            ...to,
            duration,
            ease,
            delay: staggerVal ? stagger(staggerVal) : delay,
          } as never);

          targets.forEach((el) => {
            (el as HTMLElement).style.willChange = '';
          });

          if (options.once !== false) observer.unobserve(container);
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [targetSelector, options.preset, options.duration, options.delay, options.stagger, options.threshold, options.rootMargin, options.once, options.easing, id]);

  return ref;
}
