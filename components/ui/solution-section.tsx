import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MethodStep {
  title: string;
  content: string;
}

interface SolutionSectionProps {
  eyebrow?: string;
  title?: string;
  paragraph?: string;
  steps?: MethodStep[];
}

const defaultSteps: MethodStep[] = [
  {
    title: 'Map the system',
    content: 'We model your workflow end-to-end, surfacing the handoffs where momentum leaks today — the quiet gaps where vision loses contact with execution.',
  },
  {
    title: 'Wire the loop',
    content: 'Tools, people, and context snap into one continuous loop. No more context switching between apps, no re-explaining the same decision twice.',
  },
  {
    title: 'Compound impact',
    content: 'Every cycle builds on the last. Progress becomes visible, measurable, and self-reinforcing — impact compounds instead of resetting each quarter.',
  },
];

export default function SolutionSection({
  eyebrow = 'The method',
  title = 'A three-phase loop that turns vision into compounding impact.',
  paragraph = 'We replace fragmented execution with a single, continuous motion — so the work keeps moving long after the kickoff ends.',
  steps = defaultSteps,
}: SolutionSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const els = document.querySelectorAll<HTMLElement>('[data-step]');
      const vh = window.innerHeight;
      const zoneTop = vh * 0.4;
      const zoneBottom = vh * 0.6;

      let bestIdx = activeRef.current;
      let bestOverlap = 0;

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const overlapTop = Math.max(rect.top, zoneTop);
        const overlapBottom = Math.min(rect.bottom, zoneBottom);
        const overlap = Math.max(0, overlapBottom - overlapTop);
        const idx = parseInt(el.getAttribute('data-step') || '0', 10);

        if (overlap > bestOverlap) {
          bestOverlap = overlap;
          bestIdx = idx;
        }
      });

      if (bestIdx !== activeRef.current) {
        activeRef.current = bestIdx;
        setActiveIdx(bestIdx);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section data-scroll className="relative w-full bg-[var(--bg-secondary)] px-6 py-20 font-sans text-[var(--text-primary)] md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex max-w-[42rem] flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
            {eyebrow}
          </span>
          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl text-wrap balance">
            {title}
          </h2>
          <p className="text-base font-light leading-relaxed text-[var(--text-body)] md:text-lg">
            {paragraph}
          </p>
        </div>

        <div className="mt-12 relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: trigger list */}
          <div className="pt-[15vh] pb-[55vh]">
            {steps.map((step, index) => {
              const isActive = activeIdx === index;

              return (
                <div
                  key={index}
                  data-step={index}
                  className="relative flex min-h-[30vh] flex-col justify-center py-4 scroll-mt-[40vh]"
                >
                  <motion.span
                    animate={{ opacity: isActive ? 1 : 0.15 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="absolute left-0 -top-5 z-20 text-7xl font-bold leading-none text-[#FF4202] select-none sm:text-8xl"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.span>
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0.25 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative z-10 -mx-6 rounded-md p-6 bg-white/[0.05] text-[var(--text-primary)] shadow-sm"
                  >
                    <div className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">
                      {step.title}
                    </div>
                    <div className="mt-3 text-base font-light leading-relaxed text-[var(--text-body)]">
                      {step.content}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right: sticky reactor */}
          <div className="relative hidden md:block">
            <div className="sticky top-0 flex h-screen items-center justify-center">
              <div className="relative aspect-square w-full max-w-[420px]">
                {/* Persistent glow backdrop */}
                <div className="pointer-events-none absolute -inset-16 -z-10">
                  <div className="absolute -inset-px left-0 top-0 h-2/3 w-2/3 rounded-lg opacity-10 blur-xl bg-gradient-to-br from-purple-500 to-indigo-500" data-scroll data-scroll-speed="-0.3" />
                  <div className="absolute -inset-px right-0 top-1/4 h-2/3 w-2/3 rounded-lg opacity-10 blur-xl bg-gradient-to-br from-cyan-500 to-sky-500" data-scroll data-scroll-speed="0.2" />
                  <div className="absolute -inset-px bottom-0 left-1/4 h-2/3 w-2/3 rounded-lg opacity-10 blur-xl bg-gradient-to-br from-amber-500 to-orange-500" data-scroll data-scroll-speed="-0.15" />
                </div>

                {steps.map((step, index) => {
                  const isActive = activeIdx === index;

                  return (
                    <motion.div
                      key={index}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0px_rgba(255,255,255,0.06)] backdrop-blur-md"
                    >
                      <div className="relative h-1/2 overflow-hidden">
                        <img
                          src={`https://placehold.co/600x300/FF5E00/1a1a1a?text=${encodeURIComponent(step.title)}`}
                          alt={step.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-6">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                          Phase {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex flex-col gap-2">
                          <span className="text-xl font-medium tracking-tight text-[var(--text-primary)] md:text-2xl">
                            {step.title}
                          </span>
                          <p className="text-xs font-light leading-relaxed text-[var(--text-body)] md:text-sm">
                            {step.content}
                          </p>
                        </div>
                        <span className="text-xs font-light tabular-nums text-[var(--text-tertiary)]">
                          {String(index + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}