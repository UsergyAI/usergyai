
import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Optimize font loading
    const preloadFonts = () => {
      const fontUrls = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
      ];
      
      fontUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = url;
        document.head.appendChild(link);
      });
    };

    // Preload critical images
    const preloadImages = () => {
      const criticalImages = [
        '/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png'
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadFonts();
    preloadImages();

    // Optimize scroll performance
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

    const cleanupScroll = optimizeScrolling();

    return () => {
      cleanupScroll();
    };
  }, []);
};
