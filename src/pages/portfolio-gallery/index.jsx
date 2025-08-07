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
      title: "ML Data Pipelines",
      description: "Modern, scalable and feature rich ML data pipelines which process huge data and creates curated output for training ML models.",
      featuredImage: "https://media.istockphoto.com/id/1406674466/photo/big-data-connection-technology-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=gNUrIlN_b92EoFfOxvH2OGfj45P2gUeEU1C8Af-5NkU=",
      images: [
        "https://images.app.goo.gl/EvHMfsjQWprge8Yx8",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      technologies: ["Pyspark", "Airflow", "Hive", "Python", "ML", "DQ", "Data Engineering"],
      category: "Data Engineering",
      status: "completed",
      featured: true,
      client: "Personal Project",
      duration: "4 months",
      role: "Senior Data Engineer",
      completedDate: "2024-02-15",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Databricks DLT Pipelines",
      description: "Databricks Delta Live Table based Data pipeline to process stream data using Medellion architecture and roubust data Qualtiy checks.",
      featuredImage: "data:image/jpeg;base64,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",
      images: [
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?w=800&h=600&fit=crop"
      ],
      technologies: ["Pyspark", "Airflow", "AWS", "Python", "Databricks", "DQ", "Data Engineering"],
      category: "Data Engineering",
      status: "completed",
      featured: true,
      client: "Personal Project",
      duration: "6 months",
      role: "Senior Data Engineer",
      completedDate: "2023-11-20",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Portfolio Website Redesign",
      description: "Modern Portfolio website redesign with skills and experience timelines and projects.",
      featuredImage: "https://images.pixabay.com/photo/2017/05/26/19/36/restaurant-2343079_1280.jpg?w=800&h=600&fit=crop",
      images: [
        "https://images.pixabay.com/photo/2017/05/26/19/36/restaurant-2343079_1280.jpg?w=800&h=600&fit=crop",
        "https://images.pixabay.com/photo/2016/11/29/05/45/restaurant-1867187_1280.jpg?w=800&h=600&fit=crop"
      ],
      technologies: ["WordPress", "React", "JavaScript", "CSS3", "MySQL"],
      category: "web",
      status: "completed",
      featured: false,
      client: "Personal Project",
      duration: "2 months",
      role: "Web Developer",
      completedDate: "2024-01-30",
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
      client: "Personal Project",
      duration: "3 months",
      role: "Frontend Developer",
      completedDate: "2024-03-01",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  // Categories with project counts
  const categories = useMemo(() => {
    const categoryMap = {
      all: { id: 'all', name: 'All Projects', count: allProjects?.length },
      "Data Engineering": { id: 'data-engineering', name: 'Data Engineering', count: 1 },
      Cloud: { id: 'cloud', name: 'Multi Cloud', count: 2 },
      web: { id: 'web', name: 'Web Development', count: 0 },
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