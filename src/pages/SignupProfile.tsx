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
import { PhoneInput } from '@/components/ui/phone-input';
import { Helmet } from 'react-helmet-async';

const SignupProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Form data for the new structure
  const [formData, setFormData] = useState({
    // Page 1: Basic Profile & Where You Explore
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
    jobTitle: '',
    programmingLanguages: [] as string[],
    specificSkills: [] as string[],
    hasBuiltProjects: '',
    portfolioLink: '',

    // Page 3: Impact & Community
    amplificationMethods: [] as string[],
    testimonialConsent: '',
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
          .maybeSingle();

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

  const validateURL = (url: string): boolean => {
    if (!url.trim()) return true; // Optional fields
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.locationCountry) newErrors.locationCountry = 'Country is required';
      if (!formData.timeZone) newErrors.timeZone = 'Time zone is required';
      if (formData.devicesOwned.length === 0) newErrors.devicesOwned = 'Select at least one device';
      if (formData.operatingSystems.length === 0) newErrors.operatingSystems = 'Select at least one operating system';
      if (!formData.aiPassionExpertise.trim()) newErrors.aiPassionExpertise = 'This field is required';
    } else if (step === 2) {
      if (formData.aiInterests.length === 0) newErrors.aiInterests = 'Select at least one AI interest';
      if (!formData.aiFamiliarity) newErrors.aiFamiliarity = 'AI familiarity level is required';
      if (formData.gptModelsUsed.length === 0) newErrors.gptModelsUsed = 'Select at least one AI/GPT model';
      if (!formData.jobTitle) newErrors.jobTitle = 'Current role/title is required';
      if (formData.programmingLanguages.length === 0) newErrors.programmingLanguages = 'Select at least one programming language';
      if (!formData.hasBuiltProjects) newErrors.hasBuiltProjects = 'Please make a selection';
      
      // URL validations
      if (formData.portfolioLink && !validateURL(formData.portfolioLink)) {
        newErrors.portfolioLink = 'Please enter a valid URL';
      }
    } else if (step === 3) {
      if (!formData.testimonialConsent) newErrors.testimonialConsent = 'Please make a selection';
      
      // URL validations for step 3
      if (formData.linkedinProfile && !validateURL(formData.linkedinProfile)) {
        newErrors.linkedinProfile = 'Please enter a valid URL';
      }
      if (formData.twitterUsername && !validateURL(formData.twitterUsername)) {
        newErrors.twitterUsername = 'Please enter a valid URL';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
      // Smooth scroll to top of next section with enhanced animation
      setTimeout(() => {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      }, 100);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    // Smooth scroll to top of previous section with enhanced animation
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const handleSubmit = async () => {
    if (!user || !validateStep(currentStep)) return;
    
    setIsLoading(true);
    
    try {
      const updateData = {
        // Basic Profile & Location
        location_country: formData.locationCountry,
        location_city: formData.locationCity,
        time_zone: formData.timeZone,
        
        // Technology & Devices
        devices_owned: formData.devicesOwned,
        operating_systems: formData.operatingSystems,
        
        // AI Understanding & Experience
        ai_understanding: formData.aiFamiliarity,
        gpt_models_used: formData.gptModelsUsed,
        recent_ai_tools: formData.recentAiTools,
        ai_frameworks: formData.aiInterests, // Map AI interests to frameworks
        
        // Professional Information
        job_title: formData.jobTitle,
        programming_languages: formData.programmingLanguages,
        frameworks_libraries: formData.specificSkills, // Map skills to frameworks
        
        // Social & Portfolio Links
        linkedin_profile: formData.linkedinProfile,
        twitter_username: formData.twitterUsername,
        discord_username: formData.discordUsername,
        
        // Content & Interests
        interests_hobbies: formData.aiPassionExpertise,
        
        // Consent & Completion
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
          description: "We encountered a temporary issue saving your profile. Please try again. Your account is active!",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success!",
        description: "Your AI Explorer profile has been completed successfully!",
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Profile completion error:', error);
        toast({
          title: "We encountered a temporary issue",
          description: "We encountered a temporary issue saving your profile. Please try again. Your account is active!",
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

  const renderStep1 = () => (
    <div className="space-y-8 step-transition">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-usergy-dark mb-3">Tell Us About Yourself</h2>
        <p className="text-lg text-gray-600">Help us get to know you better. This info helps us connect you with the most exciting AI adventures tailored for you.</p>
      </div>

      {/* Phone Number */}
      <div className="space-y-3">
        <Label htmlFor="phoneNumber" className="signup-question">
          What's your phone number? (Optional)
        </Label>
        <PhoneInput
          value={formData.phoneNumber}
          onChange={(value) => handleInputChange('phoneNumber', value)}
          placeholder="Enter your phone number"
          success={formData.phoneNumber.length > 8}
        />
      </div>

      {/* Location */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label className="signup-question">
            Which country are you primarily located in? <span className="text-red-500">*</span>
          </Label>
          <SearchableSelect
            options={COUNTRIES}
            value={formData.locationCountry}
            onChange={(value) => handleInputChange('locationCountry', value)}
            placeholder="Select your country"
            error={!!errors.locationCountry}
            success={!!formData.locationCountry && !errors.locationCountry}
          />
          {errors.locationCountry && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.locationCountry}
            </p>
          )}
        </div>
        
        <div className="space-y-3">
          <Label className="signup-question">Your city/state (optional)</Label>
          <Input
            placeholder="Enter your city/state"
            value={formData.locationCity}
            onChange={(e) => handleInputChange('locationCity', e.target.value)}
            className={`transition-all duration-300 h-[52px] px-4 py-3 border-2 rounded-xl 
              hover:border-usergy-turquoise/50 focus:border-usergy-turquoise focus:ring-4 focus:ring-usergy-turquoise/10
              ${formData.locationCity && !errors.locationCity ? 'border-green-500' : 'border-gray-200'}`}
          />
        </div>
      </div>

      {/* Time Zone */}
      <div className="space-y-3">
        <Label className="signup-question">
          What's your primary time zone? <span className="text-red-500">*</span>
        </Label>
        <SearchableSelect
          options={TIMEZONES}
          value={formData.timeZone}
          onChange={(value) => handleInputChange('timeZone', value)}
          placeholder="Select your time zone"
          error={!!errors.timeZone}
          success={!!formData.timeZone && !errors.timeZone}
        />
        {errors.timeZone && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.timeZone}
          </p>
        )}
      </div>

      {/* Available Devices */}
      <div className="space-y-4">
        <Label className="signup-question">
          Which devices do you have available for testing AI products? <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-2 gap-4">
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
            />
          ))}
        </div>
        {errors.devicesOwned && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.devicesOwned}
          </p>
        )}
      </div>

      {/* Operating Systems */}
      <div className="space-y-4">
        <Label className="signup-question">
          What operating system(s) do you primarily use for testing? <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-2 gap-4">
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
            />
          ))}
        </div>
        {errors.operatingSystems && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.operatingSystems}
          </p>
        )}
      </div>

      {/* AI Passion & Expertise */}
      <div className="space-y-3">
        <Label className="signup-question">
          Tell us about your AI passion & expertise. <span className="text-red-500">*</span>
        </Label>
        <Textarea
          placeholder="e.g., I'm passionate about exploring new AI tools for productivity."
          value={formData.aiPassionExpertise}
          onChange={(e) => handleInputChange('aiPassionExpertise', e.target.value)}
          rows={4}
          className={`transition-all duration-300 ${formData.aiPassionExpertise && !errors.aiPassionExpertise ? 'field-success' : ''}`}
        />
        {errors.aiPassionExpertise && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.aiPassionExpertise}
          </p>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-8 step-transition">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-usergy-dark mb-3">Your AI Strengths & Exploration</h2>
        <p className="text-lg text-gray-600">Help us find projects that perfectly align with your unique AI interests and technical abilities.</p>
      </div>

      {/* AI Interests */}
      <div className="space-y-4">
        <Label className="signup-question">
          What specific AI areas or applications excite you most? <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'AI in Finance', 'Productivity AI', 'Conversational AI/Chatbots', 
            'Generative AI (Image/Video)', 'Generative AI (Text)', 'AI for Education', 
            'AI Ethics', 'Machine Learning (General)', 'AI for Gaming', 
            'Natural Language Processing (NLP)', 'Computer Vision', 'AI in Healthcare'
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
            />
          ))}
        </div>
        {errors.aiInterests && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.aiInterests}
          </p>
        )}
      </div>

      {/* AI Familiarity */}
      <div className="space-y-4">
        <Label className="signup-question">
          How would you describe your familiarity with core AI concepts? <span className="text-red-500">*</span>
        </Label>
        <EnhancedRadioGroup
          options={[
            { value: 'basic', label: 'Basic (I use AI tools daily)', description: 'I use AI tools in my daily workflow' },
            { value: 'intermediate', label: 'Intermediate (I understand core ML/NN concepts)', description: 'I understand machine learning and neural networks' },
            { value: 'advanced', label: 'Advanced (I can explain ML algorithms/Deep Learning)', description: 'I can explain complex AI algorithms' },
            { value: 'expert', label: 'Expert (I work with/research AI professionally)', description: 'I work or research in AI professionally' }
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

      {/* GPT Models Used */}
      <div className="space-y-4">
        <Label className="signup-question">
          Which specific AI/GPT models or tools do you use regularly? <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-2 gap-4">
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
            />
          ))}
        </div>
        {errors.gptModelsUsed && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.gptModelsUsed}
          </p>
        )}
      </div>

      {/* Recent AI Tools */}
      <div className="space-y-3">
        <Label className="signup-question">
          Have you recently discovered any cool AI tools or trends you're following? (Optional)
        </Label>
        <Textarea
          placeholder="e.g., Just found 'MapBrain' for mindmaps and podcasts, or 'BlackBox.ai' for coding assistance."
          value={formData.recentAiTools}
          onChange={(e) => handleInputChange('recentAiTools', e.target.value)}
          rows={3}
          className="transition-all duration-300"
        />
      </div>

      {/* Current Role */}
      <div className="space-y-3">
        <Label className="signup-question">
          What's your current role or profession? <span className="text-red-500">*</span>
        </Label>
        <SearchableSelect
          options={[
            'Software Engineer', 'Data Scientist', 'AI/ML Engineer', 'AI Researcher', 
            'Product Manager', 'Project Manager', 'Consultant', 'Analyst', 
            'Marketing Specialist', 'Student (Undergraduate)', 'Student (Graduate / Postgraduate)', 
            'Entrepreneur / Founder / Startup CEO', 'Designer (UI/UX, Graphic)', 
            'Technical Writer', 'Educator', 'Healthcare Professional', 'Financial Analyst', 
            'Sales Professional', 'Operations Manager', 'Other'
          ]}
          value={formData.jobTitle}
          onChange={(value) => handleInputChange('jobTitle', value)}
          placeholder="Select your role"
          error={!!errors.jobTitle}
          success={!!formData.jobTitle && !errors.jobTitle}
        />
        {errors.jobTitle && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.jobTitle}
          </p>
        )}
      </div>

      {/* Programming Languages */}
      <div className="space-y-4">
        <Label className="signup-question">
          Which programming languages are you familiar with? <span className="text-red-500">*</span>
        </Label>
        <div className="grid md:grid-cols-2 gap-4">
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
            />
          ))}
        </div>
        {errors.programmingLanguages && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.programmingLanguages}
          </p>
        )}
      </div>

      {/* Specific Skills */}
      <div className="space-y-4">
        <Label className="signup-question">
          What are your key skills relevant to AI product exploration? (Optional)
        </Label>
        <div className="grid md:grid-cols-2 gap-4">
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
            />
          ))}
        </div>
      </div>

      {/* Built Projects */}
      <div className="space-y-4">
        <Label className="signup-question">
          Have you built or contributed to any projects (AI or otherwise) before? <span className="text-red-500">*</span>
        </Label>
        <EnhancedRadioGroup
          options={[
            { value: 'yes', label: 'Yes', description: 'I have built or contributed to projects before' },
            { value: 'no', label: 'No', description: 'I haven\'t built projects yet but I\'m eager to learn' }
          ]}
          value={formData.hasBuiltProjects}
          onChange={(value) => handleInputChange('hasBuiltProjects', value)}
          name="hasBuiltProjects"
        />
        {errors.hasBuiltProjects && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.hasBuiltProjects}
          </p>
        )}
      </div>

      {/* Portfolio Link */}
      <div className="space-y-3">
        <Label className="signup-question">
          Share your Portfolio, GitHub, or LinkedIn profile link (Optional)
        </Label>
        <Input
          placeholder="https://github.com/yourprofile"
          value={formData.portfolioLink}
          onChange={(e) => handleInputChange('portfolioLink', e.target.value)}
          className={`transition-all duration-300 ${errors.portfolioLink ? 'border-red-500' : ''}`}
        />
        {errors.portfolioLink && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> {errors.portfolioLink}
          </p>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8 step-transition">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-usergy-dark mb-3">Your Voice, Your Impact, Your Community</h2>
        <p className="text-lg text-gray-600">These final questions help us understand how you'd like to engage with our community and amplify your impact.</p>
      </div>

      {/* Amplification Methods */}
      <div className="space-y-4">
        <Label className="signup-question">
          How would you like to help amplify AI products you love? (Optional)
        </Label>
        <div className="space-y-3">
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
            />
          ))}
        </div>
      </div>

      {/* Testimonial Consent */}
      <div className="space-y-4">
        <Label className="signup-question">
          Are you comfortable with us sharing your first name and general location (e.g., "Alice J. from New York") when quoting your public testimonials or UGC? <span className="text-red-500">*</span>
        </Label>
        <EnhancedRadioGroup
          options={[
            { value: 'yes', label: 'Yes', description: 'You may use my first name and general location with testimonials' },
            { value: 'no', label: 'No', description: 'Please keep my testimonials anonymous' }
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

      {/* Social Links */}
      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="signup-question">
            Your Discord Username (e.g., Explorer#1234 - so we can connect!) (Optional)
          </Label>
          <Input
            placeholder="e.g., Explorer#1234"
            value={formData.discordUsername}
            onChange={(e) => handleInputChange('discordUsername', e.target.value)}
            className="transition-all duration-300"
          />
        </div>

        <div className="space-y-3">
          <Label className="signup-question">
            Your LinkedIn Profile Link (Optional)
          </Label>
          <Input
            placeholder="https://linkedin.com/in/yourprofile"
            value={formData.linkedinProfile}
            onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
            className={`transition-all duration-300 ${errors.linkedinProfile ? 'border-red-500' : ''}`}
          />
          {errors.linkedinProfile && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.linkedinProfile}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Label className="signup-question">
            Your X (Twitter) Profile Link (Optional)
          </Label>
          <Input
            placeholder="https://x.com/yourprofile"
            value={formData.twitterUsername}
            onChange={(e) => handleInputChange('twitterUsername', e.target.value)}
            className={`transition-all duration-300 ${errors.twitterUsername ? 'border-red-500' : ''}`}
          />
          {errors.twitterUsername && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> {errors.twitterUsername}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-usergy-light page-transition">
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
                Step 2 of 3: Complete Profile
              </h1>
              
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
                    2
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
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          step === currentStep ? 'bg-usergy-turquoise text-white' : 
                          step < currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                        }`}>
                          {step < currentStep ? <CheckCircle className="h-4 w-4" /> : step}
                        </div>
                        <span className="text-sm font-medium hidden sm:block">
                          {step === 1 ? 'Basic Profile' : step === 2 ? 'AI Core & Skills' : 'Impact & Community'}
                        </span>
                      </div>
                      {step < 3 && <div className={`w-8 h-px transition-all duration-300 ${step < currentStep ? 'bg-green-500' : 'bg-gray-300'}`}></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Card */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-8">
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-12 mt-8 border-t border-gray-200">
                  <Button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    variant="outline"
                    className="flex items-center space-x-2 px-6 py-3 transition-all duration-300"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </Button>

                  {currentStep < 3 ? (
                    <Button
                      onClick={handleNext}
                      className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white flex items-center space-x-2 px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="bg-usergy-turquoise hover:bg-usergy-skyblue text-white flex items-center space-x-2 px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
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