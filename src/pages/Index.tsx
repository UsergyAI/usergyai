import React from 'react';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import DualValueSection from '@/components/DualValueSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TrustSection from '@/components/TrustSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <SEOHead
        title="Usergy: AI Traction & Growth - Expert Guidance for Brilliant AI Tools"
        description="Connect visionary AI founders with engaged enthusiasts for authentic feedback, vibrant community, and social momentum. Book your strategy call today."
        path="/"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main id="main-content" role="main">
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