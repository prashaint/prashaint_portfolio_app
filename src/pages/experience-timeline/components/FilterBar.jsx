import React from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterBar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  experienceData 
}) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'consulting', label: 'Consulting' }
  ];

  const roleTypeOptions = [
    { value: 'all', label: 'All Roles' },
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'fullstack', label: 'Full Stack Development' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'devops', label: 'DevOps' },
    { value: 'management', label: 'Management' }
  ];

  const timePeriodOptions = [
    { value: 'all', label: 'All Time' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: 'before-2020', label: 'Before 2020' }
  ];

  const hasActiveFilters = filters?.industry !== 'all' || 
                          filters?.roleType !== 'all' || 
                          filters?.timePeriod !== 'all';

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="flex-1 min-w-0">
              <Select
                placeholder="Filter by industry"
                options={industryOptions}
                value={filters?.industry}
                onChange={(value) => onFilterChange('industry', value)}
                className="w-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Select
                placeholder="Filter by role type"
                options={roleTypeOptions}
                value={filters?.roleType}
                onChange={(value) => onFilterChange('roleType', value)}
                className="w-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Select
                placeholder="Filter by time period"
                options={timePeriodOptions}
                value={filters?.timePeriod}
                onChange={(value) => onFilterChange('timePeriod', value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={onClearFilters}
                iconName="X"
                iconPosition="left"
              >
                Clear Filters
              </Button>
            )}
            <div className="text-sm text-muted-foreground whitespace-nowrap">
              {experienceData?.length} {experienceData?.length === 1 ? 'position' : 'positions'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;