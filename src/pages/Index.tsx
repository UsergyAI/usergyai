
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
import MobilePerformanceOptimizer from '@/components/MobilePerformanceOptimizer';
import { useMobileOptimization } from '@/hooks/useMobileOptimization';

const Index = () => {
  // Use mobile optimization hook
  useMobileOptimization();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://usergy.ai" }
        ]}
        pageType="WebPage"
      />
      
      {/* Critical resource preloader */}
      <CriticalResourcePreloader />
      
      {/* Mobile-specific performance optimizer */}
      <MobilePerformanceOptimizer />
      
      {/* Skip link for accessibility */}
      <a href="#main" className="skip-link" aria-label="Skip to main content">
        Skip to main content
      </a>
      
      <Header />
      
      <main role="main" id="main" data-hero>
        {/* Critical above-the-fold content loaded immediately */}
        <HeroSection />
        
        {/* Below-the-fold content with lazy loading for better mobile performance */}
        <LazyLoadController priority={false} rootMargin="100px">
          <ProblemSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false} rootMargin="100px">
          <SolutionSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false} rootMargin="100px">
          <DualValueSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false} rootMargin="100px">
          <HowItWorksSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false} rootMargin="100px">
          <TrustSection />
        </LazyLoadController>
        
        <LazyLoadController priority={false} rootMargin="100px">
          <FinalCTASection />
        </LazyLoadController>
      </main>
      
      <LazyLoadController priority={false} rootMargin="100px">
        <Footer />
      </LazyLoadController>
    </div>
  );
};

export default Index;
