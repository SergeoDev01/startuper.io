import { useTranslation } from '@/lib/i18n';
import { section, type } from '@/lib/design';
import ProjectInquirySection from '@/components/ui/project-inquiry-section';

export default function ApplyPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>{t("contact.eyebrow")}</span>
            <h1 className={`${type.h2} mt-4`}>{t("applyPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("applyPage.subtitle")}</p>
            <div className="mt-6 rounded-lg border border-[#FF4202]/20 bg-[#FF4202]/5 p-5">
              <p className="text-sm leading-relaxed text-[var(--text-body)]">
                {t("applyPage.intro")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectInquirySection />
    </div>
  );
}