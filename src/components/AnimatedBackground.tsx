
import React, { useEffect, useRef, useCallback } from 'react';

interface AnimatedBackgroundProps {
  particleCount?: number;
  className?: string;
  zIndex?: number;
  enableFloatingBubbles?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  particleCount = 30, // Reduced from 60 for better performance
  className = "absolute inset-0 w-full h-full pointer-events-none",
  zIndex = 1,
  enableFloatingBubbles = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const isVisibleRef = useRef<boolean>(true);

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

    const css = getComputedStyle(document.documentElement);
    const primary = `hsl(${css.getPropertyValue('--primary').trim()})`;
    const primaryStart = `hsl(${css.getPropertyValue('--primary-start').trim()})`;
    const colors = [primaryStart, primary];
 
    // Initialize particles with different types for enhanced visual appeal
    for (let i = 0; i < particleCount; i++) {
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

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    let time = 0;
    let lastTime = 0;
    const targetFPS = 30; // Reduced from 60 for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      // Pause animation when not visible
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime;
      time += 0.01;

      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Enhanced mouse interaction with subtle ripple effect
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

        // Update position with enhanced flow-like movement
        particle.x += particle.vx + Math.sin(time + particle.pulse) * 0.3;
        particle.y += particle.vy + Math.cos(time + particle.pulse) * 0.3;
        particle.pulse += 0.02;

        // Wrap around edges smoothly
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Enhanced drawing based on particle type
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'node') {
          // Draw enhanced pulsing nodes with glow - ensure minimum radius
          const pulseSize = Math.max(0.5, particle.size + Math.sin(particle.pulse) * 1.5);
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Enhanced glow effect - ensure minimum radius
          ctx.shadowBlur = 15;
          ctx.shadowColor = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, Math.max(0.5, pulseSize * 0.6), 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          // Draw regular enhanced particles - ensure minimum radius
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, Math.max(0.5, particle.size), 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw enhanced dynamic connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const connectionOpacity = (120 - distance) / 120 * 0.2;
            ctx.globalAlpha = connectionOpacity;
            
            // Create enhanced flowing connection lines
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, otherParticle.color);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.sin(time + distance * 0.1) * 0.8 + 1.2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Performance optimization: pause animation when page is not visible
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount]);

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
          <div className="floating-element absolute top-1/4 left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-float-enhanced opacity-60"></div>
          <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-primary/25 rounded-full animate-float-enhanced opacity-50" style={{ animationDelay: '-2s' }}></div>
          <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary/35 rounded-full animate-float-enhanced opacity-70" style={{ animationDelay: '-4s' }}></div>
          <div className="floating-element absolute bottom-1/3 right-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float-enhanced opacity-80" style={{ animationDelay: '-6s' }}></div>
          <div className="floating-element absolute top-1/2 left-1/6 w-7 h-7 bg-primary/20 rounded-full animate-float-enhanced opacity-45" style={{ animationDelay: '-3s' }}></div>
          <div className="floating-element absolute top-3/4 right-1/6 w-3 h-3 bg-primary/45 rounded-full animate-float-enhanced opacity-65" style={{ animationDelay: '-5s' }}></div>
        </div>
      )}
    </>
  );
};

export default AnimatedBackground;
