import { useEffect } from 'react';

export const useWebVitalsOptimization = () => {
  useEffect(() => {
    // Optimize Largest Contentful Paint (LCP)
    const optimizeLCP = () => {
      // Prioritize LCP elements
      const hero = document.querySelector('[data-hero]');
      if (hero) {
        (hero as HTMLElement).style.contentVisibility = 'auto';
        (hero as HTMLElement).style.containIntrinsicSize = '1200px 600px';
      }

      // Optimize images for LCP
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (index < 3) { // First 3 images are likely above the fold
          img.loading = 'eager';
          img.fetchPriority = 'high';
          img.decoding = 'sync';
        }
      });
    };

    // Optimize Cumulative Layout Shift (CLS)
    const optimizeCLS = () => {
      // Add dimensions to images to prevent layout shifts
      const images = document.querySelectorAll('img:not([width]):not([height])');
      images.forEach(img => {
        const element = img as HTMLImageElement;
        if (element.complete && element.naturalWidth) {
          element.width = element.naturalWidth;
          element.height = element.naturalHeight;
        } else {
          element.onload = () => {
            element.width = element.naturalWidth;
            element.height = element.naturalHeight;
          };
        }
      });

      // Reserve space for dynamic content
      const dynamicElements = document.querySelectorAll('[data-dynamic]');
      dynamicElements.forEach(el => {
        (el as HTMLElement).style.minHeight = '200px';
      });
    };

    // Optimize First Input Delay (FID) / Interaction to Next Paint (INP)
    const optimizeInteractivity = () => {
      // Use passive event listeners where possible
      const scrollElements = document.querySelectorAll('[data-scroll]');
      scrollElements.forEach(el => {
        el.addEventListener('scroll', () => {
          // Scroll handling
        }, { passive: true });
      });

      // Debounce resize events
      let resizeTimeout: NodeJS.Timeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          // Resize handling
        }, 100);
      }, { passive: true });

      // Optimize button interactions
      const buttons = document.querySelectorAll('button, [role="button"]');
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          // Add immediate visual feedback
          const target = e.currentTarget as HTMLElement;
          target.style.transform = 'scale(0.98)';
          requestAnimationFrame(() => {
            target.style.transform = '';
          });
        }, { passive: true });
      });
    };

    // Optimize main thread work
    const optimizeMainThread = () => {
      // Use requestIdleCallback for non-critical work
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Non-critical initialization
          optimizeLCP();
          optimizeCLS();
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          optimizeLCP();
          optimizeCLS();
        }, 100);
      }
    };

    // Initialize optimizations
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeMainThread);
    } else {
      optimizeMainThread();
    }

    optimizeInteractivity();

    // Cleanup
    return () => {
      // Remove event listeners if needed
    };
  }, []);
};

export default useWebVitalsOptimization;