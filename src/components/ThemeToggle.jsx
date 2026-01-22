import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-[90] p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform active:scale-95"
      aria-label="Toggle theme"
    >
      {isDarkMode ?
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" /> :
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      }
    </button>
  );
};

export default ThemeToggle;