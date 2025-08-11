
import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes,
  srcSet
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
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
