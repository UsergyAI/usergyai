
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand with new SVG logo */}
          <div className="flex items-center group">
            <div className="relative cursor-pointer" onClick={handleLogoClick}>
              <svg 
                width="180" 
                height="56" 
                viewBox="0 0 320 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-auto opacity-80 transition-all duration-300 group-hover:opacity-70 cursor-pointer"
                role="img"
                aria-label="Usergy logo - Navigate to homepage"
              >
                <title>Usergy</title>
                <defs>
                  <linearGradient id="usergy-gradient-footer" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C6FB"/>
                    <stop offset="1" stopColor="#005BEA"/>
                  </linearGradient>
                  <linearGradient id="text-gradient-footer" x1="60" y1="40" x2="320" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C6FB"/>
                    <stop offset="1" stopColor="#005BEA"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="20" width="40" height="40" rx="10" fill="url(#usergy-gradient-footer)"/>
                <g transform="translate(8,28)">
                  <circle cx="6" cy="12" r="3" fill="white"/>
                  <circle cx="18" cy="6" r="3" fill="white"/>
                  <circle cx="18" cy="18" r="3" fill="white"/>
                  <path d="M8.5 14l7-4" stroke="white" strokeWidth="2"/>
                  <path d="M8.5 10l7 4" stroke="white" strokeWidth="2"/>
                </g>
                <text x="60" y="54" fontFamily="Inter, Segoe UI, Arial, sans-serif" fontSize="44" fontWeight="bold" fill="url(#text-gradient-footer)">
                  Usergy
                </text>
              </svg>
            </div>
          </div>

          {/* Social Media Links with correct icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/company/usergy-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            
            <a 
              href="https://discord.com/invite/jkeSnkm5ww" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="hidden sm:inline">Discord</span>
            </a>
            
            <a 
              href="https://www.reddit.com/r/UsergyAI/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110 transform"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              <span className="hidden sm:inline">Reddit</span>
            </a>
          </div>

          {/* Key Links - Enhanced visibility */}
          <div className="flex items-center space-x-6 text-muted-foreground">
            <Link 
              to="/privacy" 
              className="hover:text-foreground hover:text-primary transition-all duration-200 underline decoration-transparent hover:decoration-current underline-offset-4 font-medium hover:transform hover:scale-105"
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/terms" 
              className="hover:text-foreground hover:text-primary transition-all duration-200 underline decoration-transparent hover:decoration-current underline-offset-4 font-medium hover:transform hover:scale-105"
              aria-label="View Terms of Service"
            >
              Terms of Service
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              to="/contact" 
              className="hover:text-foreground hover:text-primary transition-all duration-200 underline decoration-transparent hover:decoration-current underline-offset-4 font-medium hover:transform hover:scale-105"
              aria-label="Contact Usergy"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 mt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Usergy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
