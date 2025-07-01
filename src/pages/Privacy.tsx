
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Privacy = () => {
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
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 animate-slide-up">
                Last updated: January 2025
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 animate-scale-in">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-usergy-dark mb-4">1. Information We Collect</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, participate in our community, or contact us for support.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">2. How We Use Your Information</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">3. Information Sharing</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">4. Data Security</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">5. Your Rights</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also opt-out of certain communications from us.
                </p>

                <h2 className="text-2xl font-bold text-usergy-dark mb-4">6. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us through our contact page.
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

export default Privacy;
