import { useTranslation } from '@/lib/i18n';
import { section, type, surface } from '@/lib/design';

const sections = [1, 2, 3, 4, 5];

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={`${section.container} max-w-3xl`}>
          <h1 className={`${type.h2}`}>{t("termsPage.title")}</h1>
          <p className="mt-2 text-sm text-[var(--text-tertiary)]">{t("termsPage.subtitle")}</p>
        </div>
      </section>

      <section className={`${section.base}`}>
        <div className={`${section.container} max-w-3xl`}>
          <div className="flex flex-col gap-8">
            {sections.map((i) => (
              <div key={i} className={`${surface.card} p-6 md:p-8`}>
                <h2 className="text-lg font-medium tracking-tight text-[var(--text-primary)]">
                  {t(`termsPage.section${i}.title`)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">
                  {t(`termsPage.section${i}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}