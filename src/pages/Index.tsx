
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DualValueSection />
      <HowItWorksSection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
