import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsOverview from './components/SkillsOverview';
import AboutPreview from './components/AboutPreview';
import ContactCTA from './components/ContactCTA';

const HomeLandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'John Doe - Full-Stack Developer & UI/UX Designer';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Professional portfolio of John Doe - Full-Stack Developer and UI/UX Designer. Explore my projects, skills, and experience in modern web development.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional portfolio of John Doe - Full-Stack Developer and UI/UX Designer. Explore my projects, skills, and experience in modern web development.';
      document.getElementsByTagName('head')?.[0]?.appendChild(meta);
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProjects />
        <SkillsOverview />
        <AboutPreview />
        <ContactCTA />
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {new Date()?.getFullYear()} John Doe. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLandingPage;