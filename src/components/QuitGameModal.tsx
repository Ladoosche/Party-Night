import React from 'react';
import { useAppContext } from '../context/AppContext';

interface QuitGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const QuitGameModal: React.FC<QuitGameModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useAppContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center p-5 animate-in fade-in" onClick={onClose}>
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden transition-colors" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{t('confirm-quit')}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-[200px] mx-auto transition-colors">{t('confirm-quit-desc')}</p>
            <div className="grid gap-3">
                <button 
                  onClick={onConfirm} 
                  className="w-full py-4 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20"
                  id="quit-confirm-button"
                >
                    {t('exit-to-home')}
                </button>
                <button 
                  onClick={onClose} 
                  className="w-full py-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                  id="quit-cancel-button"
                >
                    {t('continue-playing')}
                </button>
            </div>
        </div>
    </div>
  );
};
