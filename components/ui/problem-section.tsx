import { useScrollReveal } from '@/lib/animations';
import { CountUp } from '@/components/CountUp';
import { useTranslation } from '@/lib/i18n';

export default function ProblemSection() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'fadeUp', stagger: 120 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-[var(--bg-primary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:max-w-[42rem]">
          <span data-anim className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            {t("problem.eyebrow")}
          </span>
          <h2 data-anim className="text-4xl font-medium leading-tight tracking-tight md:text-5xl text-wrap balance">
            {t("problem.title")}
          </h2>
          <p data-anim className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
            {t("problem.paragraph")}
          </p>
        </div>

        <div data-anim className="mt-16 grid grid-cols-1 gap-8 border-y border-white/10 py-12 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
          <div className="flex flex-col items-center gap-2 sm:px-6">
            <CountUp
              to={90}
              suffix="%"
              stiffness={60}
              damping={18}
              className="bg-gradient-to-b from-[#FF4202] to-[#ff4f13] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl"
            />
            <span className="text-sm font-medium text-[var(--text-tertiary)]">
              {t("problem.stat1.label")}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:px-6">
            <CountUp
              to={40}
              suffix="%"
              stiffness={80}
              damping={18}
              className="bg-gradient-to-b from-[#FF4202] to-[#ff4f13] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl"
            />
            <span className="text-sm font-medium text-[var(--text-tertiary)]">
              {t("problem.stat2.label")}
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:px-6">
            <span className="bg-gradient-to-b from-[#FF4202] to-[#ff4f13] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
              3×
            </span>
            <span className="text-sm font-medium text-[var(--text-tertiary)]">
              {t("problem.stat3.label")}
            </span>
          </div>
        </div>

        <div data-anim className="mt-16 flex justify-center">
          <button className="group flex h-12 items-center gap-2 rounded-md bg-[#FF4202] px-6 text-sm font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]">
            {t("problem.cta")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
