import React, { useState, useRef, useEffect } from 'react';

interface PerformanceOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
}

const PerformanceOptimizedImage: React.FC<PerformanceOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw',
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate WebP and AVIF sources
  const generateOptimizedSources = () => {
    const baseSrc = src.replace(/\.(png|jpg|jpeg)$/i, '');
    const extension = src.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'png';
    
    return {
      avif: `${baseSrc}.avif`,
      webp: `${baseSrc}.webp`,
      original: src
    };
  };

  const sources = generateOptimizedSources();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-muted animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      
      {isInView && (
        <picture>
          <source srcSet={sources.avif} type="image/avif" sizes={sizes} />
          <source srcSet={sources.webp} type="image/webp" sizes={sizes} />
          <img
            src={sources.original}
            alt={alt}
            width={width}
            height={height}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            sizes={sizes}
            decoding="async"
          />
        </picture>
      )}
      
      {hasError && (
        <div 
          className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground text-sm"
          style={{ width, height }}
        >
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizedImage;