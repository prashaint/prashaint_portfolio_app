import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectImageGallery = ({ images, projectTitle, onImageLoad }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  if (!images || images?.length === 0) return null;

  const hasMultipleImages = images?.length > 1;

  const handlePreviousImage = () => {
    if (hasMultipleImages && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setIsImageLoading(true);
    }
  };

  const handleNextImage = () => {
    if (hasMultipleImages && currentImageIndex < images?.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setIsImageLoading(true);
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
    if (onImageLoad) onImageLoad();
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setIsImageLoading(true);
  };

  return (
    <div className="relative bg-muted">
      {/* Main Image Display */}
      <div className="relative h-64 md:h-96 lg:h-[500px]">
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={images?.[currentImageIndex]}
          alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
          onLoad={handleImageLoad}
        />
        
        {/* Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card backdrop-blur-sm w-10 h-10"
              onClick={handlePreviousImage}
              disabled={currentImageIndex === 0}
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card backdrop-blur-sm w-10 h-10"
              onClick={handleNextImage}
              disabled={currentImageIndex === images?.length - 1}
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </>
        )}

        {/* Image Counter */}
        {hasMultipleImages && (
          <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
            {currentImageIndex + 1} / {images?.length}
          </div>
        )}
      </div>
      {/* Thumbnail Navigation */}
      {hasMultipleImages && (
        <div className="p-4 bg-card border-t border-border">
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
            {images?.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'border-primary shadow-sm' 
                    : 'border-border hover:border-muted-foreground'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`${projectTitle} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Image Indicators for Mobile */}
      {hasMultipleImages && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 md:hidden">
          {images?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex 
                  ? 'bg-primary' :'bg-card/60 hover:bg-card/80'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectImageGallery;