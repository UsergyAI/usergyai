
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import UserSignup from "./pages/UserSignup";
import SignupAccount from "./pages/SignupAccount";
import SignupVerifySuccess from "./pages/SignupVerifySuccess";
import SignupProfile from "./pages/SignupProfile";
import SignupWelcome from "./pages/SignupWelcome";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const AppContent = () => {
  usePerformanceOptimization();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Services />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/signup/account" element={<SignupAccount />} />
        <Route path="/signup/verify-success" element={<SignupVerifySuccess />} />
        <Route path="/signup/profile" element={<SignupProfile />} />
        <Route path="/signup/welcome" element={<SignupWelcome />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
