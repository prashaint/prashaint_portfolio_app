import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsOverview from './components/SkillsOverview';
import AboutPreview from './components/AboutPreview';
import ContactCTA from './components/ContactCTA';
import TestimonialsSlider from '../../components/TestimonialsSlider';
import Footer from '../../components/ui/Footer';
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
        <Footer />
      </div>
    </PageTransition>
  );
};

export default HomeLandingPage;
