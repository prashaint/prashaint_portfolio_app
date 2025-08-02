import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProjectDetailModal from '../../components/ui/ProjectDetailModal';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import StatsSection from './components/StatsSection';

const PortfolioGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(12);

  // Mock project data
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and Node.js featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      featuredImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      category: "web",
      status: "completed",
      featured: true,
      client: "TechCorp Solutions",
      duration: "4 months",
      role: "Full Stack Developer",
      completedDate: "2024-01-15",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      featuredImage: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?w=800&h=600&fit=crop",
      images: [
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?w=800&h=600&fit=crop"
      ],
      technologies: ["React Native", "Firebase", "TypeScript", "Redux Toolkit"],
      category: "mobile",
      status: "completed",
      featured: true,
      client: "SecureBank Inc",
      duration: "6 months",
      role: "Mobile Developer",
      completedDate: "2023-11-20",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a sustainable fashion startup.",
      featuredImage: "https://images.pixabay.com/photo/2017/01/29/13/21/mobile-phone-2014744_1280.jpg?w=800&h=600&fit=crop",
      images: [
        "https://images.pixabay.com/photo/2017/01/29/13/21/mobile-phone-2014744_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png?w=800&h=600&fit=crop"
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign"],
      category: "design",
      status: "completed",
      featured: false,
      client: "EcoFashion Co",
      duration: "2 months",
      role: "Brand Designer",
      completedDate: "2024-02-10",
      liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      description: "Comprehensive project management dashboard with team collaboration features, time tracking, and advanced reporting capabilities.",
      featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js", "Tailwind CSS"],
      category: "web",
      status: "in-progress",
      featured: false,
      client: "ProductivityPro",
      duration: "3 months",
      role: "Frontend Developer",
      completedDate: "2024-03-01",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Cross-platform fitness application with workout planning, progress tracking, social features, and integration with wearable devices.",
      featuredImage: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?w=800&h=600&fit=crop",
      images: [
        "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?w=800&h=600&fit=crop"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit"],
      category: "mobile",
      status: "completed",
      featured: false,
      client: "FitLife Studios",
      duration: "5 months",
      role: "Mobile Developer",
      completedDate: "2023-12-15",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 6,
      title: "Restaurant Website Redesign",
      description: "Modern restaurant website redesign with online ordering system, reservation management, and mobile-optimized menu display.",
      featuredImage: "https://images.pixabay.com/photo/2017/05/26/19/36/restaurant-2343079_1280.jpg?w=800&h=600&fit=crop",
      images: [
        "https://images.pixabay.com/photo/2017/05/26/19/36/restaurant-2343079_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/29/05/45/restaurant-1867187_1280.jpg?w=800&h=600&fit=crop"
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "MySQL"],
      category: "web",
      status: "completed",
      featured: false,
      client: "Bella Vista Restaurant",
      duration: "2 months",
      role: "Web Developer",
      completedDate: "2024-01-30",
      liveUrl: "https://example.com"
    },
    {
      id: 7,
      title: "Logo Design Collection",
      description: "Collection of modern logo designs for various industries including tech startups, healthcare, and creative agencies.",
      featuredImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
      ],
      technologies: ["Adobe Illustrator", "Photoshop", "Sketch"],
      category: "design",
      status: "completed",
      featured: false,
      client: "Various Clients",
      duration: "Ongoing",
      role: "Logo Designer",
      completedDate: "2024-02-20",
      liveUrl: "https://example.com"
    },
    {
      id: 8,
      title: "Real Estate Platform",
      description: "Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
      featuredImage: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=600&fit=crop",
      images: [
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=600&fit=crop"
      ],
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Mapbox", "Stripe"],
      category: "web",
      status: "in-progress",
      featured: true,
      client: "RealtyMax Group",
      duration: "6 months",
      role: "Full Stack Developer",
      completedDate: "2024-04-01",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 9,
      title: "Social Media App UI",
      description: "Modern social media application interface design with dark mode support, intuitive navigation, and engaging user experience.",
      featuredImage: "https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=800&h=600&fit=crop",
      images: [
        "https://images.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg?w=800&h=600&fit=crop"
      ],
      technologies: ["Figma", "Sketch", "Principle", "Adobe XD"],
      category: "design",
      status: "completed",
      featured: false,
      client: "SocialConnect",
      duration: "3 months",
      role: "UI/UX Designer",
      completedDate: "2023-10-15",
      liveUrl: "https://example.com"
    },
    {
      id: 10,
      title: "Inventory Management System",
      description: "Enterprise-level inventory management system with barcode scanning, automated reordering, and comprehensive reporting dashboard.",
      featuredImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
      ],
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
      category: "web",
      status: "completed",
      featured: false,
      client: "LogisticsPro Inc",
      duration: "8 months",
      role: "Full Stack Developer",
      completedDate: "2023-09-30",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 11,
      title: "Weather Forecast App",
      description: "Beautiful weather application with detailed forecasts, interactive maps, weather alerts, and location-based recommendations.",
      featuredImage: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?w=800&h=600&fit=crop",
      images: [
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?w=800&h=600&fit=crop"
      ],
      technologies: ["React Native", "OpenWeather API", "Redux", "Expo"],
      category: "mobile",
      status: "completed",
      featured: false,
      client: "WeatherWise",
      duration: "3 months",
      role: "Mobile Developer",
      completedDate: "2024-01-05",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 12,
      title: "Corporate Website",
      description: "Professional corporate website with content management system, multi-language support, and integrated blog platform.",
      featuredImage: "https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg?w=800&h=600&fit=crop",
      images: [
        "https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg?w=800&h=600&fit=crop"
      ],
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      category: "web",
      status: "completed",
      featured: false,
      client: "GlobalTech Solutions",
      duration: "4 months",
      role: "Frontend Developer",
      completedDate: "2023-11-10",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  // Categories with project counts
  const categories = useMemo(() => {
    const categoryMap = {
      all: { id: 'all', name: 'All Projects', count: allProjects?.length },
      web: { id: 'web', name: 'Web Development', count: 0 },
      mobile: { id: 'mobile', name: 'Mobile Apps', count: 0 },
      design: { id: 'design', name: 'Design', count: 0 }
    };

    allProjects?.forEach(project => {
      if (categoryMap?.[project?.category]) {
        categoryMap[project.category].count++;
      }
    });

    return Object.values(categoryMap);
  }, [allProjects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered?.filter(project => project?.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(query) ||
        project?.description?.toLowerCase()?.includes(query) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(query)) ||
        (project?.client && project?.client?.toLowerCase()?.includes(query))
      );
    }

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.completedDate) - new Date(a.completedDate);
        case 'oldest':
          return new Date(a.completedDate) - new Date(b.completedDate);
        case 'title':
          return a?.title?.localeCompare(b?.title);
        case 'featured':
          if (a?.featured && !b?.featured) return -1;
          if (!a?.featured && b?.featured) return 1;
          return new Date(b.completedDate) - new Date(a.completedDate);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allProjects, activeCategory, searchQuery, sortBy]);

  // Projects to display (for pagination)
  const projectsToShow = filteredProjects?.slice(0, displayedProjects);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNavigateProject = (project) => {
    setSelectedProject(project);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedProjects(prev => prev + 8);
      setLoading(false);
    }, 1000);
  };

  const hasMore = displayedProjects < filteredProjects?.length;

  return (
    <>
      <Helmet>
        <title>Portfolio Gallery - Portfolio Pro</title>
        <meta name="description" content="Explore my professional portfolio showcasing web development, mobile apps, and design projects. View detailed case studies and live demos." />
        <meta name="keywords" content="portfolio, web development, mobile apps, design, projects, case studies" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Stats Section */}
        <StatsSection projects={allProjects} />

        {/* Project Grid */}
        <ProjectGrid
          projects={projectsToShow}
          loading={loading}
          onProjectClick={handleProjectClick}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
        />

        {/* Project Detail Modal */}
        <ProjectDetailModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          project={selectedProject}
          projects={filteredProjects}
          onNavigateProject={handleNavigateProject}
        />
      </div>
    </>
  );
};

export default PortfolioGallery;