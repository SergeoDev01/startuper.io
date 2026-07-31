import { useTranslation } from '@/lib/i18n';
import { section, type, surface } from '@/lib/design';
import FinalCtaSection from '@/components/ui/final-cta-section';

const posts = [1, 2, 3, 4];

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>Blog</span>
            <h1 className={`${type.h2} mt-4`}>{t("blogPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("blogPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <section className={`${section.base}`}>
        <div className={section.container}>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((id) => (
              <article key={id} className={`${surface.card} group cursor-pointer p-6 md:p-8`}>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#FF4202]/10 px-3 py-1 text-xs font-medium text-[#FF4202]">
                    {t(`blogPage.post${id}.tag`)}
                  </span>
                  <span className="text-xs text-[var(--text-tertiary)]">
                    {t(`blogPage.post${id}.date`)}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[#FF4202] md:text-2xl">
                  {t(`blogPage.post${id}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-body)]">
                  {t(`blogPage.post${id}.excerpt`)}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#FF4202]">
                  <span>Read more</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}