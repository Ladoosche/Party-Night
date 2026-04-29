import React, { useState } from 'react';
import { X, Plus, GripVertical, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Reorder } from 'motion/react';

interface EditPlayersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditPlayersModal: React.FC<EditPlayersModalProps> = ({ isOpen, onClose }) => {
  const { players, setPlayers, t } = useAppContext();
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isOpen) return null;

  const addPlayer = () => {
    const name = playerName.trim();
    if (!name) return setError(t('err-empty'));
    if (players.some(p => p.name.toLowerCase() === name.toLowerCase())) return setError(t('err-duplicate'));
    setPlayers([...players, { id: crypto.randomUUID(), name, isActive: true, score: 0 }]);
    setPlayerName('');
    setError(null);
  };

  const resetScores = () => {
    setPlayers(players.map(p => ({ ...p, score: 0 })));
    setShowResetConfirm(false);
  };

  const getInitials = (name: string) => name.trim().slice(0, 2).toUpperCase();

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-5 animate-in fade-in"
      onClick={onClose}
    >
      {showResetConfirm ? (
        <div 
          className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-xs p-8 shadow-2xl border border-slate-100 dark:border-slate-700 animate-in zoom-in-95"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-tight">{t('confirm-reset')}</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            {t('confirm-reset-desc')}
          </p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={resetScores}
              className="w-full py-4 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-500/20"
            >
              {t('reset')}
            </button>
            <button 
              onClick={() => setShowResetConfirm(false)}
              className="w-full py-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-600"
            >
              {t('cancel')}
            </button>
          </div>
        </div>
      ) : (
        <div 
          className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-md p-6 shadow-2xl flex flex-col max-h-[80vh] border border-slate-100 dark:border-slate-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t('players-label')}</h3>
            <div className="flex items-center gap-2">
              {players.some(p => (p.score || 0) > 0) && (
                <button 
                  onClick={() => setShowResetConfirm(true)}
                  className="text-[9px] font-bold text-red-500 uppercase tracking-wider hover:bg-red-50 dark:hover:bg-red-900/20 px-2 py-1 rounded transition-colors"
                >
                  {t('reset-scores')}
                </button>
              )}
              <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <input 
              value={playerName} 
              onChange={e => setPlayerName(e.target.value)} 
              onKeyDown={e => e.key === 'Enter' && addPlayer()} 
              placeholder={t('player-input-placeholder')} 
              className="flex-1 px-3 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm outline-none focus:border-[#0a9396] focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm" 
            />
            <button 
              onClick={addPlayer} 
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0a9396] text-white hover:bg-[#087a7d] transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
          {error && <div className="text-red-500 text-[10px] font-bold mb-3 px-1 uppercase tracking-wider">{error}</div>}

          <div className="flex-1 overflow-y-auto min-h-0 px-1 -mx-1 scrollbar-hide">
            <Reorder.Group axis="y" values={players} onReorder={setPlayers} className="space-y-2 pb-2">
              {players.map(p => (
                <Reorder.Item 
                  key={p.id} 
                  value={p} 
                  className={`flex items-center gap-3 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-opacity ${p.isActive === false ? 'opacity-50' : 'opacity-100'}`}
                >
                  <div className="cursor-grab text-slate-300 dark:text-slate-600 hover:text-[#0077b6] transition-colors py-2">
                    <GripVertical size={16} />
                  </div>
                  <button 
                    onClick={() => setPlayers(players.map(x => x.id === p.id ? { ...x, isActive: x.isActive === false ? true : false } : x))}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold transition-colors ${p.isActive === false ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500' : 'bg-[#0a9396]/20 text-[#0a9396]'}`}
                  >
                    {getInitials(p.name)}
                  </button>
                  <span className={`flex-1 text-sm font-bold truncate transition-colors ${p.isActive === false ? 'text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-300'}`}>
                    {p.name}
                  </span>
                  { (p.score || 0) > 0 && (
                    <span className="text-xs font-bold text-[#0077b6] dark:text-[#00b4d8] bg-[#e0f4f8] dark:bg-[#0077b6]/20 px-2 py-1 rounded-md leading-none">
                      {p.score}
                    </span>
                  )}
                  <button 
                    onClick={() => setPlayers(players.filter(x => x.id !== p.id))} 
                    className="w-8 h-8 flex items-center justify-center text-slate-300 dark:text-slate-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
            <button 
              onClick={onClose}
              className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-all shadow-xl shadow-slate-900/10"
            >
              {t('done-btn')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
