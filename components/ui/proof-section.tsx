import { useScrollReveal } from '@/lib/animations';
import { FaStar, FaBolt, FaServer, FaRocket } from 'react-icons/fa';
import { SiVercel, SiProducthunt } from 'react-icons/si';
import { CountUp } from '@/components/CountUp';

interface Metric {
  icon: typeof FaServer;
  iconColor: string;
  value: string;
  label: string;
  countUp?: { to: number; suffix?: string; prefix?: string; decimals?: number; stiffness?: number };
}

interface Endorsement {
  icon: typeof SiVercel;
  iconClass: string;
  score: string;
  name: string;
  countUp?: { to: number; suffix?: string; prefix?: string; decimals?: number; stiffness?: number };
}

const defaultMetrics: Metric[] = [
  {
    icon: FaServer,
    iconColor: 'text-emerald-500',
    value: '99.99%',
    label: 'uptime SLA',
    countUp: { to: 99.99, suffix: '%', decimals: 2, stiffness: 50 },
  },
  {
    icon: FaRocket,
    iconColor: 'text-blue-500',
    value: '2.4M',
    label: 'deployments',
    countUp: { to: 2.4, suffix: 'M', decimals: 1, stiffness: 70 },
  },
  {
    icon: FaBolt,
    iconColor: 'text-amber-500',
    value: '<50ms',
    label: 'avg latency',
    countUp: { to: 50, prefix: '<', suffix: 'ms', stiffness: 90 },
  },
];

const defaultEndorsements: Endorsement[] = [
  {
    icon: SiProducthunt,
    iconClass: 'text-orange-500',
    score: '#1',
    name: 'Product Hunt',
    countUp: { to: 1, prefix: '#', stiffness: 100 },
  },
  {
    icon: FaStar,
    iconClass: 'text-amber-400',
    score: '4.8',
    name: 'G2 Reviews',
    countUp: { to: 4.8, decimals: 1, stiffness: 80 },
  },
  { icon: SiVercel, iconClass: '', score: 'Featured', name: 'Vercel' },
];

export interface ProofSectionProps {
  eyebrow?: string;
  title?: string;
  paragraph?: string;
  metrics?: Metric[];
  endorsements?: Endorsement[];
}

export default function ProofSection({
  eyebrow = 'Proof',
  title = 'The numbers move when the loop closes.',
  paragraph = 'Across teams that adopted the system, momentum stopped leaking — and impact started compounding.',
  metrics = defaultMetrics,
  endorsements = defaultEndorsements,
}: ProofSectionProps) {
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'fadeUp', stagger: 120 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-[var(--bg-secondary)] px-6 py-20 font-sans text-[var(--text-primary)] md:px-12 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <span data-anim className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
          {eyebrow}
        </span>
        <h2 data-anim className="mt-4 text-4xl leading-[1.1] font-medium tracking-tight md:text-5xl text-wrap balance">
          {title}
        </h2>

        <p data-anim className="mx-auto mt-3 max-w-lg text-base font-light leading-relaxed text-[var(--text-body)]">
          {paragraph}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              data-anim
              className="group relative flex cursor-default items-center gap-3 overflow-hidden rounded-lg bg-white/[0.04] px-7 py-4 shadow-[inset_0_1px_0_0.5px_rgba(255,255,255,0.08),0_1px_2px_-1px_rgba(0,0,0,0.4),0_2px_4px_0_rgba(0,0,0,0.3)] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-white/[0.06]"
            >
              <div className="absolute inset-0 -translate-x-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1500 group-hover:translate-x-[200%]" />
              <m.icon
                className={`relative size-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${m.iconColor}`}
              />
              <span className="relative bg-gradient-to-b from-[#FF4202] to-[#ff4f13] bg-clip-text text-2xl font-bold tracking-tight text-transparent transition-[letter-spacing] duration-500 ease-out group-hover:tracking-normal md:text-3xl">
                {m.countUp ? (
                  <CountUp
                    to={m.countUp.to}
                    suffix={m.countUp.suffix}
                    prefix={m.countUp.prefix}
                    decimals={m.countUp.decimals ?? 0}
                    stiffness={m.countUp.stiffness}
                    damping={18}
                  />
                ) : (
                  m.value
                )}
              </span>
              <span className="relative text-sm font-medium text-[var(--text-tertiary)]">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <div data-anim className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[var(--text-tertiary)]">
          {endorsements.map((e, index) => (
            <div key={e.name} className="flex items-center">
              <div className="group flex cursor-default items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors duration-300 hover:bg-white/[0.06] hover:text-[var(--text-primary)]">
                <e.icon
                  className={`relative size-4 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 ${e.iconClass}`}
                />
                <span className="font-medium">
                  {e.countUp ? (
                    <CountUp
                      to={e.countUp.to}
                      suffix={e.countUp.suffix}
                      prefix={e.countUp.prefix}
                      decimals={e.countUp.decimals ?? 0}
                      stiffness={e.countUp.stiffness}
                      damping={18}
                    />
                  ) : (
                    e.score
                  )}
                </span>
                <span>{e.name}</span>
              </div>
              {index < endorsements.length - 1 && (
                <div className="mx-1 h-4 w-px bg-white/15" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
