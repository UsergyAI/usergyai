
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-usergy-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/faa37370-c81e-48f9-b23e-922deed9bddc.png" 
              alt="Usergy" 
              className="h-12 w-auto filter brightness-0 invert"
            />
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
