
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import DualValueSection from '@/components/DualValueSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TrustSection from '@/components/TrustSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import AccessibilityImprovements from '@/components/AccessibilityImprovements';

const Index = () => {
  return (
    <>
      <SEOHead />
      <AccessibilityImprovements />
      <div className="min-h-screen bg-background">
        <Header />
        <main role="main">
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <DualValueSection />
          <HowItWorksSection />
          <TrustSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
