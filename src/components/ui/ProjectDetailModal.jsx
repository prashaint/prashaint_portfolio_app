import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Image from '../AppImage';
import Button from './Button';

const ProjectDetailModal = ({ 
  isOpen, 
  onClose, 
  project, 
  projects = [], 
  onNavigateProject 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageLoading(true);
  }, [project]);

  if (!isOpen || !project) return null;

  const currentProjectIndex = projects?.findIndex(p => p?.id === project?.id);
  const hasMultipleImages = project?.images && project?.images?.length > 1;

  const handlePreviousProject = () => {
    if (currentProjectIndex > 0) {
      onNavigateProject(projects?.[currentProjectIndex - 1]);
    }
  };

  const handleNextProject = () => {
    if (currentProjectIndex < projects?.length - 1) {
      onNavigateProject(projects?.[currentProjectIndex + 1]);
    }
  };

  const handlePreviousImage = () => {
    if (hasMultipleImages && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setIsImageLoading(true);
    }
  };

  const handleNextImage = () => {
    if (hasMultipleImages && currentImageIndex < project?.images?.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setIsImageLoading(true);
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleBackdropClick = (e) => {
    if (e?.target === e?.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={handleBackdropClick}
      />
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 bg-card rounded-lg shadow-soft-hover animate-slide-in-from-bottom overflow-hidden md:h-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              {project?.title}
            </h2>
            {project?.status && (
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                project?.status === 'completed' 
                  ? 'bg-success/10 text-success' 
                  : project?.status === 'in-progress' ?'bg-warning/10 text-warning' :'bg-muted text-muted-foreground'
              }`}>
                {project?.status}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Project Navigation */}
            {projects?.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePreviousProject}
                  disabled={currentProjectIndex === 0}
                  aria-label="Previous project"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
                <span className="text-sm text-muted-foreground px-2">
                  {currentProjectIndex + 1} of {projects?.length}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleNextProject}
                  disabled={currentProjectIndex === projects?.length - 1}
                  aria-label="Next project"
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close modal"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          {/* Image Section */}
          <div className="relative flex-1 bg-muted">
            {project?.images && project?.images?.length > 0 && (
              <>
                <div className="relative h-64 md:h-full">
                  {isImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <Image
                    src={project?.images?.[currentImageIndex]}
                    alt={`${project?.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    onLoad={handleImageLoad}
                  />
                </div>
                
                {/* Image Navigation */}
                {hasMultipleImages && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card"
                      onClick={handlePreviousImage}
                      disabled={currentImageIndex === 0}
                      aria-label="Previous image"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card"
                      onClick={handleNextImage}
                      disabled={currentImageIndex === project?.images?.length - 1}
                      aria-label="Next image"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </Button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {project?.images?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setIsImageLoading(true);
                          }}
                          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                            index === currentImageIndex 
                              ? 'bg-primary' :'bg-card/60 hover:bg-card/80'
                          }`}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          {/* Details Section */}
          <div className="w-full md:w-96 flex flex-col">
            <div className="flex-1 p-4 md:p-6 overflow-y-auto">
              {/* Description */}
              {project?.description && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
                  <p className="text-foreground leading-relaxed">{project?.description}</p>
                </div>
              )}

              {/* Technologies */}
              {project?.technologies && project?.technologies?.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-4">
                {project?.client && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Client</h3>
                    <p className="text-foreground">{project?.client}</p>
                  </div>
                )}
                
                {project?.duration && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Duration</h3>
                    <p className="text-foreground">{project?.duration}</p>
                  </div>
                )}
                
                {project?.role && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Role</h3>
                    <p className="text-foreground">{project?.role}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            {(project?.liveUrl || project?.githubUrl) && (
              <div className="p-4 md:p-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-3">
                  {project?.liveUrl && (
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => window.open(project?.liveUrl, '_blank')}
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      View Live
                    </Button>
                  )}
                  {project?.githubUrl && (
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project?.githubUrl, '_blank')}
                      iconName="Github"
                      iconPosition="right"
                    >
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;