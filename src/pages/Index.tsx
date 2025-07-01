
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import AccessibilityImprovements from '@/components/AccessibilityImprovements';
import CriticalCSS from '@/components/CriticalCSS';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import { 
  LazyProblemSection, 
  LazySolutionSection, 
  LazyDualValueSection, 
  LazyHowItWorksSection, 
  LazyTrustSection, 
  LazyFinalCTASection 
} from '@/components/LazyComponents';

const Index = () => {
  return (
    <>
      <SEOHead />
      <CriticalCSS />
      <AccessibilityImprovements />
      <div className="min-h-screen bg-background">
        <Header />
        <main role="main" id="main-content">
          <HeroSection />
          <PerformanceOptimizer>
            <LazyProblemSection />
          </PerformanceOptimizer>
          <PerformanceOptimizer>
            <LazySolutionSection />
          </PerformanceOptimizer>
          <PerformanceOptimizer>
            <LazyDualValueSection />
          </PerformanceOptimizer>
          <PerformanceOptimizer>
            <LazyHowItWorksSection />
          </PerformanceOptimizer>
          <PerformanceOptimizer>
            <LazyTrustSection />
          </PerformanceOptimizer>
          <PerformanceOptimizer>
            <LazyFinalCTASection />
          </PerformanceOptimizer>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
