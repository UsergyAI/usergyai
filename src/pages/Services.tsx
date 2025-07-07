
import React from 'react';
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
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pricing & Services"
        description="Transparent pricing for AI traction services. Choose from Starter, Growth, or Scale plans. Custom enterprise solutions available with dedicated success management."
        canonical="https://usergy.ai/pricing"
        keywords="AI services pricing, AI traction cost, startup growth pricing, AI community pricing"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://usergy.ai" },
          { name: "Pricing", url: "https://usergy.ai/pricing" }
        ]}
        pageType="WebPage"
      />
      <Header />
      
      <main role="main">
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
  );
};

export default Services;
