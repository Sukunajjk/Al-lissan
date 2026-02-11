import Hero from '../components/sections/Hero';
import ImpactSection from '../components/sections/ImpactSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import NewsSection from '../components/sections/NewsSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactSection />
      <ProgramsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
