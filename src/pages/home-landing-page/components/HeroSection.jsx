import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/prashaint' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/prashaint' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/prashaint44903' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/prashaint/?hl=en' }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/Prashaint_Kumar_Mishra_Mar25.pdf';
    link.download = 'Prashaint_Kumar_Mishra_Mar25.pdf';
    link?.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Gradient Background with Shine Effects - Applied via CSS */}
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Prashaint Kumar Mishra
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 mb-6">
                AVP - Senior Data Engineer, Barclays
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Seasoned Senior Data Engineer with 13+ years of hands-on experience architecting and leading complex machine learning–driven data pipeline projects across diverse domains. Expert in designing and implementing robust, scalable, and efficient end-to-end data engineering solutions—from ingestion and transformation to model deployment and monitoring. Adept at navigating technical challenges with precision, optimizing performance, and ensuring data integrity across distributed systems. Passionate about leveraging cutting-edge technologies to drive innovation and deliver impactful results.
              </p>
            </div>

            {/* CTA Buttons with Modern Effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/portfolio-gallery">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 btn-glow shadow-lg hover:shadow-xl transition-all duration-300"
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
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm glass-effect"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links with Modern Styling */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group glass-effect"
                  aria-label={`Visit ${social?.name} profile`}
                >
                  <Icon 
                    name={social?.icon} 
                    size={20} 
                    className="text-white group-hover:text-white transition-colors duration-200" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image with Modern Effects */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Gradient Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-white/10 rounded-2xl transform rotate-3 backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-white/10 rounded-2xl transform -rotate-3 backdrop-blur-sm"></div>
              
              {/* Main Image Container with Gradient Border */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] overflow-hidden rounded-2xl shadow-2xl pulse-glow">
                <Image
                  src="assets/images/prashaint_profile2.jpg"
                  alt="Prashaint Mishra - Senior Data Engineer"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge with Glassmorphism */}
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-lg p-4 shadow-xl border border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-white/70">Scroll to explore</span>
            <Icon name="ChevronDown" size={20} className="text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;