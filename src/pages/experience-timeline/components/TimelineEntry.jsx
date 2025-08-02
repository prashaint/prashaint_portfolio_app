import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TimelineEntry = ({ experience, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex items-start space-x-4 md:space-x-6 pb-8 md:pb-12">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 md:left-8 top-16 w-0.5 h-full bg-border" />
      )}
      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-sm">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-muted rounded-lg overflow-hidden">
            <Image
              src={experience?.companyLogo}
              alt={`${experience?.company} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                {experience?.role}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="text-primary font-medium">{experience?.company}</p>
                <span className="hidden sm:block text-muted-foreground">•</span>
                <p className="text-sm text-muted-foreground">{experience?.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                {experience?.duration}
              </span>
              {experience?.type && (
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  experience?.type === 'Full-time' ?'bg-success/10 text-success'
                    : experience?.type === 'Contract' ?'bg-warning/10 text-warning' :'bg-muted text-muted-foreground'
                }`}>
                  {experience?.type}
                </span>
              )}
            </div>
          </div>

          {/* Summary */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience?.summary}
          </p>

          {/* Technologies */}
          {experience?.technologies && experience?.technologies?.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {experience?.technologies?.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Expand/Collapse Button */}
          {experience?.achievements && experience?.achievements?.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleExpanded}
              iconName={isExpanded ? 'ChevronUp' : 'ChevronDown'}
              iconPosition="right"
              className="mb-4"
            >
              {isExpanded ? 'Show Less' : 'Show More Details'}
            </Button>
          )}

          {/* Expanded Content */}
          {isExpanded && experience?.achievements && (
            <div className="border-t border-border pt-4 animate-slide-in-from-top">
              <h4 className="text-sm font-medium text-foreground mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {experience?.achievements?.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects Link */}
          {experience?.projectsCount && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {experience?.projectsCount} related projects
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View Projects
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineEntry;