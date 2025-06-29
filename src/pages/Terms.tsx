
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-16 bg-gradient-to-br from-usergy-light via-white to-usergy-light">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-usergy-turquoise rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-usergy-skyblue rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-usergy-dark mb-6">
              Usergy Terms and Conditions
            </h1>
            <h2 className="text-xl font-semibold text-gray-600 mb-8">
              Effective Date: June 29, 2025
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Table of Contents */}
            <div className="bg-usergy-light/50 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-usergy-dark mb-4">Table of Contents</h3>
              <div className="grid md:grid-cols-2 gap-2">
                <button onClick={() => scrollToSection('introduction')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">Introduction</button>
                <button onClick={() => scrollToSection('about-platform')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">1. About Usergy Platform</button>
                <button onClick={() => scrollToSection('eligibility')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">2. Eligibility & Account Registration</button>
                <button onClick={() => scrollToSection('privacy')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">3. Personal Data & Privacy</button>
                <button onClick={() => scrollToSection('participation')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">4. Participation in Tests & Earning Rewards</button>
                <button onClick={() => scrollToSection('confidentiality')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">5. Confidentiality and Non-Disclosure</button>
                <button onClick={() => scrollToSection('conduct')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">6. Community Conduct and Guidelines</button>
                <button onClick={() => scrollToSection('termination')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">7. Termination of Use</button>
                <button onClick={() => scrollToSection('intellectual-property')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">8. Intellectual Property and Use of Content</button>
                <button onClick={() => scrollToSection('disclaimers')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">9. Disclaimers and Limitation of Liability</button>
                <button onClick={() => scrollToSection('changes')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">10. Changes to these Terms</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">11. Contact Us</button>
              </div>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">Introduction</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Usergy! We connect innovative AI product creators with real users (like you) to gather valuable feedback and insights. Your participation is incredibly valuable — it helps AI founders improve their products and understand their users better. In return, you get to explore cutting-edge tools, share your thoughts, and earn rewards. We have written these Terms in clear, friendly language because research shows people trust what they can easily understand. By using Usergy, you confirm that you agree to these Terms and Conditions and will follow them. If you ever have questions about these terms, please reach out to us - we're here to help build your trust.
              </p>
            </section>

            {/* Section 1 */}
            <section id="about-platform" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">1. About Usergy Platform</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>Usergy is a platform that bridges the gap between AI product creators and potential users. We facilitate meaningful connections that benefit both parties:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI founders get access to real user feedback and insights to improve their products</li>
                  <li>Users get early access to innovative AI tools and earn rewards for their participation</li>
                  <li>The broader tech community benefits from better products shaped by real user input</li>
                </ul>
                <p>Our platform includes features such as product testing opportunities, feedback collection systems, reward mechanisms, and community engagement tools.</p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="eligibility" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">2. Eligibility & Account Registration</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>To use Usergy, you must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be at least 18 years old or have parental consent if you're between 13-17 years old</li>
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Not create multiple accounts or share your account with others</li>
                  <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                </ul>
                <p>You are responsible for all activities that occur under your account. If you suspect unauthorized access, please contact us immediately.</p>
              </div>
            </section>

            {/* Continue with remaining sections... */}
            <section id="privacy" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">3. Personal Data & Privacy</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>We take your privacy seriously and are committed to protecting your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We collect only the information necessary to provide our services</li>
                  <li>Your data is used to match you with relevant testing opportunities</li>
                  <li>We do not sell your personal information to third parties</li>
                  <li>You have control over your data and can request its deletion at any time</li>
                  <li>All data handling complies with applicable privacy laws including GDPR and CCPA</li>
                </ul>
                <p>For detailed information about our data practices, please review our Privacy Policy.</p>
              </div>
            </section>

            <section id="participation" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">4. Participation in Tests & Earning Rewards</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>When participating in product tests through Usergy:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide honest, constructive feedback based on your genuine experience</li>
                  <li>Complete testing activities within specified timeframes</li>
                  <li>Respect the intellectual property of the products you're testing</li>
                  <li>Follow all instructions and guidelines provided for each test</li>
                </ul>
                <p><strong>Rewards:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Rewards are earned upon successful completion of testing activities</li>
                  <li>Reward amounts and types vary by test complexity and duration</li>
                  <li>Rewards may include monetary compensation, gift cards, or product credits</li>
                  <li>Payment processing may take 5-10 business days after completion</li>
                  <li>Tax obligations for rewards are your responsibility</li>
                </ul>
              </div>
            </section>

            <section id="confidentiality" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">5. Confidentiality and Non-Disclosure</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>Many of the products you'll test are in development and contain confidential information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Do not share details about products you're testing outside of the Usergy platform</li>
                  <li>Do not take screenshots, recordings, or create derivative works unless explicitly permitted</li>
                  <li>Respect any additional NDAs that may be required for specific tests</li>
                  <li>Report any suspected breaches of confidentiality to us immediately</li>
                </ul>
                <p>This confidentiality obligation continues even after your participation ends or your account is terminated.</p>
              </div>
            </section>

            <section id="conduct" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">6. Community Conduct and Guidelines</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>To maintain a positive community environment:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be respectful and professional in all interactions</li>
                  <li>Provide constructive feedback rather than destructive criticism</li>
                  <li>Do not engage in harassment, discrimination, or inappropriate behavior</li>
                  <li>Respect intellectual property and do not share unauthorized content</li>
                  <li>Do not attempt to manipulate or game the reward system</li>
                  <li>Report any violations of these guidelines to our moderation team</li>
                </ul>
                <p>Violations may result in warnings, temporary suspension, or permanent account termination.</p>
              </div>
            </section>

            <section id="termination" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">7. Termination of Use</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>Either party may terminate the relationship:</p>
                <p><strong>You may:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Delete your account at any time through your account settings</li>
                  <li>Stop participating in tests without penalty</li>
                  <li>Request deletion of your personal data</li>
                </ul>
                <p><strong>We may terminate your access if:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You violate these Terms of Service</li>
                  <li>You engage in fraudulent or harmful behavior</li>
                  <li>Your account remains inactive for an extended period</li>
                  <li>We discontinue the service (with appropriate notice)</li>
                </ul>
                <p>Upon termination, your access to the platform will end, but confidentiality obligations remain in effect.</p>
              </div>
            </section>

            <section id="intellectual-property" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">8. Intellectual Property and Use of Content</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Usergy Platform:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All platform content, features, and functionality are owned by Usergy</li>
                  <li>You receive a limited license to use the platform for its intended purpose</li>
                  <li>You may not copy, modify, or distribute our platform content</li>
                </ul>
                <p><strong>Your Feedback:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You retain ownership of your original feedback and insights</li>
                  <li>You grant us license to use your feedback for platform improvement</li>
                  <li>Aggregated, anonymized feedback may be shared with product creators</li>
                </ul>
                <p><strong>Third-Party Products:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Product creators retain all rights to their products</li>
                  <li>Your access is limited to testing purposes only</li>
                  <li>You may not reverse engineer or create competing products</li>
                </ul>
              </div>
            </section>

            <section id="disclaimers" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">9. Disclaimers and Limitation of Liability</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Service Availability:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We strive for high uptime but cannot guarantee uninterrupted service</li>
                  <li>Testing opportunities are subject to availability and matching</li>
                  <li>We are not responsible for third-party product functionality or security</li>
                </ul>
                <p><strong>Limitation of Liability:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Our liability is limited to the amount of rewards you've earned</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>You use third-party products at your own risk</li>
                </ul>
                <p>These limitations are enforced to the fullest extent permitted by law.</p>
              </div>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">10. Changes to these Terms</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>We may update these Terms from time to time:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We will notify you of significant changes via email or platform notification</li>
                  <li>Changes take effect 30 days after notification unless you object</li>
                  <li>Continued use of the platform constitutes acceptance of updated Terms</li>
                  <li>You may terminate your account if you disagree with changes</li>
                </ul>
                <p>We encourage you to review these Terms periodically to stay informed of any updates.</p>
              </div>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">11. Contact Us</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>If you have questions about these Terms or need support:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email us at: <a href="mailto:swaroop@usergy.ai" className="text-usergy-turquoise hover:text-usergy-skyblue">swaroop@usergy.ai</a></li>
                  <li>Visit our support center on the platform</li>
                  <li>Join our community Discord for general discussions</li>
                </ul>
                <p>We typically respond to inquiries within 24-48 hours during business days.</p>
              </div>
            </section>

            {/* Closing Statement */}
            <section className="bg-usergy-light/30 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-usergy-dark mb-4">Thank You for Being Part of Usergy!</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                By working together under these Terms, we aim to create a win-win-win scenario: value for you (through rewards and experience), value for creators (through honest insights), and value for the broader tech community (through better products shaped by real users). We're excited to have you with us on this journey to shape the future of AI products. Let's make something great together!
              </p>
            </section>

            {/* Contact CTA */}
            <div className="text-center bg-gradient-to-r from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-lg p-6">
              <p className="text-lg text-gray-700 mb-4">
                Have questions about these terms?
              </p>
              <a 
                href="mailto:swaroop@usergy.ai" 
                className="inline-block bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Reach out to us at swaroop@usergy.ai
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
