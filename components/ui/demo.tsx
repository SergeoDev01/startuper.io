import Hero31, { Footer7, ComparisonBlock, Team4 } from './index';
import NavigationSection from './navigation-section';
import ProjectInquirySection from './project-inquiry-section';
import ProblemSection from './problem-section';
import SolutionSection from './solution-section';
import PillarsSection from './pillars-section';
import ProofSection from './proof-section';
import TestimonialsSection from './testimonials-section';
import ProgramSection from './program-section';
import FaqSection from './faq-section';
import FinalCtaSection from './final-cta-section';
import LogoIcon from '@/assets/logo-icon';
import ScrollProgress from '@/components/ScrollProgress';
import { useLocomotiveScroll } from '@/lib/useLocomotiveScroll';

export default function Demo() {
  useLocomotiveScroll();

  return (
    <div className="w-full">
      <ScrollProgress />
      <NavigationSection />
      <section id="hero">
        <Hero31 />
      </section>
      <section id="problem">
        <ProblemSection />
      </section>
      <section id="method">
        <SolutionSection />
      </section>
      <section id="pillars">
        <PillarsSection />
      </section>
      <section id="proof">
        <ProofSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="team">
        <Team4 />
      </section>
      <section id="comparison">
        <ComparisonBlock />
      </section>
      <section id="program">
        <ProgramSection />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      <section id="cta">
        <FinalCtaSection />
      </section>
      <section id="contact">
        <ProjectInquirySection />
      </section>
      <Footer7
        logo={<LogoIcon className="size-8" />}
        brandName="Startuper.io"
        backgroundImage="/footer-bg.avif"
        brandWatermark="Startuper.io"
      />
    </div>
  );
}
