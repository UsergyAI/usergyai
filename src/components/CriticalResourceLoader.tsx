import { useEffect } from 'react';

const CriticalResourceLoader = () => {
  useEffect(() => {
    // Preload critical fonts with optimized loading
    const preloadFont = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      fontLink.href = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2';
      document.head.appendChild(fontLink);

      // Load font CSS asynchronously
      const fontCSS = document.createElement('link');
      fontCSS.rel = 'stylesheet';
      fontCSS.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
      fontCSS.media = 'print';
      fontCSS.onload = () => {
        fontCSS.media = 'all';
      };
      document.head.appendChild(fontCSS);

      // Fallback for older browsers
      const noscriptFallback = document.createElement('noscript');
      noscriptFallback.innerHTML = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap">`;
      document.head.appendChild(noscriptFallback);
    };

    // Preload critical images
    const preloadCriticalImages = () => {
      const criticalImages = [
        '/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png',
        '/lovable-uploads/45ae045c-4f58-42d9-933a-0e455a95d9a5.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = ['fonts.googleapis.com', 'fonts.gstatic.com'];
      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnectDomains = ['https://fonts.gstatic.com'];
      preconnectDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    addResourceHints();
    preloadFont();
    preloadCriticalImages();

    // Add viewport meta tag if missing
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
      document.head.appendChild(viewport);
    }

  }, []);

  return null;
};

export default CriticalResourceLoader;