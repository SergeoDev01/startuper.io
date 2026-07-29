import { useScrollReveal } from '@/lib/animations';
import { useTranslation } from '@/lib/i18n';

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'staggerCards', stagger: 100 });

  return (
    <section ref={sectionRef} data-scroll className="w-full bg-black px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:max-w-[42rem]">
          <span data-anim className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D97B29]">
            {t("testimonials.eyebrow")}
          </span>
          <h2 data-anim className="text-4xl font-medium leading-tight tracking-tight md:text-5xl text-wrap balance">
            {t("testimonials.title")}
          </h2>
          <p data-anim className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
            {t("testimonials.paragraph")}
          </p>
        </div>
      </div>
    </section>
  );
}
