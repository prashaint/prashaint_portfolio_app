import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHeader = () => {
  const features = [
    {
      icon: 'MessageCircle',
      title: 'Open Communication',
      description: 'Friendly and accessible discussions'
    },
    {
      icon: 'Shield',
      title: 'Learning Focused',
      description: 'Knowledge sharing and growth'
    },
    {
      icon: 'Users',
      title: 'Community Building',
      description: 'Building meaningful connections'
    }
  ];

  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Let's Connect & 
          <span className="text-primary block">Explore Together</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          <h4><b>Ready to embark on a learning journey together?</b></h4> 
          <br/><p>Whether you're interested in data engineering, machine learning, cloud technologies, or just want to share knowledge and experiences.
          <br/>With over 13 years of experience in data engineering and software development, I'm passionate about sharing knowledge, mentoring, and learning from others. Let's connect to explore opportunities for mutual growth, knowledge exchange, and building meaningful professional relationships!
          I'm here to connect, learn, and grow together.</p>
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