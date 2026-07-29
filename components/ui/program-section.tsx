import { useScrollReveal } from '@/lib/animations';
import { useTranslation } from '@/lib/i18n';

export default function ProgramSection() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'fadeUp', stagger: 120 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-[var(--bg-primary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span data-anim className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
          {t("program.eyebrow")}
        </span>
        <h2 data-anim className="text-4xl font-medium leading-tight tracking-tight md:text-5xl text-wrap balance">
          {t("program.title")}
        </h2>
        <p data-anim className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
          {t("program.paragraph")}
        </p>
        <div data-anim>
          <button className="group mt-4 flex h-14 items-center gap-3 rounded-md bg-[#FF4202] px-8 text-base font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]">
            {t("program.cta")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
        <span data-anim className="text-sm font-light text-[var(--text-tertiary)]">{t("program.note")}</span>
      </div>
    </section>
  );
}
