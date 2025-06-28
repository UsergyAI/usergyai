
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
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
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">U</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-usergy-dark">Usergy</span>
          </div>

          {/* Navigation - Hidden on mobile, visible on tablet and up */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('for-founders')}
              className="text-usergy-dark hover:text-usergy-turquoise transition-colors font-semibold text-sm lg:text-base"
            >
              For Founders
            </button>
            <button 
              onClick={() => scrollToSection('for-users')}
              className="text-usergy-dark hover:text-usergy-coral transition-colors font-semibold text-sm lg:text-base"
            >
              For Users
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-usergy-dark hover:text-usergy-skyblue transition-colors font-semibold text-sm lg:text-base"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-usergy-dark hover:text-usergy-turquoise transition-colors font-semibold text-sm lg:text-base"
            >
              Pricing
            </button>
          </nav>

          {/* Action Buttons - Responsive sizing */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-usergy-turquoise text-usergy-dark hover:bg-usergy-turquoise hover:text-white transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
            >
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
