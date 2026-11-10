import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeColor, ThemeContextType } from '../types';
import { getThemeClasses, hexToRgb } from '../utils/themeUtils';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('webgeny-dark-mode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      // Default to LIGHT mode as requested
      return false;
    }
    return false;
  });

  // Default to 'blue' as requested
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('webgeny-dark-mode', JSON.stringify(isDarkMode));

    // Inject CSS variables for the theme
    const themeClasses = getThemeClasses(themeColor);
    root.style.setProperty('--primary-color', themeClasses.primaryHex);

    // Calculate lighter versions for backgrounds (crude but effective)
    const primaryRgb = hexToRgb(themeClasses.primaryHex);
    if (primaryRgb) {
      root.style.setProperty('--primary-color-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
      root.style.setProperty('--primary-light', `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.1)`);
      root.style.setProperty('--primary-medium', `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.25)`);
    }

  }, [isDarkMode, themeColor]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode: () => setIsDarkMode(prev => !prev), themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};