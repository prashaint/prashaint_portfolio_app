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

  // Update the experienceData in src/pages/experience-timeline/index.jsx
// Replace the experienceData array with this cleaned version

const experienceData = [
  {
    id: 1,
    role: "AVP",
    company: "Barclays PLC",
    location: "Pune, India",
    duration: "2 years 7 months",
    type: "Full-time",
    industry: "Technology",
    roleType: "Senior Data Engineer",
    year: "2023",
    summary: "Led development of enterprise-level data pipelines using cloud technologies. Managed a team of 5 developers and collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["PySpark", "Airflow", "Unix", "AWS", "Docker", "MySQL", "Git"],
    achievements: [
      "Led the migration from legacy SAS application to PySpark application which reduced the execution time of jobs from 10Hrs+ to 2 Hours and enhanced the overall performance by 80%.",
      "Led a team of Data Engineers and designed complex data pipelines for ML Models designed to prevent credit card related frauds.",
      "Mentored 3 junior developers and established coding standards for the team",
      "Analyzed and remediated the DQ gaps present in existing data curation process which elevated the performance by 60% in order to get better ML scores."
    ],
    projectsCount: 4
  },
  {
    id: 2,
    role: "Senior Developer - BA4",
    company: "Barclays PLC",
    location: "Pune, India",
    duration: "1 years 7 months",
    type: "Full-time",
    industry: "Technology",
    roleType: "Data Engineer",
    year: "2021",
    summary: "Led development of enterprise-level data pipelines using cloud technologies. Managed a team of 5 developers and collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["PySpark", "Airflow", "Unix", "AWS", "Docker", "MySQL", "Git"],
    achievements: [
      "Developed the PySpark framework to automate the existing process which improved the performance in terms of execution and resource usage to 70% and data quality improved to 90%.",
      "Optimized the pipeline workflow for existing ML models to reduce the execution time by 40% and improved the overall performance of the application.",
      "Mentored 4 junior developers and established coding standards for the team",
      "Analyzed and remediated the DQ gaps present in existing data curation process which elevated the performance by 60% in order to get better ML scores."
    ],
    projectsCount: 2
  },
  {
    id: 3,
    role: "Manager",
    company: "Citibank",
    location: "Pune, India",
    duration: "2 year 10 months",
    type: "Full-time",
    industry: "Technology",
    roleType: "Data Engineer",
    year: "2019",
    summary: "Designed and developed the Ingestion framework which is used to fetch data from multiple sources performs sanity checks along with basic transformations in order to store the data into staging layer and allows downstream applications to pull the data for analytics, it has reduced resource and infra cost by 20%.",
    technologies: ["Scala", "Spark", "Hbase", "Hive", "Oracle", "Git", "Unix"],
    achievements: [
      "Implemented Igestion framework to ingest and load 100+ source data files into Hbase and Hive tables with 99% data quality.",
      "Optimized the existing data processing pipeline to reduce the execution time by 30% and improved the overall performance of the application.",
      "Mentored 5 junior developers and established coding standards for the team"
    ],
    projectsCount: 5
  },
  {
    id: 4,
    role: "Assistant Manager",
    company: "Citibank",
    location: "Pune, India",
    duration: "2 year 9 months",
    type: "Full-time",
    industry: "Technology",
    roleType: "Data Engineer",
    year: "2016",
    summary: "Designed and developed the Ingestion framework which is used to fetch data from multiple sources performs sanity checks along with basic transformations in order to store the data into staging layer and allows downstream applications to pull the data for analytics, it has reduced resource and infra cost by 20%.",
    technologies: ["Scala", "Spark", "Hbase", "Hive", "Oracle", "Git", "Unix"],
    achievements: [
      "Implemented Igestion framework to ingest and load 100+ source data files into Hbase and Hive tables with 99% data quality.",
      "Optimized the existing data processing pipeline to reduce the execution time by 30% and improved the overall performance of the application.",
      "Mentored 5 junior developers and established coding standards for the team"
    ],
    projectsCount: 8
  },
  {
    id: 5,
    role: "Associate - Projects",
    company: "Cognizant",
    location: "Pune, India",
    duration: "1 year 7 months",
    type: "Full-time",
    industry: "Technology",
    roleType: "Ab-Initio Developer",
    year: "2014",
    summary: "Developed ETL Ab-Initio workflows as per project requirements and supported end-to-end delivery of the tasks till prod deployment and L3 support post Go-Live which reduced the total batch execution time by 30%.",
    technologies: ["Ab-Initio", "Linux", "Oracle", "Shell-Scripting", "TWS", "Unix"],
    achievements: [
      "Designed and implemented Ab-Initio workflows handling complex data transformations",
      "Built real-time data processing pipeline reducing batch execution time by 30%",
      "Implemented comprehensive data validation and quality checks",
      "Optimized ETL processes resulting in 45% improvement in processing times"
    ],
    projectsCount: 4
  },
  {
    id: 6,
    role: "Senior Systems Engineer",
    company: "Infosys",
    location: "Pune, India",
    duration: "3 year 4 months",
    type: "Full-time",
    industry: "Technology",
    roleType: "Ab-Initio Developer",
    year: "2011",
    summary: "Developed ETL Ab-Initio workflows as per project requirements and supported end-to-end delivery of the tasks till prod deployment and L3 support post Go-Live which reduced the total batch execution time by 30%.",
    technologies: ["Ab-Initio", "Linux", "Oracle", "Shell-Scripting", "TWS", "Unix"],
    achievements: [
      "Developed and maintained complex ETL workflows for enterprise clients",
      "Implemented data migration strategies for large-scale systems",
      "Provided L3 support for production systems with 99.5% uptime",
      "Trained junior team members on Ab-Initio development best practices"
    ],
    projectsCount: 4
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