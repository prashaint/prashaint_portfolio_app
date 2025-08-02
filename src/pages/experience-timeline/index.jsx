import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FilterBar from './components/FilterBar';
import TimelineContainer from './components/TimelineContainer';
import ExperienceStats from './components/ExperienceStats';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ExperienceTimeline = () => {
  const [filters, setFilters] = useState({
    industry: 'all',
    roleType: 'all',
    timePeriod: 'all'
  });

  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mock experience data
  const experienceData = [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2 years 3 months",
      type: "Full-time",
      industry: "technology",
      roleType: "fullstack",
      year: "2024",
      companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      summary: "Led development of enterprise-level web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "GraphQL"],
      achievements: [
        "Architected and implemented a microservices-based e-commerce platform serving 100K+ users",
        "Reduced application load time by 40% through performance optimization and code splitting",
        "Mentored 3 junior developers and established coding standards for the team",
        "Led migration from monolithic to microservices architecture, improving system scalability"
      ],
      projectsCount: 8
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Innovations Inc",
      location: "New York, NY",
      duration: "1 year 8 months",
      type: "Full-time",
      industry: "technology",
      roleType: "frontend",
      year: "2022",
      companyLogo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&crop=center",
      summary: "Specialized in creating responsive and accessible user interfaces using modern frontend technologies. Collaborated with UX/UI designers to implement pixel-perfect designs and ensure optimal user experience.",
      technologies: ["React", "Vue.js", "JavaScript", "CSS3", "Sass", "Webpack", "Jest"],
      achievements: [
        "Developed and maintained 15+ responsive web applications with 99.9% uptime",
        "Implemented automated testing suite, increasing code coverage from 60% to 95%",
        "Optimized bundle size by 35% using code splitting and lazy loading techniques",
        "Created reusable component library used across 5 different projects"
      ],
      projectsCount: 12
    },
    {
      id: 3,
      role: "Mobile App Developer",
      company: "AppVenture Studios",
      location: "Austin, TX",
      duration: "2 years 1 month",
      type: "Contract",
      industry: "technology",
      roleType: "mobile",
      year: "2021",
      companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center",
      summary: "Developed cross-platform mobile applications using React Native and Flutter. Worked closely with product managers and designers to create intuitive mobile experiences for iOS and Android platforms.",
      technologies: ["React Native", "Flutter", "Dart", "Firebase", "Redux", "SQLite", "Push Notifications"],
      achievements: [
        "Built and launched 6 mobile apps with combined 500K+ downloads",
        "Integrated payment gateways and analytics tracking for better user insights",
        "Implemented offline-first architecture for improved app performance",
        "Reduced app crash rate from 2.1% to 0.3% through comprehensive testing"
      ],
      projectsCount: 6
    },
    {
      id: 4,
      role: "Backend Developer",
      company: "DataFlow Systems",
      location: "Seattle, WA",
      duration: "1 year 6 months",
      type: "Full-time",
      industry: "finance",
      roleType: "backend",
      year: "2020",
      companyLogo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
      summary: "Focused on building scalable backend systems and APIs for financial applications. Implemented secure data processing pipelines and worked with large datasets to provide real-time analytics.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "Docker", "Kubernetes"],
      achievements: [
        "Designed and implemented RESTful APIs handling 1M+ requests per day",
        "Built real-time data processing pipeline reducing latency by 60%",
        "Implemented comprehensive security measures including OAuth2 and JWT",
        "Optimized database queries resulting in 45% improvement in response times"
      ],
      projectsCount: 4
    },
    {
      id: 5,
      role: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Denver, CO",
      duration: "1 year 3 months",
      type: "Full-time",
      industry: "technology",
      roleType: "devops",
      year: "2019",
      companyLogo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop&crop=center",
      summary: "Managed cloud infrastructure and implemented CI/CD pipelines to streamline development workflows. Focused on automation, monitoring, and ensuring high availability of production systems.",
      technologies: ["AWS", "Terraform", "Jenkins", "Docker", "Kubernetes", "Ansible", "Prometheus"],
      achievements: [
        "Automated deployment process reducing release time from 4 hours to 15 minutes",
        "Implemented monitoring and alerting system improving incident response time by 70%",
        "Managed multi-region AWS infrastructure serving 2M+ users globally",
        "Reduced infrastructure costs by 30% through resource optimization"
      ],
      projectsCount: 3
    },
    {
      id: 6,
      role: "Junior Web Developer",
      company: "StartupHub",
      location: "Portland, OR",
      duration: "1 year 2 months",
      type: "Full-time",
      industry: "technology",
      roleType: "frontend",
      year: "2018",
      companyLogo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=100&fit=crop&crop=center",
      summary: "Started my professional journey as a junior developer, learning modern web development practices and contributing to various client projects. Gained experience in both frontend and backend technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL", "Bootstrap"],
      achievements: [
        "Contributed to 10+ client websites with focus on responsive design",
        "Learned and implemented modern JavaScript frameworks and libraries",
        "Collaborated with senior developers to maintain code quality standards",
        "Participated in code reviews and agile development processes"
      ],
      projectsCount: 10
    }
  ];

  // Filter experiences based on current filters
  useEffect(() => {
    let filtered = experienceData;

    if (filters?.industry !== 'all') {
      filtered = filtered?.filter(exp => exp?.industry === filters?.industry);
    }

    if (filters?.roleType !== 'all') {
      filtered = filtered?.filter(exp => exp?.roleType === filters?.roleType);
    }

    if (filters?.timePeriod !== 'all') {
      if (filters?.timePeriod === 'before-2020') {
        filtered = filtered?.filter(exp => parseInt(exp?.year) < 2020);
      } else {
        filtered = filtered?.filter(exp => exp?.year === filters?.timePeriod);
      }
    }

    setFilteredExperiences(filtered);
  }, [filters]);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      industry: 'all',
      roleType: 'all',
      timePeriod: 'all'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Helmet>
        <title>Experience Timeline - Portfolio Pro</title>
        <meta name="description" content="Explore my professional journey through an interactive timeline showcasing career progression, key achievements, and technology expertise across various roles and companies." />
        <meta name="keywords" content="experience, timeline, career, professional history, skills, achievements, portfolio" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Professional Experience
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                A comprehensive timeline of my career journey, showcasing growth, achievements, and the technologies that shaped my expertise.
              </p>
              
              {/* Experience Stats */}
              <ExperienceStats experiences={experienceData} />
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          experienceData={filteredExperiences}
        />

        {/* Timeline Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <TimelineContainer experiences={filteredExperiences} />
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 z-50 shadow-lg"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <Icon name="ArrowUp" size={20} />
          </Button>
        )}

        {/* Footer */}
        <footer className="bg-card border-t border-border py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-muted-foreground">
                © {new Date()?.getFullYear()} Portfolio Pro. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ExperienceTimeline;