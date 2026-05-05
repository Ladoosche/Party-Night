import React from 'react';
import { X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

interface NotEnoughPlayersProps {
  minPlayers: number;
  onBack: () => void;
  onManagePlayers: () => void;
}

export const NotEnoughPlayers: React.FC<NotEnoughPlayersProps> = ({ minPlayers, onBack, onManagePlayers }) => {
  const { t } = useAppContext();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white">
      <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 mb-6 font-bold shadow-sm border border-red-50">
        <X size={32} />
      </div>
      <h2 className="text-xl font-black text-slate-900 mb-2 leading-tight tracking-tight">
        {t('err-not-enough').replace('3', minPlayers.toString())}
      </h2>
      <p className="text-xs text-slate-500 mb-8 font-medium leading-relaxed max-w-[240px]">
        {t('err-not-enough-manage')}
      </p>
      <div className="flex flex-col w-full gap-3 max-w-[200px]">
        <button 
          onClick={onManagePlayers}
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-slate-900/10 transition-transform active:scale-95"
        >
          {t("edit-players")}
        </button>
        <button 
          onClick={onBack}
          className="w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold text-xs uppercase tracking-widest transition-colors hover:bg-slate-200"
        >
          {t("back")}
        </button>
      </div>
    </div>
  );
};
