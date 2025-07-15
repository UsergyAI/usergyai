import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import { BugsList } from '@/components/platform/BugsList';
import { BugReportForm } from '@/components/platform/BugReportForm';
import { BugReportSuccess } from '@/components/platform/BugReportSuccess';
import { PlatformSidebar } from '@/components/platform/PlatformSidebar';

interface Project {
  id: string;
  name: string;
  description: string;
}

export const ProjectBugs = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [showReportForm, setShowReportForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const fetchProject = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', projectId)
      .single();

    if (!error && data) {
      setProject(data);
    }
  };

  const handleReportSuccess = () => {
    setShowReportForm(false);
    setShowSuccess(true);
  };

  const handleReturnToList = () => {
    setShowSuccess(false);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-96">
          <p className="text-lg text-muted-foreground">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <PlatformSidebar projectId={projectId!} />
        <main className="flex-1 p-8">
          {showSuccess ? (
            <BugReportSuccess onReturnToList={handleReturnToList} />
          ) : showReportForm ? (
            <BugReportForm
              projectId={projectId!}
              projectName={project.name}
              onCancel={() => setShowReportForm(false)}
              onSuccess={handleReportSuccess}
            />
          ) : (
            <BugsList
              projectId={projectId!}
              projectName={project.name}
              onReportBug={() => setShowReportForm(true)}
            />
          )}
        </main>
      </div>
    </div>
  );
};