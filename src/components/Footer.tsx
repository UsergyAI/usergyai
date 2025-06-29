
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-usergy-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">U</span>
            </div>
            <span className="text-3xl font-black">Usergy</span>
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
