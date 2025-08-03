import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalInfo = () => {
  const personalData = {
    name: "Prashaint Mishra",
    title: "Senior Data Engineer, Barclays",
    location: "Pune, MH, India",
    email: "prashaint.kumar.mishra@gmail.com",
    phone: "+91 8484093319",
    bio: `I'm Senior Data Engineer with over 13 years of experience. I have designed, developed and maintained complex data pipelines for ML projects. My journey began with a MCA degree from BIT Mesra Ranchi, where I discovered my love for both coding and Data Engineering.\n\nI specialize in PySpark, Python, and modern Data Engineering technologies, with a keen eye for creating complext and scalable data pipelines. My approach combines technical expertise with creative problem-solving, ensuring that every project not only functions flawlessly but also provides an exceptional user experience.\n\nWhen I'm not coding, you'll find me exploring the latest design trends, contributing to open-source projects, or hiking the beautiful trails around the Bay Area. I believe in continuous learning and staying ahead of the curve in this ever-evolving tech landscape.`,
    profileImage: "assets/images/prashaint.jpg",
    resumeUrl: "/assets/resume/alex-johnson-resume.pdf"
  };

  const handleDownloadResume = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = personalData?.resumeUrl;
    link.download = 'prashaint-mishra-v2.pdf';
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
            <div className="text-2xl font-bold text-primary">13+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-2xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;