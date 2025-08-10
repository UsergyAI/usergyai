
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Star, Scale, Handshake } from 'lucide-react';

const UsergyDifference = () => {
  const CustomEnvelopeIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
      <path d="M9 11l3 3 6-6" />
    </svg>
  );

  const trustPoints = [
    {
      icon: Lock,
      title: 'Data Security & Privacy',
      description: 'Your personal information is always protected; your feedback shared only with the startup you\'re helping (no personal info without permission).'
    },
    {
      icon: Star,
      title: 'High-Quality Projects',
      description: 'We partner only with innovative AI founders, ensuring exciting and meaningful testing opportunities.'
    },
    {
      icon: Scale,
      title: 'Fair & Transparent Rewards',
      description: 'Our point system is clear, and rewards are always tangible and valuable.'
    },
    {
      icon: Handshake,
      title: 'Vetted Community & Moderation',
      description: 'Join genuine AI enthusiasts in a supportive, well-moderated space with clear guidelines for respectful interactions.'
    },
    {
      icon: CustomEnvelopeIcon,
      title: 'No Spam, Just Value',
      description: 'You\'ll receive only relevant project invitations directly matching your interests and skills.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/6 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-primary rounded-full blur-2xl animate-float opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary rounded-full blur-xl animate-pulse opacity-20" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6 leading-tight px-2">
            More Than Points: A Community Built on Trust & Quality
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            We believe in authentic insights and a supportive environment. Usergy is built on principles that ensure 
            every experience is valuable for both you and the founders you help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 bg-card/90 backdrop-blur-sm h-full"
              >
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="mb-4 flex justify-center flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg text-primary-foreground">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex-shrink-0">
                    {point.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Elegant section divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
};

export default UsergyDifference;
