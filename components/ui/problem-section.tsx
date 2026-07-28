import { useScrollReveal } from '@/lib/animations';
import { CountUp } from '@/components/CountUp';

interface ProblemSectionProps {
  eyebrow?: string;
  title?: string;
  paragraph?: string;
  stats?: { value: string; label: string; countUp?: { to: number; suffix?: string; prefix?: string; decimals?: number; stiffness?: number } }[];
  ctaText?: string;
}

const defaultStats = [
  { value: '73%', label: 'of teams ship late', countUp: { to: 73, suffix: '%', stiffness: 60 } },
  { value: '2.4×', label: 'avg. tooling overhead', countUp: { to: 2.4, suffix: '×', decimals: 1, stiffness: 80 } },
  { value: '∞', label: 'context switching' },
];

export default function ProblemSection({
  eyebrow = 'The problem',
  title = 'Great ideas stall in the gap between vision and execution.',
  paragraph = 'Ambitious teams drown in scattered tools, broken handoffs, and context lost between meetings. Momentum leaks out of every transition — and impact never compounds the way it should.',
  stats = defaultStats,
  ctaText = 'See how it works',
}: ProblemSectionProps) {
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'fadeUp', stagger: 120 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-[var(--bg-primary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:max-w-[42rem]">
          <span data-anim className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            {eyebrow}
          </span>
          <h2 data-anim className="text-4xl font-medium leading-tight tracking-tight md:text-5xl text-wrap balance">
            {title}
          </h2>
          <p data-anim className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
            {paragraph}
          </p>
        </div>

        <div data-anim className="mt-16 grid grid-cols-1 gap-8 border-y border-white/10 py-12 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 sm:px-6">
              <span className="bg-gradient-to-b from-[#FF4202] to-[#ff4f13] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                {stat.countUp ? (
                  <CountUp
                    to={stat.countUp.to}
                    suffix={stat.countUp.suffix}
                    prefix={stat.countUp.prefix}
                    decimals={stat.countUp.decimals ?? 0}
                    stiffness={stat.countUp.stiffness}
                    damping={18}
                  />
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-sm font-medium text-[var(--text-tertiary)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div data-anim className="mt-16 flex justify-center">
          <button className="group flex h-12 items-center gap-2 rounded-md bg-[#FF4202] px-6 text-sm font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]">
            {ctaText}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
