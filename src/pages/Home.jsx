import Hero from '../components/sections/Hero';
import ImpactSection from '../components/sections/ImpactSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import PresidentMessageSection from '../components/sections/PresidentMessageSection';
import ImpactStoriesSection from '../components/sections/ImpactStoriesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import NewsSection from '../components/sections/NewsSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactSection />
      <ProgramsSection />
      <PresidentMessageSection />
      <ImpactStoriesSection />
      <TestimonialsSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
