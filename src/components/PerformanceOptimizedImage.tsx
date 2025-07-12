import React, { useState, useCallback, useRef, useEffect } from 'react';

interface PerformanceOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const PerformanceOptimizedImage: React.FC<PerformanceOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  loading = 'lazy',
  sizes,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Generate WebP and AVIF sources
  const generateOptimizedSources = useCallback(() => {
    const baseSrc = src.replace(/\.(png|jpg|jpeg)$/i, '');
    const extension = src.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'png';
    
    return {
      avif: `${baseSrc}.avif`,
      webp: `${baseSrc}.webp`,
      original: src
    };
  }, [src]);

  // Intersection observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [priority, loading]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const sources = generateOptimizedSources();

  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`${className} bg-gray-200 animate-pulse`}
        style={{ width, height, aspectRatio: width && height ? `${width}/${height}` : undefined }}
        aria-label={`Loading ${alt}`}
      />
    );
  }

  if (hasError) {
    return (
      <div
        className={`${className} bg-gray-100 flex items-center justify-center text-gray-400`}
        style={{ width, height }}
        aria-label={`Failed to load ${alt}`}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <picture className={className}>
      <source srcSet={sources.avif} type="image/avif" sizes={sizes} />
      <source srcSet={sources.webp} type="image/webp" sizes={sizes} />
      <img
        ref={imgRef}
        src={sources.original}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
};

export default PerformanceOptimizedImage;