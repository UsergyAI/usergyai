
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const UserSignup = () => {
  useEffect(() => {
    // Load Tally embeds after component mounts
    const loadTallyEmbeds = () => {
      if (typeof window !== 'undefined' && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      } else {
        // Fallback: manually set src for iframe if Tally script hasn't loaded
        const iframe = document.querySelector('iframe[data-tally-src]:not([src])') as HTMLIFrameElement;
        if (iframe && iframe.dataset.tallySrc) {
          iframe.src = iframe.dataset.tallySrc;
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadTallyEmbeds, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-usergy-light via-white to-usergy-light">
      <Header />
      
      {/* Enhanced Animated background canvas */}
      <AnimatedBackground particleCount={60} />
      
      {/* Main content area with full integration */}
      <main className="relative pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header section */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-usergy-dark mb-4 sm:mb-6 leading-tight animate-fade-in px-2">
                Join the Usergy Explorer Community!
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-usergy-turquoise mb-6 sm:mb-8 animate-pulse-glow px-2">
                Your Journey to Shaping Tomorrow's AI Starts Here.
              </h2>
            </div>

            {/* Fully integrated form container */}
            <div className="w-full animate-scale-in">
              <div className="relative w-full">
                <iframe 
                  data-tally-src="https://tally.so/embed/w4Y1lA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%" 
                  height="585" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="User Sign-Up Form"
                  className="w-full border-0 bg-transparent"
                  style={{ minHeight: '585px' }}
                />
              </div>
            </div>

            {/* Trust indicators section */}
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

      {/* Enhanced Tally.so embed script with proper loading */}
      <script 
        src="https://tally.so/widgets/embed.js"
        async
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).Tally) {
            (window as any).Tally.loadEmbeds();
          }
        }}
      />
    </div>
  );
};

export default UserSignup;
