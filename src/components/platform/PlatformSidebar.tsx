import { useState } from 'react';
import { Menu, X, FileText, CheckSquare, MessageSquare, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlatformSidebarProps {
  projectId: string;
}

export const PlatformSidebar = ({ projectId }: PlatformSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: FileText, label: 'Instructions', href: `/project/${projectId}/instructions`, active: false },
    { icon: CheckSquare, label: 'Tasks', href: `/project/${projectId}/tasks`, active: false },
    { icon: MessageSquare, label: 'Surveys', href: `/project/${projectId}/surveys`, active: false },
    { icon: Bug, label: 'Bugs', href: `/project/${projectId}/bugs`, active: true },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-20 left-4 z-50"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border z-40 transition-all duration-300",
        isCollapsed ? "w-0 md:w-64" : "w-64",
        "md:relative md:top-0 md:h-auto md:min-h-screen"
      )}>
        <div className="p-6">
          {/* Mobile close button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute top-4 right-4"
            onClick={() => setIsCollapsed(true)}
          >
            <X className="h-5 w-5" />
          </Button>

          <nav className="space-y-2 mt-8 md:mt-0">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    item.active
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};