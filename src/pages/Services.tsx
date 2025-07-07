import React from 'react';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import PricingMatrixSection from '@/components/PricingMatrixSection';
import CustomEnterpriseSection from '@/components/CustomEnterpriseSection';
import ServiceInclusionsSection from '@/components/ServiceInclusionsSection';
import AddOnServicesSection from '@/components/AddOnServicesSection';
import WhyUsergySection from '@/components/WhyUsergySection';
import PricingPsychologySection from '@/components/PricingPsychologySection';
import FAQAccordion from '@/components/FAQAccordion';
import ServicesFinalCTA from '@/components/ServicesFinalCTA';

const Services = () => {
  return (
    <>
      <SEOHead
        title="AI Traction Services Pricing"
        description="Transparent pricing for AI traction services. From essential insights to market domination strategies. Custom enterprise solutions available."
        path="/pricing"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content" role="main">
          <ServicesHero />
          <PricingMatrixSection />
          <CustomEnterpriseSection />
          <ServiceInclusionsSection />
          <AddOnServicesSection />
          <WhyUsergySection />
          <PricingPsychologySection />

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="faq-heading" className="text-3xl font-black text-usergy-dark text-center mb-12">
                Common Questions About Usergy Services
              </h2>
              <FAQAccordion />
            </div>
          </section>

          <ServicesFinalCTA />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;