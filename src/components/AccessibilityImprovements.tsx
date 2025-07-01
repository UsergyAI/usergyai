
import React, { useEffect } from 'react';

const AccessibilityImprovements: React.FC = () => {
  useEffect(() => {
    // Add skip navigation links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.setAttribute('tabindex', '1');
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add skip to navigation link
    const skipNavLink = document.createElement('a');
    skipNavLink.href = '#navigation';
    skipNavLink.textContent = 'Skip to navigation';
    skipNavLink.className = 'skip-link';
    skipNavLink.style.left = '120px';
    skipNavLink.setAttribute('tabindex', '2');
    
    document.body.insertBefore(skipNavLink, skipLink.nextSibling);

    // Enhance focus management
    const enhanceFocus = () => {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const elements = document.querySelectorAll(focusableElements);
      
      elements.forEach((element, index) => {
        if (!element.getAttribute('tabindex')) {
          element.setAttribute('tabindex', (index + 3).toString());
        }
      });
    };

    // Add ARIA landmarks
    const addLandmarks = () => {
      const header = document.querySelector('header');
      if (header && !header.getAttribute('role')) {
        header.setAttribute('role', 'banner');
      }

      const nav = document.querySelector('nav');
      if (nav && !nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Main navigation');
      }

      const main = document.querySelector('main');
      if (main && !main.getAttribute('role')) {
        main.setAttribute('role', 'main');
      }

      const footer = document.querySelector('footer');
      if (footer && !footer.getAttribute('role')) {
        footer.setAttribute('role', 'contentinfo');
      }
    };

    // Add proper heading hierarchy
    const fixHeadingHierarchy = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headings.forEach((heading, index) => {
        if (!heading.getAttribute('id')) {
          heading.setAttribute('id', `heading-${index + 1}`);
        }
      });
    };

    // Enhance button accessibility
    const enhanceButtons = () => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent?.trim()) {
          const icon = button.querySelector('svg');
          if (icon) {
            button.setAttribute('aria-label', 'Button');
          }
        }
      });
    };

    // Add live region for dynamic content
    const addLiveRegion = () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'live-region';
      document.body.appendChild(liveRegion);
    };

    // Initialize accessibility enhancements
    const initAccessibility = () => {
      enhanceFocus();
      addLandmarks();
      fixHeadingHierarchy();
      enhanceButtons();
      addLiveRegion();
    };

    // Run after DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAccessibility);
    } else {
      initAccessibility();
    }

    // Enhanced CSS for better accessibility
    const style = document.createElement('style');
    style.textContent = `
      /* Enhanced focus indicators */
      *:focus-visible {
        outline: 3px solid #4ECDC4 !important;
        outline-offset: 2px !important;
        border-radius: 4px;
      }
      
      /* Skip links */
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #4ECDC4;
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        font-weight: 600;
        font-size: 14px;
        transition: top 0.3s ease;
      }
      
      .skip-link:focus {
        top: 6px;
      }
      
      /* Screen reader only class */
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
      
      /* High contrast mode improvements */
      @media (prefers-contrast: high) {
        .text-gray-600 { color: #000 !important; }
        .bg-white\/80 { background-color: white !important; }
        button { border: 2px solid currentColor !important; }
      }
      
      /* Reduced motion preferences */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Enhanced button accessibility */
      button:not(:disabled) {
        cursor: pointer;
      }
      
      button:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }
      
      /* Better color contrast for links */
      a:not(.btn):not(.button) {
        color: #2563eb;
        text-decoration: underline;
      }
      
      a:not(.btn):not(.button):hover {
        color: #1d4ed8;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup
      [skipLink, skipNavLink].forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
        liveRegion.remove();
      }
    };
  }, []);

  return null;
};

export default AccessibilityImprovements;
