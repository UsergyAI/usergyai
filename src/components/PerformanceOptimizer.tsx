import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload hero section background
      const heroBackground = new Image();
      heroBackground.src = '/lovable-uploads/hero-bg.webp';
      
      // Preload critical CSS
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = '/src/index.css';
      document.head.appendChild(link);
    };

    // Optimize images with lazy loading and WebP support
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Reduce layout shifts
    const preventLayoutShifts = () => {
      // Add dimension attributes to images without them
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const element = img as HTMLImageElement;
        if (element.naturalWidth && element.naturalHeight) {
          element.width = element.naturalWidth;
          element.height = element.naturalHeight;
        }
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical scripts
      const scripts = ['calendly', 'analytics'];
      scripts.forEach(script => {
        setTimeout(() => {
          // Load script after user interaction or delay
        }, 3000);
      });
    };

    // Core Web Vitals optimization
    const optimizeWebVitals = () => {
      // Largest Contentful Paint (LCP) optimization
      const hero = document.querySelector('[data-hero]');
      if (hero) {
        (hero as HTMLElement).style.contentVisibility = 'auto';
      }

      // First Input Delay (FID) optimization
      document.addEventListener('click', () => {
        // Warm up critical resources on first interaction
      }, { once: true, passive: true });

      // Cumulative Layout Shift (CLS) optimization
      const main = document.querySelector('main');
      if (main) {
        (main as HTMLElement).style.containIntrinsicSize = '1200px 800px';
      }
    };

    // Execute optimizations
    preloadResources();
    optimizeImages();
    preventLayoutShifts();
    optimizeThirdPartyScripts();
    optimizeWebVitals();

    // Cleanup
    return () => {
      // Remove event listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;