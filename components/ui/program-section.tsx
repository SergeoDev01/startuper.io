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
  return (
    <section className="w-full bg-[var(--bg-primary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
          {eyebrow}
        </span>
        <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
          {paragraph}
        </p>

        {/* Single centered CTA — matches hero button at rest */}
        <button className="group mt-4 flex h-14 items-center gap-3 rounded-2xl border border-white/20 bg-[var(--cta-bg)] px-8 text-base font-medium text-[var(--cta-text)] shadow-[inset_0_2px_0px_rgba(255,255,255,1),inset_0_-2px_0px_rgba(0,0,0,0.2)] transition-transform active:scale-[0.96]">
          {ctaText}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>

        <span className="text-sm font-light text-[var(--text-tertiary)]">{note}</span>
      </div>
    </section>
  );
}
