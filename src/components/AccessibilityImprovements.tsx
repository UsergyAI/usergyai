
import React, { useEffect } from 'react';

const AccessibilityImprovements: React.FC = () => {
  useEffect(() => {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-usergy-turquoise text-white px-4 py-2 rounded z-50';
    skipLink.style.transform = 'translateY(-100%)';
    skipLink.addEventListener('focus', () => {
      skipLink.style.transform = 'translateY(0)';
    });
    skipLink.addEventListener('blur', () => {
      skipLink.style.transform = 'translateY(-100%)';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Improve focus indicators
    const style = document.createElement('style');
    style.textContent = `
      *:focus {
        outline: 2px solid #4ECDC4 !important;
        outline-offset: 2px !important;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .focus\\:not-sr-only:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 0.5rem 1rem;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default AccessibilityImprovements;
