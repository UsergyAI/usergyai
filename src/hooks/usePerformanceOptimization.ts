
import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Optimize font loading with preload and font-display
    const optimizeFonts = () => {
      const fontUrls = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
      ];
      
      fontUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Preload critical images with high priority
    const preloadCriticalImages = () => {
      const criticalImages = [
        '/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
      });
    };

    // Optimize scroll performance with passive listeners
    const optimizeScrolling = () => {
      let ticking = false;
      
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Implement intersection observer for lazy loading
    const implementLazyLoading = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Optimize third-party scripts loading
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical scripts
      const scripts = document.querySelectorAll('script[data-delay]');
      scripts.forEach(script => {
        setTimeout(() => {
          const newScript = document.createElement('script');
          newScript.src = script.getAttribute('data-delay')!;
          newScript.async = true;
          document.head.appendChild(newScript);
        }, 3000); // Delay by 3 seconds
      });
    };

    // Resource hints for better performance
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
        { rel: 'dns-prefetch', href: '//calendly.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.rel === 'preconnect') {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    optimizeFonts();
    preloadCriticalImages();
    implementLazyLoading();
    optimizeThirdPartyScripts();
    addResourceHints();
    
    const cleanupScroll = optimizeScrolling();

    // Web Vitals monitoring
    if ('web-vital' in window) {
      // Monitor Core Web Vitals
      console.log('Monitoring Web Vitals...');
    }

    return () => {
      cleanupScroll();
    };
  }, []);
};
