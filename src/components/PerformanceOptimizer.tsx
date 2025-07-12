import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Enhanced resource optimization
    const optimizeResources = () => {
      // Set optimal resource hints
      const resourceHints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossOrigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      resourceHints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
        document.head.appendChild(link);
      });
    };

    // Optimize Critical Resource Path
    const optimizeCriticalPath = () => {
      // Mark critical elements for optimization
      const hero = document.querySelector('[data-hero]');
      if (hero) {
        (hero as HTMLElement).style.contentVisibility = 'auto';
        (hero as HTMLElement).style.containIntrinsicSize = '1200px 600px';
      }

      // Optimize main content container
      const main = document.querySelector('main');
      if (main) {
        (main as HTMLElement).style.contain = 'layout style paint';
      }
    };

    // Enhanced Layout Shift Prevention
    const preventLayoutShifts = () => {
      // Reserve space for images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.width && !img.height) {
          img.style.aspectRatio = '16/9'; // Default aspect ratio
          img.style.width = '100%';
          img.style.height = 'auto';
        }
      });

      // Reserve space for dynamic content
      const dynamicContainers = document.querySelectorAll('[data-dynamic]');
      dynamicContainers.forEach(container => {
        (container as HTMLElement).style.minHeight = '200px';
      });
    };

    // Optimize Input Responsiveness
    const optimizeInputResponsiveness = () => {
      // Add immediate visual feedback for interactions
      const interactiveElements = document.querySelectorAll('button, [role="button"], a[href]');
      interactiveElements.forEach(element => {
        element.addEventListener('pointerdown', () => {
          (element as HTMLElement).style.transform = 'scale(0.98)';
        }, { passive: true });

        element.addEventListener('pointerup', () => {
          (element as HTMLElement).style.transform = '';
        }, { passive: true });
      });

      // Optimize scroll performance
      let scrollTimeout: NodeJS.Timeout;
      window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Debounced scroll handling
        }, 16); // ~60fps
      }, { passive: true });
    };

    // Cache Strategy Optimization
    const optimizeCaching = () => {
      // Service worker registration for caching (if available)
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js', { scope: '/' })
            .catch(() => {
              // Service worker not available, continue without it
            });
        });
      }
    };

    // Initialize optimizations in priority order
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeResources();
        optimizeCriticalPath();
        preventLayoutShifts();
        optimizeInputResponsiveness();
        optimizeCaching();
      });
    } else {
      optimizeResources();
      optimizeCriticalPath();
      preventLayoutShifts();
      optimizeInputResponsiveness();
      optimizeCaching();
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;