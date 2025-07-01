
import { lazy } from 'react';

// Lazy load non-critical components to reduce initial bundle size
export const LazyProblemSection = lazy(() => import('./ProblemSection'));
export const LazySolutionSection = lazy(() => import('./SolutionSection'));
export const LazyDualValueSection = lazy(() => import('./DualValueSection'));
export const LazyHowItWorksSection = lazy(() => import('./HowItWorksSection'));
export const LazyTrustSection = lazy(() => import('./TrustSection'));
export const LazyFinalCTASection = lazy(() => import('./FinalCTASection'));

// Contact page lazy components
export const LazyTrustStatement = lazy(() => import('./contact/TrustStatement'));
export const LazyContactFormSection = lazy(() => import('./contact/ContactFormSection'));
export const LazyClosingStatement = lazy(() => import('./contact/ClosingStatement'));
