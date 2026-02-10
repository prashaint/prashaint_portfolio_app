import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'prashaint.kumar.mishra@gmail.com',
      href: 'mailto:prashaint.kumar.mishra@gmail.com',
      description: 'Best for connection requests'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+91 8484093319',
      href: 'tel:8484093319',
      description: 'Available for friendly chats'
    },
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/prashaint',
      href: 'https://www.linkedin.com/in/prashaint',
      description: 'Professional networking'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Pune, India',
      href: null,
      description: 'Available for local meetups'
    }
  ];

  const explorationTime = [
    { day: 'Monday - Friday', hours: 'After work hours' },
    { day: 'Saturday', hours: 'Full Day (10:00 AM - 7:00 PM)' },
    { day: 'Sunday', hours: 'Full Day (10:00 AM - 7:00 PM)' }
  ];

  const responseTime = {
    email: '< 48 hours',
    phone: 'Within 2-3 days',
    linkedin: '< 24 hours'
  };

  return (
    <div className="space-y-6">
      {/* Contact Methods */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Get In Touch
        </h3>
        <div className="space-y-4">
          {contactMethods?.map((method, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={method?.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground">
                    {method?.label}
                  </h4>
                </div>
                {method?.href ? (
                  <a
                    href={method?.href}
                    className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 break-all"
                    target={method?.href?.startsWith('http') ? '_blank' : undefined}
                    rel={method?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method?.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground">{method?.value}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  {method?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time to Explore World */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Time to Explore World
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Best times to connect for learning, discussions, and knowledge sharing
        </p>
        <div className="space-y-3">
          {explorationTime?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{schedule?.day}</span>
              <span className="text-sm font-medium text-foreground">{schedule?.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Response Time */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Response Time
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Email</span>
            </div>
            <span className="text-sm font-medium text-success">{responseTime?.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Phone</span>
            </div>
            <span className="text-sm font-medium text-success">{responseTime?.phone}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Linkedin" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">LinkedIn</span>
            </div>
            <span className="text-sm font-medium text-success">{responseTime?.linkedin}</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Quick Actions
        </h3>
        <div className="space-y-3">
          <Button
            variant="outline"
            fullWidth
            iconName="Download"
            iconPosition="left"
            onClick={() => {
              // Resume download
              const link = document.createElement('a');
              link.href = '/assets/resume/Prashaint_Mishra_Nov25.pdf';
              link.download = 'Prashaint_Mishra_Nov25.pdf';
              link?.click();
            }}
          >
            Download Resume
          </Button>
          <Button
            variant="outline"
            fullWidth
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.open('https://calendly.com/prashaint', '_blank')}
          >
            Schedule Meeting
          </Button>
          <Button
            variant="outline"
            fullWidth
            iconName="Calendar"
            iconPosition="left"
            onClick={() => window.open('https://calendly.com/portfoliopro', '_blank')}
          >
            Schedule Casual Chat
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://wa.me/918484093319', '_blank')}
          >
            WhatsApp Chat
          </Button>
        </div>
      </div>

      {/* Learning & Sharing Info */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          What We Can Explore Together
        </h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="BookOpen" size={16} className="text-primary" />
            <span>Knowledge sharing sessions</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} className="text-primary" />
            <span>Mentorship and career guidance</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Code" size={16} className="text-primary" />
            <span>Open source collaboration</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Coffee" size={16} className="text-primary" />
            <span>Casual tech discussions</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Lightbulb" size={16} className="text-primary" />
            <span>Learning new technologies together</span>
          </div>
        </div>
      </div>

      {/* Location Map */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">
            Location
          </h3>
          <p className="text-sm text-muted-foreground">
            Available for in-person meetups and coffee chats in Pune, India
          </p>
        </div>
        <div className="h-48 bg-muted">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Pune Location"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056543154419!3d18.524598599502376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f14.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1754242681417!5m2!1sen!2sin"
            className="border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;