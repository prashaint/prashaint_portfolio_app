import React, { useState } from 'react';
import { useFontConfig } from '../hooks/useFontConfig';
import { useTheme } from '../hooks/useTheme';
import Icon from './AppIcon';
import Button from './ui/Button';

const SettingsMenu = ({ className = '' }) => {
  const { presets, currentPreset, changePreset } = useFontConfig();
  const { theme, setTheme, toggleTheme, getCurrentThemeMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handlePresetChange = (presetName) => {
    changePreset(presetName);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10"
        aria-label="Settings"
      >
        <Icon name="Settings" size={18} />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 top-12 z-50 w-80 bg-card rounded-lg border border-border shadow-soft-hover p-4">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-1 font-sans">
                Settings
              </h3>
              <p className="text-xs text-muted-foreground font-claude">
                Customize your reading experience
              </p>
            </div>

            {/* Theme Section */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-foreground mb-3 font-sans">
                Theme
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'light', label: 'Light', icon: 'Sun' },
                  { key: 'dark', label: 'Dark', icon: 'Moon' },
                  { key: 'system', label: 'System', icon: 'Monitor' }
                ].map((themeOption) => (
                  <button
                    key={themeOption.key}
                    onClick={() => setTheme(themeOption.key)}
                    className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                      getCurrentThemeMode() === themeOption.key
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-muted-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon name={themeOption.icon} size={16} className="mx-auto mb-1" />
                    <div className="text-xs font-sans">{themeOption.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Theme Toggle */}
            <div className="mb-6 p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-foreground font-sans">Quick Toggle</span>
                  <p className="text-xs text-muted-foreground font-claude">Light ↔ Dark</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="font-sans"
                >
                  <Icon name={theme === 'light' ? 'Moon' : 'Sun'} size={14} className="mr-2" />
                  {theme === 'light' ? 'Dark' : 'Light'}
                </Button>
              </div>
            </div>

            {/* Font Section */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3 font-sans">
                Font Style
              </h4>
              <div className="space-y-3">
                {Object.entries(presets).map(([key, preset]) => (
                  <div
                    key={key}
                    className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                      currentPreset === key
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-muted-foreground hover:bg-muted/50'
                    }`}
                    onClick={() => handlePresetChange(key)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground text-sm font-sans">
                        {preset.name}
                      </span>
                      {currentPreset === key && (
                        <Icon name="Check" size={16} className="text-primary" />
                      )}
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-2 font-claude">
                      {preset.description}
                    </p>
                    
                    {/* Font Preview */}
                    <div className="space-y-1">
                      <div 
                        className="text-sm text-foreground"
                        style={{ fontFamily: preset.serif }}
                      >
                        Sample reading text
                      </div>
                      <div 
                        className="text-sm text-muted-foreground"
                        style={{ fontFamily: preset.sans }}
                      >
                        Interface elements
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-claude">Settings saved automatically</span>
                <Icon name="Check" size={14} className="text-success" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SettingsMenu;