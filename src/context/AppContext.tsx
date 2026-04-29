import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Language, TRANSLATIONS } from '../i18n';

export type Theme = 'light' | 'dark' | 'system';

export interface Player {
  id: string;
  name: string;
  isActive?: boolean;
  score?: number;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('uc_lang');
    return (saved as Language) || 'en';
  });

  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem('uc_players');
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('uc_theme');
    return (saved as Theme) || 'system';
  });

  useEffect(() => {
    localStorage.setItem('uc_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('uc_players', JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem('uc_theme', theme);
    
    const root = window.document.documentElement;
    const updateTheme = () => {
      const isDark = 
        theme === 'dark' || 
        (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    updateTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => updateTheme();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  const t = (key: string) => {
    return TRANSLATIONS[language][key] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, players, setPlayers, theme, setTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}
