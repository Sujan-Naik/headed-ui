// src/themes.ts
export type Theme = {
  highlight: string;
  baseBackground: string;
  baseForeground: string;
  hover: string;
  backgroundPrimary: string;
  foregroundPrimary: string;
  backgroundSecondary: string;
  foregroundSecondary: string;
  backgroundTertiary: string;
  foregroundTertiary: string;
  borderRadius: string;
  borderColor: string;
  borderThickness: string;
  paddingThickness: string;
  modalMaxWidth: string;
  modalMinWidth: string;
  buttonPadding: string;
  accordionPadding: string;
  tabHeight: string;
  linkColor: string;
  linkIconSize: string;
  fontFamily: string;
};
export const defaultThemes: Record<string, Theme> = {
  light: {
    highlight: '#e3f2fd',
    baseBackground: '#ffffff',
    baseForeground: '#1a1a1a',
    hover: '#f5f5f5',
    backgroundPrimary: '#2196F3',
    foregroundPrimary: '#ffffff',
    backgroundSecondary: '#f5f5f5',
    foregroundSecondary: '#333333',
    backgroundTertiary: '#e0e0e0',
    foregroundTertiary: '#555555',
    borderRadius: '8px',
    borderColor: '#e0e0e0',
    borderThickness: '1px',
    paddingThickness: '16px',
    modalMaxWidth: '800px',
    modalMinWidth: '400px',
    buttonPadding: '0.5rem 1rem',
    accordionPadding: '0.75rem',
    tabHeight: '48px',
    linkColor: '#1976D2', // Changed to a bold, visible blue
    linkIconSize: '4px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  dark: {
    highlight: '#2a2a2a',
    baseBackground: '#121212',
    baseForeground: '#e0e0e0',
    hover: '#2a2a2a',
    backgroundPrimary: '#1e88e5',
    foregroundPrimary: '#ffffff',
    backgroundSecondary: '#1e1e1e',
    foregroundSecondary: '#b0b0b0',
    backgroundTertiary: '#2a2a2a',
    foregroundTertiary: '#9e9e9e',
    borderRadius: '8px',
    borderColor: '#333333',
    borderThickness: '1px',
    paddingThickness: '16px',
    modalMaxWidth: '800px',
    modalMinWidth: '400px',
    buttonPadding: '0.5rem 1rem',
    accordionPadding: '0.75rem',
    tabHeight: '48px',
    linkColor: '#64B5F6', // Brighter blue for dark background
    linkIconSize: '4px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  sunset: {
    highlight: '#FFE5B4',
    baseBackground: '#FFF5E6',
    baseForeground: '#2C1810',
    hover: '#E67E22',
    backgroundPrimary: '#E67E22',
    foregroundPrimary: '#FFF3E0',
    backgroundSecondary: '#D35400',
    foregroundSecondary: '#FFE0B2',
    backgroundTertiary: '#C0392B',
    foregroundTertiary: '#FFCCBC',
    borderRadius: '20px',
    borderColor: '#F39C12',
    borderThickness: '4px',
    paddingThickness: '12px',
    modalMaxWidth: '800px',
    modalMinWidth: '400px',
    buttonPadding: '0.6rem 1.2rem',
    accordionPadding: '0.85rem',
    tabHeight: '52px',
    linkColor: '#C0392B', // Deep red that stands out
    linkIconSize: '4px',
    fontFamily: '"Georgia", "Times New Roman", serif',
  },
  ocean: {
    highlight: '#B2EBF2',
    baseBackground: '#E0F7FA',
    baseForeground: '#004D40',
    hover: '#00897B',
    backgroundPrimary: '#00796B',
    foregroundPrimary: '#E0F2F1',
    backgroundSecondary: '#00695C',
    foregroundSecondary: '#B2DFDB',
    backgroundTertiary: '#004D40',
    foregroundTertiary: '#80CBC4',
    borderRadius: '18px',
    borderColor: '#4DB6AC',
    borderThickness: '3px',
    paddingThickness: '10px',
    modalMaxWidth: '800px',
    modalMinWidth: '400px',
    buttonPadding: '0.5rem 1rem',
    accordionPadding: '0.75rem',
    tabHeight: '50px',
    linkColor: '#00695C', // Darker teal for better contrast
    linkIconSize: '4px',
    fontFamily: '"Trebuchet MS", "Lucida Sans", sans-serif',
  },
  neon: {
    highlight: '#FF1493',
    baseBackground: '#0D0221',
    baseForeground: '#F0F0F0',
    hover: '#FF6EC7',
    backgroundPrimary: '#7209B7',
    foregroundPrimary: '#F72585',
    backgroundSecondary: '#560BAD',
    foregroundSecondary: '#B5179E',
    backgroundTertiary: '#3A0CA3',
    foregroundTertiary: '#4CC9F0',
    borderRadius: '12px',
    borderColor: '#F72585',
    borderThickness: '3px',
    paddingThickness: '12px',
    modalMaxWidth: '800px',
    modalMinWidth: '400px',
    buttonPadding: '0.6rem 1.4rem',
    accordionPadding: '0.8rem',
    tabHeight: '54px',
    linkColor: '#4CC9F0', // Bright cyan - perfect for neon theme
    linkIconSize: '5px',
    fontFamily: '"Courier New", "Consolas", monospace',
  },
  forest: {
    highlight: '#C8E6C9',
    baseBackground: '#F1F8E9',
    baseForeground: '#1B5E20',
    hover: '#66BB6A',
    backgroundPrimary: '#388E3C',
    foregroundPrimary: '#E8F5E9',
    backgroundSecondary: '#2E7D32',
    foregroundSecondary: '#C8E6C9',
    backgroundTertiary: '#1B5E20',
    foregroundTertiary: '#A5D6A7',
    borderRadius: '16px',
    borderColor: '#81C784',
    borderThickness: '4px',
    paddingThickness: '10px',
    modalMaxWidth: '800px',
    modalMinWidth: '400px',
    buttonPadding: '0.5rem 1rem',
    accordionPadding: '0.75rem',
    tabHeight: '50px',
    linkColor: '#2E7D32', // Darker green for visibility
    linkIconSize: '4px',
    fontFamily: '"Verdana", "Geneva", sans-serif',
  },
};