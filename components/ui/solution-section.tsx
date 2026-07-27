import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[var(--bg-secondary)] px-6 py-20 font-sans text-[var(--text-primary)] md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex max-w-[42rem] flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
            {eyebrow}
          </span>
          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="text-base font-light leading-relaxed text-[var(--text-body)] md:text-lg">
            {paragraph}
          </p>
        </div>

        <div className="mt-12 relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: trigger list */}
          <div className="py-[15vh]">
            {steps.map((step, index) => {
              const start = index / steps.length;
              const end = (index + 1) / steps.length;
              const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0.2, 1, 1, 0.2]);

              return (
                <div
                  key={index}
                  className="flex min-h-[30vh] flex-col justify-center py-4 scroll-mt-[40vh]"
                >
                    <motion.div
                      style={{ opacity }}
                      className="relative -mx-6 rounded-md p-6 transition duration-300 bg-white/[0.05] text-[var(--text-primary)] shadow-sm"
                    >
                    <span className="text-xs font-semibold tabular-nums tracking-[0.2em] text-[var(--text-tertiary)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
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
                  <div className="absolute -inset-px left-0 top-0 h-2/3 w-2/3 rounded-lg opacity-10 blur-xl bg-gradient-to-br from-purple-500 to-indigo-500" />
                  <div className="absolute -inset-px right-0 top-1/4 h-2/3 w-2/3 rounded-lg opacity-10 blur-xl bg-gradient-to-br from-cyan-500 to-sky-500" />
                  <div className="absolute -inset-px bottom-0 left-1/4 h-2/3 w-2/3 rounded-lg opacity-10 blur-xl bg-gradient-to-br from-amber-500 to-orange-500" />
                </div>

                {steps.map((step, index) => {
                  const start = index / steps.length;
                  const end = (index + 1) / steps.length;
                  const opacity = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                  const scale = useTransform(smoothProgress, [start, start + 0.1, end - 0.1, end], [0.95, 1, 1, 0.95]);

                  return (
                    <motion.div
                      key={index}
                      style={{ opacity, scale }}
                      className="absolute inset-0 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-8 shadow-[inset_0_1px_0px_rgba(255,255,255,0.06)] backdrop-blur-md flex flex-col justify-between"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                        Phase {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex flex-col gap-3">
                        <span className="text-2xl font-medium tracking-tight text-[var(--text-primary)] md:text-3xl">
                          {step.title}
                        </span>
                        <p className="text-sm font-light leading-relaxed text-[var(--text-body)] md:text-base">
                          {step.content}
                        </p>
                      </div>
                      <span className="text-xs font-light tabular-nums text-[var(--text-tertiary)]">
                        {String(index + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                      </span>
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
