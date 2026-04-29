import React, { useState, useEffect, useRef } from 'react';
import { useAppContext } from '../context/AppContext';
import { ArrowLeft, Play, Settings as SettingsIcon, LogOut, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ACTIONS = {
  EN: [
    "Do 10 pushups",
    "Sing the chorus of a pop song",
    "Imitate another player",
    "Dance for 15 seconds",
    "Speak with a foreign accent until your next turn",
    "Let someone draw on your face with a pen",
    "Tell an embarrassing story",
    "Hug the person to your left"
  ],
  FR: [
    "Fais 10 pompes",
    "Chante le refrain d'une chanson pop",
    "Imite un autre joueur",
    "Danse pendant 15 secondes",
    "Parle avec un accent étranger jusqu'à ton prochain tour",
    "Laisse quelqu'un te faire un dessin sur le visage",
    "Raconte une histoire embarrassante",
    "Fais un câlin à la personne à ta gauche"
  ],
  ES: [
    "Haz 10 flexiones",
    "Canta el estribillo de una canción pop",
    "Imita a otro jugador",
    "Baila durante 15 segundos",
    "Habla con un acento extranjero hasta tu próximo turno",
    "Deja que alguien te dibuje en la cara con un bolígrafo",
    "Cuenta una historia embarazosa",
    "Abraza a la persona a tu izquierda"
  ]
};

type OutcomeType = 'action' | 'penalty' | 'nothing';

interface WheelOutcome {
  type: OutcomeType;
  actionText?: string;
  penalties?: number;
}

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

  const activePlayers = players.filter(p => p.isActive !== false);

  useEffect(() => {
    if (activePlayers.length === 0) {
      setSelectedPlayer(null);
      setOutcome(null);
    }
  }, [activePlayers]);

  const spinWheel = () => {
    if (activePlayers.length === 0 || isSpinning) return;
    
    setIsSpinning(true);
    setOutcome(null);
    setSelectedPlayer(null);

    // Calculate rotation
    const spins = 5 + Math.random() * 5; // 5 to 10 full spins
    const randomAngle = Math.random() * 360;
    const newRotation = rotation + spins * 360 + randomAngle;
    setRotation(newRotation);

    const targetIndex = Math.floor(Math.random() * activePlayers.length);
    const sliceAngle = 360 / activePlayers.length;
    
    const centerOfTarget = (targetIndex * sliceAngle) + sliceAngle / 2;
    const requiredRotationToTop = (270 - centerOfTarget + 360) % 360;
    
    const randomOffset = (Math.random() - 0.5) * (sliceAngle * 0.8);
    
    const finalNewRotation = rotation + spins * 360 + requiredRotationToTop + randomOffset;
    setRotation(finalNewRotation);

    // Generate outcome
    const rand = Math.random();
    let selectedOutcome: WheelOutcome;
    
    if (rand < 0.33) {
      selectedOutcome = { type: 'nothing' };
    } else if (rand < 0.66) {
      selectedOutcome = { type: 'penalty', penalties: Math.floor(Math.random() * 6) };
    } else {
      let rawLang = language.toUpperCase();
      if (rawLang === 'FR-CA') rawLang = 'FR';
      let lang = rawLang as keyof typeof ACTIONS;
      if (!ACTIONS[lang]) lang = 'EN';
      const actionList = ACTIONS[lang];
      selectedOutcome = { type: 'action', actionText: actionList[Math.floor(Math.random() * actionList.length)] };
    }

    setTimeout(() => {
      setSelectedPlayer(activePlayers[targetIndex].name);
      setOutcome(selectedOutcome);
      setIsSpinning(false);
    }, 5000); // 5 seconds spin
  };

  const colors = [
    '#0a9396', '#ee9b00', '#ae2012', '#9b2226', '#005f73', '#e9d8a6', '#ca6702', '#bb3e03'
  ];

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 transition-colors relative overflow-hidden h-full">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 pb-4 shrink-0">
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
        >
          <LogOut size={16} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <div className="w-10 sm:w-12" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#0a9396]">{t("wheel-title")}</h2>
        <div className="flex items-center gap-2">
            {screen !== "rules" ? (
              <button 
                onClick={() => setScreen("rules")}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <SettingsIcon size={18} />
              </button>
            ) : (
              <div className="w-8" />
            )}
        </div>
      </div>

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
          <div className="flex flex-col items-center w-full max-w-md">
            <div className="relative w-80 h-80 mb-10">
              {/* Pointer */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-6 h-8 bg-slate-900 dark:bg-white z-20 pointer-events-none" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
              
              <motion.div 
                className="w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative overflow-hidden bg-slate-200 dark:bg-slate-700"
                animate={{ rotate: rotation }}
                transition={{ duration: 5, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {activePlayers.map((player, i) => {
                  const sliceAngle = 360 / activePlayers.length;
                  const rotateStr = `rotate(${i * sliceAngle}deg)`;
                  const skewStr = `skewY(${-(90 - sliceAngle)}deg)`;
                  
                  if (activePlayers.length > 2) {
                    return (
                      <div 
                        key={player.id} 
                        className="absolute w-1/2 h-1/2 top-0 right-0 origin-bottom-left flex items-center justify-end"
                        style={{
                          transform: `${rotateStr} ${skewStr}`,
                          backgroundColor: colors[i % colors.length],
                          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)'
                        }}
                      >
                        <div 
                          className="text-white font-bold text-sm absolute drop-shadow-md right-4 bottom-2 truncate max-w-[80px]"
                          style={{
                            transform: `skewY(${90 - sliceAngle}deg) rotate(${sliceAngle / 2}deg)`,
                            transformOrigin: 'bottom right'
                          }}
                        >
                          {player.name}
                        </div>
                      </div>
                    );
                  } else {
                     // For 2 players, simple split
                     return (
                      <div 
                        key={player.id} 
                        className="absolute w-full h-1/2 left-0 origin-bottom flex items-center justify-center p-4"
                        style={{
                          top: i === 0 ? 0 : '50%',
                          backgroundColor: colors[i % colors.length],
                          transform: i === 1 ? 'rotate(180deg)' : 'none'
                        }}
                      >
                        <span className="text-white font-bold text-xl drop-shadow-md pb-10" style={i===1 ? {transform: 'rotate(180deg)'} : {}}>
                            {player.name}
                        </span>
                      </div>
                     );
                  }
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
                  <h3 className="text-3xl font-black text-[#0a9396] mb-3 uppercase tracking-wider">{selectedPlayer}</h3>
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                    {outcome.type === 'nothing' && t('wheel-just-selected').replace('{0}', selectedPlayer)}
                    {outcome.type === 'penalty' && t('wheel-take-penalties').replace('{0}', selectedPlayer).replace('{1}', String(outcome.penalties))}
                    {outcome.type === 'action' && t('wheel-do-action').replace('{0}', selectedPlayer).replace('{1}', outcome.actionText || '')}
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
                    disabled={isSpinning || activePlayers.length < 2}
                    className="w-full py-5 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 font-black text-xl uppercase tracking-widest rounded-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSpinning ? '...' : t('wheel-spin')}
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
                  className="mt-6 w-full py-4 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold uppercase tracking-widest rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                  onClick={spinWheel}
                >
                   {t('wheel-spin')}
                </motion.button>
              )}
            </AnimatePresence>

          </div>
        )}
      </div>
    )}
  </React.Fragment>
</div>
  );
};
