import { useState, useEffect } from 'react';

const FONT_PRESETS = {
  claude: {
    name: 'Claude Style',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    sans: 'Inter, system-ui, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, monospace',
    description: 'Same font stack as Claude.ai for optimal readability'
  },
  system: {
    name: 'System Default',
    serif: 'ui-serif, Georgia, serif',
    sans: 'ui-sans-serif, system-ui, sans-serif',
    mono: 'ui-monospace, monospace',
    description: 'Native system fonts for best performance'
  },
  modern: {
    name: 'Modern Stack',
    serif: 'Charter, "Bitstream Charter", "Sitka Text", Cambria, serif',
    sans: 'Inter, "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    mono: '"SF Mono", Monaco, "Cascadia Code", monospace',
    description: 'Modern, clean typography stack'
  }
};

export const useFontConfig = () => {
  const [currentPreset, setCurrentPreset] = useState('claude');

  useEffect(() => {
    // Load saved font preference from localStorage
    const savedPreset = localStorage.getItem('font-preset');
    if (savedPreset && FONT_PRESETS[savedPreset]) {
      setCurrentPreset(savedPreset);
    }
  }, []);

  useEffect(() => {
    // Apply font changes to CSS custom properties
    const preset = FONT_PRESETS[currentPreset];
    if (preset) {
      document.documentElement.style.setProperty('--font-serif', preset.serif);
      document.documentElement.style.setProperty('--font-sans', preset.sans);
      document.documentElement.style.setProperty('--font-mono', preset.mono);
    }
  }, [currentPreset]);

  const changePreset = (presetName) => {
    if (FONT_PRESETS[presetName]) {
      setCurrentPreset(presetName);
      localStorage.setItem('font-preset', presetName);
    }
  };

  const getCurrentFonts = () => {
    return FONT_PRESETS[currentPreset] || FONT_PRESETS.claude;
  };

  return {
    presets: FONT_PRESETS,
    currentPreset,
    changePreset,
    getCurrentFonts
  };
};