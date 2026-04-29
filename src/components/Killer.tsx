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
  CheckCircle2,
  LogOut
} from "lucide-react";
import { useAppContext, Player } from "../context/AppContext";
import { wordGroups } from "../data/words";
import { killerActions } from "../data/killerActions";
import { motion, AnimatePresence } from "motion/react";
import { QuitGameModal } from './QuitGameModal';

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
  onShowPlayers: () => void;
}

import { AllUsedModal } from './AllUsedModal';

export const Killer: React.FC<KillerProps> = ({ onBack, onShowPlayers }) => {
  const { players: allPlayers, setPlayers, t, language, usedItems, setUsedItems } = useAppContext();
  const [screen, setScreen] = useState<'intro' | 'config' | 'pass' | 'reveal' | 'game' | 'end'>("intro");
  const [mode, setMode] = useState<'classic' | 'word' | 'action'>('classic');
  const [randomTargets, setRandomTargets] = useState(false);
  const [whiteWolfOn, setWhiteWolfOn] = useState(false);
  const [gamePlayers, setGamePlayers] = useState<TargetInfo[]>([]);
  const [currentPlayerIdx, setCurrentPlayerIdx] = useState(0);
  const [showTarget, setShowTarget] = useState(false);
  const [round, setRound] = useState(1);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [midGameRevealPlayer, setMidGameRevealPlayer] = useState<string | null>(null);
  const [allUsedOpen, setAllUsedOpen] = useState(false);

  const activePlayers = allPlayers.filter(p => p.isActive !== false);

  const startGame = (clearUsed = false) => {
    if (activePlayers.length < 3) return;

    let usedWords = clearUsed ? [] : usedItems.killerWords;
    let usedActions = clearUsed ? [] : usedItems.killerActions;

    if (clearUsed) {
      setUsedItems({ ...usedItems, killerWords: [], killerActions: [] });
    }

    const shuffled = [...activePlayers].sort(() => Math.random() - 0.5);
    let finalPlayers: TargetInfo[] = [];

    let wolfIdx = -1;
    if (whiteWolfOn) {
      wolfIdx = Math.floor(Math.random() * shuffled.length);
    }

    const killers = shuffled.filter((_, i) => i !== wolfIdx);
    const wolf = wolfIdx !== -1 ? shuffled[wolfIdx] : null;

    let tasks: string[] = [];
    if (mode === 'word') {
      const languageKey = language.toUpperCase() as keyof typeof wordGroups;
      const groups = wordGroups[languageKey] || wordGroups['EN'];
      
      const availableIndices = groups.map((_, i) => i).filter(i => !usedWords.includes(i));
      if (availableIndices.length === 0) {
        setAllUsedOpen(true);
        return;
      }

      const selectedIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
      setUsedItems({ ...usedItems, killerWords: [...usedWords, selectedIndex]});

      const group = groups[selectedIndex];
      tasks = [...group].sort(() => Math.random() - 0.5);
    } else if (mode === 'action') {
      const languageKey = language.toUpperCase() as keyof typeof killerActions;
      const actions = killerActions[languageKey] || killerActions['EN'];
      
      const neededTasksCount = killers.length;
      let availableIndices = actions.map((_, i) => i).filter(i => !usedActions.includes(i));
      
      if (availableIndices.length < neededTasksCount) {
        setAllUsedOpen(true);
        return;
      }

      // pick neededTasksCount random items
      const selectedIndices = [...availableIndices].sort(() => Math.random() - 0.5).slice(0, neededTasksCount);
      setUsedItems({ ...usedItems, killerActions: [...usedActions, ...selectedIndices] });

      tasks = selectedIndices.map(i => actions[i]).sort(() => Math.random() - 0.5);
    }

    if (randomTargets) {
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
    if (midGameRevealPlayer) {
      setMidGameRevealPlayer(null);
      setScreen('game');
    } else {
      if (currentPlayerIdx < gamePlayers.length - 1) {
        setCurrentPlayerIdx(currentPlayerIdx + 1);
        setScreen('pass');
      } else {
        setScreen('game');
      }
    }
  };

  const showNewTargetPass = (playerId: string) => {
    const pIdx = gamePlayers.findIndex(p => p.playerId === playerId);
    if (pIdx !== -1) {
      setCurrentPlayerIdx(pIdx);
      setMidGameRevealPlayer(playerId);
      setScreen('pass');
    }
  };

  const playerSucceeded = (playerId: string) => {
    const successfulPlayer = gamePlayers.find(p => p.playerId === playerId);
    if (!successfulPlayer || successfulPlayer.isEliminated) return;

    if (successfulPlayer.role === 'white-wolf') {
      unmaskWolf(playerId);
      return;
    }

    const targetId = successfulPlayer.targetId;
    if (!targetId) return;

    const targetPlayer = gamePlayers.find(p => p.playerId === targetId);
    const isTargetingSelf = targetPlayer?.targetId === playerId;

    setGamePlayers(prev => {
      return prev.map(p => {
        if (p.playerId === targetId) {
          return { ...p, isEliminated: true };
        }
        if (p.targetId === targetId) {
          const isP_TargetingSelf = targetPlayer?.targetId === p.playerId;
          return { 
            ...p, 
            wonPoints: p.playerId === playerId ? (p.wonPoints || 0) + 1 : p.wonPoints,
            targetId: targetPlayer?.targetId || null,
            targetTask: targetPlayer?.targetTask
          };
        }
        return p;
      });
    });

    setRound(prev => prev + 1);

    const activeLeft = gamePlayers.filter(p => !p.isEliminated).length;
    if (!isTargetingSelf && targetPlayer?.targetId && activeLeft > 3) {
      showNewTargetPass(playerId);
    }
  };

  const eliminatePlayer = (playerId: string) => {
    const playerToEliminate = gamePlayers.find(p => p.playerId === playerId);
    if (!playerToEliminate || playerToEliminate.isEliminated) return;

    if (playerToEliminate.role === 'white-wolf') {
      unmaskWolf(playerId);
      return;
    }

    const killer = gamePlayers.find(p => p.targetId === playerId);
    const isTargetingSelf = playerToEliminate.targetId === killer?.playerId;
    
    setGamePlayers(prev => {
      return prev.map(p => {
        if (p.playerId === playerId) {
          return { ...p, isEliminated: true };
        }
        if (p.targetId === playerId) {
          const isP_TargetingSelf = playerToEliminate.targetId === p.playerId;
          return { 
            ...p, 
            wonPoints: (p.wonPoints || 0) + 1,
            targetId: playerToEliminate.targetId,
            targetTask: playerToEliminate.targetTask
          };
        }
        return p;
      });
    });

    setRound(prev => prev + 1);

    const activeLeft = gamePlayers.filter(p => !p.isEliminated).length;
    if (killer && !isTargetingSelf && playerToEliminate.targetId && activeLeft > 3) {
      showNewTargetPass(killer.playerId);
    }
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
    let updatedPlayers = [...gamePlayers];
    const wolf = updatedPlayers.find(p => p.role === 'white-wolf');
    if (wolf && !wolf.isEliminated && !wolf.isUnmasked) {
        updatedPlayers = updatedPlayers.map(p => {
            if (p.role === 'white-wolf') return { ...p, wonPoints: (p.wonPoints || 0) + 3 };
            return p;
        });
    }

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
    const hasPlayerTargetingSelf = activeAlivePlayers.some(p => p.targetId === p.playerId);
    if (screen === 'game' && (activeAlivePlayers.length <= 2 || hasPlayerTargetingSelf)) {
      finishGame();
    }
  }, [gamePlayers, activeAlivePlayers.length, screen]);

  const renderContent = () => {
    if (screen === 'intro') {
      return (
        <div className="flex-1 flex flex-col px-5 py-6 overflow-y-auto bg-white dark:bg-slate-900 transition-colors text-slate-900 dark:text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8 text-slate-900 dark:text-slate-100 transition-colors">
            <button 
              onClick={onBack} 
              className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="w-10 sm:w-12" />
            <h2 className="text-sm font-bold uppercase tracking-widest">{t('killer-title')}</h2>
            <div className="w-10" />
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/20 dark:shadow-none text-center mb-8 relative overflow-hidden transition-colors">
              <div className="w-16 h-16 bg-red-50 dark:bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500 dark:text-red-400 Transition-colors">
                <Info size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('killer-rules-intro')}</h3>
              
              <div className="space-y-3 pt-4 text-left">
                {[
                  { icon: <Skull size={16} />, text: t('killer-intro-classic'), color: 'text-red-500 dark:text-red-400' },
                  { icon: <Book size={16} />, text: t('killer-intro-word'), color: 'text-blue-500 dark:text-blue-400' },
                  { icon: <Play size={16} />, text: t('killer-intro-action'), color: 'text-green-500 dark:text-green-400' },
                  { icon: <Sparkles size={16} />, text: t('killer-intro-wolf'), color: 'text-yellow-500 dark:text-yellow-400' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className={`mt-0.5 ${item.color}`}>
                      {item.icon}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto px-5 mb-4 space-y-3">
            <button
              onClick={onShowPlayers}
              className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              {t("edit-players")}
            </button>
            <button
              onClick={() => {
                if (activePlayers.length < 3) {
                  onShowPlayers();
                  return;
                }
                setScreen('config');
              }}
              className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 dark:shadow-none"
            >
              {t("next")}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      );
    }

    if (screen === 'config') {
      return (
        <div className="flex-1 flex flex-col p-6 bg-white dark:bg-slate-900 overflow-y-auto transition-colors text-slate-900 dark:text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
            <button 
              onClick={onBack} 
              className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="w-10 sm:w-12" />
            <h2 className="text-sm font-bold uppercase tracking-widest">{t('killer-title')}</h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={onShowPlayers}
                className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
              >
                {t("edit-players")}
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('killer-mode')}</h3>
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
                      mode === m.id 
                        ? 'border-slate-900 dark:border-slate-700 bg-slate-900 dark:bg-slate-800 text-white shadow-lg' 
                        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mode === m.id ? 'bg-white/10' : 'bg-slate-50 dark:bg-slate-800'}`}>
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

            <div className="space-y-3">
              <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{t('options')}</h3>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between gap-4 text-slate-900 dark:text-slate-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xs font-bold">{t('killer-white-wolf-on')}</h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{t('killer-white-wolf-desc')}</p>
                  </div>
                  <button
                    onClick={() => setWhiteWolfOn(!whiteWolfOn)}
                    className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${whiteWolfOn ? "bg-red-500" : "bg-slate-200 dark:bg-slate-700"}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${whiteWolfOn ? "left-6" : "left-1"}`} />
                  </button>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-700 w-full" />

                <div className="flex items-center justify-between gap-4 text-slate-900 dark:text-slate-100 transition-colors">
                  <div className="flex-1">
                    <h4 className="text-xs font-bold">{t('random-targets')}</h4>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">{t('random-targets-desc')}</p>
                  </div>
                  <button
                    onClick={() => setRandomTargets(!randomTargets)}
                    className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ${randomTargets ? "bg-blue-500" : "bg-slate-200 dark:bg-slate-700"}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${randomTargets ? "left-6" : "left-1"}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (activePlayers.length < 3) {
                onShowPlayers();
                return;
              }
              startGame();
            }}
            className="w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest mt-8 transition-all shadow-lg bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 shadow-slate-900/10 dark:shadow-none"
          >
            {t('start-game')}
          </button>
        </div>
      );
    }

    if (screen === 'pass') {
      const p = gamePlayers[currentPlayerIdx];
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950 text-center transition-colors">
          <div className="w-24 h-24 bg-slate-200 dark:bg-white/5 rounded-3xl flex items-center justify-center text-slate-400 dark:text-white mb-8 border border-slate-300 dark:border-white/10 animate-pulse">
              <User size={48} />
          </div>
          <h2 className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">{t('pass-title')}</h2>
          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-12 tracking-tight">{getPlayerName(p.playerId)}</h3>
          <button
            onClick={() => setScreen('reveal')}
            className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            {t('killer-see-action-target')}
          </button>
        </div>
      );
    }

    if (screen === 'reveal') {
      const p = gamePlayers[currentPlayerIdx];
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-950 text-center animate-in fade-in duration-500 transition-colors">
          <div className="w-16 h-16 bg-slate-200 dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 dark:text-white/40 mb-8 border border-slate-300 dark:border-white/5">
            <Eye size={32} />
          </div>
          <h2 className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">{getPlayerName(p.playerId)}</h2>
          
          {showTarget ? (
            <div className="space-y-8 animate-in zoom-in duration-300 w-full max-w-xs">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t('killer-target-label')}</p>
                <div className={`text-4xl font-black ${p.role === 'white-wolf' ? 'text-red-500 dark:text-red-400' : 'text-slate-900 dark:text-white'} tracking-tight`}>
                  {p.role === 'white-wolf' ? t('killer-no-target') : getPlayerName(p.targetId)}
                </div>
              </div>

              {p.targetTask && (
                <div className="p-6 bg-white dark:bg-white/5 rounded-3xl border border-slate-200 dark:border-white/10 space-y-2 shadow-sm dark:shadow-none">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                     {mode === 'word' ? t('killer-target-word') : t('killer-target-action')}
                   </p>
                   <p className="text-2xl font-black text-blue-600 dark:text-blue-400 tracking-tight leading-tight">
                     {p.targetTask}
                   </p>
                </div>
              )}

              {p.role === 'white-wolf' && (
                  <div className="inline-block px-4 py-1.5 bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-red-200 dark:border-red-500/20">
                      {t('killer-role-white-wolf')}
                  </div>
              )}
              
              <button
                onClick={handleRevealNext}
                className="w-full py-4 bg-slate-900 dark:bg-white/10 text-white rounded-2xl font-bold text-sm uppercase tracking-widest border border-transparent dark:border-white/10 hover:bg-slate-800 dark:hover:bg-white/20 transition-colors shadow-lg dark:shadow-none"
              >
                {t('done-btn')}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowTarget(true)}
              className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <Eye size={20} /> {t('killer-see-action-target')}
            </button>
          )}
        </div>
      );
    }

    if (screen === 'game') {
      return (
        <div className="flex-1 flex flex-col p-6 bg-white dark:bg-slate-900 overflow-y-auto transition-colors text-slate-900 dark:text-slate-100">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-4">
            <button 
              onClick={() => setShowQuitConfirm(true)} 
              className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
            >
              <LogOut size={16} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="w-10 sm:w-12" />
            <div className="flex flex-col items-center">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{t('killer-title')}</h2>
              <p className="text-[9px] font-bold uppercase tracking-widest mt-0.5">{t('killer-round').replace('{0}', round.toString())}</p>
            </div>
            <button 
              onClick={finishGame}
              className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
            >
              {t('finish-game')}
            </button>
          </div>

          {lastActionMessage && (
            <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900/30 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white shrink-0">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-yellow-700 dark:text-yellow-400 uppercase tracking-tight">{lastActionMessage}</p>
                <p className="text-[10px] text-yellow-600 dark:text-yellow-500 font-medium">{t('killer-everyone-wins-pt')}</p>
              </div>
            </div>
          )}

          <div className="space-y-3 flex-1 overflow-y-auto pr-1">
            {gamePlayers.map((p) => (
              <div 
                key={p.playerId}
                className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${p.isEliminated ? 'bg-slate-50 dark:bg-slate-800/40 border-transparent opacity-60' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 shadow-sm'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${p.isEliminated ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500' : 'bg-slate-900 dark:bg-slate-700 text-white dark:text-slate-200'}`}>
                    {getPlayerName(p.playerId).slice(0, 1).toUpperCase()}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${p.isEliminated ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-900 dark:text-slate-100'}`}>{getPlayerName(p.playerId)}</h4>
                    {p.isEliminated && <span className="text-[8px] font-bold uppercase text-red-500 dark:text-red-400">{t('killer-eliminated')}</span>}
                  </div>
                </div>
                
                {!p.isEliminated && (
                  <button
                    onClick={() => playerSucceeded(p.playerId)}
                    className="flex flex-col items-center gap-1 p-2 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl transition-colors"
                  >
                    <CheckCircle2 size={20} />
                    <span className="text-[8px] font-black uppercase text-center max-w-[60px] leading-tight">
                        {mode === 'word' ? t('killer-word-said') : mode === 'action' ? t('killer-action-performed') : t('killer-success-btn')}
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>

          <QuitGameModal 
            isOpen={showQuitConfirm} 
            onClose={() => setShowQuitConfirm(false)} 
            onConfirm={onBack} 
          />
        </div>
      );
    }

    if (screen === 'end') {
      return (
        <div className="flex-1 flex flex-col p-6 bg-white dark:bg-slate-900 overflow-y-auto transition-colors text-slate-900 dark:text-slate-100">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-slate-900 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
              <Medal size={32} />
            </div>
            <h2 className="text-2xl font-black tracking-tight">{t('end-title')}</h2>
            <p className="text-xs text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest mt-1">{t('roles-recap')}</p>
          </div>

          <div className="space-y-2 flex-1">
            {gamePlayers.map(p => (
              <div 
                key={p.playerId}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${p.role === 'white-wolf' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}>
                    {p.role === 'white-wolf' ? t('killer-role-white-wolf') : t('killer-role-killer')}
                  </div>
                  <span className="text-sm font-bold">{getPlayerName(p.playerId)}</span>
                </div>
                <div className="flex items-center gap-2">
                  {p.wonPoints && p.wonPoints > 0 && (
                     <span className="text-[10px] font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">+{p.wonPoints} pts</span>
                  )}
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
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
              onClick={() => {
                if (activePlayers.length < 3) {
                  onShowPlayers();
                  return;
                }
                startGame();
              }}
              className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-slate-900/10 dark:shadow-none transition-all"
            >
              {t('play-again')}
            </button>
            <button
              onClick={onBack}
              className="w-full py-4 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-2xl font-bold text-sm uppercase tracking-widest border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
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
      <QuitGameModal 
        isOpen={showQuitConfirm} 
        onClose={() => setShowQuitConfirm(false)} 
        onConfirm={onBack} 
      />
      <AllUsedModal
        isOpen={allUsedOpen}
        onRestart={() => {
          setAllUsedOpen(false);
          startGame(true);
        }}
        onQuit={onBack}
      />
    </div>
  );
};
