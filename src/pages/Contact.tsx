
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import TrustStatement from '@/components/contact/TrustStatement';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMethods from '@/components/contact/ContactMethods';
import ClosingStatement from '@/components/contact/ClosingStatement';
import SEOHead from '@/components/SEOHead';
import AccessibilityImprovements from '@/components/AccessibilityImprovements';

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact Usergy - AI Growth Experts | Free Strategy Call"
        description="Connect with Usergy's AI growth experts. Book a free strategy call, fill our quick contact form, or email us directly. Get personalized guidance for your AI tool's growth."
        keywords="contact usergy, AI growth consultation, strategy call, AI experts, AI tool feedback, AI community building"
        canonicalUrl="https://usergy.ai/contact"
      />
      <AccessibilityImprovements />
      <div className="min-h-screen bg-background">
        <Header />
        <main role="main">
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
