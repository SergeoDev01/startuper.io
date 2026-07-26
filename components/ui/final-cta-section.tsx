interface FinalCtaSectionProps {
  title?: string;
  paragraph?: string;
  ctaText?: string;
}

export default function FinalCtaSection({
  title = 'Close the loop. Compound the impact.',
  paragraph = 'Tell us about your workflow. If it’s a fit, we’ll build the first cycle with you.',
  ctaText = 'Apply now',
}: FinalCtaSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--bg-primary)] px-6 py-32 font-sans text-[var(--text-primary)] md:px-12 md:py-40">
      {/* Subtle glow — orange radial matching design system */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(249, 115, 22, 0.12) 0%, rgba(249, 115, 22, 0) 70%)',
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-5xl font-medium leading-tight tracking-tight md:text-6xl">
          {title}
        </h2>
        <p className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
          {paragraph}
        </p>

        {/* CTA — matches hero button at rest */}
        <button className="group mt-4 flex h-14 items-center gap-3 rounded-md bg-[#FF4202] px-8 text-base font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]">
          {ctaText}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  );
}
