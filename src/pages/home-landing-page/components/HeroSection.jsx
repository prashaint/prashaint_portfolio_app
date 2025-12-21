import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import AnimatedBackground from '../../../components/AnimatedBackground';

const HeroSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/prashaint' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/prashaint' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/prashaint44903' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/prashaint/?hl=en' }
  ];

  const handleDownloadResume = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/Prashaint_Mishra_Nov25.pdf';
    link.download = 'Prashaint_Mishra_Nov25.pdf';
    link?.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
    <AnimatedBackground />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Prashaint Kumar Mishra
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6">
                AVP - Senior Data Engineer, Barclays
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Seasoned Senior Data Engineer with 13+ years of hands-on experience architecting and leading complex machine learning–driven data pipeline projects across diverse domains. Expert in designing and implementing robust, scalable, and efficient end-to-end data engineering solutions—from ingestion and transformation to model deployment and monitoring. Adept at navigating technical challenges with precision, optimizing performance, and ensuring data integrity across distributed systems. Passionate about leveraging cutting-edge technologies to drive innovation and deliver impactful results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/portfolio-gallery">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  View My Work
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  aria-label={`Visit ${social?.name} profile`}
                >
                  <Icon 
                    name={social?.icon} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-200" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image - Improved Layout */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Subtle Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
              
              {/* Main Image Container - Clean and Professional */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/10">
                <Image
                  src="assets/images/prashaint_profile2.jpg"
                  alt="Prashaint Mishra - Senior Data Engineer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Professional Status Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-success rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">Available to connect & learn</span>
                </div>
              </div>

              {/* Experience Highlight */}
              <div className="absolute -top-4 right-4 bg-primary text-primary-foreground rounded-lg px-4 py-2 shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">13+</div>
                  <div className="text-xs opacity-90">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <Icon name="ChevronDown" size={20} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;