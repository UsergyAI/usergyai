
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingTable from '@/components/PricingTable';
import FAQAccordion from '@/components/FAQAccordion';

const Services = () => {
  const [selectedUsers, setSelectedUsers] = useState(5);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Same animated background as homepage hero
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#4ECDC4', '#45B7D1', '#FF6B6B', '#FED766'];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const userOptions = [5, 10, 20, 50, 100];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-usergy-light via-white to-usergy-light pt-28 md:pt-32">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-usergy-dark mb-6 leading-tight">
              Invest in Momentum: 
              <span className="block gradient-text mt-2">Your AI's Growth Starts Here</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our integrated traction services designed to provide clear insights, activate vibrant communities, and generate undeniable buzz for your AI innovation.
            </h2>

            <Button 
              size="lg"
              className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-usergy-turquoise/30 transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="mr-3 h-6 w-6" />
              Book Your Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Matrix Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-usergy-dark mb-4">
              Find Your Perfect Traction Plan
            </h2>
            <h3 className="text-lg font-semibold text-gray-600 mb-8">
              Select your desired participant count below to see how Usergy delivers comprehensive growth, tailored to your needs.
            </h3>
            
            {/* Participant Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-full p-2 inline-flex">
                {userOptions.map(count => (
                  <button
                    key={count}
                    onClick={() => setSelectedUsers(count)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      selectedUsers === count
                        ? 'bg-usergy-turquoise text-white shadow-lg'
                        : 'text-gray-600 hover:text-usergy-turquoise'
                    }`}
                  >
                    {count} Users
                  </button>
                ))}
              </div>
            </div>
          </div>

          <PricingTable selectedUsers={selectedUsers} />
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-usergy-dark text-center mb-16">
            What's Included in Each Pillar of Service
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feedback Only */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-usergy-coral mb-4">Feedback Only (Basic Insight)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-usergy-coral mr-2">•</span>
                  Complete participant recruitment and screening
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-coral mr-2">•</span>
                  All participant incentives included
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-coral mr-2">•</span>
                  Comprehensive feedback analysis report
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-coral mr-2">•</span>
                  Email support throughout campaign
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-coral mr-2">•</span>
                  Raw data and insights delivery
                </li>
              </ul>
            </div>

            {/* Feedback + Community */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-usergy-gold">
              <div className="bg-usergy-gold text-usergy-dark px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-usergy-turquoise mb-4">Feedback + Community (Core Activation)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-usergy-turquoise mr-2">•</span>
                  Everything in Feedback Only
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-turquoise mr-2">•</span>
                  Dedicated community platform setup
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-turquoise mr-2">•</span>
                  Community moderation and nurturing
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-turquoise mr-2">•</span>
                  Engagement tracking and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-turquoise mr-2">•</span>
                  Member onboarding and retention strategies
                </li>
              </ul>
            </div>

            {/* Full Traction */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-usergy-skyblue mb-4">Full Traction (Amplify & Buzz)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-usergy-skyblue mr-2">•</span>
                  Everything in Community package
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-skyblue mr-2">•</span>
                  Social media task management
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-skyblue mr-2">•</span>
                  User-generated content campaigns
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-skyblue mr-2">•</span>
                  Comprehensive UGC analysis report
                </li>
                <li className="flex items-start">
                  <span className="text-usergy-skyblue mr-2">•</span>
                  Social amplification strategy and execution
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-usergy-dark mb-8">
            Enhance Your Traction: Add-On Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-usergy-turquoise mb-2">Extra Participant</h4>
              <p className="text-2xl font-black text-usergy-dark">$35 each</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-usergy-coral mb-2">Advanced Analytics</h4>
              <p className="text-2xl font-black text-usergy-dark">+$499 <span className="text-sm text-gray-600">(one-time)</span></p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-usergy-skyblue mb-2">Retainer Bundle</h4>
              <p className="text-2xl font-black text-usergy-dark">10% off <span className="text-sm text-gray-600">3+ projects</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Usergy Section */}
      <section className="py-20 bg-gradient-to-br from-usergy-turquoise/10 to-usergy-skyblue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-usergy-dark text-center mb-8">
            Why Usergy is Your Smartest Investment for AI Growth
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p>
              Founders often spend thousands on fragmented tools or agencies for just one aspect of traction. UserTesting for basic feedback can cost up to <span className="font-bold text-usergy-coral">$40,000/year</span>. Building communities can incur <span className="font-bold text-usergy-coral">$10,000-$50,000</span> in development or agency fees up to <span className="font-bold text-usergy-coral">$1,999+/month</span>. And social media amplification agencies charge upwards of <span className="font-bold text-usergy-coral">$8,500/month</span>.
            </p>
            <p className="mt-6 font-semibold text-usergy-dark">
              Usergy offers an integrated, expert-led service that combines all three crucial pillars at a fraction of the cost, delivering unparalleled value and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Psychology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-usergy-dark text-center mb-12">
            Our Pricing is Designed for Your Growth
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-usergy-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-usergy-dark mb-2">Charm Pricing</h4>
              <p className="text-sm text-gray-600">Our pricing uses charm pricing to make plans feel more approachable and accessible for early-stage budgets.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-usergy-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h4 className="font-bold text-usergy-dark mb-2">Tier Anchoring</h4>
              <p className="text-sm text-gray-600">The 'Full Traction' column anchors perceived value, making our 'Feedback + Community' plan an attractive sweet spot.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-usergy-skyblue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-bold text-usergy-dark mb-2">Volume Discounts</h4>
              <p className="text-sm text-gray-600">Built-in volume discounts: per-participant costs decrease as you invest in more users, ensuring scalability.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-usergy-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-bold text-usergy-dark mb-2">Transparency</h4>
              <p className="text-sm text-gray-600">Complete transparency with 'All Incentives Included'—no hidden fees or unexpected costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-usergy-dark text-center mb-12">
            Common Questions About Usergy Services
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Unlock Your AI's Full Potential?
          </h2>
          <p className="text-lg font-semibold text-white/90 mb-8 max-w-2xl mx-auto">
            Don't leave your innovation to chance. Partner with Usergy's expert team to gain the traction, insights, and community your AI product deserves.
          </p>
          <Button 
            size="lg"
            className="bg-white text-usergy-turquoise hover:bg-usergy-light font-bold text-lg py-6 px-12 rounded-full shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="mr-3 h-6 w-6" />
            Book Your Strategy Call Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
