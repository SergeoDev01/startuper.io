import { useTranslation } from '@/lib/i18n';
import { section, type, surface } from '@/lib/design';
import FinalCtaSection from '@/components/ui/final-cta-section';
import { Avatar, AvatarImage } from '@/components/base-ui/avatar';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>{t("team.eyebrow")}</span>
            <h1 className={`${type.h2} mt-4`}>{t("aboutPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("aboutPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className={`${section.base}`}>
        <div className={section.container}>
          <div className="grid gap-8 md:grid-cols-2">
            <div className={`${surface.card} p-8 md:p-10`}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
                Mission
              </span>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-body)]">
                {t("aboutPage.mission")}
              </p>
            </div>
            <div className={`${surface.card} p-8 md:p-10`}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
                Vision
              </span>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-body)]">
                {t("aboutPage.vision")}
              </p>
            </div>
          </div>

          <div className={`${surface.card} mt-8 flex flex-col items-start gap-6 p-8 md:flex-row md:p-10`}>
            <Avatar className="h-24 w-24 shrink-0 md:h-32 md:w-32">
              <AvatarImage src="/assets/images/sergeo.webp" alt="Sergeo Limta" />
            </Avatar>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-[var(--text-primary)]">
                Sergeo Limta
              </h3>
              <span className="text-sm text-[var(--text-tertiary)]">
                Fondateur, Startuper.io
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">
                {t("aboutPage.bio")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}