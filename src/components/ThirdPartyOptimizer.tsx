import { useEffect } from 'react';

const ThirdPartyOptimizer = () => {
  useEffect(() => {
    // Defer third-party scripts to improve initial page load
    const deferScript = (src: string, onLoad?: () => void) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      if (onLoad) script.onload = onLoad;
      document.body.appendChild(script);
    };

    // Load non-critical third-party scripts after a delay
    const loadThirdPartyScripts = () => {
      // Calendly embed optimization
      if (window.location.search.includes('calendly') || document.querySelector('[data-calendly]')) {
        deferScript('https://assets.calendly.com/assets/external/widget.js');
      }

      // Other third-party scripts can be added here
    };

    // Load scripts after main content is ready
    const timer = setTimeout(loadThirdPartyScripts, 2000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default ThirdPartyOptimizer;
