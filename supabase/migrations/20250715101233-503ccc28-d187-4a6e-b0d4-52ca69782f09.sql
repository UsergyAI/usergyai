-- Create projects table for project management
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for projects (readable by authenticated users)
CREATE POLICY "Projects are viewable by authenticated users" 
ON public.projects 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create feedback table for bug reports
CREATE TABLE public.feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  project_id UUID REFERENCES public.projects(id),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  expected_result TEXT NOT NULL,
  actual_result TEXT NOT NULL,
  reproducibility TEXT NOT NULL CHECK (reproducibility IN ('Always (100%)', 'Sometimes (50-99%)', 'Rarely (1-49%)', 'Once (did not reproduce)')),
  severity TEXT NOT NULL CHECK (severity IN ('Critical (Blocks core functionality)', 'High (Major impact, workaround exists)', 'Medium (Minor impact, noticeable)', 'Low (Cosmetic, minor inconvenience)', 'Trivial (Typo, tiny visual issue)')),
  device_used TEXT NOT NULL,
  os_version TEXT NOT NULL,
  notes TEXT,
  attachments TEXT[], -- Array of file URLs from Supabase Storage
  status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'In Review', 'Fixed', 'Closed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on feedback
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Create policies for feedback
CREATE POLICY "Users can view feedback for projects they have access to" 
ON public.feedback 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Users can create feedback reports" 
ON public.feedback 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own feedback reports" 
ON public.feedback 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates on feedback
CREATE TRIGGER update_feedback_updated_at
BEFORE UPDATE ON public.feedback
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for automatic timestamp updates on projects
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for bug report attachments
INSERT INTO storage.buckets (id, name, public) VALUES ('bug-reports', 'bug-reports', false);

-- Create storage policies for bug reports
CREATE POLICY "Users can upload bug report attachments" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'bug-reports' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can view bug report attachments" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'bug-reports');

-- Insert sample projects for testing
INSERT INTO public.projects (name, description) VALUES 
('AI Assistant Beta Validation', 'Beta testing for our AI assistant platform'),
('Mobile App Testing', 'Testing the mobile application features'),
('Web Platform QA', 'Quality assurance for the web platform');