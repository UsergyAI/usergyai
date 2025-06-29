
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <Link to="/" className="flex items-center group">
            <div className="relative">
              {!imageLoaded && (
                <div className="h-10 sm:h-12 w-32 bg-gray-200 animate-pulse rounded"></div>
              )}
              <img 
                src="/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png" 
                alt="Usergy" 
                className={`h-10 sm:h-12 w-auto transition-all duration-300 group-hover:opacity-80 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                loading="eager"
                decoding="async"
              />
            </div>
          </Link>

          {/* Navigation - Hidden on mobile, visible on tablet and up */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-usergy-dark hover:text-usergy-turquoise transition-colors font-semibold text-sm lg:text-base"
            >
              Home
            </button>
            <Link 
              to="/services"
              className="text-usergy-dark hover:text-usergy-turquoise transition-colors font-semibold text-sm lg:text-base"
            >
              Services
            </Link>
            <Link 
              to="/community"
              className="text-usergy-dark hover:text-usergy-skyblue transition-colors font-semibold text-sm lg:text-base"
            >
              Community
            </Link>
            <Link 
              to="/contact"
              className="text-usergy-dark hover:text-usergy-coral transition-colors font-semibold text-sm lg:text-base"
            >
              Contact
            </Link>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-usergy-dark hover:text-usergy-skyblue transition-colors font-semibold text-sm lg:text-base"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('success-stories')}
              className="text-usergy-dark hover:text-usergy-coral transition-colors font-semibold text-sm lg:text-base"
            >
              Success Stories
            </button>
          </nav>

          {/* Contact Button - Single CTA */}
          <div className="flex items-center">
            <Button 
              size="sm"
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm will-change-transform"
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
