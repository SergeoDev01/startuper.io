import { useScrollReveal } from '@/lib/animations';

interface ProgramSectionProps {
  eyebrow?: string;
  title?: string;
  paragraph?: string;
  ctaText?: string;
  note?: string;
}

export default function ProgramSection({
  eyebrow = 'Program',
  title = 'Admission by application.',
  paragraph = 'We work with a limited number of teams each cohort so the loop stays tight. Tell us about your workflow — if it’s a fit, we’ll build the first cycle with you.',
  ctaText = 'Apply now',
  note = 'No pricing tiers. No self-serve plan. By design.',
}: ProgramSectionProps) {
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'fadeUp', stagger: 120 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-[var(--bg-primary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span data-anim className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
          {eyebrow}
        </span>
        <h2 data-anim className="text-4xl font-medium leading-tight tracking-tight md:text-5xl text-wrap balance">
          {title}
        </h2>
        <p data-anim className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
          {paragraph}
        </p>

        <div data-anim>
          <button className="group mt-4 flex h-14 items-center gap-3 rounded-md bg-[#FF4202] px-8 text-base font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]">
            {ctaText}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        <span data-anim className="text-sm font-light text-[var(--text-tertiary)]">{note}</span>
      </div>
    </section>
  );
}
