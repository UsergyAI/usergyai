
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes or when clicking anywhere outside menu
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside or on menu items
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
    setIsMobileMenuOpen(false); // Auto-close menu when clicking section links
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCalendlyRedirect = () => {
    window.open('https://calendly.com/swaroop-usergy/30min', '_blank');
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Auto-close menu when clicking any menu item
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with optimized loading */}
          <Link to="/" className="flex items-center group" onClick={handleMenuItemClick}>
            <div className="relative">
              {!imageLoaded && (
                <div className="h-8 sm:h-10 md:h-12 w-24 sm:w-28 md:w-32 bg-gray-200 animate-pulse rounded"></div>
              )}
              <img 
                src="/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png" 
                alt="Usergy" 
                className={`h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 group-hover:opacity-80 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                loading="eager"
                decoding="async"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile and small tablets */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-usergy-dark hover:text-usergy-turquoise transition-colors font-semibold text-sm xl:text-base"
            >
              Home
            </button>
            <Link 
              to="/services"
              className="text-usergy-dark hover:text-usergy-turquoise transition-colors font-semibold text-sm xl:text-base"
            >
              Services
            </Link>
            <Link 
              to="/community"
              className="text-usergy-dark hover:text-usergy-skyblue transition-colors font-semibold text-sm xl:text-base"
            >
              Community
            </Link>
            <Link 
              to="/contact"
              className="text-usergy-dark hover:text-usergy-coral transition-colors font-semibold text-sm xl:text-base"
            >
              Contact
            </Link>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-usergy-dark hover:text-usergy-skyblue transition-colors font-semibold text-sm xl:text-base"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')}
              className="text-usergy-dark hover:text-usergy-coral transition-colors font-semibold text-sm xl:text-base"
            >
              Success Stories
            </button>
          </nav>

          {/* Mobile/Tablet Layout */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Contact Button - Always visible but responsive */}
            <Button 
              size="sm"
              onClick={handleCalendlyRedirect}
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm will-change-transform"
            >
              <span className="hidden sm:inline">Book Strategy Call</span>
              <span className="sm:hidden">Book Call</span>
            </Button>

            {/* Mobile Menu Button - Visible on mobile and tablets */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-usergy-dark hover:text-usergy-turquoise hover:bg-gray-100 transition-colors menu-button"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg mobile-menu">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-2 text-usergy-dark hover:text-usergy-turquoise hover:bg-gray-50 transition-colors font-semibold rounded-md"
              >
                Home
              </button>
              <Link 
                to="/services"
                onClick={handleMenuItemClick}
                className="px-4 py-2 text-usergy-dark hover:text-usergy-turquoise hover:bg-gray-50 transition-colors font-semibold rounded-md"
              >
                Services
              </Link>
              <Link 
                to="/community"
                onClick={handleMenuItemClick}
                className="px-4 py-2 text-usergy-dark hover:text-usergy-skyblue hover:bg-gray-50 transition-colors font-semibold rounded-md"
              >
                Community
              </Link>
              <Link 
                to="/contact"
                onClick={handleMenuItemClick}
                className="px-4 py-2 text-usergy-dark hover:text-usergy-coral hover:bg-gray-50 transition-colors font-semibold rounded-md"
              >
                Contact
              </Link>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left px-4 py-2 text-usergy-dark hover:text-usergy-skyblue hover:bg-gray-50 transition-colors font-semibold rounded-md"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('success-stories')}
                className="text-left px-4 py-2 text-usergy-dark hover:text-usergy-coral hover:bg-gray-50 transition-colors font-semibold rounded-md"
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
