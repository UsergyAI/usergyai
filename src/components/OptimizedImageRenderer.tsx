import React from 'react';
import ModernImageOptimizer from './ModernImageOptimizer';

interface OptimizedImageRendererProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

const OptimizedImageRenderer: React.FC<OptimizedImageRendererProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  sizes
}) => {
  // Generate optimized image sources
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

  return (
    <picture className={className}>
      {/* AVIF source for maximum compression */}
      <source 
        srcSet={sources.avif} 
        type="image/avif" 
        sizes={sizes}
      />
      
      {/* WebP source for broad browser support */}
      <source 
        srcSet={sources.webp} 
        type="image/webp" 
        sizes={sizes}
      />
      
      {/* Fallback to ModernImageOptimizer */}
      <ModernImageOptimizer
        src={src}
        alt={alt}
        className={className}
        priority={priority}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
      />
    </picture>
  );
};

export default OptimizedImageRenderer;