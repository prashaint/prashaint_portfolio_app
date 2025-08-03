import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalInterests = () => {
  const interests = [
    {
      id: 1,
      title: "Photography",
      description: "Capturing moments and exploring creative composition through landscape and street photography",
      icon: "Camera",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "Hiking & Nature",
      description: "Exploring trails around the Bay Area and finding inspiration in nature\'s beauty",
      icon: "Mountain",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop",
      level: "Enthusiast"
    },
    {
      id: 3,
      title: "Open Source",
      description: "Contributing to React ecosystem projects and helping the developer community grow",
      icon: "Github",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests?.map((interest) => (
            <div key={interest?.id} className="bg-card rounded-xl overflow-hidden shadow-soft-hover hover:shadow-lg transition-all duration-300 group">
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
          ))}
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values?.map((value, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft-hover">
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
          ))}
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {funFacts?.map((fact, index) => (
            <div key={index} className="bg-card rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <p className="text-foreground text-sm font-medium">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Quote Section */}
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
    </div>
  );
};

export default PersonalInterests;