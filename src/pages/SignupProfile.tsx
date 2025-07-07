import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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

const SignupProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Form data matching the exact specification
  const [formData, setFormData] = useState({
    // Page 1: Basic Profile & Location
    phoneNumber: '',
    locationCountry: '',
    locationCity: '',
    timeZone: '',
    devicesOwned: [] as string[],
    operatingSystems: [] as string[],
    aiPassionExpertise: '',

    // Page 2: AI Core & Skills
    aiInterests: [] as string[],
    aiFamiliarity: '',
    gptModelsUsed: [] as string[],
    recentAiTools: '',
    currentRole: '',
    programmingLanguages: [] as string[],
    specificSkills: [] as string[],
    hasBuiltProjects: '',
    portfolioLink: '',

    // Page 3: Impact & Community
    amplificationMethods: [] as string[],
    testimonialConsent: '' as 'yes' | 'no' | '',
    discordUsername: '',
    linkedinProfile: '',
    twitterUsername: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkAuth = async () => {
      try {
        // Check if user is authenticated
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth session error:', error);
          navigate('/signup/account');
          return;
        }

        if (!session?.user) {
          console.log('No authenticated user found, redirecting to account creation');
          navigate('/signup/account');
          return;
        }

        console.log('User authenticated:', session.user.id);
        setUser(session.user);

        // Check if profile already exists and is completed
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('profile_completed, full_name')
          .eq('user_id', session.user.id)
          .maybeSingle();

        if (profileError) {
          console.error('Profile check error:', profileError);
          // Don't redirect on profile error, let user continue
        }

        if (profile?.profile_completed) {
          console.log('Profile already completed, redirecting to welcome');
          navigate('/signup/welcome');
          return;
        }

        console.log('User ready for profile completion');

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
      if (formData.devicesOwned.length === 0) newErrors.devicesOwned = 'Select at least one device';
      if (formData.operatingSystems.length === 0) newErrors.operatingSystems = 'Select at least one operating system';
      if (!formData.aiPassionExpertise.trim()) newErrors.aiPassionExpertise = 'Please tell us about your AI passion & expertise';
    } else if (step === 2) {
      if (formData.aiInterests.length === 0) newErrors.aiInterests = 'Select at least one AI interest';
      if (!formData.aiFamiliarity) newErrors.aiFamiliarity = 'AI familiarity level is required';
      if (formData.gptModelsUsed.length === 0) newErrors.gptModelsUsed = 'Select at least one AI/GPT model you use';
      if (!formData.currentRole) newErrors.currentRole = 'Current role/profession is required';
      if (formData.programmingLanguages.length === 0) newErrors.programmingLanguages = 'Select at least one programming language (or None)';
      if (!formData.hasBuiltProjects) newErrors.hasBuiltProjects = 'Please make a selection';
    } else if (step === 3) {
      if (!formData.testimonialConsent) newErrors.testimonialConsent = 'Please make a selection about testimonials';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    // Basic phone validation - allow international formats
    const phoneRegex = /^[+]?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  const handleSubmit = async () => {
    if (!user || !validateStep(currentStep)) return;
    
    setIsLoading(true);
    
    try {
      // Build the update data object
      const updateData = {
        // Map form fields to database columns
        location_country: formData.locationCountry,
        location_city: formData.locationCity || null,
        time_zone: formData.timeZone,
        devices_owned: formData.devicesOwned,
        operating_systems: formData.operatingSystems,
        ai_understanding: formData.aiFamiliarity,
        gpt_models_used: formData.gptModelsUsed,
        recent_ai_tools: formData.recentAiTools || null,
        job_title: formData.currentRole,
        programming_languages: formData.programmingLanguages,
        entrepreneurial_experience: formData.hasBuiltProjects === 'yes',
        linkedin_profile: formData.linkedinProfile || null,
        discord_username: formData.discordUsername || null,
        twitter_username: formData.twitterUsername || null,
        testimonial_consent: formData.testimonialConsent === 'yes',
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
          title: "We encountered a temporary issue",
          description: "Please try again or refresh the page. Your account is still active!",
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
        title: "We encountered a temporary issue",
        description: "Please try again or refresh the page. Your account is still active!",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-usergy-light flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <Loader2 className="h-12 w-12 text-usergy-turquoise mx-auto mb-4 animate-spin" />
            <h2 className="text-xl font-bold text-usergy-dark mb-2">Loading Your Profile...</h2>
            <p className="text-gray-600">Setting up your AI Explorer experience.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-usergy-light flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-usergy-dark mb-2">Authentication Required</h2>
            <p className="text-gray-600 mb-4">Please complete account creation first.</p>
            <Button 
              onClick={() => navigate('/signup/account')}
              className="bg-usergy-turquoise hover:bg-usergy-skyblue"
            >
              Go to Account Creation
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const pageData = [
    {
      title: "Tell Us About Yourself",
      subtitle: "Help us get to know you better. This info helps us connect you with the most exciting AI adventures tailored for you."
    },
    {
      title: "Your AI Strengths & Exploration",
      subtitle: "Help us find projects that perfectly align with your unique AI interests and technical abilities."
    },
    {
      title: "Your Voice, Your Impact, Your Community",
      subtitle: "These final questions help us understand how you'd like to engage with our community and amplify your impact."
    }
  ];

  const renderStep1 = () => (
    <div className="space-y-8 animate-page-enter">
      {/* Phone Number */}
      <div className="space-y-3">
        <Label htmlFor="phoneNumber" className="question-text">
          <strong>What's your phone number?</strong> (Optional)
        </Label>
        <div className="form-field-focus relative">
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="e.g., +91 9363173403"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className="placeholder-enhanced form-transition"
          />
        </div>
      </div>

      {/* Location */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="question-text">
            <strong>Which country are you primarily located in?</strong> <span className="text-red-500">*</span>
          </Label>
          <SearchableSelect
            options={COUNTRIES}
            value={formData.locationCountry}
            onChange={(value) => handleInputChange('locationCountry', value)}
            placeholder="e.g., India"
            error={!!errors.locationCountry}
            success={!!formData.locationCountry && !errors.locationCountry}
          />
          {errors.locationCountry && (
            <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.locationCountry}
            </p>
          )}
        </div>
        
        <div className="space-y-3">
          <Label className="question-text">
            <strong>Your city/state</strong> (optional)
          </Label>
          <div className="form-field-focus relative">
            <Input
              placeholder="e.g., Tiruchirappalli, Tamil Nadu"
              value={formData.locationCity}
              onChange={(e) => handleInputChange('locationCity', e.target.value)}
              className="placeholder-enhanced form-transition"
            />
          </div>
        </div>
      </div>

      {/* Time Zone */}
      <div className="space-y-3">
        <Label className="question-text">
          <strong>What's your primary time zone?</strong> <span className="text-red-500">*</span>
        </Label>
        <SearchableSelect
          options={TIMEZONES}
          value={formData.timeZone}
          onChange={(value) => handleInputChange('timeZone', value)}
          placeholder="e.g., UTC+05:30 — Kolkata (India)"
          error={!!errors.timeZone}
          success={!!formData.timeZone && !errors.timeZone}
        />
        {errors.timeZone && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.timeZone}
          </p>
        )}
      </div>

      {/* Devices Available */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>Which devices do you have available for testing AI products?</strong> <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-3 gap-3">
          {['Desktop PC', 'Laptop', 'Android Phone', 'iPhone', 'Tablet', 'VR Headset'].map((device) => (
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
              className="form-transition"
            />
          ))}
        </div>
        {errors.devicesOwned && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.devicesOwned}
          </p>
        )}
      </div>

      {/* Operating Systems */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>What operating system(s) do you primarily use for testing?</strong> <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-3 gap-3">
          {['Windows', 'macOS', 'Linux', 'Android', 'iOS', 'Other'].map((os) => (
            <EnhancedCheckbox
              key={os}
              id={os}
              checked={formData.operatingSystems.includes(os)}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleInputChange('operatingSystems', [...formData.operatingSystems, os]);
                } else {
                  handleInputChange('operatingSystems', formData.operatingSystems.filter(o => o !== os));
                }
              }}
              label={os}
              className="form-transition"
            />
          ))}
        </div>
        {errors.operatingSystems && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.operatingSystems}
          </p>
        )}
      </div>

      {/* AI Passion & Expertise */}
      <div className="space-y-3">
        <Label className="question-text">
          <strong>Tell us about your AI passion & expertise.</strong> <span className="text-red-500">*</span>
        </Label>
        <div className="form-field-focus">
          <Textarea
            placeholder="e.g., I'm passionate about exploring new AI tools for productivity."
            value={formData.aiPassionExpertise}
            onChange={(e) => handleInputChange('aiPassionExpertise', e.target.value)}
            rows={4}
            className={`placeholder-enhanced form-transition ${
              formData.aiPassionExpertise && !errors.aiPassionExpertise 
                ? 'form-field-success' 
                : errors.aiPassionExpertise 
                  ? 'form-field-error' 
                  : ''
            }`}
          />
        </div>
        {errors.aiPassionExpertise && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.aiPassionExpertise}
          </p>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8 animate-page-enter">
      {/* AI Interests */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>What specific AI areas or applications excite you most?</strong> <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'AI in Finance', 'Productivity AI', 'Conversational AI/Chatbots', 'Generative AI (Image/Video)', 
            'Generative AI (Text)', 'AI for Education', 'AI Ethics', 'Machine Learning (General)', 
            'AI for Gaming', 'Natural Language Processing (NLP)', 'Computer Vision', 'AI in Healthcare'
          ].map((interest) => (
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
              className="form-transition"
            />
          ))}
        </div>
        {errors.aiInterests && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.aiInterests}
          </p>
        )}
      </div>

      {/* AI Familiarity */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>How would you describe your familiarity with core AI concepts?</strong> <span className="text-red-500">*</span>
        </Label>
        <EnhancedRadioGroup
          options={[
            { value: 'basic', label: 'Basic (I use AI tools daily)', description: 'Regular user of AI applications' },
            { value: 'intermediate', label: 'Intermediate (I understand core ML/NN concepts)', description: 'Understanding of machine learning basics' },
            { value: 'advanced', label: 'Advanced (I can explain ML algorithms/Deep Learning)', description: 'Deep technical knowledge' },
            { value: 'expert', label: 'Expert (I work with/research AI professionally)', description: 'Professional AI experience' }
          ]}
          value={formData.aiFamiliarity}
          onChange={(value) => handleInputChange('aiFamiliarity', value)}
          name="aiFamiliarity"
          className="form-transition"
        />
        {errors.aiFamiliarity && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.aiFamiliarity}
          </p>
        )}
      </div>

      {/* GPT Models Used */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>Which specific AI/GPT models or tools do you use regularly?</strong> <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'ChatGPT (4.0)', 'Claude', 'Gemini', 'DALL·E', 'Bard (Google\'s AI)', 
            'Midjourney', 'ChatGPT (3.5)', 'Perplexity AI', 'Stable Diffusion', 
            'Siri/Alexa (voice assistants)', 'Copilot'
          ].map((model) => (
            <EnhancedCheckbox
              key={model}
              id={model}
              checked={formData.gptModelsUsed.includes(model)}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleInputChange('gptModelsUsed', [...formData.gptModelsUsed, model]);
                } else {
                  handleInputChange('gptModelsUsed', formData.gptModelsUsed.filter(m => m !== model));
                }
              }}
              label={model}
              className="form-transition"
            />
          ))}
        </div>
        {errors.gptModelsUsed && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.gptModelsUsed}
          </p>
        )}
      </div>

      {/* Recent AI Tools */}
      <div className="space-y-3">
        <Label className="question-text">
          <strong>Have you recently discovered any cool AI tools or trends you're following?</strong> (Optional)
        </Label>
        <div className="form-field-focus">
          <Textarea
            placeholder="e.g., Just found 'MapBrain' for mindmaps and podcasts, or 'BlackBox.ai' for coding assistance."
            value={formData.recentAiTools}
            onChange={(e) => handleInputChange('recentAiTools', e.target.value)}
            rows={3}
            className="placeholder-enhanced form-transition"
          />
        </div>
      </div>

      {/* Current Role */}
      <div className="space-y-3">
        <Label className="question-text">
          <strong>What's your current role or profession?</strong> <span className="text-red-500">*</span>
        </Label>
        <SearchableSelect
          options={[
            'Software Engineer', 'Data Scientist', 'AI/ML Engineer', 'AI Researcher', 'Product Manager', 
            'Project Manager', 'Consultant', 'Analyst', 'Marketing Specialist', 'Student (Undergraduate)', 
            'Student (Graduate / Postgraduate)', 'Entrepreneur / Founder / Startup CEO', 'Designer (UI/UX, Graphic)', 
            'Technical Writer', 'Educator', 'Healthcare Professional', 'Financial Analyst', 'Sales Professional', 
            'Operations Manager', 'Other'
          ]}
          value={formData.currentRole}
          onChange={(value) => handleInputChange('currentRole', value)}
          placeholder="Select your role/profession"
          error={!!errors.currentRole}
          success={!!formData.currentRole && !errors.currentRole}
        />
        {errors.currentRole && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.currentRole}
          </p>
        )}
      </div>

      {/* Programming Languages */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>Which programming languages are you familiar with?</strong> <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-3 gap-3">
          {['Python', 'JavaScript', 'Java', 'C++', 'R', 'Go', 'Rust', 'SQL', 'HTML/CSS', 'None'].map((lang) => (
            <EnhancedCheckbox
              key={lang}
              id={lang}
              checked={formData.programmingLanguages.includes(lang)}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleInputChange('programmingLanguages', [...formData.programmingLanguages, lang]);
                } else {
                  handleInputChange('programmingLanguages', formData.programmingLanguages.filter(l => l !== lang));
                }
              }}
              label={lang}
              className="form-transition"
            />
          ))}
        </div>
        {errors.programmingLanguages && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.programmingLanguages}
          </p>
        )}
      </div>

      {/* Specific Skills */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>What are your key skills relevant to AI product exploration?</strong> (Optional)
        </Label>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Prompt Engineering', 'UI/UX Evaluation', 'Bug Reporting', 'Data Analysis', 
            'User Research', 'Product Management', 'Technical Writing', 'Creative Writing', 
            'Community Building', 'Graphic Design'
          ].map((skill) => (
            <EnhancedCheckbox
              key={skill}
              id={skill}
              checked={formData.specificSkills.includes(skill)}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleInputChange('specificSkills', [...formData.specificSkills, skill]);
                } else {
                  handleInputChange('specificSkills', formData.specificSkills.filter(s => s !== skill));
                }
              }}
              label={skill}
              className="form-transition"
            />
          ))}
        </div>
      </div>

      {/* Built Projects */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>Have you built or contributed to any projects (AI or otherwise) before?</strong> <span className="text-red-500">*</span>
        </Label>
        <EnhancedRadioGroup
          options={[
            { value: 'yes', label: 'Yes', description: 'I have built or contributed to projects' },
            { value: 'no', label: 'No', description: 'I haven\'t built projects yet' }
          ]}
          value={formData.hasBuiltProjects}
          onChange={(value) => handleInputChange('hasBuiltProjects', value)}
          name="hasBuiltProjects"
          className="form-transition"
        />
        {errors.hasBuiltProjects && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.hasBuiltProjects}
          </p>
        )}
      </div>

      {/* Portfolio Link - Conditional */}
      {formData.hasBuiltProjects === 'yes' && (
        <div className="space-y-3">
          <Label className="question-text">
            <strong>Share your Portfolio, GitHub, or LinkedIn profile link</strong> (Optional)
          </Label>
          <div className="form-field-focus relative">
            <Input
              placeholder="https://github.com/yourprofile"
              value={formData.portfolioLink}
              onChange={(e) => handleInputChange('portfolioLink', e.target.value)}
              className="placeholder-enhanced form-transition"
            />
          </div>
        </div>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8 animate-page-enter">
      {/* Amplification Methods */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>How would you like to help amplify AI products you love?</strong> (Optional)
        </Label>
        <div className="grid gap-3">
          {[
            'Post general positive updates on my social media (e.g., "Tried X AI, it\'s cool!")',
            'Write short reviews/testimonials for Usergy or specific AI products',
            'Create original content (e.g., a brief video, a quick tutorial) about products I genuinely love',
            'Participate in short Q&A sessions or interviews about my testing experience',
            'Join specific client communities (e.g., their Discord, LinkedIn Group)',
            'None of the above, I prefer to focus on feedback only'
          ].map((method) => (
            <EnhancedCheckbox
              key={method}
              id={method}
              checked={formData.amplificationMethods.includes(method)}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleInputChange('amplificationMethods', [...formData.amplificationMethods, method]);
                } else {
                  handleInputChange('amplificationMethods', formData.amplificationMethods.filter(m => m !== method));
                }
              }}
              label={method}
              className="form-transition"
            />
          ))}
        </div>
      </div>

      {/* Testimonial Consent */}
      <div className="space-y-4">
        <Label className="question-text">
          <strong>Are you comfortable with us sharing your first name and general location (e.g., "Alice J. from New York") when quoting your public testimonials or UGC?</strong> <span className="text-red-500">*</span>
        </Label>
        <EnhancedRadioGroup
          options={[
            { value: 'yes', label: 'Yes', description: 'You may use my first name and general location' },
            { value: 'no', label: 'No', description: 'Please keep my feedback anonymous' }
          ]}
          value={formData.testimonialConsent}
          onChange={(value) => handleInputChange('testimonialConsent', value)}
          name="testimonialConsent"
          className="form-transition"
        />
        {errors.testimonialConsent && (
          <p className="text-sm text-red-500 animate-fade-in flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.testimonialConsent}
          </p>
        )}
      </div>

      {/* Social Links */}
      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="question-text">
            <strong>Your Discord Username (e.g., Explorer#1234 - so we can connect!)</strong> (Optional)
          </Label>
          <div className="form-field-focus relative">
            <Input
              placeholder="e.g., Explorer#1234"
              value={formData.discordUsername}
              onChange={(e) => handleInputChange('discordUsername', e.target.value)}
              className="placeholder-enhanced form-transition"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="question-text">
            <strong>Your LinkedIn Profile Link</strong> (Optional)
          </Label>
          <div className="form-field-focus relative">
            <Input
              placeholder="https://linkedin.com/in/yourprofile"
              value={formData.linkedinProfile}
              onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
              className="placeholder-enhanced form-transition"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="question-text">
            <strong>Your X (Twitter) Profile Link</strong> (Optional)
          </Label>
          <div className="form-field-focus relative">
            <Input
              placeholder="https://x.com/yourprofile"
              value={formData.twitterUsername}
              onChange={(e) => handleInputChange('twitterUsername', e.target.value)}
              className="placeholder-enhanced form-transition"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-usergy-light">
      <Helmet>
        <title>Complete Your AI Explorer Profile - Step {currentStep} of 3 - Usergy</title>
        <meta name="description" content="Complete your AI Explorer profile to unlock exclusive opportunities and connect with the AI community." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="relative min-h-screen flex items-center justify-center pt-28 pb-16">
        <AnimatedBackground particleCount={30} enableFloatingBubbles={true} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Progress Header */}
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-black text-usergy-dark mb-4">
                Step {currentStep} of 3: Complete Profile
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {pageData[currentStep - 1].subtitle}
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
              <div className="flex items-center justify-center space-x-2 mb-8">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      step === currentStep
                        ? 'bg-usergy-turquoise scale-125'
                        : step < currentStep
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Main Form Card */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-usergy-dark mb-3">
                    {pageData[currentStep - 1].title}
                  </h2>
                  <p className="text-gray-600">
                    {pageData[currentStep - 1].subtitle}
                  </p>
                </div>

                {/* Step Content */}
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
                  {currentStep > 1 ? (
                    <Button
                      onClick={handleBack}
                      variant="outline"
                      size="lg"
                      className="form-transition hover:bg-gray-50"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Previous
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 3 ? (
                    <Button
                      onClick={handleNext}
                      size="lg"
                      className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Next Step
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      disabled={isLoading}
                      className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Completing Profile...
                        </>
                      ) : (
                        <>
                          Complete Profile →
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