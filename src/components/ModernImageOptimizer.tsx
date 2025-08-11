import React, { useState, useRef, useEffect } from 'react';

interface ModernImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
}

const ModernImageOptimizer: React.FC<ModernImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  width,
  height,
  sizes = '100vw',
  quality = 80
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [optimalSrc, setOptimalSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate modern format sources
  useEffect(() => {
    const generateOptimalSrc = () => {
      const baseSrc = src.replace(/\.(png|jpg|jpeg)$/i, '');
      const originalExt = src.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'png';
      
      // Check browser support for modern formats
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      
      // Test WebP support
      const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      
      // Test AVIF support
      const avifSupported = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
      
      if (avifSupported) {
        setOptimalSrc(`${baseSrc}.avif`);
      } else if (webpSupported) {
        setOptimalSrc(`${baseSrc}.webp`);
      } else {
        setOptimalSrc(src);
      }
    };

    generateOptimalSrc();
  }, [src]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px' // Load images 100px before they enter viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

  // Generate responsive srcSet
  const generateSrcSet = () => {
    if (!width || !height) return '';
    
    const baseSrc = optimalSrc.replace(/\.(png|jpg|jpeg|webp|avif)$/i, '');
    const ext = optimalSrc.match(/\.(png|jpg|jpeg|webp|avif)$/i)?.[1] || 'png';
    
    return `
      ${optimalSrc} 1x,
      ${baseSrc}@2x.${ext} 2x,
      ${baseSrc}@3x.${ext} 3x
    `.trim();
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback to original format on error
    if (optimalSrc !== src) {
      setOptimalSrc(src);
    } else {
      setHasError(true);
    }
  };

  return (
    <div 
      ref={imgRef} 
      className={`relative ${className}`}
      style={{ 
        ...(width && height && { aspectRatio: `${width}/${height}` }),
        minHeight: height ? `${height}px` : 'auto'
      }}
    >
      {/* Placeholder while loading */}
      {!isLoaded && !hasError && isInView && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
          style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="flex items-center justify-center bg-gray-100 text-gray-400 min-h-[200px]">
          <span className="text-sm">Image unavailable</span>
        </div>
      )}
      
      {/* Optimized image */}
      {isInView && !hasError && (
        <picture>
          {/* AVIF source */}
          <source 
            srcSet={optimalSrc.includes('.avif') ? generateSrcSet() : ''} 
            type="image/avif" 
            sizes={sizes}
          />
          {/* WebP source */}
          <source 
            srcSet={optimalSrc.includes('.webp') ? generateSrcSet() : ''} 
            type="image/webp" 
            sizes={sizes}
          />
          {/* Fallback image */}
          <img
            src={optimalSrc}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            srcSet={generateSrcSet()}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : loading}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: 'auto'
            }}
          />
        </picture>
      )}
    </div>
  );
};

export default ModernImageOptimizer;