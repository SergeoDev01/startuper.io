import { FaArrowRight } from 'react-icons/fa6';
import Hero31, { Footer7, ComparisonBlock } from './index';
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

export function Contact3Demo() {
  return <ProjectInquirySection />;
}

export default function Demo() {
  return (
    <div className="w-full">
      <NavigationSection />
      <Hero31
        title="Innovation that Drives Impact."
        subtitle="Startuper.io empowers teams to build, scale, and transform with technology that drives real results."
        ctaText="Request a Demo"
        trustedByText="TRUSTED BY AMBITIOUS TEAMS"
      />
      <ProblemSection />
      <SolutionSection />
      <PillarsSection />
      <ProofSection />
      <TestimonialsSection />
      <ComparisonBlock />
      <ProgramSection />
      <FaqSection />
      <FinalCtaSection />
      <ProjectInquirySection />
      <Footer7
        logo={<LogoIcon className="size-8" />}
        brandName="Startuper.io"
        badgeText="Loved by Creators"
        headline="Fresh insights, tutorials, and updates delivered to your inbox."
        inputPlaceholder="Enter your email"
        buttonText="Stay Updated"
        buttonIcon={<FaArrowRight />}
        backgroundImage="https://assets.watermelon.sh/footer-7-bg.avif"
        linkGroups={[
          {
            title: 'COMPANY',
            links: [
              { label: 'About Us', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Press Kit', href: '#' },
              { label: 'Blog', href: '#' },
            ],
          },
          {
            title: 'SOLUTIONS',
            links: [
              { label: 'Analytics', href: '#' },
              { label: 'Automation', href: '#' },
              { label: 'Integrations', href: '#' },
              { label: 'Enterprise', href: '#' },
            ],
          },
          {
            title: 'SUPPORT',
            links: [
              { label: 'Help Center', href: '#' },
              { label: 'Documentation', href: '#' },
              { label: 'Community', href: '#' },
              { label: 'Status', href: '#' },
            ],
          },
        ]}
        brandWatermark="Startuper.io"
      />
    </div>
  );
}
