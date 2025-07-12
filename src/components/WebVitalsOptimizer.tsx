import { useEffect } from 'react';

const WebVitalsOptimizer = () => {
  useEffect(() => {
    // Optimize Largest Contentful Paint (LCP)
    const optimizeLCP = () => {
      // Mark critical resources as high priority
      const criticalImages = document.querySelectorAll('img[loading="eager"], img[data-priority="high"]');
      criticalImages.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.fetchPriority = 'high';
        }
      });

      // Preload hero images
      const heroSection = document.querySelector('[data-hero]');
      if (heroSection) {
        const heroImages = heroSection.querySelectorAll('img');
        heroImages.forEach(img => {
          if (img instanceof HTMLImageElement && !img.complete) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src;
            document.head.appendChild(link);
          }
        });
      }
    };

    // Optimize Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Add explicit dimensions to prevent layout shifts
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        if (img instanceof HTMLImageElement) {
          img.style.aspectRatio = 'auto';
          img.style.height = 'auto';
        }
      });

      // Reserve space for dynamic content
      const dynamicContainers = document.querySelectorAll('[data-dynamic-content]');
      dynamicContainers.forEach(container => {
        if (container instanceof HTMLElement) {
          container.style.minHeight = container.style.minHeight || '200px';
        }
      });
    };

    // Optimize First Input Delay (FID) and Interaction to Next Paint (INP)
    const optimizeInteractivity = () => {
      // Use passive event listeners where possible
      const scrollHandler = () => {};
      document.addEventListener('scroll', scrollHandler, { passive: true });

      // Debounce resize events
      let resizeTimer: number;
      const resizeHandler = () => {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          // Resize logic
        }, 100);
      };
      window.addEventListener('resize', resizeHandler, { passive: true });

      // Add immediate visual feedback for interactions
      const buttons = document.querySelectorAll('button, [role="button"]');
      buttons.forEach(button => {
        if (button instanceof HTMLElement) {
          button.addEventListener('click', () => {
            button.style.transform = 'scale(0.98)';
            requestAnimationFrame(() => {
              button.style.transform = '';
            });
          }, { passive: true });
        }
      });

      return () => {
        document.removeEventListener('scroll', scrollHandler);
        window.removeEventListener('resize', resizeHandler);
        clearTimeout(resizeTimer);
      };
    };

    // Defer non-critical work to idle time
    const optimizeMainThread = () => {
      const deferWork = () => {
        // Use requestIdleCallback if available
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => {
            // Non-critical work like analytics, prefetching, etc.
            console.log('Performing non-critical work during idle time');
          });
        } else {
          // Fallback for browsers without requestIdleCallback
          setTimeout(() => {
            console.log('Performing non-critical work via setTimeout');
          }, 0);
        }
      };

      deferWork();
    };

    // Run optimizations
    optimizeLCP();
    optimizeCLS();
    const cleanupInteractivity = optimizeInteractivity();
    optimizeMainThread();

    // Cleanup function
    return () => {
      cleanupInteractivity();
    };
  }, []);

  return null;
};

export default WebVitalsOptimizer;