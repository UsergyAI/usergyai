
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <footer className="bg-usergy-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand with optimized loading */}
          <div className="flex items-center group">
            <div className="relative">
              {!imageLoaded && (
                <div className="h-12 w-32 bg-gray-600 animate-pulse rounded"></div>
              )}
              <img 
                src="/lovable-uploads/c5c3b275-e91f-4380-a86a-a6b4489557a1.png" 
                alt="Usergy" 
                className={`h-12 w-auto transition-all duration-300 group-hover:opacity-80 cursor-pointer ${
                  imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Key Links */}
          <div className="flex items-center space-x-6 text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-gray-600">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Copyright and Attribution */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400">
          <p className="mb-2">&copy; 2025 Usergy. All rights reserved.</p>
          <p className="text-sm">Built by Vedaswaroop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
