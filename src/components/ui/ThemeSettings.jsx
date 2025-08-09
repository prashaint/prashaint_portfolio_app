import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../AppIcon';

const ThemeSettings = () => {
  const { isDarkMode, setLightMode, setDarkMode, theme } = useTheme();

  const themeOptions = [
    {
      id: 'light',
      name: 'Light Mode',
      description: 'Clean and bright interface',
      icon: 'Sun',
      active: !isDarkMode,
      onClick: setLightMode
    },
    {
      id: 'dark',
      name: 'Dark Mode',
      description: 'Easy on the eyes in low light',
      icon: 'Moon',
      active: isDarkMode,
      onClick: setDarkMode
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">
          Theme Preference
        </h3>
        <p className="text-sm text-muted-foreground">
          Choose your preferred color scheme
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {themeOptions.map((option) => (
          <button
            key={option.id}
            onClick={option.onClick}
            className={`relative flex items-start space-x-3 p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              option.active
                ? 'border-primary bg-primary/5'
                : 'border-border bg-card hover:border-primary/50'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              option.active ? 'bg-primary' : 'bg-muted'
            }`}>
              <Icon 
                name={option.icon} 
                size={20} 
                className={option.active ? 'text-primary-foreground' : 'text-muted-foreground'} 
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-foreground">
                  {option.name}
                </h4>
                {option.active && (
                  <Icon name="Check" size={16} className="text-primary" />
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {option.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Info" size={16} />
          <span>
            Current theme: <span className="font-medium text-foreground capitalize">{theme}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;