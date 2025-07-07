
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-usergy-light via-white to-usergy-light">
      <SEOHead
        title="Terms of Service"
        description="Usergy's terms of service. Read our terms and conditions for using AI traction services, community participation, and service agreements."
        canonical="https://usergy.ai/terms"
        noindex={false}
      />
      <StructuredData
        breadcrumbs={[
          { name: "Home", url: "https://usergy.ai" },
          { name: "Terms of Service", url: "https://usergy.ai/terms" }
        ]}
        pageType="WebPage"
      />
      <Header />
      
      {/* Hero Section with Enhanced Floating Bubbles */}
      <section className="relative pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-12 overflow-hidden">
        <AnimatedBackground particleCount={40} />
        
        {/* Enhanced Floating Bubbles - Hero Section Only */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
          <div className="floating-element absolute top-1/4 left-1/4 w-6 h-6 bg-usergy-turquoise/30 rounded-full animate-float-enhanced opacity-60"></div>
          <div className="floating-element absolute top-1/3 right-1/4 w-8 h-8 bg-usergy-coral/25 rounded-full animate-float-enhanced opacity-50" style={{ animationDelay: '-2s' }}></div>
          <div className="floating-element absolute bottom-1/4 left-1/3 w-5 h-5 bg-usergy-skyblue/35 rounded-full animate-float-enhanced opacity-70" style={{ animationDelay: '-4s' }}></div>
          <div className="floating-element absolute bottom-1/3 right-1/3 w-4 h-4 bg-usergy-gold/40 rounded-full animate-float-enhanced opacity-80" style={{ animationDelay: '-6s' }}></div>
          <div className="floating-element absolute top-1/2 left-1/6 w-7 h-7 bg-usergy-turquoise/20 rounded-full animate-float-enhanced opacity-45" style={{ animationDelay: '-3s' }}></div>
          <div className="floating-element absolute top-3/4 right-1/6 w-3 h-3 bg-usergy-coral/45 rounded-full animate-float-enhanced opacity-65" style={{ animationDelay: '-5s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-usergy-dark mb-6 leading-tight animate-fade-in">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 animate-slide-up">
                Last updated: <time dateTime="2025-01">January 2025</time>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - No floating bubbles here */}
      <main className="relative pb-16 sm:pb-20" style={{ zIndex: 10 }} role="main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 animate-scale-in">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-usergy-dark mb-4">1. Acceptance of Terms</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  By accessing and using Usergy's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">2. Service Description</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Usergy provides AI traction services, community building, and feedback collection services for AI founders and enthusiasts.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">3. User Responsibilities</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">4. Privacy Policy</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">5. Limitation of Liability</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Usergy shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">6. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms of Service, please contact us through our contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
