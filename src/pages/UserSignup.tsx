
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';

const UserSignup = () => {
  useEffect(() => {
    // Enhanced Tally form loading
    const loadTallyEmbeds = () => {
      if (typeof window !== 'undefined' && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      } else {
        const iframe = document.querySelector('iframe[data-tally-src]:not([src])') as HTMLIFrameElement;
        if (iframe && iframe.dataset.tallySrc) {
          iframe.src = iframe.dataset.tallySrc;
        }
      }
    };

    const timer = setTimeout(loadTallyEmbeds, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Join AI Explorer Community"
        description="Sign up to join the Usergy AI Explorer Community. Get early access to AI tools, provide feedback, earn rewards, and shape the future of AI innovation."
        canonical="https://usergy.ai/user-signup"
        keywords="AI community signup, AI explorer signup, AI enthusiast registration, AI feedback community, AI testing signup"
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://usergy.ai" },
          { name: "Join Community", url: "https://usergy.ai/user-signup" }
        ]}
        pageType="WebPage"
      />
      <Header />
      
      {/* Hero Section with Enhanced Floating Bubbles */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-12 overflow-hidden">
        <AnimatedBackground particleCount={60} />
        
        {/* Enhanced Floating Bubbles - Hero Section Only */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          <div className="floating-element absolute top-1/4 left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-float-enhanced opacity-60"></div>
          <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-primary/25 rounded-full animate-float-enhanced opacity-50" style={{ animationDelay: '-2s' }}></div>
          <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary/35 rounded-full animate-float-enhanced opacity-70" style={{ animationDelay: '-4s' }}></div>
          <div className="floating-element absolute bottom-1/3 right-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float-enhanced opacity-80" style={{ animationDelay: '-6s' }}></div>
          <div className="floating-element absolute top-1/2 left-1/6 w-7 h-7 bg-primary/20 rounded-full animate-float-enhanced opacity-45" style={{ animationDelay: '-3s' }}></div>
          <div className="floating-element absolute top-3/4 right-1/6 w-3 h-3 bg-primary/45 rounded-full animate-float-enhanced opacity-65" style={{ animationDelay: '-5s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header section */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 sm:mb-6 leading-tight animate-fade-in px-2">
                Join the Usergy Explorer Community!
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6 sm:mb-8 animate-pulse-glow px-2">
                Your Journey to Shaping Tomorrow's AI Starts Here.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section - No floating bubbles here */}
      <main className="relative pb-16 sm:pb-20" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Fully integrated form container */}
            <div className="w-full animate-scale-in">
              <div className="relative w-full">
                <iframe 
                  data-tally-src="https://tally.so/embed/w4Y1lA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%" 
                  height="800" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="User Sign-Up Form"
                  className="w-full border-0 bg-transparent"
                  style={{ minHeight: '800px' }}
                />
              </div>
            </div>

            {/* Trust indicators section */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-muted-foreground animate-fade-in px-4">
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm sm:text-base">Join 75,000+ AI Enthusiasts</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm sm:text-base">Free to Join</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm sm:text-base">Start Earning Immediately</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Enhanced Tally.so embed script */}
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
