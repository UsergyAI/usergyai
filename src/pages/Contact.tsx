
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import TrustStatement from '@/components/contact/TrustStatement';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMethods from '@/components/contact/ContactMethods';
import ClosingStatement from '@/components/contact/ClosingStatement';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <TrustStatement />
      <ContactFormSection />
      <ContactMethods />
      <ClosingStatement />
      <Footer />
    </div>
  );
};

export default Contact;
