import { useEffect, useRef } from "react";
import { gsap } from "gsap";
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
  backgroundImage = "/hero-bg.webp",
}: Hero31Props) {
  const svgRef1 = useRef<SVGSVGElement>(null);
  const svgRef2 = useRef<SVGSVGElement>(null);
  const svgRef3 = useRef<SVGSVGElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        svgRef1.current,
        { y: 280, opacity: 0, rotate: 180, filter: "drop-shadow(0px 0px 0px rgba(255,66,2,0))" },
        { y: 0, opacity: 1, rotate: 0, filter: "drop-shadow(0px 0px 28px rgba(255,66,2,0.45))", duration: 2.0, ease: "expo.out" },
        0,
      )
        .fromTo(
          svgRef2.current,
          { y: 340, opacity: 0, rotate: -270, filter: "drop-shadow(0px 0px 0px rgba(255,66,2,0))" },
          { y: 0, opacity: 1, rotate: 0, filter: "drop-shadow(0px 0px 28px rgba(255,66,2,0.45))", duration: 2.3, ease: "expo.out" },
          0,
        )
        .fromTo(
          svgRef3.current,
          { y: 310, opacity: 0, rotate: 220, filter: "drop-shadow(0px 0px 0px rgba(255,66,2,0))" },
          { y: 0, opacity: 1, rotate: 0, filter: "drop-shadow(0px 0px 28px rgba(255,66,2,0.45))", duration: 2.5, ease: "expo.out" },
          0,
        );

      tl.to(svgRef1.current, { rotation: 360, duration: 25, repeat: -1, ease: "none" }, 2.0);
      tl.to(svgRef2.current, { rotation: -360, duration: 15, repeat: -1, ease: "none" }, 2.3);
      tl.to(svgRef3.current, { rotation: 360, duration: 22, repeat: -1, ease: "none" }, 2.5);

      tl.to(
        [svgRef1.current, svgRef2.current, svgRef3.current],
        {
          filter: "drop-shadow(0px 0px 40px rgba(255,66,2,0.6))",
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 0.6,
        },
        2.5,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-scroll className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white antialiased">
      {backgroundImage && (
        <div className="pointer-events-none absolute inset-0 z-0 select-none" data-scroll data-scroll-speed="-0.4">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-100 ring-1 ring-white/10 animate-hero-shader"
            src={backgroundImage}
            alt="Background"
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden="true">
        <svg
          ref={svgRef1}
          className="absolute text-white/60 w-20 h-20 sm:w-28 sm:h-28 will-change-transform will-change-opacity"
          style={{ top: "15%", left: "6%", willChange: "transform, opacity, filter" }}
          viewBox="0 0 120 120"
        >
          <use href="/assets/images/sprite.svg#inview-01" />
        </svg>

        <svg
          ref={svgRef2}
          className="absolute text-white/50 w-16 h-16 sm:w-24 sm:h-24 will-change-transform will-change-opacity"
          style={{ top: "52%", right: "4%", willChange: "transform, opacity, filter" }}
          viewBox="0 0 120 120"
        >
          <use href="/assets/images/sprite.svg#inview-02" />
        </svg>

        <svg
          ref={svgRef3}
          className="absolute text-white/60 w-24 h-24 sm:w-32 sm:h-32 will-change-transform will-change-opacity"
          style={{ bottom: "12%", right: "12%", willChange: "transform, opacity, filter" }}
          viewBox="0 0 120 120"
        >
          <use href="/assets/images/sprite.svg#inview-03" />
        </svg>
      </div>

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
          &copy; {new Date().getFullYear()} Startuper.io. All rights reserved.
        </div>
      </div>
    </section>
  );
}