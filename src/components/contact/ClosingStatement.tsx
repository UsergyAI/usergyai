
import React from 'react';

const ClosingStatement = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-usergy-light to-white relative overflow-hidden">
      {/* Elegant animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-usergy-turquoise rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-usergy-gold rounded-full blur-2xl animate-float opacity-40"></div>
        <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-usergy-coral rounded-full blur-xl animate-pulse opacity-20" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-usergy-dark mb-8">
            Let's Build Something Amazing Together!
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            We can't wait to learn about your story and see how we can help fuel your next stage of growth. 
            Many innovative startups have trusted Usergy.ai to turn their user data into results – 
            we'd be honored to partner in your success.
          </p>

          {/* Visual testimonial/social proof elements */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-usergy-turquoise to-usergy-skyblue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-2">Rapid Results</h3>
              <p className="text-gray-600">See meaningful traction within weeks, not months</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-usergy-skyblue to-usergy-coral rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-2">Proven Process</h3>
              <p className="text-gray-600">Battle-tested methods that deliver consistent growth</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-usergy-coral to-usergy-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-usergy-dark mb-2">Partnership Focus</h3>
              <p className="text-gray-600">We're invested in your long-term success story</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-usergy-turquoise/30 to-transparent"></div>
    </section>
  );
};

export default ClosingStatement;
