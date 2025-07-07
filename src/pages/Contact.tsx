
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import TrustStatement from '@/components/contact/TrustStatement';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMethods from '@/components/contact/ContactMethods';
import ClosingStatement from '@/components/contact/ClosingStatement';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us"
        description="Get in touch with Usergy for AI traction services. Book a strategy call, send a message, or connect with our team for personalized AI growth solutions."
        canonical="https://usergy.ai/contact"
        keywords="contact Usergy, AI consultation, strategy call, AI services contact"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://usergy.ai" },
          { name: "Contact", url: "https://usergy.ai/contact" }
        ]}
        pageType="ContactPage"
      />
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
  );
};

export default Contact;
