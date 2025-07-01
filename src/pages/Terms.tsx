
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-usergy-light via-white to-usergy-light">
      <Header />
      
      {/* Enhanced Animated background canvas */}
      <AnimatedBackground particleCount={40} />
      
      <main className="relative pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-usergy-dark mb-6 leading-tight animate-fade-in">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 animate-slide-up">
                Last updated: January 2025
              </p>
            </div>

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
