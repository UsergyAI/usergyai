
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <footer className="bg-usergy-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand with white logo */}
          <div className="flex items-center group">
            <div className="relative">
              {!imageLoaded && (
                <div className="h-12 w-32 bg-gray-600 animate-pulse rounded"></div>
              )}
              <img 
                src="/lovable-uploads/c533a763-8e7e-4ac3-9731-1836179966aa.png" 
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

          {/* Social Media Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/company/usergy-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            
            <a 
              href="https://discord.gg/jkeSnkm5ww" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="hidden sm:inline">Discord</span>
            </a>
            
            <a 
              href="https://www.reddit.com/r/UsergyAI/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-usergy-dark">R</span>
              </div>
              <span className="hidden sm:inline">Reddit</span>
            </a>
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

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400">
          <p>&copy; 2025 Usergy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
