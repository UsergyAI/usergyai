
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
import StructuredData from '@/components/StructuredData';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Usergy - AI Traction & Growth Experts | Expert Consulting for AI Startups"
        description="Expert AI traction consulting services connecting visionary founders with engaged enthusiasts for authentic feedback, vibrant community, and social momentum. Accelerate your AI startup's growth with proven strategies and 1,200+ successful campaigns."
        canonical="https://usergy.ai"
        keywords="AI traction, AI growth, AI community, AI feedback, AI founders, startup growth, AI consulting, user engagement, product market fit, AI startup consulting"
        type="website"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://usergy.ai" }
        ]}
        pageType="WebPage"
      />
      <Header />
      <PerformanceOptimizer />
      <main role="main" id="main" data-hero>
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
  );
};

export default Index;
