
import React from 'react';

const ServiceInclusionsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-usergy-dark text-center mb-16">
          What's Included in Each Pillar of Service
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feedback Only */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-usergy-coral mb-4">Feedback Only (Basic Insight)</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-usergy-coral mr-2">•</span>
                Recruit and incentivize high-quality users; all incentives included
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-2">•</span>
                Complete participant screening and management
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-2">•</span>
                Comprehensive feedback analysis report with actionable insights
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-2">•</span>
                Dedicated email support throughout your campaign
              </li>
              <li className="flex items-start">
                <span className="text-usergy-coral mr-2">•</span>
                Raw data and insights delivered in easy-to-understand format
              </li>
            </ul>
          </div>

          {/* Feedback + Community */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-usergy-gold relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-usergy-gold text-usergy-dark px-4 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-usergy-turquoise mb-4 mt-2">Feedback + Community (Core Activation)</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-2">•</span>
                Everything in Feedback Only package
              </li>
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-2">•</span>
                Dedicated community platform setup and configuration
              </li>
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-2">•</span>
                Expert community moderation and nurturing strategies
              </li>
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-2">•</span>
                Real-time engagement tracking and optimization
              </li>
              <li className="flex items-start">
                <span className="text-usergy-turquoise mr-2">•</span>
                Proven member onboarding and retention strategies
              </li>
            </ul>
          </div>

          {/* Full Traction */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-usergy-skyblue mb-4">Full Traction (Amplify & Buzz)</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-2">•</span>
                Everything in Community package included
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-2">•</span>
                Strategic social media task management and execution
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-2">•</span>
                Expert-designed user-generated content campaigns
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-2">•</span>
                Comprehensive UGC analysis report with market insights
              </li>
              <li className="flex items-start">
                <span className="text-usergy-skyblue mr-2">•</span>
                Full social amplification strategy and professional execution
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInclusionsSection;
