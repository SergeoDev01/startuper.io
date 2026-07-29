import { useScrollReveal } from '@/lib/animations';
import { useTranslation } from '@/lib/i18n';
import { Check, X } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function WhoItsForSection() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>('[data-anim]', { preset: 'staggerCards', stagger: 120 });

  const fitItems = [
    t("comparison.fit1"),
    t("comparison.fit2"),
    t("comparison.fit3"),
    t("comparison.fit4"),
  ];

  const notFitItems = [
    t("comparison.notFit1"),
    t("comparison.notFit2"),
    t("comparison.notFit3"),
    t("comparison.notFit4"),
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[var(--bg-secondary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:max-w-[42rem]">
          <span data-anim className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            {t("comparison.badge")}
          </span>
          <h2 data-anim className="text-4xl font-medium leading-tight tracking-tight md:text-5xl text-wrap balance">
            {t("comparison.title")}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card data-anim className="flex flex-col gap-4 p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              {t("comparison.fit")}
            </span>
            <ul className="flex flex-col gap-4">
              {fitItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--text-primary)]" />
                  <span className="text-base leading-relaxed font-light text-[var(--text-body)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card data-anim className="flex flex-col gap-4 p-8">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              {t("comparison.notFit")}
            </span>
            <ul className="flex flex-col gap-4">
              {notFitItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[var(--text-tertiary)]" />
                  <span className="text-base leading-relaxed font-light text-[var(--text-tertiary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
