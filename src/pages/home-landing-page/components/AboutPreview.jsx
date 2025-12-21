import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AboutPreview = () => {
  const achievements = [
    {
      number: "20+",
      label: "Projects Completed",
      icon: "CheckCircle"
    },
    {
      number: "13+",
      label: "Years Experience",
      icon: "Calendar"
    },
    {
      number: "10+",
      label: "Happy Clients",
      icon: "Users"
    },
    {
      number: "15+",
      label: "Technologies",
      icon: "Code"
    }
  ];

  const highlights = [
    "Senior Data Engineer with expertiese on modern and complex Data Pipelines development",
    "End-to-end data solutions from ingestion to visualization",
    "Performance optimization and scalable architecture",
    "Agile development and team collaboration"
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                digital experiences that make a difference. With over 5 years of experience in the industry, 
                I've had the privilege of working with diverse clients and teams to bring innovative ideas to life.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My journey began with a Master's degree from BIT Mesra, and it has evolved into a career dedicated to crafting complex and scalable data pipelines. 
                I believe in the power of data engineering to solve real-world problems and drive business decisions.
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">What I Do Best</h3>
              <div className="space-y-3">
                {highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={14} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about-bio-section">
                <Button 
                  variant="default"
                  iconName="User"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Learn More About Me
                </Button>
              </Link>
              <Link to="/contact-form-page">
                <Button 
                  variant="outline"
                  iconName="Mail"
                  iconPosition="left"
                  className="w-full sm:w-auto"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft-hover">
                  <Image
                    src="assets/images/prashaint.jpg"
                    alt="Prashaint Mishra working on a project"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements?.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-4 text-center shadow-soft-hover hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name={achievement?.icon} size={16} className="text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {achievement?.number}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {achievement?.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;