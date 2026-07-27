import { useScrollReveal } from '@/lib/animations';
import { Card, CardContent } from '@/components/base-ui/card';
import {
  HiCubeTransparent,
  HiSwitchHorizontal,
  HiChartBar,
  HiShieldCheck,
  HiTrendingUp,
} from 'react-icons/hi';

interface PillarStat {
  label: string;
  value: string;
}

interface Pillar {
  icon: typeof HiCubeTransparent;
  title: string;
  body: string;
  tag: string;
  iconColor: string;
  tall?: boolean;
  stats?: PillarStat[];
}

const defaultPillars: Pillar[] = [
  {
    icon: HiCubeTransparent,
    title: 'One continuous system',
    body: 'Strategy, execution, and measurement live in a single surface — no more stitching tools by hand.',
    tag: 'Unified surface',
    iconColor: 'text-orange-500',
  },
  {
    icon: HiSwitchHorizontal,
    title: 'Clean handoffs',
    body: 'Every transition carries its context forward. Nothing falls through the cracks.',
    tag: 'No context loss',
    iconColor: 'text-purple-500',
  },
  {
    icon: HiShieldCheck,
    title: 'Built to last',
    body: 'The loop holds whether you run one team or fifty — momentum survives scale.',
    tag: 'Scales with you',
    iconColor: 'text-green-500',
    tall: true,
    stats: [
      { label: 'Handoffs', value: 'Zero loss' },
      { label: 'Teams', value: '1 → 50+' },
      { label: 'Signal', value: 'Real-time' },
    ],
  },
  {
    icon: HiChartBar,
    title: 'Real-time signal',
    body: 'Progress is visible the moment it happens, not in next quarter’s retro.',
    tag: 'Live signal',
    iconColor: 'text-pink-500',
  },
  {
    icon: HiTrendingUp,
    title: 'Compounding momentum',
    body: 'Each cycle builds on the last, so progress compounds instead of resetting.',
    tag: 'Self-reinforcing',
    iconColor: 'text-blue-500',
  },
];

export interface PillarsSectionProps {
  eyebrow?: string;
  title?: string;
  pillars?: Pillar[];
}

export default function PillarsSection({
  eyebrow = 'Pillars',
  title = 'Four foundations that keep momentum alive.',
  pillars = defaultPillars,
}: PillarsSectionProps) {
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'staggerCards', stagger: 120 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-black px-6 py-20 font-sans text-[var(--text-primary)] md:px-12 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <span data-anim className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
          {eyebrow}
        </span>
        <h1 data-anim className="mb-12 max-w-3xl text-center text-3xl leading-[0.98] font-medium tracking-tight md:text-5xl text-wrap balance">
          {title}
        </h1>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isTall = pillar.tall;
            return (
              <Card
                key={index}
                data-anim
                className={`rounded-2xl border border-white/10 bg-white/[0.04] transition-[background-color,border-color,box-shadow] duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${
                  isTall ? 'md:row-span-2 flex flex-col justify-between' : ''
                }`}
              >
                <CardContent
                  className={isTall ? 'flex h-full flex-col p-6' : 'p-6'}
                >
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-[#ff4f13]/[0.33] shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                    <Icon className={`h-5 w-5 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="mb-1 text-lg font-medium">{pillar.title}</h3>
                  <p className="mb-3 text-sm font-light text-[var(--text-body)]">
                    {pillar.body}
                  </p>
                  {pillar.stats && (
                    <div className="mb-4 space-y-3">
                      {pillar.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs"
                        >
                          <span className="text-[var(--text-tertiary)]">
                            {stat.label}
                          </span>
                          <span className="font-medium text-[var(--text-primary)]">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto inline-flex size-fit rounded-md border border-white/10 bg-white/[0.04] p-0.5">
                    <div className="inline-flex items-center rounded bg-white/[0.08] px-2.5 py-1 text-[10px] font-medium text-[var(--text-body)] shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                      {pillar.tag}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
