
import { useEffect } from 'react';

export const useCriticalCSS = () => {
  useEffect(() => {
    // Apply critical CSS styles for above-the-fold content
    const style = document.createElement('style');
    style.textContent = `
      /* Critical CSS for immediate rendering */
      .hero-gradient {
        background: linear-gradient(135deg, hsl(204 100% 97%) 0%, hsl(0 0% 100%) 35%, hsl(210 40% 98%) 100%);
      }
      
      .primary-gradient {
        background: linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(212 100% 46%) 100%);
      }
      
      .section-wash {
        background: linear-gradient(to bottom, hsl(0 0% 100%) 0%, hsl(210 40% 98%) 50%, hsl(0 0% 100%) 100%);
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s infinite;
      }
      
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px hsl(217 91% 60% / 0.3); }
        50% { box-shadow: 0 0 40px hsl(217 91% 60% / 0.6), 0 0 60px hsl(217 91% 60% / 0.4); }
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
};
