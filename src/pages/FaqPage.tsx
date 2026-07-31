import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslation } from '@/lib/i18n';
import { section, type } from '@/lib/design';
import FaqSection from '@/components/ui/faq-section';
import FinalCtaSection from '@/components/ui/final-cta-section';

const extraItems = [6, 7, 8, 9, 10];

export default function FaqPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="w-full">
      <section className={`${section.base} pt-32`}>
        <div className={section.container}>
          <div className="max-w-3xl">
            <span className={type.eyebrow}>{t("faq.eyebrow")}</span>
            <h1 className={`${type.h2} mt-4`}>{t("faqPage.title")}</h1>
            <p className={`${type.body} mt-4`}>{t("faqPage.subtitle")}</p>
          </div>
        </div>
      </section>

      <FaqSection />

      <section className={`${section.base}`}>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col">
            {extraItems.map((i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-white/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium tracking-tight text-[var(--text-primary)] md:text-xl">
                      {t(`faq.q${i}`)}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-[var(--text-tertiary)] transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-base leading-relaxed font-light text-[var(--text-body)]">
                          {t(`faq.a${i}`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}