import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../../../components/motion';

const SkillsOverview = () => {
  const skillCategories = [
    {
      title: "Data Pipeline Development",
      icon: "Monitor",
      skills: [
        { name: "OOP & Python", level: 95 },
        { name: "Spark Architecture", level: 90 },
        { name: "PySpark", level: 95 },
        { name: "SQL", level: 85 },
        { name: "Linux Shell Scripting", level: 92 }
      ],
      color: "text-blue-500"
    },
    {
      title: "Pipeline Testing and Orchestration",
      icon: "Server",
      skills: [
        { name: "Pytest", level: 90 },
        { name: "Airflow", level: 80 },
        { name: "Great Expectation", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 78 }
      ],
      color: "text-green-500"
    },
    {
      title: "Design & Tools",
      icon: "Palette",
      skills: [
        { name: "VSCode", level: 90 },
        { name: "Pycharm", level: 85 },
        { name: "Git", level: 92 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 }
      ],
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal direction="up">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across
              different areas of software development and design.
            </p>
          </div>
        </MotionReveal>

        {/* Skills Grid */}
        <MotionStagger staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories?.map((category, categoryIndex) => (
            <MotionStaggerItem key={categoryIndex}>
              <div className="bg-card rounded-xl p-6 shadow-soft-hover hover:shadow-lg transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mr-4`}>
                    <Icon name={category?.icon} size={24} className={category?.color} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category?.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category?.skills?.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill?.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill?.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full group-hover:animate-pulse"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill?.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Additional Info */}
        <MotionReveal direction="up" delay={0.3}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-6 py-3">
              <Icon name="TrendingUp" size={20} className="text-primary" />
              <span className="text-sm font-medium text-foreground">
                Continuously learning and improving my skills
              </span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default SkillsOverview;
