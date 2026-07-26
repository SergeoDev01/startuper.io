import { motion, type Variants } from 'motion/react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsSectionProps {
  eyebrow?: string;
  title?: string;
  paragraph?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: 'We stopped losing context between meetings. The loop just keeps the work moving.',
    name: 'Lena Ortiz',
    role: 'VP Product, Telia Cygate',
  },
  {
    quote: 'Impact finally compounds. What used to take a quarter now lands in weeks.',
    name: 'Marcus Webb',
    role: 'Head of Ops, customer.io',
  },
  {
    quote: 'It replaced four tools and the chaos between them. Our teams actually trust the signal now.',
    name: 'Priya Nair',
    role: 'CTO, novo',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 24, stiffness: 120 },
  },
};

export default function TestimonialsSection({
  eyebrow = 'Testimonials',
  title = 'Teams that closed the loop don’t go back.',
  paragraph = 'The people running the system day to day on what changed.',
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="w-full bg-[var(--bg-primary)] px-6 py-24 font-sans text-[var(--text-primary)] md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:max-w-[42rem]">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
            {eyebrow}
          </span>
          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="text-lg leading-relaxed font-light text-[var(--text-body)] md:text-xl">
            {paragraph}
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {testimonials.map(({ quote, name, role }) => (
            <motion.figure
              key={name}
              variants={itemVariants}
              className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <blockquote className="text-lg leading-relaxed font-light text-[var(--text-body)]">
                “{quote}”
              </blockquote>
              <figcaption className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-6">
                <span className="text-sm font-semibold text-[var(--text-primary)]">{name}</span>
                <span className="text-sm font-light text-[var(--text-tertiary)]">{role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
