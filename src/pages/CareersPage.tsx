import { useTranslation } from '@/lib/i18n';
import { section, type, surface } from '@/lib/design';
import FinalCtaSection from '@/components/ui/final-cta-section';
import { Briefcase, Heart, Mail } from 'lucide-react';

const positions = [1, 2, 3];

export default function CareersPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>{t("careersPage.eyebrow")}</span>
            <h1 className={`${type.h2} mt-4`}>{t("careersPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("careersPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className={`${section.base}`}>
        <div className={section.container}>
          <div className="grid gap-8 md:grid-cols-2">
            <div className={`${surface.card} p-8 md:p-10`}>
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-[#FF4202]" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
                  {t("careersPage.whyJoin")}
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-body)]">
                {t("careersPage.why")}
              </p>
              <p className="mt-4 text-sm italic leading-relaxed text-[var(--text-tertiary)]">
                {t("careersPage.values")}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {positions.map((id) => (
                <div
                  key={id}
                  className={`${surface.card} flex items-center justify-between gap-4 p-6`}
                >
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-[#FF4202]" />
                    <div>
                      <h3 className="text-base font-medium text-[var(--text-primary)]">
                        {t(`careersPage.position${id}.title`)}
                      </h3>
                      <span className="text-sm text-[var(--text-tertiary)]">
                        {t(`careersPage.position${id}.type`)}
                      </span>
                    </div>
                  </div>
                  <button className="shrink-0 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20">
                    {t("careersPage.apply")}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={`${surface.card} mt-8 flex items-center gap-4 p-6 md:p-8`}>
            <Mail className="h-5 w-5 shrink-0 text-[#FF4202]" />
            <p className="text-sm text-[var(--text-body)]">
              {t("careersPage.cta")}{' '}
              <a
                href="mailto:careers@startuper.io"
                className="font-medium text-[#FF4202] transition-colors hover:text-[#FF4202]/80"
              >
                careers@startuper.io
              </a>
            </p>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}