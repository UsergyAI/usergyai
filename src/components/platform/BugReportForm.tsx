import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { supabase } from '@/integrations/supabase/client';
import { Upload, X, FileIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  expectedResult: z.string().min(10, 'Expected result must be at least 10 characters'),
  actualResult: z.string().min(10, 'Actual result must be at least 10 characters'),
  reproducibility: z.string().min(1, 'Please select reproducibility'),
  severity: z.string().min(1, 'Please select severity'),
  deviceUsed: z.string().min(3, 'Device information is required'),
  osVersion: z.string().min(3, 'OS version is required'),
  notes: z.string().optional(),
});

interface BugReportFormProps {
  projectId: string;
  projectName: string;
  onCancel: () => void;
  onSuccess: () => void;
}

interface FileUpload {
  file: File;
  preview?: string;
}

export const BugReportForm = ({ projectId, projectName, onCancel, onSuccess }: BugReportFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachments, setAttachments] = useState<FileUpload[]>([]);
  const [stepCounter, setStepCounter] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      expectedResult: '',
      actualResult: '',
      reproducibility: '',
      severity: '',
      deviceUsed: '',
      osVersion: '',
      notes: '',
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // Check file size (250MB limit)
      if (file.size > 250 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 250MB limit.`,
          variant: "destructive",
        });
        continue;
      }

      // Check file type
      const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'video/mp4', 'video/mov'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type.`,
          variant: "destructive",
        });
        continue;
      }

      const fileUpload: FileUpload = { file };

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          fileUpload.preview = e.target?.result as string;
          setAttachments(prev => [...prev, fileUpload]);
        };
        reader.readAsDataURL(file);
      } else {
        setAttachments(prev => [...prev, fileUpload]);
      }
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleDescriptionKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      const currentValue = form.getValues('description');
      const newValue = currentValue + `\n${stepCounter}. `;
      form.setValue('description', newValue);
      setStepCounter(prev => prev + 1);
    }
  };

  const uploadFiles = async (userId: string): Promise<string[]> => {
    const uploadPromises = attachments.map(async (attachment) => {
      const fileExt = attachment.file.name.split('.').pop();
      const fileName = `${userId}/${Date.now()}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('bug-reports')
        .upload(fileName, attachment.file);

      if (error) throw error;
      return data.path;
    });

    return Promise.all(uploadPromises);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (attachments.length === 0) {
      toast({
        title: "Attachments required",
        description: "Please upload at least one screenshot or video to help us understand the bug.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please log in to submit a bug report.",
          variant: "destructive",
        });
        return;
      }

      // Upload attachments
      const attachmentPaths = await uploadFiles(user.id);

      // Create bug report
      const { error } = await supabase
        .from('feedback')
        .insert({
          user_id: user.id,
          project_id: projectId,
          title: values.title,
          description: values.description,
          expected_result: values.expectedResult,
          actual_result: values.actualResult,
          reproducibility: values.reproducibility,
          severity: values.severity,
          device_used: values.deviceUsed,
          os_version: values.osVersion,
          notes: values.notes || '',
          attachments: attachmentPaths,
        });

      if (error) throw error;

      toast({
        title: "Bug report submitted!",
        description: "Thank you for helping us improve the product.",
      });

      onSuccess();
    } catch (error) {
      console.error('Error submitting bug report:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your bug report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Report a New Bug</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Help us make this product flawless! Please provide as much detail as possible. 
          Your clear reporting speeds up fixes and earns you valuable points.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Bug Title (Short summary) *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Short summary of the issue" 
                    className="focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Description (Steps to reproduce) *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="1. List the steps to reproduce the issue"
                    className="min-h-32 focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4]"
                    onKeyPress={handleDescriptionKeyPress}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expectedResult"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Expected Result *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="What did you think would happen if the product was functioning properly?"
                    className="min-h-24 focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="actualResult"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Actual Result *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="What actually happened?"
                    className="min-h-24 focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="reproducibility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Reproducibility *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4] bg-background">
                        <SelectValue placeholder="Select reproducibility" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border border-border">
                      <SelectItem value="Always (100%)">Always (100%)</SelectItem>
                      <SelectItem value="Sometimes (50-99%)">Sometimes (50-99%)</SelectItem>
                      <SelectItem value="Rarely (1-49%)">Rarely (1-49%)</SelectItem>
                      <SelectItem value="Once (did not reproduce)">Once (did not reproduce)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="severity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Severity *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4] bg-background">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-background border border-border">
                      <SelectItem value="Critical (Blocks core functionality)">Critical (Blocks core functionality)</SelectItem>
                      <SelectItem value="High (Major impact, workaround exists)">High (Major impact, workaround exists)</SelectItem>
                      <SelectItem value="Medium (Minor impact, noticeable)">Medium (Minor impact, noticeable)</SelectItem>
                      <SelectItem value="Low (Cosmetic, minor inconvenience)">Low (Cosmetic, minor inconvenience)</SelectItem>
                      <SelectItem value="Trivial (Typo, tiny visual issue)">Trivial (Typo, tiny visual issue)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="deviceUsed"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Device Used *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., iPhone 15 Pro, MacBook Pro M2"
                      className="focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="osVersion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Operating System & Version *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="e.g., iOS 17.2, macOS Sonoma 14.2"
                      className="focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Additional Notes (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any extra details or context"
                    className="min-h-24 focus:ring-2 focus:ring-[#4ECDC4] focus:border-[#4ECDC4]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <label className="font-bold text-sm text-foreground block mb-3">
              Upload Bug Evidence * 
              <span className="font-normal text-muted-foreground block">
                Screenshots of device info/about page, screenshots/screen recordings of the bug, logs.
              </span>
            </label>
            
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-[#4ECDC4] transition-colors">
              <input
                type="file"
                multiple
                accept=".png,.jpg,.jpeg,.mp4,.mov"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Drop files here or click to upload
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG, MP4, MOV up to 250MB each
                </p>
              </label>
            </div>

            {attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                {attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    {attachment.preview ? (
                      <img src={attachment.preview} alt="Preview" className="h-12 w-12 object-cover rounded" />
                    ) : (
                      <FileIcon className="h-12 w-12 text-muted-foreground" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{attachment.file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(attachment.file.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeAttachment(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {attachments.length === 0 && (
              <p className="text-sm text-red-500 mt-2">
                At least one attachment is required to confirm the bug
              </p>
            )}
          </div>

          <div className="flex gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#4ECDC4] hover:bg-[#4ECDC4]/90 text-white"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Bug Report'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};