import React, { useEffect } from 'react';

const ContactFormSection = () => {
  useEffect(() => {
    // Load Tally.so script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact-form" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-usergy-coral rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-usergy-skyblue rounded-full blur-2xl animate-float opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-usergy-dark mb-4">
              Your Message to Usergy
            </h2>
            <p className="text-gray-600">
              Tell us about your AI product and how we can help you achieve undeniable traction.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-2xl border-2 border-gray-100 p-0 overflow-hidden">
            <iframe 
              data-tally-src="https://tally.so/embed/mK4djk?hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="617" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Contact Page Inquiry Form"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
