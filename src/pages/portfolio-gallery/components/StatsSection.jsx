import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = ({ projects }) => {
  const stats = [
    {
      id: 'total',
      label: 'Total Projects',
      value: projects?.length,
      icon: 'Briefcase',
      color: 'text-primary'
    },
    {
      id: 'completed',
      label: 'Completed',
      value: projects?.filter(p => p?.status === 'completed')?.length,
      icon: 'CheckCircle',
      color: 'text-success'
    },
    {
      id: 'technologies',
      label: 'Technologies',
      value: [...new Set(projects.flatMap(p => p.technologies || []))]?.length,
      icon: 'Code',
      color: 'text-accent'
    },
    {
      id: 'clients',
      label: 'Happy Clients',
      value: [...new Set(projects.map(p => p.client).filter(Boolean))]?.length,
      icon: 'Users',
      color: 'text-secondary'
    }
  ];

  return (
    <div className="bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border mb-3 group-hover:scale-110 transition-transform duration-200 ${stat?.color}`}>
                <Icon name={stat?.icon} size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;