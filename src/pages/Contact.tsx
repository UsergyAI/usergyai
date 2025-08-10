import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactMethods from '@/components/contact/ContactMethods';
import TrustStatement from '@/components/contact/TrustStatement';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ClosingStatement from '@/components/contact/ClosingStatement';
import SEOHead from '@/components/SEOHead';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Contact Usergy - AI Growth Strategy Consultation"
        description="Ready to accelerate your AI product's growth? Contact our expert team for personalized guidance on traction, community building, and strategic growth initiatives."
      />
      <ContactHero />
      <ContactMethods />
      <TrustStatement />
      <ContactFormSection />
      <ClosingStatement />
    </div>
  );
};

export default Contact;
