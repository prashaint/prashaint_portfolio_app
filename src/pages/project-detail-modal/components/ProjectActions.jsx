import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectActions = ({ project, onShare }) => {
  if (!project) return null;

  const handleViewLive = () => {
    if (project?.liveUrl) {
      window.open(project?.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewCode = () => {
    if (project?.githubUrl) {
      window.open(project?.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: project?.title,
      text: `Check out this project: ${project?.title}`,
      url: window.location?.href
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    const url = window.location?.href;
    navigator.clipboard?.writeText(url)?.then(() => {
      if (onShare) onShare('Link copied to clipboard!');
    })?.catch(() => {
      if (onShare) onShare('Unable to copy link');
    });
  };

  const hasActions = project?.liveUrl || project?.githubUrl;

  if (!hasActions) return null;

  return (
    <div className="sticky bottom-0 bg-card border-t border-border p-4 md:p-6">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          {project?.liveUrl && (
            <Button
              variant="default"
              className="flex-1"
              onClick={handleViewLive}
              iconName="ExternalLink"
              iconPosition="right"
            >
              View Live Site
            </Button>
          )}
          {project?.githubUrl && (
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleViewCode}
              iconName="Github"
              iconPosition="right"
            >
              View Code
            </Button>
          )}
        </div>

        {/* Secondary Actions */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            aria-label="Share project"
            className="w-10 h-10"
          >
            <Icon name="Share2" size={18} />
          </Button>
        </div>
      </div>
      {/* Additional Info */}
      {(project?.liveUrl || project?.githubUrl) && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            {project?.liveUrl && (
              <div className="flex items-center space-x-1">
                <Icon name="Globe" size={14} />
                <span>Live Demo</span>
              </div>
            )}
            {project?.githubUrl && (
              <div className="flex items-center space-x-1">
                <Icon name="Github" size={14} />
                <span>Source Code</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectActions;