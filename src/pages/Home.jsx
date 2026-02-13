import Hero from '../components/sections/Hero';
import PartnersSection from '../components/sections/PartnersSection';
import ImpactSection from '../components/sections/ImpactSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import ProcessSection from '../components/sections/ProcessSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import PresidentMessageSection from '../components/sections/PresidentMessageSection';
import ImpactStoriesSection from '../components/sections/ImpactStoriesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import NewsSection from '../components/sections/NewsSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <ImpactSection />
      <ProgramsSection />
      <ProcessSection />
      <WhyChooseUs />
      <PresidentMessageSection />
      <ImpactStoriesSection />
      <TestimonialsSection />
      <NewsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
