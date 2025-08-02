import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalInfo = () => {
  const personalData = {
    name: "Alex Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    location: "San Francisco, CA",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    bio: `I'm a passionate full stack developer with over 6 years of experience creating digital solutions that bridge the gap between design and functionality. My journey began with a Computer Science degree from Stanford University, where I discovered my love for both coding and user experience design.\n\nI specialize in React, Node.js, and modern web technologies, with a keen eye for creating intuitive user interfaces. My approach combines technical expertise with creative problem-solving, ensuring that every project not only functions flawlessly but also provides an exceptional user experience.\n\nWhen I'm not coding, you'll find me exploring the latest design trends, contributing to open-source projects, or hiking the beautiful trails around the Bay Area. I believe in continuous learning and staying ahead of the curve in this ever-evolving tech landscape.`,
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    resumeUrl: "/assets/resume/alex-johnson-resume.pdf"
  };

  const handleDownloadResume = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = personalData?.resumeUrl;
    link.download = 'Alex-Johnson-Resume.pdf';
    document.body?.appendChild(link);
    link?.click();
    document.body?.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Profile Image Section */}
      <div className="flex flex-col items-center lg:items-start space-y-6">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-soft-hover">
            <Image
              src={personalData?.profileImage}
              alt={personalData?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-soft-hover">
            <span className="text-2xl">👋</span>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="text-center lg:text-left space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {personalData?.name}
          </h1>
          <p className="text-lg text-primary font-medium">
            {personalData?.title}
          </p>
          <p className="text-muted-foreground flex items-center justify-center lg:justify-start space-x-2">
            <span>📍</span>
            <span>{personalData?.location}</span>
          </p>
        </div>

        {/* Download Resume Button */}
        <Button
          variant="default"
          size="lg"
          onClick={handleDownloadResume}
          iconName="Download"
          iconPosition="left"
          className="w-full sm:w-auto"
        >
          Download Resume
        </Button>
      </div>
      {/* Bio Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            About Me
          </h2>
          <div className="prose prose-gray max-w-none">
            {personalData?.bio?.split('\n\n')?.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">6+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;