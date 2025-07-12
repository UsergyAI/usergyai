import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptimizerOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  onIntersect?: () => void;
}

export const useIntersectionOptimizer = ({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  onIntersect
}: UseIntersectionOptimizerOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        
        if (isCurrentlyIntersecting && (!triggerOnce || !hasIntersected)) {
          setIsIntersecting(true);
          setHasIntersected(true);
          onIntersect?.();
          
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsIntersecting(isCurrentlyIntersecting);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasIntersected, onIntersect]);

  return { ref, isIntersecting, hasIntersected };
};

export default useIntersectionOptimizer;