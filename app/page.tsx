import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import WhoItsFor from '@/components/sections/WhoItsFor';
import KeyHighlights from '@/components/sections/KeyHighlights';
import FeaturesPreview from '@/components/sections/FeaturesPreview';
import PricingPreview from '@/components/sections/PricingPreview';
import HowToBuySteps from '@/components/sections/HowToBuySteps';
import ContactCTA from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <WhoItsFor />
      <KeyHighlights />
      <FeaturesPreview />
      <PricingPreview />
      <HowToBuySteps />
      <ContactCTA />
    </>
  );
}
