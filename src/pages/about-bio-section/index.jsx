import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PersonalInfo from './components/PersonalInfo';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import PersonalInterests from './components/PersonalInterests';
import Icon from '../../components/AppIcon';

const AboutBioSection = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'personal', label: 'About Me', icon: 'User' },
    { id: 'skills', label: 'Skills', icon: 'Code' },
    { id: 'credentials', label: 'Credentials', icon: 'Award' },
    { id: 'interests', label: 'Interests', icon: 'Heart' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Me - Alex Johnson | Full Stack Developer & UI/UX Designer</title>
        <meta name="description" content="Learn about Alex Johnson, a passionate full stack developer with 6+ years of experience in React, Node.js, and modern web technologies. Discover my skills, education, and personal interests." />
        <meta name="keywords" content="Alex Johnson, Full Stack Developer, UI/UX Designer, React Developer, Web Developer, Portfolio" />
        <meta property="og:title" content="About Me - Alex Johnson | Full Stack Developer" />
        <meta property="og:description" content="Passionate full stack developer specializing in React, Node.js, and user experience design. Based in San Francisco with 6+ years of experience." />
        <meta property="og:type" content="profile" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get to Know Me Better
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm more than just a developer. Discover my journey, skills, passions, and the values that drive my work.
            </p>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === section?.id
                    ? 'bg-primary text-primary-foreground shadow-soft-hover'
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <Icon name={section?.icon} size={18} />
                <span>{section?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Personal Info Section */}
        <section id="personal" className="mb-20">
          <PersonalInfo />
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <SkillsSection />
        </section>

        {/* Credentials Section */}
        <section id="credentials" className="mb-20">
          <CertificationsSection />
        </section>

        {/* Personal Interests Section */}
        <section id="interests" className="mb-20">
          <PersonalInterests />
        </section>
      </main>
      {/* Floating Navigation */}
      {isScrolled && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
          <div className="bg-card rounded-lg shadow-soft-hover p-2 space-y-2">
            {sections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => scrollToSection(section?.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  activeSection === section?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                title={section?.label}
              >
                <Icon name={section?.icon} size={18} />
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-form-page"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Icon name="Mail" size={18} className="mr-2" />
              Get In Touch
            </a>
            <a
              href="/portfolio-gallery"
              className="inline-flex items-center justify-center px-6 py-3 bg-card text-foreground border border-border rounded-lg font-medium hover:bg-muted transition-colors duration-200"
            >
              <Icon name="Briefcase" size={18} className="mr-2" />
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBioSection;