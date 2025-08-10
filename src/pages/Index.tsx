import React from 'react';
import CriticalResourcePreloader from '@/components/CriticalResourcePreloader';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import WebVitalsOptimizer from '@/components/WebVitalsOptimizer';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import NewTieredPricingSection from '@/components/NewTieredPricingSection';
import TrustSection from '@/components/TrustSection';
import FAQAccordion from '@/components/FAQAccordion';
import FinalCTASection from '@/components/FinalCTASection';
import WhyUsergySection from '@/components/WhyUsergySection';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Usergy - AI Traction Services | Expert Growth Strategy for AI Startups"
        description="Transform your AI innovation into market success with Usergy's integrated traction services. Get authentic feedback, build vibrant communities, and generate social momentum that drives real growth."
      />
      <CriticalResourcePreloader />
      <PerformanceOptimizer />
      <WebVitalsOptimizer />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <NewTieredPricingSection />
      <TrustSection />
      <WhyUsergySection />
      <FAQAccordion />
      <FinalCTASection />
    </div>
  );
};

export default Index;
