import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useTheme } from '../../contexts/ThemeContext';
import Logo from '../Logo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/home-landing-page', icon: 'Home' },
    { label: 'Portfolio', path: '/portfolio-gallery', icon: 'Briefcase' },
    { label: 'About', path: '/about-bio-section', icon: 'User' },
    { label: 'Experience', path: '/experience-timeline', icon: 'Clock' },
    { label: 'Contact', path: '/contact-form-page', icon: 'Mail' },
  ];


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/home-landing-page"
              className="flex items-center hover:opacity-80 transition-opacity duration-200 min-w-0 flex-shrink-0"
            >
              {/* Desktop Logo */}
              <div className="hidden sm:block">
                <Logo variant="full" size="sm" />
              </div>
              {/* Mobile Logo - Icon only */}
              <div className="sm:hidden">
                <Logo variant="icon" size="sm" />
              </div>
            </Link>

            {/* Desktop Navigation & Controls */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Navigation Links */}
              <nav className="flex items-center space-x-1">
                {navigationItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out hover:bg-muted ${
                      isActivePath(item?.path)
                        ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item?.label}
                  </Link>
                ))}
              </nav>

              {/* Dark Mode Toggle - Desktop */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-9 h-9"
              >
                <Icon
                  name={isDarkMode ? 'Sun' : 'Moon'}
                  size={18}
                  className="transition-transform duration-200"
                />
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Dark Mode Toggle - Mobile */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-9 h-9 flex-shrink-0"
              >
                <Icon
                  name={isDarkMode ? 'Sun' : 'Moon'}
                  size={18}
                  className="transition-transform duration-200"
                />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="flex-shrink-0"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <Icon 
                  name={isMobileMenuOpen ? 'X' : 'Menu'} 
                  size={24} 
                  className="transition-transform duration-200"
                />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-card shadow-soft-hover animate-slide-in-from-right">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link
                to="/home-landing-page"
                className="hover:opacity-80 transition-opacity"
                onClick={closeMobileMenu}
              >
                <Logo variant="full" size="sm" />
              </Link>
              
              <div className="flex items-center space-x-2">
                {/* Dark Mode Toggle in Mobile Menu */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  <Icon name={isDarkMode ? 'Sun' : 'Moon'} size={20} />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMobileMenu}
                  aria-label="Close mobile menu"
                >
                  <Icon name="X" size={24} />
                </Button>
              </div>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-2">
                {navigationItems?.map((item) => (
                  <li key={item?.path}>
                    <Link
                      to={item?.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-out hover:bg-muted ${
                        isActivePath(item?.path)
                          ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon name={item?.icon} size={20} />
                      <span>{item?.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Theme Preference in Mobile Menu */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="px-4">
                  <h3 className="text-sm font-medium text-foreground mb-3">Appearance</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {isDarkMode ? 'Dark mode' : 'Light mode'}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleTheme}
                      className="ml-2"
                    >
                      <Icon name={isDarkMode ? 'Sun' : 'Moon'} size={16} className="mr-2" />
                      {isDarkMode ? 'Light' : 'Dark'}
                    </Button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;