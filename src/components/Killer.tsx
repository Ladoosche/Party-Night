import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Eye, 
  EyeOff, 
  RotateCcw,
  Play,
  Skull,
  User,
  Medal,
  Book,
  Hand,
  Dices,
  Sparkles,
  Info,
  CheckCircle2
} from "lucide-react";
import { useAppContext, Player } from "../context/AppContext";
import { NotEnoughPlayers } from "./NotEnoughPlayers";
import { EditPlayersModal } from "./EditPlayersModal";
import { wordGroups } from "../data/words";
import { killerActions } from "../data/killerActions";

interface TargetInfo {
  playerId: string;
  targetId: string | null; // null if White Wolf
  role: 'killer' | 'white-wolf';
  isEliminated: boolean;
  isUnmasked?: boolean;
  wonPoints?: number;
  targetTask?: string; // Word or Action
}

interface KillerProps {
  onBack: () => void;
}

export const Killer: React.FC<KillerProps> = ({ onBack }) => {
  const { players: allPlayers, setPlayers, t, language, setLanguage } = useAppContext();
  const [screen, setScreen] = useState<'intro' | 'config' | 'pass' | 'reveal' | 'game' | 'end'>('intro');
  const [mode, setMode] = useState<'classic' | 'word' | 'action'>('classic');
  const [randomTargets, setRandomTargets] = useState(false);
  const [whiteWolfOn, setWhiteWolfOn] = useState(false);
  const [gamePlayers, setGamePlayers] = useState<TargetInfo[]>([]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [showTarget, setShowTarget] = useState(false);
  const [round, setRound] = useState(1);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [editPlayersMode, setEditPlayersMode] = useState(false);

  const activePlayers = allPlayers.filter(p => p.isActive !== false);

  const startGame = () => {
    if (activePlayers.length < 3) return;

    const shuffled = [...activePlayers].sort(() => Math.random() - 0.5);
    let finalPlayers: TargetInfo[] = [];

    let wolfIdx = -1;
    if (whiteWolfOn) {
      wolfIdx = Math.floor(Math.random() * shuffled.length);
    }

    const killers = shuffled.filter((_, i) => i !== wolfIdx);
    const wolf = wolfIdx !== -1 ? shuffled[wolfIdx] : null;

    // Get tasks (words or actions) if needed
    let tasks: string[] = [];
    if (mode === 'word') {
      const languageKey = language.toUpperCase() as keyof typeof wordGroups;
      const groups = wordGroups[languageKey] || wordGroups['EN'];
      const group = groups[Math.floor(Math.random() * groups.length)];
      tasks = [...group].sort(() => Math.random() - 0.5);
    } else if (mode === 'action') {
      tasks = [...killerActions].sort(() => Math.random() - 0.5);
    }

    if (randomTargets) {
      // Each killer gets a random target that is not themselves AND NOT the wolf
      killers.forEach((k, i) => {
        const potentialTargets = killers.filter(p => p.id !== k.id);
        const target = potentialTargets[Math.floor(Math.random() * potentialTargets.length)];
        finalPlayers.push({
          playerId: k.id,
          targetId: target.id,
          role: 'killer',
          isEliminated: false,
          targetTask: tasks.length > 0 ? tasks[i % tasks.length] : undefined
        });
      });
    } else {
      // Circle logic with ONLY killers
      killers.forEach((k, i) => {
        const target = killers[(i + 1) % killers.length];
        finalPlayers.push({
          playerId: k.id,
          targetId: target.id,
          role: 'killer',
          isEliminated: false,
          targetTask: tasks.length > 0 ? tasks[i % tasks.length] : undefined
        });
      });
    }

    if (wolf) {
      finalPlayers.push({
        playerId: wolf.id,
        targetId: null,
        role: 'white-wolf',
        isEliminated: false,
        isUnmasked: false
      });
    }

    setGamePlayers(finalPlayers.sort(() => Math.random() - 0.5));
    setCurrentPlayerIdx(0);
    setRound(1);
    setScreen('pass');
  };

  const handleRevealNext = () => {
    setShowTarget(false);
    if (currentPlayerIdx < gamePlayers.length - 1) {
      setCurrentPlayerIdx(currentPlayerIdx + 1);
      setScreen('pass');
    } else {
      setScreen('game');
    }
  };

  const eliminatePlayer = (playerId: string) => {
    const playerToEliminate = gamePlayers.find(p => p.playerId === playerId);
    if (!playerToEliminate || playerToEliminate.isEliminated) return;

    if (playerToEliminate.role === 'white-wolf') {
      unmaskWolf(playerId);
      return;
    }

    // Assign points to the person who had this target
    const pointValue = round === 1 ? 3 : round === 2 ? 2 : 1;
    
    setGamePlayers(prev => prev.map(p => {
      if (p.playerId === playerId) {
        return { ...p, isEliminated: true };
      }
      if (p.targetId === playerId) {
        return { ...p, wonPoints: (p.wonPoints || 0) + pointValue };
      }
      return p;
    }));

    // If game continues, round increases
    setRound(prev => prev + 1);
  };

  const [lastActionMessage, setLastActionMessage] = useState<string | null>(null);

  const unmaskWolf = (playerId: string) => {
    setGamePlayers(prev => prev.map(p => {
      if (p.playerId === playerId) {
        return { ...p, isEliminated: true, isUnmasked: true };
      }
      if (p.role === 'killer') {
        return { ...p, wonPoints: (p.wonPoints || 0) + 1 };
      }
      return p;
    }));
    setLastActionMessage(t('killer-wolf-unmasked'));
    setTimeout(() => setLastActionMessage(null), 4000);
    setRound(prev => prev + 1);
  };

  const finishGame = () => {
    // Award points to the White Wolf if they survived and were not unmasked
    let updatedPlayers = [...gamePlayers];
    const wolf = updatedPlayers.find(p => p.role === 'white-wolf');
    if (wolf && !wolf.isEliminated && !wolf.isUnmasked) {
        updatedPlayers = updatedPlayers.map(p => {
            if (p.role === 'white-wolf') return { ...p, wonPoints: (p.wonPoints || 0) + 3 };
            return p;
        });
    }

    // Sync scores back to AppContext
    setPlayers(allPlayers.map(p => {
        const gp = updatedPlayers.find(x => x.playerId === p.id);
        if (gp && gp.wonPoints) {
            return { ...p, score: (p.score || 0) + gp.wonPoints };
        }
        return p;
    }));

    setGamePlayers(updatedPlayers);
    setScreen('end');
  };

  const getPlayerName = (id: string | null) => {
    if (!id) return '';
    return allPlayers.find(p => p.id === id)?.name || '';
  };

  const activeAlivePlayers = gamePlayers.filter(p => !p.isEliminated);

  useEffect(() => {
    if (screen === 'game' && activeAlivePlayers.length <= 2) {
      finishGame();
    }
  }, [gamePlayers.length, activeAlivePlayers.length, screen]);

  const renderContent = () => {
    if (activePlayers.length < 3 && !editPlayersMode) {
      return (
        <NotEnoughPlayers 
          minPlayers={3} 
          onBack={onBack} 
          onManagePlayers={() => setEditPlayersMode(true)} 
        />
      );
    }

    if (screen === 'intro') {
      return (
        <div className="flex-1 flex flex-col p-6 bg-white overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 mb-8">
            <button onClick={onBack} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">{t('killer-title')}</h2>
            <div className="flex items-center gap-2">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as any)}
                className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-wider focus:outline-none"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
              <button 
                onClick={() => setEditPlayersMode(true)}
                className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
              >
                {t("edit-players")}
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-white mx-auto shadow-xl rotate-3">
              <Skull size={40} />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-900 text-center tracking-tight leading-tight">
                {t('killer-rules-intro')}
              </h3>
              
              <div className="space-y-3 pt-4">
                {[
                  { icon: <Skull size={18} />, text: t('killer-intro-classic'), color: 'bg-red-50 text-red-600' },
                  { icon: <Book size={18} />, text: t('killer-intro-word'), color: 'bg-blue-50 text-blue-600' },
                  { icon: <Play size={18} />, text: t('killer-intro-action'), color: 'bg-green-50 text-green-600' },
                  { icon: <Sparkles size={18} />, text: t('killer-intro-wolf'), color: 'bg-yellow-50 text-yellow-600' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                    <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center ${item.color}`}>
                      {item.icon}
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setScreen('config')}
            className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest mt-8 shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3"
          >
            {t('start-game')} <ChevronRight size={18} />
          </button>
        </div>
      );
    }

    if (screen === 'config') {
      return (
        <div className="flex-1 flex flex-col p-6 bg-white overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 mb-8">
            <button onClick={() => setScreen('intro')} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">{t('killer-title')}</h2>
            <div className="flex items-center gap-2">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as any)}
                className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-wider focus:outline-none"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
              <button 
                onClick={() => setEditPlayersMode(true)}
                className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
              >
                {t("edit-players")}
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            {/* Mode Selection */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">{t('killer-mode')}</h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: 'classic', icon: <Skull size={18} />, title: t('killer-mode-classic'), desc: t('killer-mode-desc-classic') },
                  { id: 'word', icon: <Book size={18} />, title: t('killer-mode-word'), desc: t('killer-mode-desc-word') },
                  { id: 'action', icon: <Play size={18} />, title: t('killer-mode-action'), desc: t('killer-mode-desc-action') },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id as any)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all ${
                      mode === m.id ? 'border-slate-900 bg-slate-900 text-white shadow-lg' : 'border-slate-100 bg-white text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode === m.id ? 'bg-white/10' : 'bg-slate-50'}`}>
                      {m.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{m.title}</h4>
                      <p className={`text-[10px] ${mode === m.id ? 'text-slate-400' : 'text-slate-400'}`}>{m.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">{t('options')}</h3>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-slate-800">{t('killer-white-wolf-on')}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{t('killer-white-wolf-desc')}</p>
                  </div>
                  <button
                    onClick={() => setWhiteWolfOn(!whiteWolfOn)}
                    className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${whiteWolfOn ? "bg-slate-900" : "bg-slate-200"}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${whiteWolfOn ? "left-6" : "left-1"}`} />
                  </button>
                </div>

                <div className="h-px bg-slate-200 w-full" />

                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-slate-800">{t('random-targets')}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{t('random-targets-desc')}</p>
                  </div>
                  <button
                    onClick={() => setRandomTargets(!randomTargets)}
                    className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${randomTargets ? "bg-slate-900" : "bg-slate-200"}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${randomTargets ? "left-6" : "left-1"}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={startGame}
            className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest mt-8 transition-all shadow-lg bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10"
          >
            {t('start-game')}
          </button>
        </div>
      );
    }

    if (screen === 'pass') {
      const p = gamePlayers[currentPlayerIdx];
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900 text-center">
          <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center text-white mb-8 border border-white/10 animate-pulse">
              <User size={48} />
          </div>
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{t('pass-title')}</h2>
          <h3 className="text-3xl font-black text-white mb-12 tracking-tight">{getPlayerName(p.playerId)}</h3>
          <button
            onClick={() => setScreen('reveal')}
            className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl"
          >
            {t('reveal-word')}
          </button>
        </div>
      );
    }

    if (screen === 'reveal') {
      const p = gamePlayers[currentPlayerIdx];
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900 text-center animate-in fade-in duration-500">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 mb-8 border border-white/5">
            <Eye size={32} />
          </div>
          <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">{getPlayerName(p.playerId)}</h2>
          
          {showTarget ? (
            <div className="space-y-8 animate-in zoom-in duration-300 w-full max-w-xs">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('killer-target-label')}</p>
                <div className={`text-4xl font-black ${p.role === 'white-wolf' ? 'text-red-400' : 'text-white'} tracking-tight`}>
                  {p.role === 'white-wolf' ? t('killer-no-target') : getPlayerName(p.targetId)}
                </div>
              </div>

              {p.targetTask && (
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-2">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                     {mode === 'word' ? t('killer-target-word') : t('killer-target-action')}
                   </p>
                   <p className="text-2xl font-black text-blue-400 tracking-tight leading-tight">
                     {p.targetTask}
                   </p>
                </div>
              )}

              {p.role === 'white-wolf' && (
                  <div className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-red-500/20">
                      {t('killer-role-white-wolf')}
                  </div>
              )}
              
              <button
                onClick={handleRevealNext}
                className="w-full py-4 bg-white/10 text-white rounded-2xl font-bold text-sm uppercase tracking-widest border border-white/10"
              >
                {t('done-btn')}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowTarget(true)}
              className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl flex items-center gap-3"
            >
              <Eye size={20} /> {t('reveal-word')}
            </button>
          )}
        </div>
      );
    }

    if (screen === 'game') {
      return (
        <div className="flex-1 flex flex-col p-6 bg-white overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 mb-8">
            <button onClick={() => setShowQuitConfirm(true)} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 transition-colors">
              <X size={24} />
            </button>
            <div className="flex flex-col items-center">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{t('killer-title')}</h2>
              <p className="text-[9px] font-bold text-slate-900 uppercase tracking-widest mt-0.5">{t('killer-round').replace('{0}', round.toString())}</p>
            </div>
            <button 
              onClick={finishGame}
              className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
            >
              {t('finish-game')}
            </button>
          </div>

          {lastActionMessage && (
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-100 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-yellow-700 uppercase tracking-tight">{lastActionMessage}</p>
                <p className="text-[10px] text-yellow-600 font-medium">{t('killer-everyone-wins-pt')}</p>
              </div>
            </div>
          )}

          <div className="space-y-3 flex-1 overflow-y-auto pr-1">
            {gamePlayers.map((p) => (
              <div 
                key={p.playerId}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${p.isEliminated ? 'bg-slate-50 border-transparent opacity-60' : 'bg-white border-slate-100 shadow-sm'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${p.isEliminated ? 'bg-slate-200 text-slate-400' : 'bg-slate-900 text-white'}`}>
                    {getPlayerName(p.playerId).slice(0, 1).toUpperCase()}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${p.isEliminated ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{getPlayerName(p.playerId)}</h4>
                    {p.isEliminated && <span className="text-[8px] font-bold uppercase text-red-500">{t('killer-eliminated')}</span>}
                  </div>
                </div>
                
                {!p.isEliminated && (
                  <button
                    onClick={() => eliminatePlayer(p.playerId)}
                    className="flex flex-col items-center gap-1 p-2 text-red-400 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <Skull size={20} />
                    <span className="text-[8px] font-black uppercase">
                        {mode === 'word' ? t('killer-word-said') : mode === 'action' ? t('killer-action-performed') : 'Kill'}
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {showQuitConfirm && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-8">
              <div className="bg-white rounded-3xl w-full max-w-xs p-8 shadow-2xl text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('confirm-quit')}</h3>
                <p className="text-xs text-slate-500 mb-8 leading-relaxed max-w-[200px] mx-auto">{t('confirm-quit-desc')}</p>
                <div className="flex flex-col gap-3">
                  <button onClick={onBack} className="w-full py-4 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-500/20">{t('back')}</button>
                  <button onClick={() => setShowQuitConfirm(false)} className="w-full py-4 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs uppercase tracking-widest">{t('continue-playing')}</button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (screen === 'end') {
      return (
        <div className="flex-1 flex flex-col p-6 bg-white overflow-y-auto">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <Medal size={32} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">{t('end-title')}</h2>
            <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">{t('roles-recap')}</p>
          </div>

          <div className="space-y-2 flex-1">
            {gamePlayers.map(p => (
              <div 
                key={p.playerId}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${p.role === 'white-wolf' ? 'bg-red-100 text-red-600' : 'bg-slate-200 text-slate-600'}`}>
                    {p.role === 'white-wolf' ? t('killer-role-white-wolf') : t('killer-role-killer')}
                  </div>
                  <span className="text-sm font-bold text-slate-900">{getPlayerName(p.playerId)}</span>
                </div>
                <div className="flex items-center gap-2">
                  {p.wonPoints && p.wonPoints > 0 && (
                     <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">+{p.wonPoints} pts</span>
                  )}
                  <span className="text-xs font-medium text-slate-400">
                      {p.role === 'white-wolf' 
                        ? (p.isUnmasked ? t('killer-wolf-unmasked') : (p.isEliminated ? t('killer-eliminated') : t('killer-wolf-survived-bonus'))) 
                        : (p.targetId ? `🎯 ${getPlayerName(p.targetId)}` : '')}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <button
              onClick={startGame}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-slate-900/10"
            >
              {t('play-again')}
            </button>
            <button
              onClick={onBack}
              className="w-full py-4 bg-white text-slate-400 rounded-2xl font-bold text-sm uppercase tracking-widest border border-slate-100"
            >
              {t('exit-to-home')}
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex-1 flex flex-col relative h-full">
      {renderContent()}
      <EditPlayersModal 
        isOpen={editPlayersMode} 
        onClose={() => setEditPlayersMode(false)} 
      />
    </div>
  );
};
