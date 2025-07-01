
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      // Navigate to homepage first, then scroll to section
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const handleMenuItemClick = (path: string) => {
    setIsMobileMenuOpen(false);
    // Ensure we scroll to top when navigating
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with embedded SVG */}
          <Link 
            to="/" 
            className="flex items-center group" 
            onClick={() => handleMenuItemClick('/')}
            aria-label="Usergy homepage"
          >
            <div className="relative">
              <svg 
                width="120" 
                height="40" 
                viewBox="0 0 120 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 group-hover:opacity-80"
                role="img"
                aria-label="Usergy logo"
              >
                <text x="10" y="25" fontSize="24" fontWeight="bold" fill="#4ECDC4">Usergy</text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile and small tablets */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" role="navigation" aria-label="Main navigation">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-usergy-dark hover:text-usergy-turquoise transition-colors font-semibold text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-usergy-turquoise focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Go to homepage"
            >
              Home
            </button>
            <Link 
              to="/pricing"
              className="text-usergy-dark hover:text-usergy-turquoise transition-colors font-semibold text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-usergy-turquoise focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Pricing
            </Link>
            <Link 
              to="/community"
              className="text-usergy-dark hover:text-usergy-skyblue transition-colors font-semibold text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-usergy-skyblue focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Community
            </Link>
            <Link 
              to="/contact"
              className="text-usergy-dark hover:text-usergy-coral transition-colors font-semibold text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-usergy-coral focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Contact
            </Link>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-usergy-dark hover:text-usergy-skyblue transition-colors font-semibold text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-usergy-skyblue focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Go to How It Works section"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')}
              className="text-usergy-dark hover:text-usergy-coral transition-colors font-semibold text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-usergy-coral focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Go to Success Stories section"
            >
              Success Stories
            </button>
          </nav>

          {/* Fixed Mobile/Tablet Layout with proper spacing */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Contact Button - Responsive sizing and text */}
            <Button 
              size="sm"
              onClick={handleCalendlyRedirect}
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm lg:text-base will-change-transform min-w-[70px] sm:min-w-[90px] md:min-w-[110px] focus:ring-2 focus:ring-usergy-turquoise focus:ring-offset-2"
              aria-label="Book a strategy call with Usergy"
            >
              <span className="hidden md:inline">Book Strategy Call</span>
              <span className="hidden sm:inline md:hidden">Book Call</span>
              <span className="sm:hidden">Call</span>
            </Button>

            {/* Mobile Menu Button - Improved touch target and event handling */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 sm:p-2.5 rounded-md text-usergy-dark hover:text-usergy-turquoise hover:bg-gray-100 transition-colors menu-button min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation focus:outline-none focus:ring-2 focus:ring-usergy-turquoise focus:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Improved functionality */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mobile-menu" role="menu">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-3 text-usergy-dark hover:text-usergy-turquoise hover:bg-gray-50 transition-colors font-semibold rounded-md touch-manipulation focus:outline-none focus:ring-2 focus:ring-usergy-turquoise focus:ring-offset-2"
                type="button"
                role="menuitem"
                aria-label="Go to homepage"
              >
                Home
              </button>
              <Link 
                to="/pricing"
                onClick={() => handleMenuItemClick('/pricing')}
                className="px-4 py-3 text-usergy-dark hover:text-usergy-turquoise hover:bg-gray-50 transition-colors font-semibold rounded-md block focus:outline-none focus:ring-2 focus:ring-usergy-turquoise focus:ring-offset-2"
                role="menuitem"
              >
                Pricing
              </Link>
              <Link 
                to="/community"
                onClick={() => handleMenuItemClick('/community')}
                className="px-4 py-3 text-usergy-dark hover:text-usergy-skyblue hover:bg-gray-50 transition-colors font-semibold rounded-md block focus:outline-none focus:ring-2 focus:ring-usergy-skyblue focus:ring-offset-2"
                role="menuitem"
              >
                Community
              </Link>
              <Link 
                to="/contact"
                onClick={() => handleMenuItemClick('/contact')}
                className="px-4 py-3 text-usergy-dark hover:text-usergy-coral hover:bg-gray-50 transition-colors font-semibold rounded-md block focus:outline-none focus:ring-2 focus:ring-usergy-coral focus:ring-offset-2"
                role="menuitem"
              >
                Contact
              </Link>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left px-4 py-3 text-usergy-dark hover:text-usergy-skyblue hover:bg-gray-50 transition-colors font-semibold rounded-md touch-manipulation focus:outline-none focus:ring-2 focus:ring-usergy-skyblue focus:ring-offset-2"
                type="button"
                role="menuitem"
                aria-label="Go to How It Works section"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('success-stories')}
                className="text-left px-4 py-3 text-usergy-dark hover:text-usergy-coral hover:bg-gray-50 transition-colors font-semibold rounded-md touch-manipulation focus:outline-none focus:ring-2 focus:ring-usergy-coral focus:ring-offset-2"
                type="button"
                role="menuitem"
                aria-label="Go to Success Stories section"
              >
                Success Stories
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
