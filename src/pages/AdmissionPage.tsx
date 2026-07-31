import { useTranslation } from '@/lib/i18n';
import { section, type, surface } from '@/lib/design';
import FinalCtaSection from '@/components/ui/final-cta-section';
import { Link } from 'react-router-dom';

export default function AdmissionPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>{t("program.eyebrow")}</span>
            <h1 className={`${type.h2} mt-4`}>{t("admissionPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("admissionPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className={`${section.base}`}>
        <div className={section.container}>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
                {t("admissionPage.process")}
              </span>
              <div className="mt-6 flex flex-col gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF4202]/20 text-sm font-bold text-[#FF4202]">
                      0{i}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--text-body)]">
                      {t(`admissionPage.process${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
                {t("admissionPage.criteria")}
              </span>
              <ul className="mt-6 space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-body)]">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF4202]" />
                    {t(`admissionPage.criteria${i}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={`${surface.card} mt-12 p-8 md:p-10`}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
              {t("admissionPage.included")}
            </span>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-body)]">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#FF4202]" />
                  {t(`admissionPage.included${i}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/apply"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#FF4202] px-8 text-sm font-semibold text-white shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)] transition-transform active:scale-[0.96]"
            >
              {t("admissionPage.cta")}
            </Link>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}