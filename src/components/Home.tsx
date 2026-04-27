import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Plus, X, GripVertical } from 'lucide-react';
import { Reorder } from 'motion/react';

interface HomeProps {
  onSelectGame: (gameId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectGame }) => {
  const { language, setLanguage, players, setPlayers, t } = useAppContext();
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const addPlayer = () => {
    const name = playerName.trim();
    if (!name) return setError(t('err-empty'));
    if (players.some(p => p.name.toLowerCase() === name.toLowerCase())) return setError(t('err-duplicate'));
    setPlayers([...players, { id: crypto.randomUUID(), name, isActive: true }]);
    setPlayerName('');
  };

  const getInitials = (name: string) => name.trim().slice(0, 2).toUpperCase();

  return (
    <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide px-5 py-5 pb-12 md:pb-8">
      <div className="text-center mb-6">
        <svg viewBox="0 0 60 40" width="60" className="mx-auto mb-2">
          <rect width="60" height="40" fill="#e0f4f8" rx="8"/>
          <path d="M0 26 Q15 20 30 24 Q45 28 60 22 L60 40 L0 40Z" fill="#0a9396" opacity="0.7"/>
          <path d="M0 32 Q20 26 40 30 Q52 33 60 28 L60 40 L0 40Z" fill="#0077b6" opacity="0.5"/>
          <circle cx="46" cy="10" r="7" fill="#ee6c4d" opacity="0.85"/>
        </svg>
        <h1 className="font-sans text-2xl font-bold text-slate-900 leading-none tracking-tight">{t('app-title')}</h1>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">{t('app-sub')}</p>
      </div>

      <div className="mb-6">
        <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2 px-1">
          {t('lang-label')}
        </label>
        <div className="flex gap-2">
          <button onClick={() => setLanguage('en')} className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all ${language === 'en' ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10' : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'}`}>🇬🇧 EN</button>
          <button onClick={() => setLanguage('fr')} className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all ${language === 'fr' ? 'bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/10' : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'}`}>🇫🇷 FR</button>
        </div>
      </div>

      <div className="mb-6">
        <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2 px-1">
          {t('players-label')}
        </label>
        <div className="flex gap-2 mb-3">
          <input value={playerName} onChange={e => setPlayerName(e.target.value)} onKeyDown={e => e.key === 'Enter' && addPlayer()} placeholder={t('player-input-placeholder')} className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-[#0a9396] focus:bg-white transition-all shadow-sm" />
          <button onClick={addPlayer} className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#ee6c4d] text-white hover:bg-[#d65e41] transition-colors"><Plus size={18} /></button>
        </div>
        {error && <div className="text-red-500 text-[10px] font-bold mb-2 px-1 uppercase tracking-wider">{error}</div>}
        <Reorder.Group axis="y" values={players} onReorder={setPlayers} className="space-y-1">
          {players.map(p => (
            <Reorder.Item key={p.id} value={p} className={`flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-lg shadow-sm transition-opacity ${p.isActive === false ? 'opacity-50' : 'opacity-100'}`}>
              <div className="cursor-grab text-slate-300 hover:text-[#0077b6] transition-colors"><GripVertical size={16} /></div>
              <button 
                onClick={() => setPlayers(players.map(x => x.id === p.id ? { ...x, isActive: x.isActive === false ? true : false } : x))}
                className={`w-6 h-6 rounded flex items-center justify-center font-mono text-[9px] font-bold transition-colors ${p.isActive === false ? 'bg-slate-100 text-slate-400' : 'bg-[#0a9396]/20 text-[#0a9396]'}`}
              >
                {getInitials(p.name)}
              </button>
              <span className={`flex-1 text-sm font-medium truncate transition-colors ${p.isActive === false ? 'text-slate-400' : 'text-slate-700'}`}>{p.name}</span>
              <button onClick={() => setPlayers(players.filter(x => x.id !== p.id))} className="text-slate-300 hover:text-red-400 transition-colors"><X size={16} /></button>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <div className="h-px bg-slate-100 my-6" />

      <div className="space-y-3">
        <button 
          onClick={() => {
            const activePlayers = players.filter(p => p.isActive !== false);
            if (activePlayers.length < 3) {
              setError(t('err-not-enough'));
              return;
            }
            onSelectGame('undercover');
          }} 
          className="w-full text-left flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-[#0a9396] hover:bg-slate-50 group transition-all shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-[#0a9396]/10 flex items-center justify-center text-2xl group-hover:bg-white transition-colors border border-[#0a9396]/20">🕵️</div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">{t('uc-title')}</h3>
            <p className="text-[10px] text-slate-400 leading-tight font-medium mt-0.5">{t('uc-desc')}</p>
          </div>
          <div className="text-slate-300 group-hover:text-[#ee6c4d] transition-colors">›</div>
        </button>

        <div className="w-full text-left flex items-center gap-4 p-4 bg-white/50 border border-slate-100 rounded-xl opacity-40 cursor-not-allowed">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl border border-slate-100 grayscale">🃏</div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-400 tracking-tight flex items-center gap-2">{t('new-game-title')} <span className="text-[8px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">{t('coming-soon')}</span></h3>
              <p className="text-[10px] text-slate-300 leading-tight font-medium mt-0.5">{t('coming-soon-desc')}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
