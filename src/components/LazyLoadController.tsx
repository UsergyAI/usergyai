import React, { useEffect, useRef, useState } from 'react';

interface LazyLoadControllerProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  priority?: boolean;
  onIntersect?: () => void;
}

const LazyLoadController: React.FC<LazyLoadControllerProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '50px',
  priority = false,
  onIntersect
}) => {
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [hasIntersected, setHasIntersected] = useState(priority);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsIntersecting(true);
          setHasIntersected(true);
          onIntersect?.();
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, priority, hasIntersected, onIntersect]);

  return (
    <div ref={ref}>
      {(isIntersecting || priority) ? children : <div style={{ minHeight: '200px' }} />}
    </div>
  );
};

export default LazyLoadController;