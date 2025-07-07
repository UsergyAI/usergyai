import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { COUNTRIES } from '@/utils/countries';
import { TIMEZONES } from '@/utils/timezones';
import { EnhancedCheckbox } from '@/components/ui/enhanced-checkbox';
import { SearchableSelect } from '@/components/ui/searchable-select';
import { EnhancedRadioGroup } from '@/components/ui/enhanced-radio-group';

const SignupProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Basic form data for now
  const [formData, setFormData] = useState({
    locationCountry: '',
    locationCity: '',
    timeZone: '',
    jobTitle: '',
    aiInterests: [] as string[],
    testimonialConsent: 'yes' as 'yes' | 'no' | '',
  });

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/signup/account');
        return;
      }
      setUser(session.user);
    };
    
    checkAuth();
  }, [navigate]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          location_country: formData.locationCountry,
          location_city: formData.locationCity,
          time_zone: formData.timeZone,
          job_title: formData.jobTitle,
          testimonial_consent: formData.testimonialConsent === 'yes',
          profile_completed: true,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) {
        console.error('Profile update error:', error);
        toast({
          title: "Error",
          description: "Failed to save profile. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success!",
        description: "Your profile has been completed successfully!",
      });

      navigate('/signup/welcome');
    } catch (error) {
      console.error('Profile completion error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-usergy-light flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-usergy-turquoise" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-usergy-light">
      <Helmet>
        <title>Complete Your AI Explorer Profile - Usergy</title>
        <meta name="description" content="Complete your AI Explorer profile to unlock exclusive opportunities and connect with the AI community." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
        <AnimatedBackground particleCount={30} enableFloatingBubbles={true} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Progress Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-usergy-dark mb-4 animate-fade-in">
                Complete Your Explorer Profile
              </h1>
              <p className="text-xl text-gray-600 mb-6 animate-slide-up">
                Help us understand your background so we can match you with the perfect AI tools to explore.
              </p>
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="ml-2 text-sm font-medium text-green-600">Account Created</span>
                </div>
                <div className="w-8 h-px bg-green-500"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ✓
                  </div>
                  <span className="ml-2 text-sm font-medium text-green-600">Email Verified</span>
                </div>
                <div className="w-8 h-px bg-usergy-turquoise"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-usergy-turquoise text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="ml-2 text-sm font-medium text-usergy-turquoise">Complete Profile</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-usergy-dark">Basic Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <SearchableSelect
                          options={COUNTRIES}
                          value={formData.locationCountry}
                          onChange={(value) => handleInputChange('locationCountry', value)}
                          placeholder="Select your country"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="Your city"
                          value={formData.locationCity}
                          onChange={(e) => handleInputChange('locationCity', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Time Zone</Label>
                      <SearchableSelect
                        options={TIMEZONES}
                        value={formData.timeZone}
                        onChange={(value) => handleInputChange('timeZone', value)}
                        placeholder="Select your time zone"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        placeholder="e.g., Software Developer, Product Manager, Student"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Testimonial Consent */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-usergy-dark">Community Participation</h3>
                    <div className="space-y-2">
                      <Label>May we use your feedback as testimonials? (Optional)</Label>
                      <EnhancedRadioGroup
                        options={[
                          { value: 'yes', label: 'Yes, you may use my feedback as testimonials' },
                          { value: 'no', label: 'No, please keep my feedback private' }
                        ]}
                        value={formData.testimonialConsent}
                        onChange={(value) => handleInputChange('testimonialConsent', value)}
                        name="testimonialConsent"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      size="lg"
                      className="w-full bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Saving Profile...
                        </>
                      ) : (
                        <>
                          Complete Profile
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignupProfile;