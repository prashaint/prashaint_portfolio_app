import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineEntry = ({ experience, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getCompanyInitials = (companyName) => {
    return companyName
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getCompanyColor = (companyName) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500', 
      'bg-purple-500',
      'bg-red-500',
      'bg-yellow-500',
      'bg-indigo-500',
      'bg-pink-500',
      'bg-teal-500'
    ];
    // Use company name hash for consistent colors
    let hash = 0;
    for (let i = 0; i < companyName.length; i++) {
      hash = companyName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  // Company logo mapping - using more reliable sources
  const getCompanyLogo = (companyName) => {
    const logoMap = {
      'Barclays PLC': {
        url: 'https://logo.clearbit.com/barclays.com',
        fallback: 'https://logowik.com/content/uploads/images/barclays6037.logowik.com.webp'
      },
      'Citibank': {
        url: 'https://logo.clearbit.com/citigroup.com',
        fallback: 'https://logowik.com/content/uploads/images/citibank2754.logowik.com.webp'
      },
      'Cognizant': {
        url: 'https://logo.clearbit.com/cognizant.com',
        fallback: 'https://logowik.com/content/uploads/images/cognizant9709.logowik.com.webp'
      },
      'Infosys': {
        url: 'https://logo.clearbit.com/infosys.com',
        fallback: 'https://logowik.com/content/uploads/images/infosys6265.logowik.com.webp'
      }
    };
    return logoMap[companyName] || null;
  };

  const CompanyLogo = ({ company }) => {
    const [imageError, setImageError] = useState(false);
    const [secondaryError, setSecondaryError] = useState(false);
    const logoInfo = getCompanyLogo(company);

    if (!logoInfo || imageError && secondaryError) {
      // Show initials fallback
      return (
        <div className={`w-8 h-8 md:w-10 md:h-10 ${getCompanyColor(company)} rounded-full flex items-center justify-center`}>
          <span className="text-white text-xs md:text-sm font-bold">
            {getCompanyInitials(company)}
          </span>
        </div>
      );
    }

    return (
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-white flex items-center justify-center p-1">
        <img
          src={imageError ? logoInfo.fallback : logoInfo.url}
          alt={`${company} logo`}
          className="w-full h-full object-contain rounded-full"
          onError={() => {
            if (!imageError) {
              setImageError(true);
            } else {
              setSecondaryError(true);
            }
          }}
          onLoad={() => {
            setImageError(false);
            setSecondaryError(false);
          }}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    );
  };

  return (
    <div className="relative flex items-start space-x-4 md:space-x-6 pb-8 md:pb-12">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 md:left-8 top-16 w-0.5 h-full bg-border" />
      )}
      
      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-sm overflow-hidden">
          <CompanyLogo company={experience?.company} />
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
                  experience?.type === 'Full-time' ? 'bg-success/10 text-success'
                    : experience?.type === 'Contract' ? 'bg-warning/10 text-warning' 
                    : 'bg-muted text-muted-foreground'
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
          <AnimatePresence>
            {isExpanded && experience?.achievements && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
                className="border-t border-border pt-4"
              >
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
              </motion.div>
            )}
          </AnimatePresence>

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