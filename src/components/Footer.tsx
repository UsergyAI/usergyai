
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-usergy-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">U</span>
              </div>
              <span className="text-3xl font-black">Usergy</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming AI development through authentic community engagement and strategic traction building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-usergy-turquoise">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-usergy-coral">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-usergy-skyblue">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="w-10 h-10 bg-usergy-turquoise rounded-full flex items-center justify-center hover:bg-usergy-skyblue transition-colors">
                <span className="text-white font-bold">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-usergy-coral rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors">
                <span className="text-white font-bold">Li</span>
              </a>
              <a href="#" className="w-10 h-10 bg-usergy-skyblue rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-white font-bold">Git</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-center">
              <p>&copy; 2024 Usergy. All rights reserved. Built with 💙 for the AI community.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
