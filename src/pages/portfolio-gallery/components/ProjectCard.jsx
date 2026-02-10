import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onProjectClick, className = '' }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleCardClick = () => {
    onProjectClick(project);
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' || e?.key === ' ') {
      e?.preventDefault();
      handleCardClick();
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative bg-card rounded-lg border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-soft-hover hover:border-primary/20 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${className}`}
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project?.title}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <Image
          src={project?.featuredImage}
          alt={project?.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
        />

        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
        }`} />

        {/* Status Badge */}
        {project?.status && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
              project?.status === 'completed' 
                ? 'bg-success/20 text-success border border-success/30' 
                : project?.status === 'in-progress' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-border'
            }`}>
              {project?.status === 'completed' ? 'Completed' : 
               project?.status === 'in-progress' ? 'In Progress' : 
               project?.status}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-3 right-3">
            <div className="flex items-center gap-1 px-2 py-1 bg-accent/20 text-accent border border-accent/30 rounded-full backdrop-blur-sm">
              <Icon name="Star" size={12} className="fill-current" />
              <span className="text-xs font-medium">Featured</span>
            </div>
          </div>
        )}

        {/* Quick Actions - Desktop Hover */}
        <div className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } hidden md:flex`}>
          {project?.liveUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e?.stopPropagation();
                window.open(project?.liveUrl, '_blank');
              }}
              iconName="ExternalLink"
              iconPosition="right"
              className="backdrop-blur-sm"
            >
              Live Demo
            </Button>
          )}
          {project?.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e?.stopPropagation();
                window.open(project?.githubUrl, '_blank');
              }}
              iconName="Github"
              iconPosition="right"
              className="backdrop-blur-sm"
            >
              Code
            </Button>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {project?.title}
          </h3>
          <Icon 
            name="ArrowUpRight" 
            size={16} 
            className="text-muted-foreground group-hover:text-primary transition-colors duration-200 shrink-0 mt-1" 
          />
        </div>

        {/* Description */}
        {project?.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {project?.description}
          </p>
        )}

        {/* Technologies */}
        {project?.technologies && project?.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium text-muted-foreground">
                +{project?.technologies?.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {/* Date */}
          {project?.completedDate && (
            <span>
              {new Date(project.completedDate)?.toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
              })}
            </span>
          )}

          {/* Client */}
          {project?.client && (
            <span className="truncate ml-2">
              {project?.client}
            </span>
          )}

          {/* Duration */}
          {project?.duration && !project?.client && (
            <span>
              {project?.duration}
            </span>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex gap-2 mt-3 md:hidden">
          {project?.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e?.stopPropagation();
                window.open(project?.liveUrl, '_blank');
              }}
              iconName="ExternalLink"
              iconPosition="right"
              className="flex-1"
            >
              Live
            </Button>
          )}
          {project?.githubUrl && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e?.stopPropagation();
                window.open(project?.githubUrl, '_blank');
              }}
              iconName="Github"
              iconPosition="right"
              className="flex-1"
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;