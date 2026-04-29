import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { Language, TRANSLATIONS } from '../i18n';

export type Theme = 'light' | 'dark' | 'system';

export interface Player {
  id: string;
  name: string;
  isActive?: boolean;
  score?: number;
}

export interface UsedItems {
  undercoverWords: number[]; // indices of wordGroups
  killerActions: number[]; // indices of killerActions
  killerWords: number[]; // indices of wordGroups
  nhie: string[]; // question ids
  mlt: string[]; // question ids
  trivia: string[]; // question ids
}

export const defaultUsedItems: UsedItems = {
  undercoverWords: [],
  killerActions: [],
  killerWords: [],
  nhie: [],
  mlt: [],
  trivia: [],
};

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
  usedItems: UsedItems;
  setUsedItems: (items: UsedItems) => void;
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

  const [usedItems, setUsedItems] = useState<UsedItems>(() => {
    const saved = localStorage.getItem('uc_used_items');
    return saved ? JSON.parse(saved) : defaultUsedItems;
  });

  useEffect(() => {
    localStorage.setItem('uc_used_items', JSON.stringify(usedItems));
  }, [usedItems]);

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
    <AppContext.Provider value={{ language, setLanguage, players, setPlayers, theme, setTheme, t, usedItems, setUsedItems }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}
