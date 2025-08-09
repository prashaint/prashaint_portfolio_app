import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const [isSystemTheme, setIsSystemTheme] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (savedTheme === 'system' || !savedTheme) {
      setTheme(systemPreference);
      setIsSystemTheme(true);
    } else {
      setTheme(savedTheme);
      setIsSystemTheme(false);
    }
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (!isSystemTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isSystemTheme]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#1E293B' : '#FFFFFF');
    }
  }, [theme]);

  const setThemeMode = (newTheme) => {
    if (newTheme === 'system') {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemPreference);
      setIsSystemTheme(true);
      localStorage.setItem('theme', 'system');
    } else {
      setTheme(newTheme);
      setIsSystemTheme(false);
      localStorage.setItem('theme', newTheme);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
  };

  const getCurrentThemeMode = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'system' || !savedTheme) {
      return 'system';
    }
    return savedTheme;
  };

  return {
    theme,
    isSystemTheme,
    setTheme: setThemeMode,
    toggleTheme,
    getCurrentThemeMode,
    isDark: theme === 'dark'
  };
};