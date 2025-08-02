import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectGrid = ({ 
  projects, 
  loading, 
  onProjectClick, 
  onLoadMore, 
  hasMore = false 
}) => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const loadMoreRef = useRef(null);
  const observerRef = useRef(null);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (loadMoreRef?.current && hasMore) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      
      observerRef?.current?.observe(loadMoreRef?.current);
    }

    return () => {
      if (observerRef?.current) {
        observerRef?.current?.disconnect();
      }
    };
  }, [hasMore]);

  // Auto load more when intersection is detected
  useEffect(() => {
    if (isIntersecting && hasMore && !loading) {
      onLoadMore();
    }
  }, [isIntersecting, hasMore, loading, onLoadMore]);

  // Animate projects on load
  useEffect(() => {
    setVisibleProjects([]);
    const timer = setTimeout(() => {
      setVisibleProjects(projects);
    }, 100);

    return () => clearTimeout(timer);
  }, [projects]);

  if (loading && projects?.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 })?.map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (projects?.length === 0 && !loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Search" size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No projects found
          </h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters or search terms to find what you're looking for.
          </p>
          <Button
            variant="outline"
            onClick={() => window.location?.reload()}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Reset Filters
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {projects?.length} project{projects?.length !== 1 ? 's' : ''}
        </p>
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProjects?.map((project, index) => (
          <ProjectCard
            key={project?.id}
            project={project}
            onProjectClick={onProjectClick}
            className={`animate-fade-in-up`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          />
        ))}
      </div>
      {/* Load More */}
      {hasMore && (
        <div ref={loadMoreRef} className="flex justify-center mt-12">
          {loading ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span>Loading more projects...</span>
            </div>
          ) : (
            <Button
              variant="outline"
              onClick={onLoadMore}
              iconName="Plus"
              iconPosition="left"
            >
              Load More Projects
            </Button>
          )}
        </div>
      )}
      {/* Back to Top */}
      <div className="fixed bottom-6 right-6 z-30">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="shadow-soft-hover"
          aria-label="Back to top"
        >
          <Icon name="ArrowUp" size={20} />
        </Button>
      </div>
    </div>
  );
};

// Skeleton component for loading state
const ProjectCardSkeleton = () => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-muted" />
      <div className="p-4">
        <div className="h-5 bg-muted rounded mb-2" />
        <div className="h-4 bg-muted rounded w-3/4 mb-3" />
        <div className="flex gap-1 mb-3">
          <div className="h-6 bg-muted rounded w-16" />
          <div className="h-6 bg-muted rounded w-20" />
          <div className="h-6 bg-muted rounded w-14" />
        </div>
        <div className="h-3 bg-muted rounded w-1/2" />
      </div>
    </div>
  );
};

export default ProjectGrid;