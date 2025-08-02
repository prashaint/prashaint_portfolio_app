import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectNavigation = ({ 
  projects, 
  currentProject, 
  onNavigateProject, 
  onClose 
}) => {
  if (!projects || !currentProject) return null;

  const currentIndex = projects?.findIndex(p => p?.id === currentProject?.id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < projects?.length - 1;

  const handlePrevious = () => {
    if (hasPrevious && onNavigateProject) {
      onNavigateProject(projects?.[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (hasNext && onNavigateProject) {
      onNavigateProject(projects?.[currentIndex + 1]);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-card">
      {/* Left Section - Project Navigation */}
      <div className="flex items-center space-x-2">
        {projects?.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              disabled={!hasPrevious}
              aria-label="Previous project"
              className="w-10 h-10"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-muted rounded-full">
              <span className="text-sm font-medium text-foreground">
                {currentIndex + 1}
              </span>
              <span className="text-sm text-muted-foreground">of</span>
              <span className="text-sm font-medium text-foreground">
                {projects?.length}
              </span>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              disabled={!hasNext}
              aria-label="Next project"
              className="w-10 h-10"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </>
        )}
      </div>
      {/* Center Section - Project Title (Mobile) */}
      <div className="flex-1 text-center sm:hidden">
        <h2 className="text-lg font-semibold text-foreground truncate px-4">
          {currentProject?.title}
        </h2>
      </div>
      {/* Right Section - Close Button */}
      <div className="flex items-center space-x-2">
        {/* Mobile Project Counter */}
        {projects?.length > 1 && (
          <div className="sm:hidden flex items-center space-x-1 px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground">
            <span>{currentIndex + 1}/{projects?.length}</span>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close modal"
          className="w-10 h-10"
        >
          <Icon name="X" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ProjectNavigation;