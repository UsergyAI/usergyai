import { Button } from '@/components/ui/button';
import { CheckCircle, Sparkles } from 'lucide-react';

interface BugReportSuccessProps {
  onReturnToList: () => void;
}

export const BugReportSuccess = ({ onReturnToList }: BugReportSuccessProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6 py-12">
      <div className="relative">
        <CheckCircle className="h-20 w-20 text-[#4ECDC4] mx-auto" />
        <Sparkles className="h-6 w-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Bug Reported! Thank You, Explorer!
        </h2>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          Your detailed bug report has been received and sent to the product team. 
          Your contribution is invaluable in making this AI product better!
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#4ECDC4]/10 to-primary/10 rounded-lg p-6 border border-[#4ECDC4]/20">
        <p className="text-sm text-muted-foreground">
          🎯 <strong>What happens next?</strong><br />
          Our team will review your report and get back to you with updates. 
          Keep an eye on your notifications for progress updates!
        </p>
      </div>

      <Button
        onClick={onReturnToList}
        className="bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white px-8"
      >
        Return to Bugs List
      </Button>
    </div>
  );
};