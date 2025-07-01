
import React, { Suspense } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  children, 
  fallback = <div className="min-h-[200px] flex items-center justify-center"><div className="w-8 h-8 border-4 border-usergy-turquoise border-t-transparent rounded-full animate-spin"></div></div>
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default PerformanceOptimizer;
