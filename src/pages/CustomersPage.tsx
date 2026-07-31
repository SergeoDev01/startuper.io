import { useTranslation } from '@/lib/i18n';
import { section, type, surface } from '@/lib/design';
import TestimonialsSection from '@/components/ui/testimonials-section';
import FinalCtaSection from '@/components/ui/final-cta-section';

const cases = [1, 2, 3];

export default function CustomersPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>{t("testimonials.eyebrow")}</span>
            <h1 className={`${type.h2} mt-4`}>{t("customersPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("customersPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className={`${section.base}`}>
        <div className={section.container}>
          <div className="grid gap-8 md:gap-12">
            {cases.map((id) => (
              <div key={id} className={`${surface.card} p-8 md:p-10`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4202]/20 text-sm font-bold text-[#FF4202]">
                    0{id}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
                    {t("testimonials.eyebrow")}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-tight text-[var(--text-primary)] md:text-3xl">
                  {t(`customersPage.case${id}.title`)}
                </h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      Contexte
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                      {t(`customersPage.case${id}.context`)}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      Problème
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                      {t(`customersPage.case${id}.problem`)}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      Accompagnement
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                      {t(`customersPage.case${id}.solution`)}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      Résultat
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                      {t(`customersPage.case${id}.result`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}