import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-[80] p-3 sm:p-4 rounded-full bg-blue-600 text-white shadow-lg hover:scale-110 transition-transform active:scale-95"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  ) : null;
};

export default BackToTop;