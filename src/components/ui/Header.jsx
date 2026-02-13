import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../AppIcon';
import { useTheme } from '../../contexts/ThemeContext';
import Logo from '../Logo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    closeMobileMenu();
  }, [location.pathname]);

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
    if (path === '/about-bio-section') {
      return location.pathname === path || location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'border-white/10'
            : 'border-transparent'
        }`}
        style={{
          background: isDarkMode
            ? 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 40%, #0d0d0d 80%, #000000 100%)'
            : 'linear-gradient(180deg, #8b8ff8 0%, #6c72f6 35%, #5a5ef0 70%, #4a4de8 100%)',
          boxShadow: isScrolled
            ? isDarkMode
              ? '0 4px 16px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3)'
              : '0 4px 16px rgba(108, 114, 246, 0.3), 0 1px 4px rgba(108, 114, 246, 0.15)'
            : isDarkMode
              ? '0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.2)'
              : '0 2px 8px rgba(108, 114, 246, 0.2), 0 1px 3px rgba(108, 114, 246, 0.1)',
        }}
      >
        {/* Top highlight line for 3D raised effect */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Desktop: Logo on left */}
            <Link
              to="/home-landing-page"
              className="hidden md:flex items-center hover:opacity-80 transition-opacity duration-200 min-w-0 flex-shrink-0 [&_span]:text-white"
            >
              <Logo variant="full" size="sm" />
            </Link>

            {/* Mobile: Hamburger on left */}
            <div className="md:hidden flex-shrink-0">
              <motion.button
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 transition-colors duration-200"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={22} />
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile: Centered name */}
            <Link
              to="/home-landing-page"
              className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity duration-200"
            >
              <span className="font-display font-bold tracking-tight text-white text-lg whitespace-nowrap drop-shadow-sm">
                Prashaint Mishra
              </span>
            </Link>

            {/* Desktop Navigation & Controls */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Pill-shaped navigation bar */}
              <nav className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-1.5 py-1">
                {navigationItems?.map((item) => {
                  const active = isActivePath(item?.path);
                  return (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className="relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      {/* Animated sliding pill for active link */}
                      {active && (
                        <motion.span
                          layoutId="activeNavPill"
                          className="absolute inset-0 bg-white rounded-full shadow-sm"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className={`relative z-10 ${
                        active
                          ? 'dark:text-purple-900 font-semibold text-[#4a4de8]'
                          : 'text-white/80 hover:text-white'
                      }`}>
                        {item?.label}
                      </span>
                    </Link>
                  );
                })}
              </nav>

              {/* Theme Toggle with spin animation */}
              <motion.button
                onClick={toggleTheme}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="relative w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-200"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon name={isDarkMode ? 'Sun' : 'Moon'} size={18} />
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile: Theme toggle on right */}
            <div className="md:hidden flex-shrink-0">
              <motion.button
                onClick={toggleTheme}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/15 transition-colors duration-200"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? 'sun-m' : 'moon-m'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon name={isDarkMode ? 'Sun' : 'Moon'} size={18} />
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - rendered via portal to avoid transform context breaking fixed positioning */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu-overlay"
              className="fixed inset-0 z-[999] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-background/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobileMenu}
              />

              {/* Slide-in Panel */}
              <motion.div
                className="fixed inset-y-0 right-0 w-full max-w-sm bg-card/95 backdrop-blur-xl shadow-2xl border-l border-border/50"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              >
                {/* Panel Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <Link
                    to="/home-landing-page"
                    className="hover:opacity-80 transition-opacity"
                    onClick={closeMobileMenu}
                  >
                    <Logo variant="full" size="sm" />
                  </Link>

                  <motion.button
                    className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon name="X" size={22} />
                  </motion.button>
                </div>

                {/* Navigation Links - staggered entrance */}
                <nav className="p-4">
                  <ul className="space-y-1">
                    {navigationItems?.map((item, index) => {
                      const active = isActivePath(item?.path);
                      return (
                        <motion.li
                          key={item?.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                        >
                          <Link
                            to={item?.path}
                            onClick={closeMobileMenu}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                              active
                                ? 'text-primary-foreground bg-primary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                            }`}
                          >
                            <Icon name={item?.icon} size={20} />
                            <span>{item?.label}</span>
                            {active && (
                              <Icon name="ChevronRight" size={16} className="ml-auto opacity-60" />
                            )}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>

                  {/* Appearance toggle */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                  >
                    <div className="px-4">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Appearance
                      </h3>
                      <div className="flex items-center justify-between bg-muted/40 rounded-xl px-4 py-3">
                        <div className="flex items-center space-x-3">
                          <Icon name={isDarkMode ? 'Moon' : 'Sun'} size={18} className="text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {isDarkMode ? 'Dark mode' : 'Light mode'}
                          </span>
                        </div>
                        <button
                          onClick={toggleTheme}
                          className="relative w-11 h-6 rounded-full bg-border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          role="switch"
                          aria-checked={isDarkMode}
                        >
                          <motion.div
                            className="absolute top-0.5 w-5 h-5 rounded-full bg-primary shadow-sm"
                            animate={{ left: isDarkMode ? '22px' : '2px' }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Header;
