import React, { useState, useEffect } from 'react';

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);
  
  const testimonials = [
    {
      name: "Engineering Manager",
      role: "Barclays",
      text: "Prashaint consistently delivers high-quality data solutions and demonstrates exceptional technical leadership. His expertise in ML pipelines is outstanding."
    },
    {
      name: "Senior Engineer",
      role: "Citi",
      text: "Working with Prashaint was a great experience. His expertise in PySpark and scalable data engineering architecture is truly impressive."
    },
    {
      name: "Technical Lead",
      role: "Previous Team",
      text: "Prashaint's ability to architect complex ML pipelines and mentor junior engineers makes him an invaluable team member."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-foreground">
        What People Say
      </h2>
      
      <div className="max-w-4xl mx-auto relative bg-card rounded-xl shadow-soft-hover p-6 sm:p-8 min-h-[200px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === current ? 'opacity-100' : 'opacity-0 absolute inset-0 p-6 sm:p-8'
            }`}
          >
            <p className="text-base sm:text-lg italic mb-4 text-foreground">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                {testimonial.name[0]}
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? 'bg-primary w-8' : 'bg-muted w-2'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;