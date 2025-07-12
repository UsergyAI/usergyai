
import React, { useEffect, useRef, useCallback, useMemo } from 'react';

interface AnimatedBackgroundProps {
  particleCount?: number;
  className?: string;
  zIndex?: number;
  enableFloatingBubbles?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  particleCount = 20, // Reduced from 60 to 20 for performance
  className = "absolute inset-0 w-full h-full pointer-events-none",
  zIndex = 1,
  enableFloatingBubbles = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const isVisible = useRef(false);

  // Performance optimization: reduced particle count and optimized colors
  const colors = useMemo(() => ['#4ECDC4', '#45B7D1', '#FF6B6B', '#FED766'], []);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      willReadFrequently: false,
      desynchronized: true
    });
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

    // Optimized particles for better performance
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

    // Initialize particles with reduced complexity
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4, // Reduced velocity
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5, // Smaller particles
        opacity: Math.random() * 0.4 + 0.1, // Reduced opacity
        color: colors[Math.floor(Math.random() * colors.length)],
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

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    let time = 0;
    let lastTime = 0;
    const targetFPS = 30; // Reduced from 60 to 30 for better performance
    const frameInterval = 1000 / targetFPS;

    // Intersection Observer for performance optimization
    const observer = new IntersectionObserver((entries) => {
      isVisible.current = entries[0].isIntersecting;
    }, { threshold: 0.1 });

    observer.observe(canvas);

    const animate = (currentTime: number) => {
      // Only animate if visible
      if (!isVisible.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime;
      time += 0.005; // Reduced animation speed

      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simplified particle rendering for performance
      particles.forEach((particle) => {
        // Simplified mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100 && mouseInfluence > 0) {
          const force = (100 - distance) / 100 * 0.5;
          particle.opacity = Math.min(0.6, particle.opacity + 0.1 * force);
        } else {
          particle.opacity = Math.max(0.1, particle.opacity - 0.005);
        }

        // Simplified movement
        particle.x += particle.vx + Math.sin(time + particle.pulse) * 0.1;
        particle.y += particle.vy + Math.cos(time + particle.pulse) * 0.1;
        particle.pulse += 0.01;

        // Wrap around edges
        if (particle.x < -5) particle.x = canvas.width + 5;
        if (particle.x > canvas.width + 5) particle.x = -5;
        if (particle.y < -5) particle.y = canvas.height + 5;
        if (particle.y > canvas.height + 5) particle.y = -5;

        // Simplified drawing - no shadows or complex effects
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
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, colors]);

  useEffect(() => {
    const cleanup = initializeCanvas();
    return cleanup;
  }, [initializeCanvas]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={className}
        style={{ zIndex }}
      />
      {/* Floating bubbles only when enabled (hero sections) */}
      {enableFloatingBubbles && (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: zIndex + 1 }}>
          <div className="floating-element absolute top-1/4 left-1/4 w-6 h-6 bg-usergy-turquoise/30 rounded-full animate-float-enhanced opacity-60"></div>
          <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-usergy-coral/25 rounded-full animate-float-enhanced opacity-50" style={{ animationDelay: '-2s' }}></div>
          <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-usergy-skyblue/35 rounded-full animate-float-enhanced opacity-70" style={{ animationDelay: '-4s' }}></div>
          <div className="floating-element absolute bottom-1/3 right-1/3 w-4 h-4 bg-usergy-gold/40 rounded-full animate-float-enhanced opacity-80" style={{ animationDelay: '-6s' }}></div>
          <div className="floating-element absolute top-1/2 left-1/6 w-7 h-7 bg-usergy-turquoise/20 rounded-full animate-float-enhanced opacity-45" style={{ animationDelay: '-3s' }}></div>
          <div className="floating-element absolute top-3/4 right-1/6 w-3 h-3 bg-usergy-coral/45 rounded-full animate-float-enhanced opacity-65" style={{ animationDelay: '-5s' }}></div>
        </div>
      )}
    </>
  );
};

export default AnimatedBackground;
