
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
import CriticalResourcePreloader from '@/components/CriticalResourcePreloader';
import ThirdPartyScriptOptimizer from '@/components/ThirdPartyScriptOptimizer';
import LazyLoadController from '@/components/LazyLoadController';
import ServiceWorkerManager from '@/components/ServiceWorkerManager';
import useWebVitalsOptimization from '@/hooks/useWebVitalsOptimization';
import useCriticalCSS from '@/hooks/useCriticalCSS';

const Index = () => {
  // Initialize Web Vitals optimizations
  useWebVitalsOptimization();
  
  // Load critical CSS immediately
  useCriticalCSS();

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
      
      {/* Performance optimization components */}
      <CriticalResourcePreloader />
      <PerformanceOptimizer />
      <ThirdPartyScriptOptimizer />
      <ServiceWorkerManager />
      
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
