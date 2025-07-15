import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Circle } from 'lucide-react';

interface Bug {
  id: string;
  title: string;
  severity: string;
  reproducibility: string;
  status: string;
  created_at: string;
}

interface BugsListProps {
  projectId: string;
  projectName: string;
  onReportBug: () => void;
}

export const BugsList = ({ projectId, projectName, onReportBug }: BugsListProps) => {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBugs();
  }, [projectId]);

  const fetchBugs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('feedback')
      .select('id, title, severity, reproducibility, status, created_at')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setBugs(data);
    }
    setLoading(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical (Blocks core functionality)':
        return 'bg-red-500';
      case 'High (Major impact, workaround exists)':
        return 'bg-orange-500';
      case 'Medium (Minor impact, noticeable)':
        return 'bg-yellow-500';
      case 'Low (Cosmetic, minor inconvenience)':
        return 'bg-blue-500';
      case 'Trivial (Typo, tiny visual issue)':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'New':
        return 'default';
      case 'In Review':
        return 'secondary';
      case 'Fixed':
        return 'outline';
      case 'Closed':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            All Reported Bugs for {projectName}
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            See bugs reported by your fellow explorers. Your insights help us make this product even better!
          </p>
        </div>
        <Button
          onClick={onReportBug}
          className="bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white shadow-lg"
        >
          <Plus className="h-4 w-4 mr-2" />
          Report a Bug
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">Loading bugs...</p>
        </div>
      ) : bugs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No bugs reported yet.</p>
          <p className="text-sm text-muted-foreground mt-2">
            Be the first to help improve this product!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {bugs.map((bug) => (
            <div
              key={bug.id}
              className="border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-primary/20 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <Circle
                    className={`h-3 w-3 ${getSeverityColor(bug.severity)} rounded-full`}
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{bug.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span>
                        Severity: {bug.severity.split(' (')[0]}
                      </span>
                      <span>
                        Reproducibility: {bug.reproducibility.split(' (')[0]}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={getStatusVariant(bug.status)}>
                    {bug.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {new Date(bug.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};