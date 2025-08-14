
import { useEffect } from 'react';

const MobilePerformanceOptimizer = () => {
  useEffect(() => {
    // Only run on mobile devices
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // Mobile-specific performance optimizations
    const optimizeMobilePerformance = () => {
      // Optimize images for mobile
      const optimizeMobileImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          if (img instanceof HTMLImageElement) {
            // Reduce image quality for mobile to save bandwidth
            if (img.src.includes('lovable-uploads')) {
              img.loading = 'lazy';
              img.decoding = 'async';
              
              // Add mobile-specific srcset if not present
              if (!img.srcSet && img.width && img.width > 400) {
                const mobileSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '-mobile.$1');
                img.srcSet = `${mobileSrc} 400w, ${img.src} 800w`;
                img.sizes = '(max-width: 768px) 400px, 800px';
              }
            }
          }
        });
      };

      // Optimize mobile layout shifts
      const preventMobileLayoutShifts = () => {
        // Add aspect ratios to prevent CLS
        const images = document.querySelectorAll('img:not([style*="aspect-ratio"])');
        images.forEach(img => {
          if (img instanceof HTMLImageElement && img.width && img.height) {
            img.style.aspectRatio = `${img.width}/${img.height}`;
          }
        });

        // Reserve space for dynamic content on mobile
        const dynamicElements = document.querySelectorAll('[data-dynamic]');
        dynamicElements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.minHeight = '150px'; // Smaller for mobile
          }
        });
      };

      // Mobile input responsiveness
      const optimizeMobileInputs = () => {
        const buttons = document.querySelectorAll('button, [role="button"], a[href]');
        buttons.forEach(button => {
          if (button instanceof HTMLElement) {
            // Add touch-action for better mobile performance
            button.style.touchAction = 'manipulation';
            
            // Optimize button tap feedback
            button.addEventListener('touchstart', () => {
              button.style.transform = 'scale(0.98)';
              button.style.opacity = '0.8';
            }, { passive: true });
            
            button.addEventListener('touchend', () => {
              requestAnimationFrame(() => {
                button.style.transform = '';
                button.style.opacity = '';
              });
            }, { passive: true });
          }
        });
      };

      // Execute optimizations in idle time
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          optimizeMobileImages();
          preventMobileLayoutShifts();
          optimizeMobileInputs();
        });
      } else {
        setTimeout(() => {
          optimizeMobileImages();
          preventMobileLayoutShifts();
          optimizeMobileInputs();
        }, 100);
      }
    };

    // Connection-aware loading for mobile
    const optimizeForConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        
        if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
          // Reduce animations and defer non-critical resources
          document.documentElement.style.setProperty('--animation-duration', '0.1s');
          
          // Disable background images on slow connections
          const bgElements = document.querySelectorAll('[style*="background-image"]');
          bgElements.forEach(el => {
            if (el instanceof HTMLElement) {
              el.style.backgroundImage = 'none';
            }
          });
        }
      }
    };

    optimizeMobilePerformance();
    optimizeForConnection();

    // Cleanup scroll listeners
    let scrollTimeout: number;
    const optimizedScrollHandler = () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = requestAnimationFrame(() => {
        // Mobile scroll optimizations
      });
    };

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', optimizedScrollHandler);
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
    };
  }, []);

  return null;
};

export default MobilePerformanceOptimizer;
