
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
import CriticalResourcePreloader from '@/components/CriticalResourcePreloader';
import LazyLoadController from '@/components/LazyLoadController';
import ThirdPartyOptimizer from '@/components/ThirdPartyOptimizer';
import WebVitalsOptimizer from '@/components/WebVitalsOptimizer';
import PerformanceMonitor from '@/components/PerformanceMonitor';

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Usergy - AI Traction & Growth Experts | Expert Consulting for AI Startups"
        description="Usergy: AI Traction & Growth - Our expert team connects visionary AI founders with engaged enthusiasts to deliver authentic feedback, vibrant community, and social momentum."
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
      
      {/* Performance optimization components */}
      <CriticalResourcePreloader />
      <ThirdPartyOptimizer />
      <WebVitalsOptimizer />
      <PerformanceMonitor />
      
      {/* Skip link for accessibility */}
      <a href="#main" className="skip-link" aria-label="Skip to main content">
        Skip to main content
      </a>
      
      <Header />
      
      <main role="main" id="main" data-hero>
        {/* Critical above-the-fold content loaded immediately */}
        <HeroSection />
        
        {/* Below-the-fold content with lazy loading */}
        <LazyLoadController priority={false}>
          <ProblemSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false}>
          <SolutionSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false}>
          <DualValueSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false}>
          <HowItWorksSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false}>
          <TrustSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false}>
          <FinalCTASection />
        </LazyLoadController>
      </main>
      
      <LazyLoadController priority={false}>
        <Footer />
      </LazyLoadController>
    </div>
  );
};

export default Index;
