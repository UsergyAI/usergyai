import { useEffect, useState } from 'react';

interface ImageOptimizationResult {
  webpSrc: string;
  avifSrc: string;
  fallbackSrc: string;
  srcSet: string;
  sizes: string;
}

export const useImageOptimization = (
  originalSrc: string,
  width?: number,
  height?: number
): ImageOptimizationResult => {
  const [optimizedImages, setOptimizedImages] = useState<ImageOptimizationResult>({
    webpSrc: originalSrc,
    avifSrc: originalSrc,
    fallbackSrc: originalSrc,
    srcSet: '',
    sizes: ''
  });

  useEffect(() => {
    // Generate optimized image sources
    const baseUrl = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const extension = originalSrc.match(/\.(jpg|jpeg|png)$/i)?.[1] || 'png';
    
    // Create WebP and AVIF versions (in a real app, these would be generated server-side)
    const webpSrc = `${baseUrl}.webp`;
    const avifSrc = `${baseUrl}.avif`;
    
    // Generate responsive srcSet
    const srcSet = width && height ? 
      `${originalSrc} 1x, ${baseUrl}@2x.${extension} 2x` : 
      originalSrc;
    
    // Generate sizes attribute for responsive images
    const sizes = width ? 
      `(max-width: 640px) ${Math.min(width, 640)}px, (max-width: 1024px) ${Math.min(width, 1024)}px, ${width}px` :
      '100vw';

    setOptimizedImages({
      webpSrc,
      avifSrc,
      fallbackSrc: originalSrc,
      srcSet,
      sizes
    });
  }, [originalSrc, width, height]);

  return optimizedImages;
};

// Hook for checking browser support for modern image formats
export const useImageFormatSupport = () => {
  const [support, setSupport] = useState({
    webp: false,
    avif: false
  });

  useEffect(() => {
    const checkWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    const checkAVIF = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
    };

    setSupport({
      webp: checkWebP(),
      avif: checkAVIF()
    });
  }, []);

  return support;
};