import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  items?: FaqItem[];
}

const defaultItems: FaqItem[] = [
  {
    question: 'How is this different from a project tool?',
    answer: 'It’s not another app to log into. It replaces the gap between your tools with one continuous loop, so context never has to be re-explained.',
  },
  {
    question: 'Do you integrate with our stack?',
    answer: 'The loop sits on top of what you already run. We model the handoffs, not the software — so there’s nothing to rip out.',
  },
  {
    question: 'How long until we see movement?',
    answer: 'The first cycle is built with you, usually within the first cohort. Teams report visible signal in weeks, not quarters.',
  },
  {
    question: 'Why application-only?',
    answer: 'The loop only compounds when it’s run well. Limiting cohorts keeps the work tight and the outcomes real.',
  },
];

export default function FaqSection({
  eyebrow = 'FAQ',
  title = 'Questions, answered.',
  items = defaultItems,
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[var(--bg-secondary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            {eyebrow}
          </span>
          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 flex flex-col">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-b border-white/10">
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
