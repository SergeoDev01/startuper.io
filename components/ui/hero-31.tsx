import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface Hero31Props {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  trustedByText?: string;
  backgroundImage?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0,
    },
  },
};

export default function Hero31({
  title = "Innovation that Drives Impact.",
  subtitle = "Startuper.io empowers teams to build, scale, and transform with technology that drives real results.",
  ctaText = "Request a Demo",
  trustedByText = "TRUSTED BY AMBITIOUS TEAMS",
  backgroundImage = "https://assets.watermelon.sh/hero-31-bg.avif",
}: Hero31Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white antialiased">
      {backgroundImage && (
        <div className="pointer-events-none absolute inset-0 z-0 select-none">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-100 ring-1 ring-white/10"
            src={backgroundImage}
            alt="Background"
          />
        </div>
      )}
      <div className="relative z-10 mx-auto flex h-full min-h-screen max-w-7xl flex-col px-6 py-12 md:px-12 md:py-20 justify-between">
        <div />

        <div className="mx-auto max-w-4xl text-center my-auto py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                <Sparkles className="size-3.5" />
                {trustedByText}
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-wrap balance">
                {title}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8 max-w-2xl">
              <p className="text-lg text-white/80 font-light leading-relaxed text-wrap pretty">
                {subtitle}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-[#FF4202] text-white hover:bg-[#FF4202]/90 w-full sm:w-auto font-semibold shadow-[inset_0_0_8px_0.5px_rgba(255,255,255,0.3)]">
                  {ctaText}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto">
                  Explore Documentation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="text-center text-xs text-white/50 pb-6">
          © {new Date().getFullYear()} Startuper.io. All rights reserved.
        </div>
      </div>
    </section>
  );
}
