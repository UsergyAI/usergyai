import React, { useEffect } from 'react';

const CriticalCSSInliner: React.FC = () => {
  useEffect(() => {
    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      .hero-section {
        background: linear-gradient(135deg, hsl(var(--usergy-light)), white, hsl(var(--usergy-light)));
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      
      .header-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        transition: all 0.3s ease;
      }
      
      .btn-primary {
        background: hsl(var(--usergy-turquoise));
        color: white;
        border-radius: 9999px;
        padding: 1rem 2rem;
        font-weight: 700;
        transition: all 0.3s ease;
      }
      
      .btn-primary:hover {
        background: hsl(var(--usergy-skyblue));
        transform: scale(1.05);
      }
      
      .text-hero {
        font-size: clamp(1.5rem, 5vw, 4rem);
        font-weight: 900;
        line-height: 1.1;
        color: hsl(var(--usergy-dark));
      }
      
      .gradient-text {
        background: linear-gradient(135deg, hsl(var(--usergy-turquoise)), hsl(var(--usergy-skyblue)));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);

    return () => {
      const criticalStyles = document.querySelector('style[data-critical="true"]');
      if (criticalStyles) {
        criticalStyles.remove();
      }
    };
  }, []);

  return null;
};

export default CriticalCSSInliner;