import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload critical images
      const criticalImages = [
        '/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png',
        '/lovable-uploads/45ae045c-4f58-42d9-933a-0e455a95d9a5.png'
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });

      // Preload fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'style';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
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

    // Reduce layout shifts and optimize rendering
    const preventLayoutShifts = () => {
      // Reserve space for key elements to prevent CLS
      const footer = document.querySelector('footer');
      if (footer) {
        (footer as HTMLElement).style.minHeight = '200px';
      }

      // Optimize image loading
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        const element = img as HTMLImageElement;
        // Set loading=lazy for non-critical images
        if (!element.hasAttribute('loading') && !element.closest('[data-hero]')) {
          element.loading = 'lazy';
        }
        // Add decode=async for better performance
        element.decoding = 'async';
      });
    };

    // Core Web Vitals optimization
    const optimizeWebVitals = () => {
      // Optimize fonts for better CLS
      document.documentElement.style.setProperty('font-display', 'swap');
      
      // Optimize animations for better performance
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      }

      // Use passive event listeners for better FID
      const scrollableElements = document.querySelectorAll('[data-scroll]');
      scrollableElements.forEach(element => {
        element.addEventListener('scroll', () => {}, { passive: true });
      });

      // Optimize reflow/repaint
      const animatedElements = document.querySelectorAll('[class*="animate-"]');
      animatedElements.forEach(element => {
        (element as HTMLElement).style.willChange = 'transform, opacity';
      });
    };

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      // Defer third-party scripts until user interaction
      let userInteracted = false;
      
      const loadDeferredScripts = () => {
        if (userInteracted) return;
        userInteracted = true;
        
        // Load non-critical scripts after user interaction
        setTimeout(() => {
          // Analytics and other non-critical scripts can be loaded here
        }, 100);
      };

      ['click', 'scroll', 'keydown', 'touchstart'].forEach(event => {
        document.addEventListener(event, loadDeferredScripts, { once: true, passive: true });
      });
    };

    // Execute optimizations
    preloadResources();
    optimizeImages();
    preventLayoutShifts();
    deferNonCriticalJS();
    optimizeWebVitals();

    // Cleanup
    return () => {
      // Remove event listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;