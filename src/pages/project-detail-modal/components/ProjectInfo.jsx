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
      {/* Project Title and Status */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {project?.title}
          </h1>
          {project?.status && (
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
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
          <p className="text-lg text-muted-foreground">{project?.subtitle}</p>
        )}
      </div>
      {/* Project Description */}
      {project?.description && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Overview</h2>
          <p className="text-foreground leading-relaxed">{project?.description}</p>
        </div>
      )}
      {/* Project Details Grid */}
      {infoItems?.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infoItems?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={item?.icon} size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">{item?.label}</p>
                  <p className="text-foreground truncate">{item?.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Technologies */}
      {project?.technologies && project?.technologies?.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      {/* Challenges */}
      {project?.challenges && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Challenges & Solutions</h2>
          <p className="text-foreground leading-relaxed">{project?.challenges}</p>
        </div>
      )}
      {/* Results */}
      {project?.results && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Results & Impact</h2>
          <p className="text-foreground leading-relaxed">{project?.results}</p>
        </div>
      )}
      {/* Key Features */}
      {project?.features && project?.features?.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Key Features</h2>
          <ul className="space-y-2">
            {project?.features?.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;