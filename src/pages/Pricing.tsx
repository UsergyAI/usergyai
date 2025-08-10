import React from 'react';
import LaunchOfferSection from '@/components/LaunchOfferSection';
import NewTieredPricingSection from '@/components/NewTieredPricingSection';
import CustomEnterpriseSection from '@/components/CustomEnterpriseSection';
import AddOnServicesSection from '@/components/AddOnServicesSection';
import FinalCTASection from '@/components/FinalCTASection';
import SEOHead from '@/components/SEOHead';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Usergy Pricing - AI Traction Services That Deliver Results"
        description="Transparent pricing for comprehensive AI traction services. Choose from Momentum, Breakthrough, or custom Enterprise plans designed to accelerate your AI product's growth and market success."
      />
      <LaunchOfferSection />
      <NewTieredPricingSection />
      <CustomEnterpriseSection />
      <AddOnServicesSection />
      <FinalCTASection />
    </div>
  );
};

export default Pricing;
