
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import PricingPsychologySection from '@/components/PricingPsychologySection';
import WhyUsergySection from '@/components/WhyUsergySection';
import TrustSection from '@/components/TrustSection';
import StructuredData from '@/components/StructuredData';
import FAQAccordion from '@/components/FAQAccordion';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [selectedUsers, setSelectedUsers] = useState(10);

  const userOptions = [
    { value: 5, label: '5 Users' },
    { value: 10, label: '10 Users' },
    { value: 20, label: '20 Users' },
    { value: 50, label: '50 Users' },
    { value: 100, label: '100 Users' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI Traction Pricing - Affordable Growth Solutions | Usergy</title>
        <meta name="description" content="Transparent pricing for AI traction services. Get authentic feedback, build vibrant communities, and achieve social momentum. Starting from $299 for 5 users." />
        <meta name="keywords" content="AI traction pricing, startup growth cost, user feedback pricing, community building price, AI consulting rates" />
        <link rel="canonical" href="https://usergy.ai/pricing" />
      </Helmet>

      <StructuredData 
        pageType="WebPage"
        breadcrumbs={[
          { name: 'Home', url: 'https://usergy.ai' },
          { name: 'Pricing', url: 'https://usergy.ai/pricing' }
        ]}
      />

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              Transparent Pricing for
              <span className="block text-transparent bg-clip-text bg-primary-gradient">
                Undeniable Traction
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              All-inclusive packages with no hidden fees. Every cost covered, every participant incentivized, 
              every insight delivered with strategic recommendations.
            </p>
          </div>
        </section>

        {/* User Selection */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Select Your Campaign Size
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {userOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={selectedUsers === option.value ? "default" : "outline"}
                    onClick={() => setSelectedUsers(option.value)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      selectedUsers === option.value 
                        ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <PricingTable selectedUsers={selectedUsers} />
          </div>
        </section>

        <PricingPsychologySection />
        <WhyUsergySection />
        <TrustSection />

        {/* FAQ Section */}
        <section className="py-20 bg-muted relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about our pricing and services
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <FAQAccordion />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
