
import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc = '/lovable-uploads/placeholder.png',
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes,
  srcSet
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <OptimizedImage
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      priority={priority}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;
