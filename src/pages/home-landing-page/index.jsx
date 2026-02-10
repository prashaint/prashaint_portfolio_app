import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsOverview from './components/SkillsOverview';
import AboutPreview from './components/AboutPreview';
import ContactCTA from './components/ContactCTA';
import TestimonialsSlider from '../../components/TestimonialsSlider';
import { PageTransition } from '../../components/motion';

const HomeLandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Prashaint Mishra - AVP - Senior Data Engineer';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Professional portfolio of Prashaint Mishra - AVP - Senior Data Engineer. Explore my projects, skills, and experience in modern and complex Data Pipelines.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional portfolio of Prashaint Mishra - AVP - Senior Data Engineer. Explore my projects, skills, and experience in modern and complex Data Pipelines.';
      document.getElementsByTagName('head')?.[0]?.appendChild(meta);
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturedProjects />
          <SkillsOverview />
          <AboutPreview />
          <TestimonialsSlider />
          <ContactCTA />
        </main>
        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground text-sm">
                  © {new Date()?.getFullYear()} Prashaint Mishra. All rights reserved.
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
    </PageTransition>
  );
};

export default HomeLandingPage;
