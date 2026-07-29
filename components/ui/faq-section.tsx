import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useScrollReveal } from '@/lib/animations';
import { Plus } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export default function FaqSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);
  const faqRef = useScrollReveal<HTMLDivElement>('[data-anim]', { preset: 'fadeUp', stagger: 100 });

  const items = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
  ];

  return (
    <section data-scroll className="w-full bg-[var(--bg-secondary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            {t("faq.eyebrow")}
          </span>
          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl text-wrap balance">
            {t("faq.title")}
          </h2>
        </div>

        <div ref={faqRef} className="mt-12 flex flex-col">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} data-anim className="border-b border-white/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium tracking-tight text-[var(--text-primary)] md:text-xl">
                    {item.question}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-[var(--text-tertiary)] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
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
                        {item.answer}
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
  );
}
