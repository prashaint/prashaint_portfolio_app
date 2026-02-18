import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Logo from '../Logo';
import { MotionReveal } from '../motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', path: '/home-landing-page' },
    { label: 'Portfolio', path: '/portfolio-gallery' },
    { label: 'About', path: '/about-bio-section' },
    { label: 'Experience', path: '/experience-timeline' },
    { label: 'Contact', path: '/contact-form-page' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/prashaint' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/prashaint' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://x.com/prashaint44903' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/prashaint/?hl=en' },
  ];

  return (
    <MotionReveal direction="up">
      <footer className="bg-[#F5F0E8] dark:bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link to="/home-landing-page" className="inline-flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Logo variant="icon" size="lg" />
                <div className="flex flex-col">
                  <span className="font-display font-bold tracking-tight text-foreground text-lg">
                    MishraAI
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Prashaint Mishra
                  </span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Senior Data Engineer passionate about building scalable data pipelines and sharing knowledge with the community.
              </p>
              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-muted/60 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:prashaint.kumar.mishra@gmail.com"
                    className="flex items-center space-x-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon name="Mail" size={15} className="flex-shrink-0" />
                    <span>prashaint.kumar.mishra@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918484093319"
                    className="flex items-center space-x-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon name="Phone" size={15} className="flex-shrink-0" />
                    <span>+91 8484093319</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2.5 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={15} className="flex-shrink-0" />
                  <span>Pune, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-xs text-muted-foreground">
                &copy; {currentYear} Prashaint Mishra. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Built with React &amp; Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </MotionReveal>
  );
};

export default Footer;
