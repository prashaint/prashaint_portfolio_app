import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHeader = () => {
  const features = [
    {
      icon: 'Clock',
      title: 'Quick Response',
      description: 'Get replies within 24 hours'
    },
    {
      icon: 'Shield',
      title: 'Confidential',
      description: 'Your information is secure'
    },
    {
      icon: 'Users',
      title: 'Collaborative',
      description: 'Work together on your vision'
    }
  ];

  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Let's Create Something
          <span className="text-primary block">Amazing Together</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          <h4><b>Ready to transform your ideas into reality?</b></h4> 
          <br/><p>Whether you want to build a scalable data pipeline, a cutting-edge machine learning model, a user-friendly web application, or a robust mobile app.
          <br/>With over 13 years of experience in data engineering and software development, I specialize in delivering high-quality solutions tailored to your needs. Let's collaborate to turn your project into a success story!
          I'm here to help bring your vision to life.</p>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {features?.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Icon name={feature?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                {feature?.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;