import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';
import { ArrowLeft, Play, Settings as SettingsIcon, LogOut, RotateCcw, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getWheelActions } from '../../data/wheel';

type OutcomeType = 'action' | 'penalty' | 'nothing';

interface WheelOutcome {
  type: OutcomeType;
  actionText?: string;
  penalties?: number;
}

import { QuitGameModal } from '../modals/QuitGameModal';
import { GameHeader } from '../shared/GameHeader';

interface WheelProps {
  onBack: () => void;
  onShowPlayers: () => void;
}

export const Wheel: React.FC<WheelProps> = ({ onBack, onShowPlayers }) => {
  const { players, t, language } = useAppContext();
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<WheelOutcome | null>(null);
  const [screen, setScreen] = useState<"rules" | "game">("rules");
  const [quitConfirm, setQuitConfirm] = useState(false);
  const [recentActions, setRecentActions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const activePlayers = players.filter(p => p.isActive !== false);

  useEffect(() => {
    if (activePlayers.length === 0) {
      setSelectedPlayer(null);
      setOutcome(null);
    }
  }, [activePlayers]);

  const spinWheel = async () => {
    if (activePlayers.length === 0 || isSpinning || isLoading) return;
    
    setIsLoading(true);
    let actionList: string[] = [];
    try {
      actionList = await getWheelActions(language);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);

    setIsSpinning(true);
    setOutcome(null);
    setSelectedPlayer(null);

    // Calculate target and rotation
    const spins = 5 + Math.floor(Math.random() * 5); // 5 to 10 full spins
    const targetIndex = Math.floor(Math.random() * activePlayers.length);
    const sliceAngle = 360 / activePlayers.length;
    
    // slice 0 starts at 12 o'clock (0 deg) and center is at sliceAngle / 2
    const centerOfTarget = (targetIndex * sliceAngle) + sliceAngle / 2;
    
    // Random offset inside the slice (80% of width to avoid boundaries)
    const randomOffset = (Math.random() - 0.5) * (sliceAngle * 0.8);
    
    // We want (rotation + delta) % 360 to be (360 - (centerOfTarget + randomOffset)) % 360
    const currentModulo = rotation % 360;
    const targetModulo = (360 - (centerOfTarget + randomOffset)) % 360;
    
    let extraRotation = targetModulo - currentModulo;
    if (extraRotation <= 0) extraRotation += 360;
    
    const finalNewRotation = rotation + (spins * 360) + extraRotation;
    setRotation(finalNewRotation);

    // Generate outcome
    const rand = Math.random();
    let selectedOutcome: WheelOutcome;
    
    if (rand < 0.5) {
      selectedOutcome = { type: 'penalty', penalties: Math.floor(Math.random() * 5) + 1 };
    } else {
      let availableActions = actionList.filter(a => !recentActions.includes(a));
      if (availableActions.length === 0) {
        availableActions = actionList;
      }
      
      const chosenAction = availableActions[Math.floor(Math.random() * availableActions.length)];
      setRecentActions(prev => {
        const next = [...prev, chosenAction];
        if (next.length > 15) return next.slice(next.length - 15);
        return next;
      });

      selectedOutcome = { 
        type: 'action', 
        actionText: chosenAction, 
        penalties: Math.floor(Math.random() * 5) + 1 
      };
    }

    setTimeout(() => {
      setSelectedPlayer(activePlayers[targetIndex].name);
      setOutcome(selectedOutcome);
      setIsSpinning(false);
    }, 5000); // 5 seconds spin
  };

  const colors = [
    '#0a9396', '#b33939', '#227093', '#218c74', '#84817a', '#706fd3', '#40407a', '#cc8e35'
  ];

    const sliceAngle = activePlayers.length > 0 ? 360 / activePlayers.length : 360;
    const conicGradients = activePlayers.map((_, i) => {
      const c = colors[i % colors.length];
      return `${c} ${i * sliceAngle}deg ${(i + 1) * sliceAngle}deg`;
    }).join(', ');
    
  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 transition-colors relative overflow-hidden h-full">
      <GameHeader
        onQuit={() => setQuitConfirm(true)}
        title={<h2 className="text-sm font-bold uppercase tracking-widest text-[#0a9396]">{t("wheel-title")}</h2>}
        rightContent={
          screen !== "rules" ? (
            <button 
              onClick={() => setScreen("rules")}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <SettingsIcon size={18} />
            </button>
          ) : (
            <div className="w-8" />
          )
        }
      />

      <React.Fragment>
        {screen === "rules" ? (
          <div 
            key="rules"
            className="flex-1 flex flex-col px-5 pt-8 pb-6 overflow-y-auto"
          >
            <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/20 dark:shadow-none text-center mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#0a9396]" />
                <div className="w-16 h-16 bg-[#0a9396]/10 dark:bg-[#0a9396]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#0a9396]">
                  <RotateCcw size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t("wheel-title")}</h3>
                <div className="text-sm text-slate-500 dark:text-slate-400 text-left whitespace-pre-wrap leading-relaxed">
                  {t("wheel-rules-desc")}
                </div>
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <button
                onClick={onShowPlayers}
                className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
              >
                {t("edit-players")}
              </button>
              <button
                onClick={() => setScreen("game")}
                className="w-full py-4 bg-[#0a9396] hover:bg-[#098284] text-white rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-[#0a9396]/25 flex items-center justify-center gap-2"
              >
                {t("start-game")}
              </button>
            </div>
          </div>
        ) : (
          <div 
            key="game"
            className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-y-auto"
          >
            {activePlayers.length < 2 ? (
              <div className="text-center p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-xl max-w-sm w-full border border-slate-100 dark:border-slate-700">
                <div className="w-16 h-16 bg-[#0a9396]/10 text-[#0a9396] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SettingsIcon size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{t("err-not-enough-2")}</h3>
                <button 
                  onClick={onShowPlayers}
                  className="mt-6 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white font-bold uppercase tracking-widest rounded-xl shadow-lg w-full"
                >
                  {t("edit-players")}
                </button>
              </div>
            ) : (
          <div className="flex flex-col items-center w-full max-w-md px-4 pb-20">
            <div className="relative w-full max-w-[320px] aspect-square mb-10">
              {/* Pointer */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-6 h-8 bg-slate-900 dark:bg-white z-20 pointer-events-none" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
              
              <motion.div 
                className="w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative overflow-hidden bg-slate-200 dark:bg-slate-700"
                style={{ background: `conic-gradient(${conicGradients})` }}
                animate={{ rotate: rotation }}
                transition={{ duration: 5, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {activePlayers.map((player, i) => {
                  const rotationAngle = (i * sliceAngle) + sliceAngle / 2;
                  
                  return (
                    <div
                      key={player.id}
                      className="absolute top-1/2 left-1/2 flex items-center justify-end font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-[10px] sm:text-xs md:text-sm pr-2 sm:pr-4 pointer-events-none"
                      style={{
                        width: '45%',
                        transform: `translate(-50%, -50%) rotate(${rotationAngle - 90}deg) translateX(55%)`
                      }}
                    >
                      <span className="truncate" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>{player.name}</span>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              {outcome && selectedPlayer && !isSpinning ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 w-full text-center"
                >
                  <h3 
                    className="text-3xl font-black mb-3 uppercase tracking-wider"
                    style={{ color: colors[activePlayers.findIndex(p => p.name === selectedPlayer) % colors.length] }}
                  >
                    {selectedPlayer}
                  </h3>
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                    {outcome.type === 'nothing' && t('wheel-just-selected').replace('{0}', selectedPlayer)}
                    {outcome.type === 'penalty' && t('wheel-take-penalties').replace('{0}', selectedPlayer).replace('{1}', String(outcome.penalties))}
                    {outcome.type === 'action' && (
                      <div className="flex flex-col gap-4">
                        <div className="font-bold text-xl text-slate-900 dark:text-white">
                          {t('wheel-do-action').replace('{0}', selectedPlayer).replace('{1}', outcome.actionText || '')}
                        </div>
                        <div className="flex items-center gap-3 w-full opacity-40">
                          <div className="h-px bg-slate-500 flex-1"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                          <div className="h-px bg-slate-500 flex-1"></div>
                        </div>
                        <div className="text-red-500 dark:text-red-400 font-bold text-xl">
                          {t('wheel-or-take-penalties').replace('{0}', String(outcome.penalties))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                   <button
                    onClick={spinWheel}
                    disabled={isSpinning || isLoading || activePlayers.length < 2}
                    className="w-full py-5 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 font-black text-xl uppercase tracking-widest rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                  >
                    {isLoading ? <Loader2 size={24} className="animate-spin" /> : isSpinning ? '...' : t('wheel-spin')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Show Spin Again button if outcome exists */}
            <AnimatePresence>
              {outcome && !isSpinning && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 w-full py-4 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold uppercase tracking-widest rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  onClick={spinWheel}
                  disabled={isLoading}
                >
                   {isLoading ? <Loader2 size={24} className="animate-spin" /> : t('wheel-spin')}
                </motion.button>
              )}
            </AnimatePresence>

          </div>
        )}
      </div>
    )}
  </React.Fragment>
  <QuitGameModal 
    isOpen={quitConfirm} 
    onClose={() => setQuitConfirm(false)} 
    onConfirm={onBack} 
  />
</div>
  );
};
