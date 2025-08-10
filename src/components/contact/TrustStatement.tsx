
import React from 'react';

const TrustStatement = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-usergy-turquoise rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-usergy-skyblue rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">
            Expert Guidance, Personalized Attention
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            When you reach out, you'll hear directly from our founder, <span className="font-semibold text-primary">Swaroop</span> – no bots, no endless tickets. 
            We know your time is valuable, so we promise a prompt, thoughtful response (typically within one business day). 
            And don't worry: your message is confidential and your contact details are safe with us. 
            We're here to answer your questions, explore ideas, and earn your trust from day one.
          </p>

          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group">
            <div className="w-16 h-16 bg-primary-gradient text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"> 
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Direct Access</h3>
              <p className="text-muted-foreground">Speak directly with our founder</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-gradient text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted-foreground">Within one business day</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-gradient text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">Your data is safe with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStatement;
