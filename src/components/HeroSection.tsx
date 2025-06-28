import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Gamepad } from 'lucide-react';

const HeroSection = () => {
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

    // Enhanced animated background particles with AI-themed elements
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'node' | 'data' | 'connection';
      pulse: number;
    }> = [];

    const colors = ['#4ECDC4', '#45B7D1', '#FF6B6B', '#FED766'];

    // Initialize particles with different types
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.7 ? 'node' : Math.random() > 0.5 ? 'data' : 'connection',
        pulse: Math.random() * Math.PI * 2
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let mouseInfluence = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseInfluence = 1;
    };

    const handleMouseLeave = () => {
      mouseInfluence = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse interaction with subtle ripple effect
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150 && mouseInfluence > 0) {
          const force = (150 - distance) / 150;
          particle.vx += dx * 0.00005 * force;
          particle.vy += dy * 0.00005 * force;
          particle.opacity = Math.min(1, particle.opacity + 0.3 * force);
        } else {
          particle.opacity = Math.max(0.1, particle.opacity - 0.01);
        }

        // Update position with flow-like movement
        particle.x += particle.vx + Math.sin(time + particle.pulse) * 0.2;
        particle.y += particle.vy + Math.cos(time + particle.pulse) * 0.2;
        particle.pulse += 0.02;

        // Wrap around edges
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Draw based on particle type
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'node') {
          // Draw pulsing nodes
          const pulseSize = particle.size + Math.sin(particle.pulse) * 1;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Add glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          // Draw regular particles
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw dynamic connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const connectionOpacity = (120 - distance) / 120 * 0.15;
            ctx.globalAlpha = connectionOpacity;
            
            // Create flowing connection lines
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, otherParticle.color);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.sin(time + distance * 0.1) * 0.5 + 1;
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
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-usergy-light via-white to-usergy-light pt-20 md:pt-24 lg:pt-28">
      {/* Enhanced Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating Elements with improved animation */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="floating-element absolute top-1/4 left-1/4 w-4 h-4 bg-usergy-turquoise rounded-full opacity-60 animate-pulse"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-6 h-6 bg-usergy-coral rounded-full opacity-40 animate-bounce"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-usergy-skyblue rounded-full opacity-50 animate-pulse"></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-3 h-3 bg-usergy-gold rounded-full opacity-70 animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline with enhanced spacing */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-usergy-dark mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight animate-fade-in px-2">
            Your Brilliant AI Tool 
            <span className="block gradient-text mt-2 md:mt-4">Deserves to Be Discovered</span>
          </h1>
          
          {/* Emphasis with improved spacing */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-usergy-turquoise mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-pulse-glow px-2">
            Get Real Traction, Fast.
          </div>

          {/* Sub-headline with enhanced spacing */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 mb-12 sm:mb-14 md:mb-16 lg:mb-20 max-w-4xl mx-auto leading-relaxed animate-slide-up px-4">
            Usergy connects visionary AI founders with engaged enthusiasts for 
            <span className="text-usergy-skyblue"> authentic feedback</span>, 
            <span className="text-usergy-coral"> vibrant community</span>, and 
            <span className="text-usergy-turquoise"> social momentum</span> that matters.
          </p>

          {/* CTA Buttons with improved spacing and responsive design */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center mb-6 sm:mb-8 md:mb-10 animate-scale-in px-4">
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-lg sm:text-xl py-6 sm:py-8 px-10 sm:px-14 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <Rocket className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Launch Your AI Campaign 🚀
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-bold text-lg sm:text-xl py-6 sm:py-8 px-10 sm:px-14 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Gamepad className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Explore AI Projects 🎮
            </Button>
          </div>

          {/* Trust Indicators with enhanced spacing and responsive design */}
          <div className="mt-16 sm:mt-18 md:mt-20 lg:mt-24 flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 text-gray-500 animate-fade-in px-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-usergy-turquoise rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">1,200+ Campaigns Launched</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-usergy-coral rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">75,000+ AI Enthusiasts</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-usergy-skyblue rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm sm:text-base">92% Feedback Quality Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
