import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      icon: "Code",
      skills: [
        { name: "React.js", level: 95, category: "Frontend" },
        { name: "Node.js", level: 90, category: "Backend" },
        { name: "JavaScript/TypeScript", level: 95, category: "Language" },
        { name: "Python", level: 85, category: "Language" },
        { name: "MongoDB", level: 80, category: "Database" },
        { name: "PostgreSQL", level: 85, category: "Database" },
        { name: "AWS", level: 75, category: "Cloud" },
        { name: "Docker", level: 80, category: "DevOps" }
      ]
    },
    design: {
      title: "Design Skills",
      icon: "Palette",
      skills: [
        { name: "UI/UX Design", level: 90, category: "Design" },
        { name: "Figma", level: 95, category: "Tool" },
        { name: "Adobe Creative Suite", level: 80, category: "Tool" },
        { name: "Prototyping", level: 85, category: "Process" },
        { name: "User Research", level: 75, category: "Research" },
        { name: "Wireframing", level: 90, category: "Process" }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: "Users",
      skills: [
        { name: "Team Leadership", level: 85, category: "Leadership" },
        { name: "Project Management", level: 80, category: "Management" },
        { name: "Communication", level: 95, category: "Interpersonal" },
        { name: "Problem Solving", level: 90, category: "Analytical" },
        { name: "Mentoring", level: 85, category: "Leadership" },
        { name: "Agile/Scrum", level: 80, category: "Methodology" }
      ]
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-warning';
    return 'bg-muted-foreground';
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical abilities, design skills, and professional competencies
        </p>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {Object.entries(skillCategories)?.map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === key
                ? 'bg-primary text-primary-foreground shadow-soft-hover'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
            }`}
          >
            <Icon name={category?.icon} size={18} />
            <span>{category?.title}</span>
          </button>
        ))}
      </div>
      {/* Skills Display */}
      <div className="bg-card rounded-xl p-6 md:p-8 shadow-soft-hover">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
          <Icon name={skillCategories?.[activeCategory]?.icon} size={24} className="text-primary" />
          <span>{skillCategories?.[activeCategory]?.title}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-foreground">{skill?.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">({skill?.category})</span>
                </div>
                <span className="text-sm font-medium text-primary">{skill?.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill?.level)}`}
                  style={{ width: `${skill?.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Skill Tags Cloud */}
      <div className="bg-muted/50 rounded-xl p-6 md:p-8">
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
          Technologies I Work With
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "React", "Vue.js", "Angular", "Node.js", "Express", "FastAPI",
            "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes",
            "Git", "CI/CD", "Jest", "Cypress", "Figma", "Adobe XD",
            "Tailwind CSS", "SASS", "GraphQL", "REST APIs", "Microservices"
          ]?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-card text-foreground text-sm rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;