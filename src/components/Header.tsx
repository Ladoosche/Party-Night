import React from 'react';
import { useAppContext, Theme } from '../context/AppContext';
import { Language } from '../i18n';
import { Dropdown } from './Dropdown';
import { Globe, Users, Settings } from 'lucide-react';

interface HeaderProps {
    onShowPlayers?: () => void;
    onShowSettings?: () => void;
    showPlayersCount?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  onShowPlayers, 
  onShowSettings,
  showPlayersCount = true 
}) => {
  const { language, setLanguage, t, players } = useAppContext();

  const langOptions = [
    { value: 'en', label: 'English', icon: <Globe size={14} /> },
    { value: 'fr', label: 'Français', icon: <Globe size={14} /> },
    { value: 'fr-ca', label: 'Français (Québec)', icon: <Globe size={14} /> },
    { value: 'es', label: 'Español', icon: <Globe size={14} /> },
  ];

  return (
    <header className="relative z-50 px-5 py-4 flex justify-between items-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50 transition-colors">
      <div className="flex gap-2">
        <Dropdown 
          id="language-dropdown"
          options={langOptions} 
          value={language} 
          onChange={(val) => setLanguage(val as Language)} 
          align="left"
        />
      </div>

      <div className="flex items-center gap-2">
        {showPlayersCount && (
          <button 
            onClick={onShowPlayers}
            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Users size={16} className="text-[#0a9396]" />
            <span className="text-xs font-bold">{players.length}</span>
          </button>
        )}
        
        <button 
          onClick={onShowSettings}
          className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          title="Settings"
        >
          <Settings size={16} />
        </button>
      </div>
    </header>
  );
};
