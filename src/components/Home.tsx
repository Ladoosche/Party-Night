import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Globe } from 'lucide-react';

interface HomeProps {
  onSelectGame: (gameId: string) => void;
  onShowPlayers: () => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectGame, onShowPlayers }) => {
  const { players, t } = useAppContext();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide px-5 py-5 pb-12 md:pb-8 relative">
      <div className="text-center mb-8 mt-4">
        <svg viewBox="0 0 60 40" width="60" className="mx-auto mb-3">
          <rect width="60" height="40" fill="#e0f4f8" rx="8"/>
          <path d="M0 26 Q15 20 30 24 Q45 28 60 22 L60 40 L0 40Z" fill="#0a9396" opacity="0.7"/>
          <path d="M0 32 Q20 26 40 30 Q52 33 60 28 L60 40 L0 40Z" fill="#0077b6" opacity="0.5"/>
          <circle cx="46" cy="10" r="7" fill="#ee6c4d" opacity="0.85"/>
        </svg>
        <h1 className="font-sans text-3xl font-black text-slate-900 dark:text-slate-100 leading-none tracking-tight">{t('app-title')}</h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold mt-2">{t('app-sub')}</p>
      </div>

      {error && <div className="text-red-500 text-xs font-bold text-center mb-4 px-1 uppercase tracking-wider">{error}</div>}

      <div className="space-y-3">
        <button 
          onClick={() => {
            const activePlayers = players.filter(p => p.isActive !== false);
            if (activePlayers.length < 3) {
              setError(t('err-not-enough'));
              onShowPlayers();
              return;
            }
            onSelectGame('undercover');
          }} 
          className="w-full text-left flex items-center gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-[#0a9396] hover:shadow-md transition-all shadow-sm group"
        >
          <div className="w-14 h-14 rounded-xl bg-[#0a9396]/10 flex items-center justify-center text-2xl group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors border border-[#0a9396]/20 shadow-inner">🕵️</div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">{t('uc-title')}</h3>
              <span className="text-[9px] font-bold text-[#0a9396] uppercase tracking-wider bg-[#0a9396]/10 px-2 py-0.5 rounded-full">
                {t('min-players').replace('{0}', '3')}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight font-medium">{t('uc-desc')}</p>
          </div>
        </button>

        <button 
          onClick={() => {
            const activePlayers = players.filter(p => p.isActive !== false);
            if (activePlayers.length < 3) {
              setError(t('err-not-enough'));
              onShowPlayers();
              return;
            }
            onSelectGame('killer');
          }}
          className="w-full text-left flex items-center gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-red-900 hover:shadow-md transition-all shadow-sm group"
        >
          <div className="w-14 h-14 rounded-xl bg-red-50 dark:bg-red-900/10 flex items-center justify-center text-2xl group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors border border-red-100 dark:border-red-900/20 shadow-inner">💀</div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">{t('killer-title')}</h3>
              <span className="text-[9px] font-bold text-red-900 uppercase tracking-wider bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">
                {t('min-players').replace('{0}', '3')}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight font-medium">{t('killer-desc')}</p>
          </div>
        </button>

        <button 
          onClick={() => {
            const activePlayers = players.filter(p => p.isActive !== false);
            if (activePlayers.length < 2) {
              setError(t('err-not-enough-2'));
              onShowPlayers();
              return;
            }
            onSelectGame('never-have-i-ever');
          }} 
          className="w-full text-left flex items-center gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-purple-500 hover:shadow-md transition-all shadow-sm group"
        >
          <div className="w-14 h-14 rounded-xl bg-purple-50 dark:bg-purple-900/10 flex items-center justify-center text-3xl group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors border border-purple-100 dark:border-purple-900/20 shadow-inner">🍸</div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">{t('nhie-title')}</h3>
              <span className="text-[9px] font-bold text-purple-600 uppercase tracking-wider bg-purple-100 dark:bg-purple-900/20 px-2 py-0.5 rounded-full">
                {t('min-players').replace('{0}', '2')}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight font-medium">{t('nhie-desc')}</p>
          </div>
        </button>

        <button 
          onClick={() => {
            const activePlayers = players.filter(p => p.isActive !== false);
            if (activePlayers.length < 2) {
              setError(t('err-not-enough-2'));
              onShowPlayers();
              return;
            }
            onSelectGame('most-likely-to');
          }} 
          className="w-full text-left flex items-center gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-[#ee6c4d] hover:shadow-md transition-all shadow-sm group"
        >
          <div className="w-14 h-14 rounded-xl bg-[#ee6c4d]/10 flex items-center justify-center text-3xl group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors border border-[#ee6c4d]/20 shadow-inner">👇</div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">{t('mlt-title')}</h3>
              <span className="text-[9px] font-bold text-[#ee6c4d] uppercase tracking-wider bg-[#ee6c4d]/10 px-2 py-0.5 rounded-full">
                {t('min-players').replace('{0}', '2')}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight font-medium">{t('mlt-desc')}</p>
          </div>
        </button>

        <button 
          onClick={() => onSelectGame('game-421')}
          className="w-full text-left flex items-center gap-4 p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-slate-900 dark:hover:border-slate-100 hover:shadow-md transition-all shadow-sm group"
        >
          <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-2xl group-hover:bg-white dark:group-hover:bg-slate-600 transition-colors border border-slate-200 dark:border-slate-600 shadow-inner">🎲</div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-1">{t('game-421-title')}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight font-medium">{t('game-421-desc')}</p>
          </div>
        </button>
      </div>
    </div>
  );
};
