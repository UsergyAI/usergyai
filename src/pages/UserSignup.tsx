
import React, { useEffect, useRef, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UserSignup = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#4ECDC4', '#45B7D1', '#FF6B6B', '#FED766'];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime;

      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = initializeCanvas();
    return cleanup;
  }, [initializeCanvas]);

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
      
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
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

      {/* Tally.so embed script with proper loading */}
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
