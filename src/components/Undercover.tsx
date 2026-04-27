import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { WORD_GROUPS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Info, Settings, Play, Check, X, ShieldAlert, User, MessageSquare } from 'lucide-react';

interface UndercoverProps {
  onBack: () => void;
}

type Screen = 'intro' | 'config' | 'pass' | 'reveal' | 'game' | 'recheck' | 'end';
type Role = 'civilian' | 'undercover' | 'mrwhite';

interface GamePlayer {
  id: string;
  name: string;
  role: Role;
  word: string;
  recheckCount: number;
  isEliminated: boolean;
  eliminatedAtRound?: number;
}

export const Undercover: React.FC<UndercoverProps> = ({ onBack }) => {
  const { players: allPlayers, language, t } = useAppContext();
  const players = allPlayers.filter(p => p.isActive !== false);
  const [screen, setScreen] = useState<Screen>('intro');
  const [undercovers, setUndercovers] = useState(1);
  const [mrWhiteOn, setMrWhiteOn] = useState(false);
  const [wordsHidden, setWordsHidden] = useState(false);
  const [wordLang, setWordLang] = useState<'EN' | 'FR'>(language.toUpperCase() as 'EN' | 'FR');
  const [customWord1, setCustomWord1] = useState('');
  const [customWord2, setCustomWord2] = useState('');
  const [gamePlayers, setGamePlayers] = useState<GamePlayer[]>([]);
  const [passOrder, setPassOrder] = useState<number[]>([]);
  const [passIndex, setPassIndex] = useState(0);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState<Role | 'civilians' | null>(null);
  const [recheckPlayerId, setRecheckPlayerId] = useState<string | null>(null);
  const [mrWhiteGuessingId, setMrWhiteGuessingId] = useState<string | null>(null);

  useEffect(() => {
    if (players.length > 5) setUndercovers(2);
    if (players.length > 9) setUndercovers(3);
  }, [players.length]);

  useEffect(() => {
    if (screen === 'config') {
      suggestWords();
    }
  }, [screen, wordLang, wordsHidden]);

  const suggestWords = () => {
    const list = WORD_GROUPS;
    const group = list[Math.floor(Math.random() * list.length)];
    const key = wordLang.toLowerCase() as 'en' | 'fr';
    const words = [...group[key]];
    
    // Pick two random distinct words from the group
    const idx1 = Math.floor(Math.random() * words.length);
    const word1 = words.splice(idx1, 1)[0];
    const idx2 = Math.floor(Math.random() * words.length);
    const word2 = words[idx2];
    
    setCustomWord1(word1);
    setCustomWord2(word2);
  };

  const startGame = () => {
    let w1 = customWord1, w2 = customWord2;
    if (wordsHidden || !w1 || !w2) {
      const list = WORD_GROUPS;
      const group = list[Math.floor(Math.random() * list.length)];
      const key = wordLang.toLowerCase() as 'en' | 'fr';
      const words = [...group[key]];
      
      const idx1 = Math.floor(Math.random() * words.length);
      w1 = words.splice(idx1, 1)[0];
      const idx2 = Math.floor(Math.random() * words.length);
      w2 = words[idx2];
    }

    let rolesPool: Role[] = [];
    for (let i = 0; i < undercovers; i++) rolesPool.push('undercover');
    if (mrWhiteOn) rolesPool.push('mrwhite');
    while (rolesPool.length < players.length) rolesPool.push('civilian');
    rolesPool.sort(() => Math.random() - 0.5);

    const gp: GamePlayer[] = players.map((p, i) => ({
      ...p,
      role: rolesPool[i],
      word: rolesPool[i] === 'undercover' ? w2 : rolesPool[i] === 'civilian' ? w1 : '',
      recheckCount: 0,
      isEliminated: false
    }));

    setGamePlayers(gp);

    const civilians = gp.map((_, i) => i).filter(i => gp[i].role === 'civilian');
    const startIdx = civilians[Math.floor(Math.random() * civilians.length)];
    const mwIdx = gp.findIndex(p => p.role === 'mrwhite');
    
    let orderExcludeMW: number[] = [];
    for (let i = 0; i < gp.length; i++) {
        const idx = (startIdx + i) % gp.length;
        if (idx !== mwIdx) orderExcludeMW.push(idx);
    }
    
    let finalOrder = [...orderExcludeMW];
    if (mwIdx !== -1) {
        const minPos = Math.max(1, Math.floor(gp.length * 0.6));
        const randomPos = minPos + Math.floor(Math.random() * (gp.length - minPos));
        finalOrder.splice(randomPos, 0, mwIdx);
    }

    setPassOrder(finalOrder);
    setPassIndex(0);
    setRound(1);
    setScreen('pass');
  };

  const nextReveal = () => {
    if (passIndex < passOrder.length - 1) {
      setPassIndex(passIndex + 1);
      setScreen('pass');
    } else {
      setScreen('game');
    }
  };

  const checkWinner = (currentPlayers: GamePlayer[]) => {
    const active = currentPlayers.filter(p => !p.isEliminated);
    const U = active.filter(p => p.role === 'undercover');
    const C = active.filter(p => p.role === 'civilian');
    const MW = active.filter(p => p.role === 'mrwhite');

    if (U.length === 0 && MW.length === 0) setWinner('civilians');
    else if (C.length === 0) setWinner('undercover');
    else if (U.length === 1 && C.length === 1 && MW.length === 0) setWinner('undercover');
  };

  const eliminate = (id: string) => {
    const player = gamePlayers.find(p => p.id === id);
    if (player?.role === 'mrwhite') {
        setMrWhiteGuessingId(id);
        return;
    }
    
    const newPlayers = gamePlayers.map(p => p.id === id ? { ...p, isEliminated: true, eliminatedAtRound: round } : p);
    setGamePlayers(newPlayers);
    setRound(round + 1);
    checkWinner(newPlayers);
  };

  const mrWhiteAction = (correct: boolean) => {
    const id = mrWhiteGuessingId!;
    if (correct) {
        setWinner('mrwhite');
    } else {
        const newPlayers = gamePlayers.map(p => p.id === id ? { ...p, isEliminated: true, eliminatedAtRound: round } : p);
        setGamePlayers(newPlayers);
        setRound(round + 1);
        checkWinner(newPlayers);
    }
    setMrWhiteGuessingId(null);
  };

  const handleRecheck = (id: string) => {
    setGamePlayers(prev => prev.map(p => p.id === id ? { ...p, recheckCount: p.recheckCount + 1 } : p));
    setRecheckPlayerId(id);
  };

  const resetGame = () => {
    setWinner(null);
    setGamePlayers([]);
    setPassOrder([]);
    setPassIndex(0);
    setRound(1);
    setScreen('config');
  };

  if (winner) {
      return (
          <div className="flex flex-col h-full overflow-y-auto scrollbar-hide px-5 py-8">
              <div className="text-center mb-10">
                <div className="w-20 h-20 rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-600/30 flex items-center justify-center mx-auto mb-6 border-4 border-white/10 text-4xl">🏆</div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-2">{winner === 'civilians' ? t('civilians-win') : winner === 'mrwhite' ? t('mrwhite-wins') : t('undercover-wins')}</h2>
                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">{t('end-title')}</div>
              </div>
              <div className="space-y-3">
                  <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 px-1">{t('roles-recap')}</div>
                  {gamePlayers.sort((a,b) => (a.eliminatedAtRound || 99) - (b.eliminatedAtRound || 99)).map(p => (
                      <div key={p.id} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                          <span className={`text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase ${p.role==='civilian'?'bg-indigo-50 text-indigo-600':p.role==='undercover'?'bg-red-50 text-red-500':'bg-slate-100 text-slate-600'}`}>{t('role-'+p.role)}</span>
                          <span className="flex-1 font-bold text-sm text-slate-700">{p.name}</span>
                          <span className="text-xs font-mono font-medium text-slate-400">{p.word || '—'}</span>
                      </div>
                  ))}
              </div>
              <div className="mt-auto pt-8 space-y-3">
                  <button onClick={resetGame} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">{t('play-again')}</button>
                  <button onClick={onBack} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all">{t('exit-to-home')}</button>
              </div>
          </div>
      );
  }

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        {screen === 'intro' && (
          <motion.div key="intro" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex flex-col h-full scrollbar-hide px-5 py-6">
            <button onClick={onBack} className="self-start text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md mb-6 uppercase tracking-wider transition-colors">{t('back')}</button>
            <div className="text-center mb-8">
                <div className="font-sans text-3xl font-bold text-slate-900 mb-1 tracking-tight">Undercover</div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{t('uc-desc')}</div>
            </div>
            <div className="space-y-3 mb-8 overflow-y-auto pr-1">
                <div className="p-4 bg-white border border-slate-200 rounded-xl flex gap-3 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex-shrink-0 flex items-center justify-center text-indigo-600 border border-indigo-100"><User size={18}/></div>
                    <div><div className="font-bold text-sm text-slate-900">{t('role-civilian')}</div><p className="text-[11px] text-slate-500 leading-tight mt-0.5">{t('role-civilian-desc')}</p></div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl flex gap-3 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex-shrink-0 flex items-center justify-center text-red-500 border border-red-100"><ShieldAlert size={18}/></div>
                    <div><div className="font-bold text-sm text-slate-900">{t('role-undercover')}</div><p className="text-[11px] text-slate-500 leading-tight mt-0.5">{t('role-undercover-desc')}</p></div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl flex gap-3 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex-shrink-0 flex items-center justify-center text-slate-900 border border-slate-200 font-mono font-bold text-lg">?</div>
                    <div><div className="font-bold text-sm text-slate-900">{t('role-mrwhite')}</div><p className="text-[11px] text-slate-500 leading-tight mt-0.5">{t('role-mrwhite-desc')}</p></div>
                </div>
            </div>
            <div className="mt-auto"><button onClick={() => setScreen('config')} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">{t('next')}</button></div>
          </motion.div>
        )}

        {screen === 'config' && (
          <motion.div key="config" initial={{x:20}} animate={{x:0}} exit={{x:-20}} className="flex flex-col h-full scrollbar-hide px-5 py-6 overflow-y-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">{t('game-settings')}</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8">{t('customise-match')}</p>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3 text-center">{t('undercovers')}</label>
                <div className="flex items-center gap-6 bg-slate-50 p-2 rounded-xl border border-slate-100 shadow-sm">
                    <button onClick={() => setUndercovers(Math.max(1, undercovers - 1))} className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xl text-slate-600 hover:border-indigo-500 transition-colors shadow-sm">−</button>
                    <span className="flex-1 text-center font-mono text-3xl font-bold text-slate-900">{undercovers}</span>
                    <button onClick={() => setUndercovers(Math.min(players.length - 2, undercovers + 1))} className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xl text-slate-600 hover:border-indigo-500 transition-colors shadow-sm">+</button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 px-1">
                    <span className="font-bold text-[10px] uppercase tracking-widest text-slate-600">{t('mr-white')}</span>
                    <button onClick={() => setMrWhiteOn(!mrWhiteOn)} className={`w-11 h-6 rounded-full relative transition-colors ${mrWhiteOn ? 'bg-indigo-500' : 'bg-slate-200'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${mrWhiteOn ? 'left-6' : 'left-1'}`} />
                    </button>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-slate-100 px-1">
                    <span className="font-bold text-[10px] uppercase tracking-widest text-slate-600">{t('hide-words')}</span>
                    <button onClick={() => setWordsHidden(!wordsHidden)} className={`w-11 h-6 rounded-full relative transition-colors ${wordsHidden ? 'bg-indigo-500' : 'bg-slate-200'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${wordsHidden ? 'left-6' : 'left-1'}`} />
                    </button>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3 text-center">{t('word-language')}</label>
                <div className="flex gap-2">
                    <button onClick={() => setWordLang('EN')} className={`flex-1 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-all ${wordLang === 'EN' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>🇬🇧 English</button>
                    <button onClick={() => setWordLang('FR')} className={`flex-1 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-all ${wordLang === 'FR' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>🇫🇷 Français</button>
                </div>
              </div>

              {!wordsHidden && (
                <div>
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3 text-center">{t('word-pair')}</label>
                  <div className="space-y-3">
                      <input value={customWord1} onChange={e => setCustomWord1(e.target.value)} placeholder={t('civilian-word')} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-sm font-medium" />
                      <input value={customWord2} onChange={e => setCustomWord2(e.target.value)} placeholder={t('undercover-word')} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-sm font-medium" />
                      <button onClick={suggestWords} className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest px-1 hover:text-indigo-500 transition-colors w-full">{t('suggest-words')}</button>
                  </div>
                </div>
              )}
              {wordsHidden && (
                  <div className="p-4 bg-slate-900 rounded-xl text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center leading-relaxed">
                      {t('random-pair-desc')}
                  </div>
              )}
            </div>

            <div className="mt-auto pt-8 flex gap-3">
                <button onClick={() => setScreen('intro')} className="flex-1 py-4 border border-slate-200 bg-white text-slate-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">{t('back')}</button>
                <button onClick={startGame} className="flex-[2] py-4 bg-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">{t('start-game')}</button>
            </div>
          </motion.div>
        )}

        {screen === 'pass' && (
          <motion.div key="pass" initial={{scale:0.98}} animate={{scale:1}} className="flex flex-col h-full px-5 py-8 items-center text-center">
            <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="w-24 h-24 rounded-2xl bg-slate-900 shadow-xl shadow-slate-900/20 flex items-center justify-center font-mono text-3xl font-bold text-white mb-8 border-4 border-white/10 ring-1 ring-slate-900">
                    {gamePlayers[passOrder[passIndex]]?.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{gamePlayers[passOrder[passIndex]]?.name}</div>
                <p className="text-sm text-slate-500 px-8 leading-relaxed font-medium">Pass the device to this player to reveal their secret word.</p>
            </div>
            <button onClick={() => setScreen('reveal')} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
                {t('reveal-word')}
            </button>
          </motion.div>
        )}

        {screen === 'reveal' && (
           <motion.div key="reveal" initial={{opacity:0, scale:1.05}} animate={{opacity:1, scale:1}} className="flex flex-col h-full px-5 py-8 items-center text-center">
             <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 opacity-20"></div>
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-8 pb-4 border-b border-slate-100">Your secret word is</div>
                    <div className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">{gamePlayers[passOrder[passIndex]]?.word || '? ? ?'}</div>
                    {gamePlayers[passOrder[passIndex]]?.role === 'mrwhite' && <div className="text-red-500 text-xs uppercase tracking-widest font-bold mt-4">You have no word!</div>}
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-10">Keep it secret • Stay alert</p>
             </div>
             <button onClick={nextReveal} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                 {t('hide-word')}
             </button>
           </motion.div>
        )}

        {screen === 'game' && (
            <motion.div key="game" initial={{opacity:0}} animate={{opacity:1}} className="flex flex-col h-full px-5 py-6">
                <div className="flex justify-between items-start mb-8 pb-6 border-b border-slate-100">
                    <div>
                        <div className="font-mono text-5xl font-bold text-slate-900 leading-none tracking-tighter">{round}</div>
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-1">{t('round-label')}</div>
                    </div>
                    <div className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
                        {gamePlayers.filter(p=>!p.isEliminated).length} {t('active-label')}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto scrollbar-hide space-y-1.5">
                    {passOrder.map(idx => {
                        const p = gamePlayers[idx];
                        return (
                            <div key={p.id} className={`flex items-center gap-3 p-2.5 bg-white border border-slate-200 rounded-xl transition-all shadow-sm ${p.isEliminated ? 'opacity-30 grayscale' : 'hover:border-indigo-500'}`}>
                                <button 
                                    onClick={() => !p.isEliminated && handleRecheck(p.id)}
                                    className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-mono text-[10px] font-bold text-slate-600 border border-slate-200 hover:bg-slate-200 transition-colors"
                                >
                                    {p.name.slice(0,2).toUpperCase()}
                                </button>
                                <div className="flex-1 flex flex-col justify-center">
                                    <span className={`font-bold text-sm text-slate-700 ${p.isEliminated ? 'line-through' : ''}`}>{p.name}</span>
                                    {p.recheckCount > 0 && <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{t('word-rechecked').replace('{0}', String(p.recheckCount))}</span>}
                                </div>
                                {!p.isEliminated && <button onClick={() => eliminate(p.id)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors border border-red-100"><X size={16}/></button>}
                            </div>
                        );
                    })}
                </div>
                
                <div className="mt-4 flex flex-col gap-3">
                    <button onClick={() => setScreen('recheck')} className="w-full py-3 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
                        {t('word-check-btn')}
                    </button>
                    <div className="p-4 bg-slate-900 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-center text-slate-400 leading-relaxed shadow-xl shadow-slate-900/10">{t('give-clue-vote')}</div>
                </div>
            </motion.div>
        )}

        {screen === 'recheck' && (
            <motion.div key="recheck" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex flex-col h-full px-5 py-6">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">{t('word-check-title')}</h2>
                    <button onClick={() => setScreen('game')} className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-slate-400"><X size={18}/></button>
                </div>
                <p className="text-xs text-slate-500 mb-6 text-center">{t('word-check-desc')}</p>
                <div className="flex-1 overflow-y-auto scrollbar-hide space-y-2">
                    {gamePlayers.filter(p => !p.isEliminated).map(p => (
                        <button 
                            key={p.id} 
                            onClick={() => handleRecheck(p.id)}
                            className="w-full flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 transition-all shadow-sm"
                        >
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-mono font-bold text-slate-600">{p.name.slice(0,2).toUpperCase()}</div>
                            <div className="flex-1 text-left">
                                <div className="font-bold text-slate-800">{p.name}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('word-checked').replace('{0}', String(p.recheckCount))}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
          {recheckPlayerId && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-8">
                  <motion.div initial={{scale:0.9}} animate={{scale:1}} className="bg-white rounded-3xl w-full max-w-xs p-10 text-center shadow-2xl">
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-6 pb-4 border-b border-slate-100">{t('secret-word-for').replace('{0}', gamePlayers.find(p=>p.id===recheckPlayerId)?.name || '')}</div>
                      <div className="text-3xl font-bold text-slate-900 mb-8">{gamePlayers.find(p=>p.id===recheckPlayerId)?.word || 'NO WORD'}</div>
                      <button onClick={() => setRecheckPlayerId(null)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest">{t('done-btn')}</button>
                  </motion.div>
              </motion.div>
          )}

          {mrWhiteGuessingId && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 bg-indigo-600/90 backdrop-blur-sm flex items-center justify-center p-8">
                  <motion.div initial={{scale:0.9, y:20}} animate={{scale:1, y:0}} className="bg-white rounded-3xl w-full max-w-xs p-10 text-center shadow-2xl">
                      <div className="text-xl font-bold text-slate-900 mb-2">{t('mrwhite-elimination')}</div>
                      <p className="text-xs text-slate-500 mb-8 leading-relaxed">{t('mrwhite-guess-desc')}</p>
                      <div className="grid grid-cols-1 gap-3">
                          <button onClick={() => mrWhiteAction(true)} className="py-4 bg-indigo-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-indigo-600/20">{t('mrwhite-guess-btn')}</button>
                          <button onClick={() => mrWhiteAction(false)} className="py-4 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200">{t('mrwhite-dont-know-btn')}</button>
                      </div>
                  </motion.div>
              </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
};
