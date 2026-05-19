import HeroTextBlock from '@/components/sections/HeroTextBlock';
import LaptopScrollSection from '@/components/sections/LaptopScrollSection';
import EcosystemDiagram from '@/components/sections/EcosystemDiagram';
import KeyHighlights from '@/components/sections/KeyHighlights';
import PricingPreview from '@/components/sections/PricingPreview';
import HowToBuySteps from '@/components/sections/HowToBuySteps';
import ContactCTA from '@/components/sections/ContactCTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      {/* NEW HERO COMPOSITION */}
      <HeroTextBlock />
      <LaptopScrollSection />
      <EcosystemDiagram />

      {/* Existing sections below hero */}
      <KeyHighlights />
      <TestimonialsSection />
      <PricingPreview />
      <HowToBuySteps />
      <FAQSection />
      <ContactCTA />
    </>
  );
}

