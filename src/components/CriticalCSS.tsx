
import React from 'react';

// Inline critical CSS for above-the-fold content
const CriticalCSS: React.FC = () => {
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Critical above-the-fold styles */
      .hero-section {
        min-height: 100vh;
        background: linear-gradient(135deg, #F8FFFE 0%, #ffffff 50%, #F8FFFE 100%);
      }
      
      .hero-title {
        font-size: clamp(1.875rem, 5vw, 4rem);
        font-weight: 900;
        line-height: 1.1;
        color: #2C3E50;
      }
      
      .gradient-text {
        background: linear-gradient(135deg, #4ECDC4, #45B7D1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .btn-primary {
        background: #4ECDC4;
        color: white;
        padding: 1rem 2rem;
        border-radius: 9999px;
        font-weight: 700;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      }
      
      /* Preload font display */
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2') format('woff2');
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default CriticalCSS;
