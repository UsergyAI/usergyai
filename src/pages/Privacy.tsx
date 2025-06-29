
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
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
              Privacy Policy - usergy.ai
            </h1>
            <h2 className="text-xl font-semibold text-gray-600 mb-8">
              Our Commitment to Your Privacy
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                At usergy.ai, we deeply value your trust and believe protecting your personal information is essential to our relationship. Privacy is a primary concern for modern consumers — people want to know what information is collected about them and how it's used. We've designed this policy to be clear and honest, because studies show that an honest, accurate privacy policy builds trust between a company and its users. In fact, 60% of people say they would spend more money with a brand they trust to handle their information responsibly. We take that responsibility seriously and are committed to being transparent, fair, and respectful in everything we do. Protecting your privacy is not just a legal requirement for us; it's about respecting your dignity and autonomy. In line with privacy principles (and India's new Digital Personal Data Protection Act), we only collect data that is necessary, use it only for the purposes we explain, and keep it secure by design.
              </p>
            </section>

            {/* Table of Contents */}
            <div className="bg-usergy-light/50 rounded-lg p-6 mb-12">
              <h3 className="text-xl font-bold text-usergy-dark mb-4">Table of Contents</h3>
              <div className="grid md:grid-cols-2 gap-2">
                <button onClick={() => scrollToSection('information-we-collect')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">1. Information We Collect</button>
                <button onClick={() => scrollToSection('how-we-use')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">2. How We Use Your Information</button>
                <button onClick={() => scrollToSection('third-party-services')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">3. Third-Party Services and Disclosure</button>
                <button onClick={() => scrollToSection('cookies-tracking')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">4. Cookies and Tracking Technologies</button>
                <button onClick={() => scrollToSection('data-security')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">5. Data Security and Integrity</button>
                <button onClick={() => scrollToSection('data-retention')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">6. Data Retention and Deletion</button>
                <button onClick={() => scrollToSection('privacy-rights')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">7. Your Privacy Rights</button>
                <button onClick={() => scrollToSection('childrens-privacy')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">8. Children's Privacy</button>
                <button onClick={() => scrollToSection('policy-changes')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">9. Changes to This Privacy Policy</button>
                <button onClick={() => scrollToSection('contact-us')} className="text-left text-usergy-turquoise hover:text-usergy-skyblue transition-colors">10. Contact Us</button>
              </div>
            </div>

            {/* Section 1 */}
            <section id="information-we-collect" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">1. Information We Collect</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Personal Information You Provide:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account registration information (name, email address, profile details)</li>
                  <li>Contact information when you reach out to us</li>
                  <li>Feedback and responses you provide during product testing</li>
                  <li>Communication preferences and settings</li>
                  <li>Payment and reward information for compensation purposes</li>
                </ul>
                <p><strong>Information We Collect Automatically:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Device information (browser type, operating system, device identifiers)</li>
                  <li>Usage data (pages visited, time spent, interactions with our platform)</li>
                  <li>Log data (IP address, access times, referring URLs)</li>
                  <li>Performance metrics to improve our service quality</li>
                </ul>
                <p><strong>Information from Third Parties:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Information from AI product creators when you participate in their tests</li>
                  <li>Data from authentication services if you choose to use social login</li>
                  <li>Analytics and performance data from our service providers</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="how-we-use" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">2. How We Use Your Information</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>We use your information for the following purposes:</p>
                <p><strong>Platform Operation:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Creating and managing your account</li>
                  <li>Matching you with relevant AI product testing opportunities</li>
                  <li>Processing rewards and payments</li>
                  <li>Providing customer support and responding to inquiries</li>
                </ul>
                <p><strong>Service Improvement:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Analyzing usage patterns to enhance our platform</li>
                  <li>Developing new features and services</li>
                  <li>Ensuring platform security and preventing fraud</li>
                  <li>Conducting research to improve user experience</li>
                </ul>
                <p><strong>Communication:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sending you important account and service updates</li>
                  <li>Notifying you about new testing opportunities</li>
                  <li>Sharing relevant product updates and announcements</li>
                  <li>Responding to your questions and feedback</li>
                </ul>
                <p><strong>Legal and Compliance:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Complying with applicable laws and regulations</li>
                  <li>Protecting our rights and interests</li>
                  <li>Resolving disputes and enforcing our terms</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="third-party-services" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">3. Third-Party Services and Disclosure</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Service Providers:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cloud hosting and infrastructure providers</li>
                  <li>Payment processing services for reward distribution</li>
                  <li>Email and communication service providers</li>
                  <li>Analytics and performance monitoring tools</li>
                  <li>Customer support and help desk platforms</li>
                </ul>
                <p><strong>AI Product Creators:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We share anonymized, aggregated feedback data with product creators</li>
                  <li>Individual responses may be shared with explicit consent</li>
                  <li>Personal identifying information is never shared without permission</li>
                </ul>
                <p><strong>Legal Requirements:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We may disclose information when required by law</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>To investigate potential violations of our terms</li>
                  <li>In connection with legal proceedings or regulatory requests</li>
                </ul>
                <p><strong>Business Transfers:</strong></p>
                <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, with appropriate notice provided.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="cookies-tracking" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">4. Cookies and Tracking Technologies</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Types of Cookies We Use:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant content and measure effectiveness</li>
                </ul>
                <p><strong>Your Cookie Choices:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You can control cookies through your browser settings</li>
                  <li>Disabling cookies may affect platform functionality</li>
                  <li>We provide cookie preference controls in your account settings</li>
                  <li>You can opt out of analytics tracking at any time</li>
                </ul>
                <p><strong>Third-Party Tracking:</strong></p>
                <p>We use reputable third-party services like Google Analytics to understand user behavior. These services have their own privacy policies, and we encourage you to review them.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="data-security" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">5. Data Security and Integrity</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Security Measures:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Industry-standard encryption for data transmission and storage</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Incident response procedures for potential security breaches</li>
                </ul>
                <p><strong>Data Integrity:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Regular backups to prevent data loss</li>
                  <li>Data validation and verification processes</li>
                  <li>Monitoring systems to detect and prevent unauthorized access</li>
                </ul>
                <p><strong>Breach Notification:</strong></p>
                <p>In the unlikely event of a data breach, we will notify affected users and relevant authorities as required by law, typically within 72 hours of discovery.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="data-retention" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">6. Data Retention and Deletion</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Retention Periods:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Account information: Retained while your account is active</li>
                  <li>Testing feedback: Retained for up to 7 years for research purposes</li>
                  <li>Communication records: Retained for 3 years for support purposes</li>
                  <li>Analytics data: Anonymized and retained for platform improvement</li>
                </ul>
                <p><strong>Data Deletion:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You can request deletion of your personal data at any time</li>
                  <li>Account deletion removes most personal information within 30 days</li>
                  <li>Some data may be retained for legal or regulatory requirements</li>
                  <li>Anonymized, aggregated data may be retained for research purposes</li>
                </ul>
                <p><strong>Automated Deletion:</strong></p>
                <p>Inactive accounts may be automatically deleted after 2 years of inactivity, with advance notice provided.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="privacy-rights" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">7. Your Privacy Rights</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>You have the following rights regarding your personal information:</p>
                <p><strong>Access and Portability:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request a copy of all personal data we hold about you</li>
                  <li>Download your data in a machine-readable format</li>
                  <li>Understand how your data is being processed</li>
                </ul>
                <p><strong>Correction and Updates:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Update or correct inaccurate personal information</li>
                  <li>Add missing information to your profile</li>
                  <li>Modify your communication preferences</li>
                </ul>
                <p><strong>Deletion and Restriction:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request deletion of your personal data</li>
                  <li>Restrict processing of your information</li>
                  <li>Object to certain types of data processing</li>
                </ul>
                <p><strong>Consent Management:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Withdraw consent for data processing at any time</li>
                  <li>Opt out of marketing communications</li>
                  <li>Control cookie and tracking preferences</li>
                </ul>
                <p><strong>How to Exercise Your Rights:</strong></p>
                <p>Contact us at <a href="mailto:privacy@usergy.ai" className="text-usergy-turquoise hover:text-usergy-skyblue">privacy@usergy.ai</a> to exercise any of these rights. We will respond within 30 days and may request verification of your identity.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="childrens-privacy" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">8. Children's Privacy</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Age Requirements:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Our platform is intended for users aged 18 and older</li>
                  <li>Users aged 13-17 may use our service with parental consent</li>
                  <li>We do not knowingly collect information from children under 13</li>
                </ul>
                <p><strong>Parental Controls:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Parents can review and request deletion of their child's information</li>
                  <li>Parental consent is required for users under 18</li>
                  <li>Parents can contact us to exercise rights on behalf of their children</li>
                </ul>
                <p><strong>Discovery of Child Information:</strong></p>
                <p>If we discover that we have collected information from a child under 13 without proper consent, we will delete that information immediately.</p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="policy-changes" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">9. Changes to This Privacy Policy</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p><strong>Notification of Changes:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We will notify you of significant changes via email or platform notification</li>
                  <li>Changes will be posted on this page with an updated effective date</li>
                  <li>Material changes will take effect 30 days after notification</li>
                </ul>
                <p><strong>Your Continued Use:</strong></p>
                <p>Continued use of our platform after changes take effect constitutes acceptance of the updated policy. If you disagree with changes, you may close your account before they take effect.</p>
                <p><strong>Version History:</strong></p>
                <p>We maintain a record of policy changes and can provide previous versions upon request.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section id="contact-us" className="mb-12">
              <h2 className="text-3xl font-bold text-usergy-dark mb-6">10. Contact Us</h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>If you have questions about this Privacy Policy or how we handle your personal information:</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@usergy.ai" className="text-usergy-turquoise hover:text-usergy-skyblue">privacy@usergy.ai</a></p>
                <p><strong>General Support:</strong> <a href="mailto:swaroop@usergy.ai" className="text-usergy-turquoise hover:text-usergy-skyblue">swaroop@usergy.ai</a></p>
                <p><strong>Mailing Address:</strong><br />
                Usergy Privacy Team<br />
                [Company Address]<br />
                [City, State, ZIP Code]<br />
                India</p>
                <p><strong>Response Time:</strong></p>
                <p>We typically respond to privacy inquiries within 2-3 business days and will resolve most requests within 30 days as required by applicable privacy laws.</p>
              </div>
            </section>

            {/* Closing Statement */}
            <section className="bg-usergy-light/30 rounded-lg p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                We truly value your trust and input. Don't hesitate to reach out if something is unclear — we are committed to keeping you informed and secure.
              </p>
            </section>

            {/* Contact CTA */}
            <div className="text-center bg-gradient-to-r from-usergy-turquoise/10 to-usergy-skyblue/10 rounded-lg p-6 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Have questions about our privacy practices?
              </p>
              <a 
                href="mailto:privacy@usergy.ai" 
                className="inline-block bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Contact our Privacy Team
              </a>
            </div>

            {/* Effective Date */}
            <div className="text-center text-gray-600 text-sm border-t border-gray-200 pt-6">
              <p><strong>Effective Date:</strong> June 29, 2025</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
