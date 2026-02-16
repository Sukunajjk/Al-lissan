import Hero from '../components/sections/Hero';
import NewInitiativesSection from '../components/sections/NewInitiativesSection';
import OurWorkSection from '../components/sections/OurWorkSection';
import PresidentMessageSection from '../components/sections/PresidentMessageSection';
import ImpactStoriesSection from '../components/sections/ImpactStoriesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PartnersSection from '../components/sections/PartnersSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <NewInitiativesSection />
      <OurWorkSection />
      <PresidentMessageSection />
      <ImpactStoriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
