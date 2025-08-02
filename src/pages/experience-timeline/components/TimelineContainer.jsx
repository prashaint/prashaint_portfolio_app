import React from 'react';
import TimelineEntry from './TimelineEntry';

const TimelineContainer = ({ experiences }) => {
  if (experiences?.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">No experiences found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {experiences?.map((experience, index) => (
        <TimelineEntry
          key={experience?.id}
          experience={experience}
          index={index}
          isLast={index === experiences?.length - 1}
        />
      ))}
    </div>
  );
};

export default TimelineContainer;