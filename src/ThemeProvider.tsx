// src/ThemeProvider.tsx
"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, defaultThemes } from './themes';

type ThemeContextType = {
  theme: string;
  setTheme: (themeName: string) => void;
  themes: Record<string, Theme>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
  initialTheme?: string;
  customThemes?: Record<string, Theme>;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'light',
  customThemes = {},
}) => {
  const allThemes = { ...defaultThemes, ...customThemes };
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && allThemes[savedTheme]) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const currentTheme = allThemes[theme];
    if (currentTheme) {
      const root = document.documentElement;
      Object.entries(currentTheme).forEach(([key, value]) => {
        root.style.setProperty(`--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
      });
      // Apply font directly to body
      document.body.style.fontFamily = currentTheme.fontFamily;
      localStorage.setItem('theme', theme);
    }
  }, [theme, allThemes]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: allThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};