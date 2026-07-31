import { useTranslation } from '@/lib/i18n';
import { section, type, surface } from '@/lib/design';
import SolutionSection from '@/components/ui/solution-section';
import FinalCtaSection from '@/components/ui/final-cta-section';
import { Link } from 'react-router-dom';

const steps = [
  { key: 'step1', phase: '01' },
  { key: 'step2', phase: '02' },
  { key: 'step3', phase: '03' },
];

export default function MethodPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>{t("method.eyebrow")}</span>
            <h1 className={`${type.h2} mt-4`}>{t("methodPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("methodPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <SolutionSection />

      <section className={`${section.base}`}>
        <div className={section.container}>
          <div className="grid gap-8 md:gap-12">
            {steps.map(({ key, phase }) => (
              <div key={key} className={`${surface.card} p-8 md:p-10`}>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
                  {t("method.phase")} {phase} — {t(`method.${key}.title`)}
                </span>
                <h3 className="mt-6 text-2xl font-medium tracking-tight text-[var(--text-primary)] md:text-3xl">
                  {t(`method.${key}.title`)}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--text-body)]">
                  {t(`methodPage.${key}.detail`)}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      {t("method.phase")} {phase}
                    </span>
                    <p className="mt-2 text-lg font-medium text-[var(--text-primary)]">
                      {t(`methodPage.${key}.duration`)}
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      {t("methodPage.step1.deliverable")}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                      {t(`methodPage.${key}.deliverable`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`${surface.card} mt-12 p-8 md:p-10`}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
              {t("methodPage.example")}
            </span>
            <h3 className="mt-4 text-xl font-medium tracking-tight text-[var(--text-primary)] md:text-2xl">
              {t("methodPage.example1.title")}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-body)]">
              {t("methodPage.example1.body")}
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/apply"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#FF4202] px-8 text-sm font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]"
            >
              {t("method.eyebrow")}
            </Link>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}