import { useEffect } from 'react';

// Critical CSS for above-the-fold content
const criticalCSS = `
  /* Critical styles for immediate rendering */
  .hero-gradient {
    background: linear-gradient(135deg, rgb(78, 205, 196), rgb(69, 183, 209));
  }
  
  .text-usergy-dark {
    color: rgb(44, 62, 80);
  }
  
  .bg-usergy-light {
    background-color: rgb(248, 255, 254);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, rgb(78, 205, 196), rgb(69, 183, 209));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* Essential animations for hero section */
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.6s ease-out;
  }
  
  /* Skip link styles */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #4ECDC4;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 9999;
    font-weight: bold;
    transition: top 0.3s ease;
    font-size: 14px;
  }
  
  .skip-link:focus {
    top: 6px;
  }
  
  /* Focus styles for accessibility */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid #4ECDC4;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export const useCriticalCSS = () => {
  useEffect(() => {
    // Inject critical CSS immediately
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);

    return () => {
      // Cleanup on unmount
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);
};

export default useCriticalCSS;