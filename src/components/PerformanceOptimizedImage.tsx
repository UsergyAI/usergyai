
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface PerformanceOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  sizes?: string;
  srcSet?: string;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: string;
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
  srcSet,
  onLoad,
  onError,
  placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsIntersecting(true);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    }
  }, []);

  useEffect(() => {
    if (priority || isIntersecting) return;

    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin: '50px',
      threshold: 0.1
    });

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, isIntersecting, handleIntersection]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsError(true);
    onError?.();
  }, [onError]);

  if (isError) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <span className="text-muted-foreground text-sm">Image failed to load</span>
      </div>
    );
  }

  const shouldShowPlaceholder = !isLoaded && placeholder;
  const shouldLoadImage = priority || isIntersecting;

  return (
    <div className={`relative ${className}`}>
      {shouldShowPlaceholder && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      
      {!isLoaded && !placeholder && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      <img
        ref={imgRef}
        src={shouldLoadImage ? src : undefined}
        srcSet={shouldLoadImage ? srcSet : undefined}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          contentVisibility: 'auto',
          containIntrinsicSize: width && height ? `${width}px ${height}px` : undefined
        }}
      />
    </div>
  );
};

export default PerformanceOptimizedImage;
