
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

    // Animated background particles
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

    // Initialize particles
    for (let i = 0; i < 50; i++) {
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

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          particle.vx += dx * 0.00001;
          particle.vy += dy * 0.00001;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.globalAlpha = (80 - distance) / 80 * 0.2;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
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
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-usergy-light via-white to-usergy-light">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="floating-element absolute top-1/4 left-1/4 w-4 h-4 bg-usergy-turquoise rounded-full opacity-60"></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-6 h-6 bg-usergy-coral rounded-full opacity-40"></div>
        <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-usergy-skyblue rounded-full opacity-50"></div>
        <div className="floating-element absolute bottom-1/3 right-1/3 w-3 h-3 bg-usergy-gold rounded-full opacity-70"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-6xl lg:text-8xl font-black text-usergy-dark mb-6 leading-tight animate-fade-in">
            Your Brilliant AI Tool 
            <span className="block gradient-text">Deserves to Be Discovered</span>
          </h1>
          
          {/* Emphasis */}
          <div className="text-4xl lg:text-6xl font-black text-usergy-turquoise mb-8 animate-pulse-glow">
            Get Real Traction, Fast.
          </div>

          {/* Sub-headline */}
          <p className="text-xl lg:text-3xl font-semibold text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Usergy connects visionary AI founders with engaged enthusiasts for 
            <span className="text-usergy-skyblue"> authentic feedback</span>, 
            <span className="text-usergy-coral"> vibrant community</span>, and 
            <span className="text-usergy-turquoise"> social momentum</span> that matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button 
              size="lg"
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-xl py-6 px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Launch Your AI Campaign 🚀
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-usergy-coral text-usergy-coral hover:bg-usergy-coral hover:text-white font-bold text-xl py-6 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Gamepad className="mr-3 h-6 w-6" />
              Explore AI Projects 🎮
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-usergy-turquoise rounded-full"></div>
              <span className="font-semibold">1,200+ Campaigns Launched</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-usergy-coral rounded-full"></div>
              <span className="font-semibold">75,000+ AI Enthusiasts</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-usergy-skyblue rounded-full"></div>
              <span className="font-semibold">92% Feedback Quality Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
