import React, { useEffect } from 'react';

const CriticalResourcePreloader: React.FC = () => {
  useEffect(() => {
    // Preload critical fonts with optimal loading strategy
    const preloadCriticalFonts = () => {
      const fontPreloadLink = document.createElement('link');
      fontPreloadLink.rel = 'preload';
      fontPreloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
      fontPreloadLink.as = 'style';
      fontPreloadLink.onload = () => {
        fontPreloadLink.rel = 'stylesheet';
      };
      document.head.appendChild(fontPreloadLink);

      // Preload critical font files
      const criticalFontWeights = ['400', '500', '600', '700'];
      criticalFontWeights.forEach(weight => {
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = `https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2`;
        fontLink.as = 'font';
        fontLink.type = 'font/woff2';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
      });
    };

    // Preload critical images with modern formats
    const preloadCriticalImages = () => {
      const criticalImages = [
        '/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png',
        '/lovable-uploads/e5f86441-69d0-46b9-b865-d05a56c17b3e.png'
      ];

      criticalImages.forEach(src => {
        // Try WebP first, fallback to original
        const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const img = new Image();
        
        img.onload = () => {
          // WebP loaded successfully, preload the WebP version
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'preload';
          preloadLink.href = webpSrc;
          preloadLink.as = 'image';
          document.head.appendChild(preloadLink);
        };
        
        img.onerror = () => {
          // WebP failed, preload original
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'preload';
          preloadLink.href = src;
          preloadLink.as = 'image';
          document.head.appendChild(preloadLink);
        };
        
        img.src = webpSrc;
      });
    };

    // Preload critical CSS
    const preloadCriticalCSS = () => {
      // Inline critical CSS for above-the-fold content
      const criticalCSS = `
        .hero-gradient { background: linear-gradient(135deg, hsl(var(--primary-start)), hsl(var(--primary))); }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `;
      
      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.appendChild(style);
    };

    // DNS prefetch for external resources
    const prefetchDNS = () => {
      const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.googletagmanager.com',
        'www.google-analytics.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    };

    // Execute preloading strategies
    preloadCriticalFonts();
    preloadCriticalImages();
    preloadCriticalCSS();
    prefetchDNS();

  }, []);

  return null;
};

export default CriticalResourcePreloader;