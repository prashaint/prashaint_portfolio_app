import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ProjectNavigation from './components/ProjectNavigation';
import ProjectImageGallery from './components/ProjectImageGallery';
import ProjectInfo from './components/ProjectInfo';
import ProjectActions from './components/ProjectActions';

const ProjectDetailModal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [shareMessage, setShareMessage] = useState('');

  // Mock projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      subtitle: "Modern shopping experience with enhanced UX",
      description: `Led the complete redesign of a legacy e-commerce platform, focusing on mobile-first approach and conversion optimization. The project involved extensive user research, A/B testing, and implementation of modern design patterns to improve the overall shopping experience.

The redesign resulted in a 40% increase in mobile conversions and 25% improvement in overall user engagement. Key focus areas included streamlined checkout process, enhanced product discovery, and improved site performance.`,
      client: "TechCorp Solutions",
      duration: "6 months",
      role: "Lead UI/UX Designer",
      teamSize: "8 members",
      platform: "Web & Mobile",
      status: "completed",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS", "Figma"],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop"
      ],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce-platform",
      challenges: `The main challenges included migrating from a legacy system while maintaining business continuity, optimizing for mobile performance, and implementing a scalable design system that could accommodate future growth.

We solved these by implementing a phased rollout approach, creating comprehensive component libraries, and establishing robust testing protocols.`,
      results: `The redesigned platform achieved remarkable results: 40% increase in mobile conversions, 25% improvement in user engagement, 60% reduction in cart abandonment, and 35% faster page load times.

Customer satisfaction scores improved by 45%, and the new design system reduced development time for new features by 50%.`,
      features: [
        "Responsive mobile-first design",
        "Advanced product filtering and search",
        "One-click checkout process",
        "Real-time inventory management",
        "Personalized product recommendations",
        "Multi-payment gateway integration"
      ]
    },
    {
      id: 2,
      title: "Healthcare Dashboard Analytics",
      subtitle: "Data visualization for medical professionals",
      description: `Developed a comprehensive healthcare analytics dashboard that enables medical professionals to visualize patient data, track treatment outcomes, and make data-driven decisions. The platform integrates with multiple healthcare systems and provides real-time insights.

The dashboard features advanced data visualization, predictive analytics, and compliance with healthcare regulations including HIPAA. It serves over 500 healthcare professionals across 15 medical facilities.`,
      client: "MedTech Innovations",
      duration: "8 months",
      role: "Full Stack Developer",
      teamSize: "12 members",
      platform: "Web Application",
      status: "completed",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js", "Docker", "Azure"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      liveUrl: "https://example-healthcare.com",
      githubUrl: "https://github.com/example/healthcare-dashboard",
      challenges: `Key challenges included ensuring HIPAA compliance, handling large datasets efficiently, creating intuitive visualizations for complex medical data, and integrating with legacy healthcare systems.

We addressed these through careful architecture planning, implementing robust security measures, and extensive user testing with medical professionals.`,
      results: `The dashboard improved clinical decision-making efficiency by 35%, reduced data analysis time by 60%, and enhanced patient outcome tracking accuracy by 50%.

Medical professionals reported 40% faster diagnosis times and improved patient care coordination across departments.`,
      features: [
        "Real-time patient monitoring",
        "Interactive data visualizations",
        "Predictive health analytics",
        "HIPAA compliant security",
        "Multi-facility integration",
        "Custom reporting tools"
      ]
    },
    {
      id: 3,
      title: "Mobile Banking Application",
      subtitle: "Secure and intuitive financial management",
      description: `Designed and developed a comprehensive mobile banking application that provides users with secure access to their financial accounts, transaction history, and banking services. The app features biometric authentication, real-time notifications, and advanced security measures.

The application serves over 100,000 active users and has maintained a 4.8-star rating on app stores. It includes features like mobile check deposit, bill payments, and financial planning tools.`,
      client: "First National Bank",
      duration: "10 months",
      role: "Mobile App Developer",
      teamSize: "15 members",
      platform: "iOS & Android",
      status: "completed",
      technologies: ["React Native", "Node.js", "MySQL", "Firebase", "Plaid API", "Sketch"],
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      liveUrl: "https://example-banking.com",
      challenges: `The primary challenges involved implementing bank-level security, ensuring seamless user experience across different devices, meeting regulatory compliance requirements, and integrating with existing banking infrastructure.

We overcame these through rigorous security testing, extensive user research, and close collaboration with compliance teams.`,
      results: `The mobile banking app achieved 100,000+ downloads in the first year, maintained 99.9% uptime, reduced customer service calls by 30%, and increased digital transaction volume by 65%.

User satisfaction scores reached 4.8/5 stars, with particular praise for the intuitive interface and robust security features.`,
      features: [
        "Biometric authentication",
        "Real-time transaction alerts",
        "Mobile check deposit",
        "Bill payment automation",
        "Spending analytics",
        "24/7 customer support chat"
      ]
    },
    {
      id: 4,
      title: "Learning Management System",
      subtitle: "Interactive online education platform",
      description: `Built a comprehensive learning management system that facilitates online education with interactive courses, progress tracking, and collaborative learning features. The platform supports multiple content types including videos, quizzes, and live sessions.

The LMS serves over 10,000 students and 500 instructors across various educational institutions. It features adaptive learning algorithms and comprehensive analytics for both students and educators.`,
      client: "EduTech Solutions",
      duration: "12 months",
      role: "Technical Lead",
      teamSize: "20 members",
      platform: "Web & Mobile",
      status: "in-progress",
      technologies: ["Angular", "Spring Boot", "MongoDB", "WebRTC", "AWS", "Adobe XD"],
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
      ],
      liveUrl: "https://example-lms.com",
      githubUrl: "https://github.com/example/lms-platform",
      challenges: `Major challenges included scaling to support thousands of concurrent users, implementing real-time collaboration features, ensuring accessibility compliance, and creating engaging interactive content delivery.

Solutions involved implementing microservices architecture, optimizing database queries, and extensive accessibility testing.`,
      results: `Currently serving 10,000+ active students with 95% course completion rates, 40% improvement in learning outcomes, and 99.5% platform availability.

The system has facilitated over 50,000 hours of online learning and maintains high user engagement metrics.`,
      features: [
        "Interactive video lectures",
        "Real-time collaboration tools",
        "Adaptive learning paths",
        "Comprehensive progress tracking",
        "Mobile offline access",
        "Integrated assessment tools"
      ]
    }
  ];

  useEffect(() => {
    const projectId = searchParams?.get('id');
    if (projectId) {
      const project = projects?.find(p => p?.id === parseInt(projectId));
      if (project) {
        setCurrentProject(project);
        setIsModalOpen(true);
      } else {
        navigate('/portfolio-gallery');
      }
    } else {
      navigate('/portfolio-gallery');
    }
  }, [searchParams, navigate]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape') {
        handleClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    navigate('/portfolio-gallery');
  };

  const handleNavigateProject = (project) => {
    setCurrentProject(project);
    navigate(`/project-detail-modal?id=${project?.id}`, { replace: true });
  };

  const handleShare = (message) => {
    setShareMessage(message);
    setTimeout(() => setShareMessage(''), 3000);
  };

  const handleBackdropClick = (e) => {
    if (e?.target === e?.currentTarget) {
      handleClose();
    }
  };

  if (!isModalOpen || !currentProject) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested project could not be found.</p>
          <button
            onClick={() => navigate('/portfolio-gallery')}
            className="text-primary hover:underline"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-background">
      {/* Desktop Modal Overlay */}
      <div className="hidden md:flex fixed inset-0 items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        />
        
        <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-lg shadow-soft-hover overflow-hidden animate-slide-in-from-bottom">
          <ProjectNavigation
            projects={projects}
            currentProject={currentProject}
            onNavigateProject={handleNavigateProject}
            onClose={handleClose}
          />
          
          <div className="flex h-[calc(90vh-80px)]">
            <div className="flex-1 overflow-hidden">
              <ProjectImageGallery
                images={currentProject?.images}
                projectTitle={currentProject?.title}
              />
            </div>
            
            <div className="w-96 flex flex-col border-l border-border">
              <div className="flex-1 overflow-y-auto p-6">
                <ProjectInfo project={currentProject} />
              </div>
              <ProjectActions 
                project={currentProject} 
                onShare={handleShare}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Full Screen Modal */}
      <div className="md:hidden flex flex-col h-full">
        <ProjectNavigation
          projects={projects}
          currentProject={currentProject}
          onNavigateProject={handleNavigateProject}
          onClose={handleClose}
        />
        
        <div className="flex-1 overflow-y-auto">
          <ProjectImageGallery
            images={currentProject?.images}
            projectTitle={currentProject?.title}
          />
          
          <div className="p-4">
            <ProjectInfo project={currentProject} />
          </div>
        </div>
        
        <ProjectActions 
          project={currentProject} 
          onShare={handleShare}
        />
      </div>
      {/* Share Message Toast */}
      {shareMessage && (
        <div className="fixed top-4 right-4 bg-card border border-border rounded-lg px-4 py-2 shadow-soft-hover animate-slide-in-from-right z-60">
          <p className="text-sm font-medium text-foreground">{shareMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailModal;