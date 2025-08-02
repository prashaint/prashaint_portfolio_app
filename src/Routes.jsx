import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AboutBioSection from './pages/about-bio-section';
import ContactFormPage from './pages/contact-form-page';
import ProjectDetailModal from './pages/project-detail-modal';
import HomeLandingPage from './pages/home-landing-page';
import PortfolioGallery from './pages/portfolio-gallery';
import ExperienceTimeline from './pages/experience-timeline';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutBioSection />} />
        <Route path="/about-bio-section" element={<AboutBioSection />} />
        <Route path="/contact-form-page" element={<ContactFormPage />} />
        <Route path="/project-detail-modal" element={<ProjectDetailModal />} />
        <Route path="/home-landing-page" element={<HomeLandingPage />} />
        <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/experience-timeline" element={<ExperienceTimeline />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
