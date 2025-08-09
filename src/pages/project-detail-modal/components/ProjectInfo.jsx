import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectInfo = ({ project }) => {
  if (!project) return null;

  const infoItems = [
    { label: 'Client', value: project?.client, icon: 'Building' },
    { label: 'Duration', value: project?.duration, icon: 'Clock' },
    { label: 'Role', value: project?.role, icon: 'User' },
    { label: 'Team Size', value: project?.teamSize, icon: 'Users' },
    { label: 'Platform', value: project?.platform, icon: 'Monitor' },
    { label: 'Status', value: project?.status, icon: 'CheckCircle' }
  ]?.filter(item => item?.value);

  return (
    <div className="space-y-6">
      {/* Project Title and Status - Headers use sans-serif */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground font-sans">
            {project?.title}
          </h1>
          {project?.status && (
            <span className={`px-3 py-1 text-sm font-medium rounded-full font-sans ${
              project?.status === 'completed' 
                ? 'bg-success/10 text-success' 
                : project?.status === 'in-progress' ?'bg-warning/10 text-warning'
                : project?.status === 'upcoming' ?'bg-accent/10 text-accent' :'bg-muted text-muted-foreground'
            }`}>
              {project?.status?.charAt(0)?.toUpperCase() + project?.status?.slice(1)}
            </span>
          )}
        </div>
        {project?.subtitle && (
          <p className="text-lg text-muted-foreground font-claude-ui">{project?.subtitle}</p>
        )}
      </div>
      
      {/* Project Description - Main content uses Claude serif font */}
      {project?.description && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground font-sans">Overview</h2>
          <p className="text-foreground leading-relaxed font-claude-ui">{project?.description}</p>
        </div>
      )}
      
      {/* Project Details Grid - Labels sans, content serif */}
      {infoItems?.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground font-sans">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infoItems?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={item?.icon} size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground font-sans">{item?.label}</p>
                  <p className="text-foreground truncate font-claude">{item?.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Technologies - UI elements use sans-serif */}
      {project?.technologies && project?.technologies?.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground font-sans">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full font-sans"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Challenges - Long-form content uses Claude serif */}
      {project?.challenges && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground font-sans">Challenges & Solutions</h2>
          <p className="text-foreground leading-relaxed font-claude-ui">{project?.challenges}</p>
        </div>
      )}
      
      {/* Results - Long-form content uses Claude serif */}
      {project?.results && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground font-sans">Results & Impact</h2>
          <p className="text-foreground leading-relaxed font-claude-ui">{project?.results}</p>
        </div>
      )}
      
      {/* Key Features - Mixed: headers sans, content serif */}
      {project?.features && project?.features?.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground font-sans">Key Features</h2>
          <ul className="space-y-2">
            {project?.features?.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-claude">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;