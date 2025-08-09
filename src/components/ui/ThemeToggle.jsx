import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../AppIcon';
import Button from './Button';

const ThemeToggle = ({ className = "", size = "icon", variant = "ghost" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={`relative transition-all duration-300 ${className}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Icon
          name="Sun"
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            isDarkMode 
              ? 'scale-0 rotate-90 opacity-0' 
              : 'scale-100 rotate-0 opacity-100'
          }`}
        />
        
        {/* Moon Icon */}
        <Icon
          name="Moon"
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            isDarkMode 
              ? 'scale-100 rotate-0 opacity-100' 
              : 'scale-0 -rotate-90 opacity-0'
          }`}
        />
      </div>
    </Button>
  );
};

// Alternative toggle with text labels
export const ThemeToggleWithLabel = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className={`flex items-center space-x-2 ${className}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4">
        <Icon
          name="Sun"
          size={16}
          className={`absolute inset-0 transition-all duration-300 ${
            isDarkMode 
              ? 'scale-0 rotate-90 opacity-0' 
              : 'scale-100 rotate-0 opacity-100'
          }`}
        />
        <Icon
          name="Moon"
          size={16}
          className={`absolute inset-0 transition-all duration-300 ${
            isDarkMode 
              ? 'scale-100 rotate-0 opacity-100' 
              : 'scale-0 -rotate-90 opacity-0'
          }`}
        />
      </div>
      <span className="text-sm font-medium">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </Button>
  );
};

// Switch-style toggle
export const ThemeSwitch = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
        isDarkMode ? 'bg-primary' : 'bg-muted'
      } ${className}`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDarkMode}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-card transition-transform duration-300 ${
          isDarkMode ? 'translate-x-6' : 'translate-x-1'
        }`}
      >
        <Icon
          name={isDarkMode ? "Moon" : "Sun"}
          size={12}
          className="absolute inset-0.5 text-foreground"
        />
      </span>
    </button>
  );
};

export default ThemeToggle;