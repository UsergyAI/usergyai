
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UserSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-usergy-light via-white to-usergy-light">
      <Header />
      
      {/* Main content area with consistent styling */}
      <main className="pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header section with consistent typography */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-usergy-dark mb-4 sm:mb-6 leading-tight animate-fade-in px-2">
                Join the Usergy Explorer Community!
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-usergy-turquoise mb-6 sm:mb-8 animate-pulse-glow px-2">
                Your Journey to Shaping Tomorrow's AI Starts Here.
              </h2>
            </div>

            {/* Form embedding container with consistent background */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-usergy-turquoise/20 overflow-hidden animate-scale-in">
              <div className="relative w-full" style={{ minHeight: '600px', height: '70vh' }}>
                <iframe 
                  data-tally-src="https://forms.usergy.ai/user-signup" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0" 
                  title="User Sign-Up Form"
                  className="w-full h-full border-0"
                  style={{ minHeight: '600px' }}
                />
              </div>
            </div>

            {/* Trust indicators section - consistent with other pages */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-gray-600 animate-fade-in px-4">
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-usergy-turquoise rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm sm:text-base">Join 75,000+ AI Enthusiasts</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-usergy-coral rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm sm:text-base">Free to Join</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-usergy-skyblue rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm sm:text-base">Start Earning Immediately</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Add the Tally.so embed script */}
      <script async src="https://tally.so/widgets/embed.js"></script>
    </div>
  );
};

export default UserSignup;
