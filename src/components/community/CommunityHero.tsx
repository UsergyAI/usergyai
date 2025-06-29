
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CommunityHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // AI-themed animated background particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      pulse: number;
    }> = [];

    const colors = ['#4ECDC4', '#45B7D1', '#FF6B6B', '#FED766'];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx + Math.sin(time + particle.pulse) * 0.2;
        particle.y += particle.vy + Math.cos(time + particle.pulse) * 0.2;
        particle.pulse += 0.02;

        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        ctx.globalAlpha = particle.opacity;
        const pulseSize = particle.size + Math.sin(particle.pulse) * 0.5;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const connectionOpacity = (100 - distance) / 100 * 0.1;
            ctx.globalAlpha = connectionOpacity;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-usergy-light via-white to-usergy-light pt-28 md:pt-32 lg:pt-36">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="floating-element absolute top-1/4 left-1/4 w-4 h-4 bg-usergy-turquoise rounded-full opacity-60 animate-pulse"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-6 h-6 bg-usergy-coral rounded-full opacity-40 animate-bounce"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-usergy-skyblue rounded-full opacity-50 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-usergy-dark mb-6 md:mb-8 leading-tight animate-fade-in">
            Shape Tomorrow's AI:
            <span className="block gradient-text mt-2 md:mt-3">Join the Usergy Explorer Community</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Unlock exclusive early access to groundbreaking AI tools, contribute meaningful insights, 
            and earn rewards while directly influencing the next wave of innovation.
          </h2>

          <div className="flex justify-center mb-16 animate-scale-in">
            <Button 
              size="lg"
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Join Our AI Explorer Community
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-gray-600 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-usergy-turquoise rounded-full animate-pulse"></div>
              <span className="font-semibold">5,000+ Active Explorers</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-usergy-coral rounded-full animate-pulse"></div>
              <span className="font-semibold">200+ AI Tools Tested</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <div className="w-2 h-2 bg-usergy-skyblue rounded-full animate-pulse"></div>
              <span className="font-semibold">$50K+ Rewards Distributed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
