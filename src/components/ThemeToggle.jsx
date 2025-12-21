import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform active:scale-95"
      aria-label="Toggle theme"
    >
      {isDark ? 
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" /> : 
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
      }
    </button>
  );
};

export default ThemeToggle;