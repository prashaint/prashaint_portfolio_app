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
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/assets/resume/Prashaint_Kumar_Mishra_Mar25.pdf';
    link.download = 'Prashaint_Kumar_Mishra_Mar25.pdf';
    link?.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Professional Gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-800/20 to-purple-700/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-blue-200 text-sm font-medium">Available to learn and share knowledge!</span>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Prashaint Kumar
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Mishra
                </span>
              </h1>
              
              {/* Professional Title with animated underline */}
              <div className="relative inline-block">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-200 mb-6">
                  AVP - Senior Data Engineer, Barclays
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70"></div>
              </div>
              
              {/* Enhanced Description */}
              <div className="relative">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
                  <span className="text-cyan-300 font-semibold">13+ years</span> of expertise in architecting 
                  <span className="text-purple-300 font-semibold"> ML-driven data pipelines</span>, 
                  transforming complex data into actionable insights. Passionate about leveraging 
                  <span className="text-blue-300 font-semibold"> cutting-edge technologies</span> to drive innovation 
                  and deliver scalable solutions.
                </p>
                
                {/* Key expertise tags */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                  {['PySpark', 'Machine Learning', 'AWS', 'Python', 'Data Engineering'].map((tag, index) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-400/30 rounded-full backdrop-blur-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/portfolio-gallery">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore My Work
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-4 backdrop-blur-sm transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-500/20"
                  aria-label={`Visit ${social?.name} profile`}
                >
                  <Icon 
                    name={social?.icon} 
                    size={20} 
                    className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              
              {/* Image decorative background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] overflow-hidden rounded-2xl border-2 border-slate-600/50 backdrop-blur-sm">
                <Image
                  src="assets/images/prashaint_profile2.jpg"
                  alt="Prashaint Mishra - Senior Data Engineer"
                  className="w-full h-full object-cover"
                />
                
                {/* Professional overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Enhanced Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-emerald-500 to-cyan-500 border-2 border-emerald-400/50 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-emerald-300 rounded-full animate-pulse shadow-lg"></div>
                  <div>
                    <div className="text-white font-semibold text-sm">Available to connect learn</div>
                    <div className="text-emerald-100 text-xs">Open to explore ideas to innovate</div>
                  </div>
                </div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -left-6 top-16 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 rounded-xl p-4 backdrop-blur-sm shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">13+</div>
                  <div className="text-xs text-slate-300">Years Experience</div>
                </div>
              </div>

              <div className="absolute -right-6 top-32 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/50 rounded-xl p-4 backdrop-blur-sm shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-xs text-slate-300">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-slate-400 font-medium">Discover More</span>
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;