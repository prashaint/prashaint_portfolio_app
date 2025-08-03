import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: "Mail",
      title: "Email Me",
      description: "Drop me a line anytime",
      value: "prashaint.kumar.mishra@gmail.com",
      action: "mailto:prashaint.kumar.mishra@gmail.com"
    },
    {
      icon: "Phone",
      title: "Call Me",
      description: "Let\'s have a conversation",
      value: "+91 8484093319",
      action: "tel:+918484093319"
    },
    {
      icon: "MapPin",
      title: "Location",
      description: "Based in Pune, India",
      value: "Pune, MH, India",
      action: null
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to collaborate on new projects 
              and help businesses achieve their digital goals.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods?.map((method, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft-hover hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={method?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method?.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {method?.description}
                </p>
                {method?.action ? (
                  <a
                    href={method?.action}
                    className="text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
                  >
                    {method?.value}
                  </a>
                ) : (
                  <span className="text-foreground font-medium text-sm">
                    {method?.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact-form-page">
              <Button 
                variant="default" 
                size="lg"
                iconName="Send"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Start a Project
              </Button>
            </Link>
            <Link to="/portfolio-gallery">
              <Button 
                variant="outline" 
                size="lg"
                iconName="Eye"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                View My Portfolio
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Usually responds within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} />
                <span>Available for remote work worldwide</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Coffee" size={16} />
                <span>Always up for a coffee chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;