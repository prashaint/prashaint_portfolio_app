import React from 'react';
import Icon from '../../../components/AppIcon';
import { MotionStagger, MotionStaggerItem } from '../../../components/motion';

const ExperienceStats = ({ experiences }) => {
  const totalYears = experiences?.reduce((acc, exp) => {
    const duration = exp?.duration;
    const years = duration?.match(/(\d+)\s*year/i);
    const months = duration?.match(/(\d+)\s*month/i);
    
    let totalMonths = 0;
    if (years) totalMonths += parseInt(years?.[1]) * 12;
    if (months) totalMonths += parseInt(months?.[1]);
    
    return acc + totalMonths;
  }, 0);

  const totalCompanies = new Set(experiences.map(exp => exp.company))?.size;
  const totalProjects = experiences?.reduce((acc, exp) => acc + (exp?.projectsCount || 0), 0);
  
  const allTechnologies = experiences?.reduce((acc, exp) => {
    if (exp?.technologies) {
      exp?.technologies?.forEach(tech => acc?.add(tech));
    }
    return acc;
  }, new Set());

  const stats = [
    {
      icon: 'Clock',
      label: 'Years of Experience',
      value: Math.floor(totalYears / 12),
      color: 'text-primary'
    },
    {
      icon: 'Building',
      label: 'Companies',
      value: totalCompanies,
      color: 'text-success'
    },
    {
      icon: 'FolderOpen',
      label: 'Projects',
      value: totalProjects,
      color: 'text-warning'
    },
    {
      icon: 'Code',
      label: 'Technologies',
      value: allTechnologies?.size,
      color: 'text-accent'
    }
  ];

  return (
    <MotionStagger staggerDelay={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats?.map((stat, index) => (
        <MotionStaggerItem key={index}>
          <div
            className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
          >
            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted mb-3 ${stat?.color}`}>
              <Icon name={stat?.icon} size={20} />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stat?.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat?.label}
            </div>
          </div>
        </MotionStaggerItem>
      ))}
    </MotionStagger>
  );
};

export default ExperienceStats;