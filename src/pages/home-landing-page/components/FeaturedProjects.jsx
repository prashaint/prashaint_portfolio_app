import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../../components/motion';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      status: "completed",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "An intuitive project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      category: "Mobile App",
      status: "completed",
      liveUrl: "https://demo-taskmanager.com",
      githubUrl: "https://github.com/johndoe/task-manager"
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "A comprehensive analytics platform leveraging machine learning to provide actionable business insights and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "React", "TensorFlow", "D3.js"],
      category: "Data Science",
      status: "in-progress",
      liveUrl: "https://demo-analytics.com",
      githubUrl: "https://github.com/johndoe/ai-analytics"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal direction="up">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of my recent project work that showcases my expertise in modern Data Engineering development,
              Scalable and Robust Pipeline  design, and innovative problem-solving.
            </p>
          </div>
        </MotionReveal>

        {/* Projects Grid */}
        <MotionStagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredProjects?.map((project) => (
            <MotionStaggerItem key={project?.id}>
              <motion.div
                className="group relative bg-card rounded-xl overflow-hidden shadow-soft-hover hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setHoveredProject(project?.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="flex space-x-2">
                        {project?.liveUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="bg-card/80 hover:bg-card"
                            onClick={() => window.open(project?.liveUrl, '_blank')}
                            aria-label="View live project"
                          >
                            <Icon name="ExternalLink" size={16} />
                          </Button>
                        )}
                        {project?.githubUrl && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="bg-card/80 hover:bg-card"
                            onClick={() => window.open(project?.githubUrl, '_blank')}
                            aria-label="View source code"
                          >
                            <Icon name="Github" size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project?.status === 'completed'
                        ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                    }`}>
                      {project?.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project?.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {project?.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project?.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project?.technologies?.slice(0, 3)?.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project?.technologies?.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                        +{project?.technologies?.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Learn More Link */}
                  <Link
                    to="/portfolio-gallery"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    Learn more
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link to="/portfolio-gallery">
            <Button
              variant="outline"
              size="lg"
              iconName="Grid3X3"
              iconPosition="left"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
