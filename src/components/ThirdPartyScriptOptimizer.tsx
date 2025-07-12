import React, { useEffect } from 'react';

const ThirdPartyScriptOptimizer: React.FC = () => {
  useEffect(() => {
    // Defer third-party scripts until after critical path
    const loadThirdPartyScripts = () => {
      // Load Google Analytics with optimal timing
      const loadGoogleAnalytics = () => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-61825KRLWX';
            document.head.appendChild(script);

            script.onload = () => {
              (window as any).dataLayer = (window as any).dataLayer || [];
              function gtag(...args: any[]) {
                (window as any).dataLayer.push(args);
              }
              (window as any).gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-61825KRLWX', {
                page_title: document.title,
                page_location: window.location.href
              });
            };
          });
        } else {
          // Fallback for browsers without requestIdleCallback
          setTimeout(() => {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-61825KRLWX';
            document.head.appendChild(script);
          }, 3000);
        }
      };

      // Load Clarity with user interaction
      const loadClarity = () => {
        const loadClarityScript = () => {
          const script = document.createElement('script');
          script.async = true;
          script.src = 'https://www.clarity.ms/tag/YOUR_CLARITY_ID';
          document.head.appendChild(script);
        };

        // Load on first user interaction
        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
        const loadOnce = () => {
          loadClarityScript();
          events.forEach(event => {
            document.removeEventListener(event, loadOnce, true);
          });
        };

        events.forEach(event => {
          document.addEventListener(event, loadOnce, {
            capture: true,
            passive: true,
            once: true
          });
        });
      };

      // Initialize third-party scripts
      loadGoogleAnalytics();
      loadClarity();
    };

    // Load scripts after a delay or on user interaction
    if (document.readyState === 'complete') {
      loadThirdPartyScripts();
    } else {
      window.addEventListener('load', loadThirdPartyScripts);
    }

    return () => {
      window.removeEventListener('load', loadThirdPartyScripts);
    };
  }, []);

  return null;
};

export default ThirdPartyScriptOptimizer;