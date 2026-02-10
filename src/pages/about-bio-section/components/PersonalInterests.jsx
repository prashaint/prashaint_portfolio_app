import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { MotionStagger, MotionStaggerItem, MotionReveal } from '../../../components/motion';

const PersonalInterests = () => {
  const interests = [
    {
      id: 1,
      title: "Photography",
      description: "Capturing moments and exploring creative composition through landscape and street photography",
      icon: "Camera",
      image: "https://www.shutterstock.com/image-photo/landscape-photographer-using-dslr-camera-260nw-2506813565.jpg",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Hiking & Nature",
      description: "Exploring forts around Pune and finding inspiration in nature's beauty",
      icon: "Mountain",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop",
      level: "Enthusiast"
    },
    {
      id: 3,
      title: "Content Creation",
      description: "I love sharing my knowledge through blogs and tutorials on data engineering topics",
      icon: "Youtube",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=200&fit=crop",
      level: "Active Contributor"
    },
    {
      id: 4,
      title: "Coffee Culture",
      description: "Exploring specialty coffee shops and perfecting the art of brewing the perfect cup",
      icon: "Coffee",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop",
      level: "Connoisseur"
    },
    {
      id: 5,
      title: "Tech Podcasts",
      description: "Staying updated with industry trends through podcasts and tech talks",
      icon: "Headphones",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&h=200&fit=crop",
      level: "Daily Listener"
    },
    {
      id: 6,
      title: "Cooking",
      description: "Experimenting with international cuisines and perfecting homemade pasta recipes",
      icon: "ChefHat",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
      level: "Home Chef"
    },
    {
      id: 7,
      title: "Learning Music",
      description: "Learning to play the flute and exploring classical Indian music theory in my free time",
      icon: "Music",
      image: "https://wallpaperaccess.com/full/5502677.jpg",
      level: "Beginner"
    },
    {
      id: 8,
      title: "Drawing & Sketching",
      description: "Learning to draw and sketch landscapes and portraits",
      icon: "Palette",
      image: "data:image/jpeg;base64,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",
      level: "Beginner"
    }
  ];

  const values = [
    {
      title: "Continuous Learning",
      description: "Always staying curious and embracing new technologies and methodologies",
      icon: "BookOpen"
    },
    {
      title: "Collaboration",
      description: "Believing that the best solutions come from diverse perspectives and teamwork",
      icon: "Users"
    },
    {
      title: "Quality Focus",
      description: "Committed to writing clean, maintainable code and creating exceptional user experiences",
      icon: "Target"
    },
    {
      title: "Innovation",
      description: "Pushing boundaries and finding creative solutions to complex problems",
      icon: "Lightbulb"
    }
  ];

  const funFacts = [
    "☕ I\'ve visited over 50 coffee shops in Pune",
    "🏔️ Hiked to all the forts around Pune",
    "📚 Read 24 tech books in 2025",
    "🎯 Contributed to 5+ open source projects",
    "🌱 Growing my own herbs for cooking",
    "📸 Photography portfolio has 1K+ views on Instagram"
  ];

  return (
    <div className="space-y-12">
      {/* Personal Interests */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Personal Interests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond coding, these are the passions that inspire my creativity and keep me balanced
          </p>
        </div>

        <MotionStagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests?.map((interest) => (
            <MotionStaggerItem key={interest?.id}>
              <div className="bg-card rounded-xl overflow-hidden shadow-soft-hover hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={interest?.image}
                    alt={interest?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name={interest?.icon} size={16} className="text-primary-foreground" />
                      </div>
                      <span className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded-full">
                        {interest?.level}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white text-lg">
                      {interest?.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {interest?.description}
                  </p>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
      {/* Core Values */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Core Values
          </h2>
          <p className="text-muted-foreground">
            The principles that guide my professional and personal approach
          </p>
        </div>

        <MotionStagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values?.map((value, index) => (
            <MotionStaggerItem key={index}>
              <div className="bg-card rounded-xl p-6 shadow-soft-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={value?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {value?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value?.description}
                    </p>
                  </div>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
      {/* Fun Facts */}
      <div className="bg-muted/50 rounded-xl p-6 md:p-8">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Fun Facts About Me
          </h2>
          <p className="text-muted-foreground">
            Some interesting tidbits that make me who I am
          </p>
        </div>

        <MotionStagger staggerDelay={0.05} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {funFacts?.map((fact, index) => (
            <MotionStaggerItem key={index}>
              <div className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                <p className="text-foreground text-sm font-medium">
                  {fact}
                </p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
      {/* Quote Section */}
      <MotionReveal direction="up">
        <div className="text-center bg-primary/5 rounded-xl p-8 md:p-12">
          <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-4">
            "The best way to predict the future is to create it."
          </blockquote>
          <cite className="text-muted-foreground">
            — Peter Drucker
          </cite>
          <p className="text-muted-foreground text-sm mt-4 max-w-2xl mx-auto">
            This quote perfectly captures my approach to technology and life. I believe in being proactive,
            innovative, and always working towards building something meaningful.
          </p>
        </div>
      </MotionReveal>
    </div>
  );
};

export default PersonalInterests;