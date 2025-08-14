
import { useEffect } from 'react';

export const useMobileOptimization = () => {
  useEffect(() => {
    // Mobile-specific optimizations
    const optimizeMobile = () => {
      // Check if we're on mobile
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;

      // Mobile viewport optimization
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no');
      }

      // Mobile-specific font loading
      const preloadMobileFonts = () => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
        link.as = 'style';
        link.onload = () => {
          const fontLink = document.createElement('link');
          fontLink.rel = 'stylesheet';
          fontLink.href = link.href;
          document.head.appendChild(fontLink);
        };
        document.head.appendChild(link);
      };

      // Mobile touch optimization
      const optimizeTouchTargets = () => {
        const touchElements = document.querySelectorAll('button, a, [role="button"]');
        touchElements.forEach(element => {
          const el = element as HTMLElement;
          const rect = el.getBoundingClientRect();
          if (rect.height < 44) {
            el.style.minHeight = '44px';
            el.style.paddingTop = '12px';
            el.style.paddingBottom = '12px';
          }
        });
      };

      // Mobile animation optimization
      const optimizeMobileAnimations = () => {
        // Reduce animations on lower-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
          document.documentElement.style.setProperty('--animation-duration', '0.2s');
        }
      };

      // Execute optimizations
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          preloadMobileFonts();
          setTimeout(() => {
            optimizeTouchTargets();
            optimizeMobileAnimations();
          }, 100);
        });
      } else {
        setTimeout(() => {
          preloadMobileFonts();
          optimizeTouchTargets();
          optimizeMobileAnimations();
        }, 100);
      }
    };

    // Mobile-specific scroll optimization
    const optimizeMobileScroll = () => {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            ticking = false;
          });
          ticking = true;
        }
      };

      // Use passive listeners for better performance
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('touchstart', () => {}, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    optimizeMobile();
    const cleanupScroll = optimizeMobileScroll();

    return () => {
      cleanupScroll();
    };
  }, []);
};
