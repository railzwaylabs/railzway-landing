import { LandingLayout } from "../layouts/LandingLayout";
import PricingBreakdownSection from "../components/pricing/PricingBreakdownSection";
import PricingHowItWorksSection from "../components/pricing/PricingHowItWorksSection";
import PricingPageCTA from "../components/pricing/PricingPageCTA";
import PricingPlansSection from "../components/pricing/PricingPlansSection";

function PricingPage() {
  return (
    <LandingLayout>
      <PricingPlansSection />
      <PricingHowItWorksSection />
      <PricingBreakdownSection />
      <PricingPageCTA />
    </LandingLayout>
  );
}

export default PricingPage;
