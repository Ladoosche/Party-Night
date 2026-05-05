import React from 'react';
import { ChevronLeft, LogOut } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

interface GameHeaderProps {
  onBack?: () => void;
  onQuit?: () => void;
  onShowPlayers?: () => void;
  title?: React.ReactNode;
  rightContent?: React.ReactNode;
  transparent?: boolean;
}

export const GameHeader: React.FC<GameHeaderProps> = ({ 
  onBack, 
  onQuit, 
  onShowPlayers, 
  title, 
  rightContent,
  transparent = false
}) => {
  const { t } = useAppContext();
  
  return (
    <div className={`flex items-center justify-between px-5 py-4 mb-4 ${transparent ? '' : 'border-b border-slate-100 dark:border-slate-800'}`}>
      {onQuit ? (
        <button
          onClick={onQuit}
          className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
        >
          <LogOut size={16} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
      ) : onBack ? (
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
      ) : <div className="w-10 sm:w-12 absolute left-4" />}
      
      <div className="w-10 sm:w-12" />
      
      <div className="flex flex-col items-center">
        {title}
      </div>
      
      <div className="flex items-center gap-2">
        {onShowPlayers && (
          <button
            onClick={onShowPlayers}
            className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
          >
            {t("edit-players")}
          </button>
        )}
        {rightContent}
      </div>
    </div>
  );
};
