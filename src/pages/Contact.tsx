import React from 'react';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import TrustStatement from '@/components/contact/TrustStatement';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMethods from '@/components/contact/ContactMethods';
import ClosingStatement from '@/components/contact/ClosingStatement';

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact Usergy"
        description="Get in touch with Usergy's AI traction experts. Schedule a strategy call or reach out through our contact form. We're here to help grow your AI business."
        path="/contact"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content" role="main">
          <ContactHero />
          <TrustStatement />
          <ContactFormSection />
          <ContactMethods />
          <ClosingStatement />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;