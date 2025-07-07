import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { COUNTRIES } from '@/utils/countries';
import { TIMEZONES } from '@/utils/timezones';
import { EnhancedCheckbox } from '@/components/ui/enhanced-checkbox';
import { SearchableSelect } from '@/components/ui/searchable-select';
import { EnhancedRadioGroup } from '@/components/ui/enhanced-radio-group';
import { Helmet } from 'react-helmet-async';

const SignupProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Enhanced form data with comprehensive fields
  const [formData, setFormData] = useState({
    // Basic Profile & Location (Step 1)
    locationCountry: '',
    locationCity: '',
    timeZone: '',
    devicesOwned: [] as string[],
    operatingSystems: [] as string[],
    aiPassionExpertise: '',

    // AI Core & Skills (Step 2)
    aiInterests: [] as string[],
    aiFamiliarity: '',
    gptModelsUsed: [] as string[],
    recentAiTools: '',
    jobTitle: '',
    programmingLanguages: [] as string[],
    specificSkills: [] as string[],
    hasBuiltProjects: false,
    portfolioLink: '',

    // Impact & Community (Step 3)
    amplificationMethods: [] as string[],
    testimonialConsent: '' as 'yes' | 'no' | '',
    motivations: [] as string[],
    interestsHobbies: '',
    discordUsername: '',
    linkedinProfile: '',
    twitterUsername: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth session error:', error);
          navigate('/signup/account');
          return;
        }

        if (!session) {
          navigate('/signup/account');
          return;
        }

        setUser(session.user);

        // Check if profile already exists and is completed
        const { data: profile } = await supabase
          .from('profiles')
          .select('profile_completed')
          .eq('user_id', session.user.id)
          .single();

        if (profile?.profile_completed) {
          navigate('/signup/welcome');
          return;
        }

      } catch (error) {
        console.error('Auth check error:', error);
        navigate('/signup/account');
      } finally {
        setAuthChecked(true);
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear errors when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.locationCountry) newErrors.locationCountry = 'Country is required';
      if (!formData.timeZone) newErrors.timeZone = 'Time zone is required';
    } else if (step === 2) {
      if (!formData.aiFamiliarity) newErrors.aiFamiliarity = 'AI familiarity level is required';
      if (formData.aiInterests.length === 0) newErrors.aiInterests = 'Select at least one AI interest';
    } else if (step === 3) {
      if (!formData.testimonialConsent) newErrors.testimonialConsent = 'Please make a selection';
      if (formData.motivations.length === 0) newErrors.motivations = 'Select at least one motivation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!user || !validateStep(currentStep)) return;
    
    setIsLoading(true);
    
    try {
      const updateData = {
        location_country: formData.locationCountry,
        location_city: formData.locationCity,
        time_zone: formData.timeZone,
        devices_owned: formData.devicesOwned,
        operating_systems: formData.operatingSystems,
        ai_understanding: formData.aiFamiliarity,
        gpt_models_used: formData.gptModelsUsed,
        recent_ai_tools: formData.recentAiTools,
        job_title: formData.jobTitle,
        programming_languages: formData.programmingLanguages,
        testimonial_consent: formData.testimonialConsent === 'yes',
        motivations: formData.motivations,
        interests_hobbies: formData.interestsHobbies,
        discord_username: formData.discordUsername,
        linkedin_profile: formData.linkedinProfile,
        twitter_username: formData.twitterUsername,
        profile_completed: true,
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('profiles')
        .update(updateData)
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
        description: "Your AI Explorer profile has been completed successfully!",
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

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-usergy-light flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-usergy-turquoise" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  const stepTitles = [
    "Basic Profile & Location",
    "AI Core & Skills", 
    "Impact & Community"
  ];

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
          <SearchableSelect
            options={COUNTRIES}
            value={formData.locationCountry}
            onChange={(value) => handleInputChange('locationCountry', value)}
            placeholder="Select your country"
            error={!!errors.locationCountry}
          />
          {errors.locationCountry && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.locationCountry}
            </p>
          )}
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
        <Label htmlFor="timezone">Time Zone <span className="text-red-500">*</span></Label>
        <SearchableSelect
          options={TIMEZONES}
          value={formData.timeZone}
          onChange={(value) => handleInputChange('timeZone', value)}
          placeholder="Select your time zone"
          error={!!errors.timeZone}
        />
        {errors.timeZone && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.timeZone}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <Label>Devices You Own (Optional)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {['Desktop Computer', 'Laptop', 'Smartphone', 'Tablet', 'Smart Speaker', 'VR Headset'].map((device) => (
            <EnhancedCheckbox
              key={device}
              id={device}
              checked={formData.devicesOwned.includes(device)}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleInputChange('devicesOwned', [...formData.devicesOwned, device]);
                } else {
                  handleInputChange('devicesOwned', formData.devicesOwned.filter(d => d !== device));
                }
              }}
              label={device}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>How familiar are you with AI? <span className="text-red-500">*</span></Label>
        <EnhancedRadioGroup
          options={[
            { value: 'beginner', label: 'Beginner', description: 'Just getting started with AI tools' },
            { value: 'intermediate', label: 'Intermediate', description: 'Use AI tools regularly' },
            { value: 'advanced', label: 'Advanced', description: 'Building or working on AI projects' },
            { value: 'expert', label: 'Expert', description: 'AI researcher or developer' }
          ]}
          value={formData.aiFamiliarity}
          onChange={(value) => handleInputChange('aiFamiliarity', value)}
          name="aiFamiliarity"
        />
        {errors.aiFamiliarity && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.aiFamiliarity}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <Label>AI Interests <span className="text-red-500">*</span></Label>
        <div className="grid md:grid-cols-2 gap-3">
          {['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Robotics', 'AI Ethics', 'Generative AI'].map((interest) => (
            <EnhancedCheckbox
              key={interest}
              id={interest}
              checked={formData.aiInterests.includes(interest)}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleInputChange('aiInterests', [...formData.aiInterests, interest]);
                } else {
                  handleInputChange('aiInterests', formData.aiInterests.filter(i => i !== interest));
                }
              }}
              label={interest}
            />
          ))}
        </div>
        {errors.aiInterests && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.aiInterests}
          </p>
        )}
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
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>What motivates you? <span className="text-red-500">*</span></Label>
        <div className="grid md:grid-cols-2 gap-3">
          {['Learning new technology', 'Building innovative products', 'Helping others', 'Career advancement', 'Making money', 'Solving problems'].map((motivation) => (
            <EnhancedCheckbox
              key={motivation}
              id={motivation}
              checked={formData.motivations.includes(motivation)}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleInputChange('motivations', [...formData.motivations, motivation]);
                } else {
                  handleInputChange('motivations', formData.motivations.filter(m => m !== motivation));
                }
              }}
              label={motivation}
            />
          ))}
        </div>
        {errors.motivations && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.motivations}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <Label>May we use your feedback as testimonials? <span className="text-red-500">*</span></Label>
        <EnhancedRadioGroup
          options={[
            { value: 'yes', label: 'Yes', description: 'You may use my feedback as testimonials' },
            { value: 'no', label: 'No', description: 'Please keep my feedback private' }
          ]}
          value={formData.testimonialConsent}
          onChange={(value) => handleInputChange('testimonialConsent', value)}
          name="testimonialConsent"
        />
        {errors.testimonialConsent && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.testimonialConsent}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="interestsHobbies">Interests & Hobbies (Optional)</Label>
        <Textarea
          id="interestsHobbies"
          placeholder="Tell us about your interests and hobbies..."
          value={formData.interestsHobbies}
          onChange={(e) => handleInputChange('interestsHobbies', e.target.value)}
          rows={3}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="discordUsername">Discord Username (Optional)</Label>
          <Input
            id="discordUsername"
            placeholder="@username"
            value={formData.discordUsername}
            onChange={(e) => handleInputChange('discordUsername', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="linkedinProfile">LinkedIn Profile (Optional)</Label>
          <Input
            id="linkedinProfile"
            placeholder="https://linkedin.com/in/username"
            value={formData.linkedinProfile}
            onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
          />
        </div>
      </div>
    </div>
  );

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
          <div className="max-w-4xl mx-auto">
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
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-green-600">Account Created</span>
                </div>
                <div className="w-8 h-px bg-green-500"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    <CheckCircle className="h-4 w-4" />
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

              {/* Step Progress */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                      <div className={`flex items-center space-x-2 ${step === currentStep ? 'text-usergy-turquoise' : step < currentStep ? 'text-green-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          step === currentStep ? 'bg-usergy-turquoise text-white' : 
                          step < currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                        }`}>
                          {step < currentStep ? <CheckCircle className="h-4 w-4" /> : step}
                        </div>
                        <span className="text-sm font-medium hidden sm:block">{stepTitles[step - 1]}</span>
                      </div>
                      {step < 3 && <div className={`w-8 h-px ${step < currentStep ? 'bg-green-500' : 'bg-gray-300'}`}></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Card */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-usergy-dark mb-2">
                    {stepTitles[currentStep - 1]}
                  </h3>
                  <p className="text-gray-600">
                    Step {currentStep} of 3 - {
                      currentStep === 1 ? "Tell us where you're from and your setup" :
                      currentStep === 2 ? "Share your AI experience and interests" :
                      "Help us understand your goals and preferences"
                    }
                  </p>
                </div>

                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8">
                  <Button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </Button>

                  {currentStep < 3 ? (
                    <Button
                      onClick={handleNext}
                      className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white flex items-center space-x-2"
                    >
                      <span>Next</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white flex items-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          <span>Complete Profile</span>
                          <CheckCircle className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
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