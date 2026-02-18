import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterBar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange,
  sortBy,
  onSortChange 
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'title', label: 'Title A-Z' },
    { value: 'featured', label: 'Featured' }
  ];

  useEffect(() => {
    const checkScrollButtons = () => {
      if (scrollContainerRef?.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef?.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    checkScrollButtons();
    const container = scrollContainerRef?.current;
    if (container) {
      container?.addEventListener('scroll', checkScrollButtons);
      return () => container?.removeEventListener('scroll', checkScrollButtons);
    }
  }, [categories]);

  const scrollLeft = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef?.current?.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef?.current?.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch && searchQuery) {
      onSearchChange('');
    }
  };

  return (
    <div className="sticky top-16 z-30 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Search Bar - Mobile */}
        {showSearch && (
          <div className="mb-4 md:hidden">
            <Input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e?.target?.value)}
              className="w-full"
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-4">
          {/* Category Filters */}
          <div className="flex-1 relative">
            <div className="flex items-center">
              {/* Scroll Left Button */}
              {canScrollLeft && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollLeft}
                  className="hidden md:flex shrink-0 mr-2"
                  aria-label="Scroll categories left"
                >
                  <Icon name="ChevronLeft" size={20} />
                </Button>
              )}

              {/* Categories Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {categories?.map((category) => (
                  <Button
                    key={category?.id}
                    variant={activeCategory === category?.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onCategoryChange(category?.id)}
                    className="whitespace-nowrap shrink-0"
                  >
                    {category?.name}
                    {category?.count > 0 && (
                      <span className="ml-2 text-xs opacity-70">
                        {category?.count}
                      </span>
                    )}
                  </Button>
                ))}
              </div>

              {/* Scroll Right Button */}
              {canScrollRight && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollRight}
                  className="hidden md:flex shrink-0 ml-2"
                  aria-label="Scroll categories right"
                >
                  <Icon name="ChevronRight" size={20} />
                </Button>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search - Desktop */}
            <div className="hidden md:block">
              <Input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e?.target?.value)}
                className="w-64"
              />
            </div>

            {/* Search Toggle - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="md:hidden"
              aria-label="Toggle search"
            >
              <Icon name={showSearch ? 'X' : 'Search'} size={20} />
            </Button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e?.target?.value)}
                className="appearance-none bg-card border border-border rounded-lg px-3 py-2 pr-8 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {sortOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
              <Icon
                name="ChevronDown"
                size={16}
                className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground"
              />
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(activeCategory !== 'all' || searchQuery) && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {activeCategory !== 'all' && (
              <Button
                variant="secondary"
                size="xs"
                onClick={() => onCategoryChange('all')}
                iconName="X"
                iconPosition="right"
                iconSize={14}
              >
                {categories?.find(c => c?.id === activeCategory)?.name}
              </Button>
            )}
            {searchQuery && (
              <Button
                variant="secondary"
                size="xs"
                onClick={() => onSearchChange('')}
                iconName="X"
                iconPosition="right"
                iconSize={14}
              >
                "{searchQuery}"
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;