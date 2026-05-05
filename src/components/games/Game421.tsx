import React, { useState, useEffect } from "react";
import { 
  X, 
  RotateCcw,
  Play,
  Check,
  ChevronLeft,
  Dices,
  LogOut
} from "lucide-react";
import { useAppContext } from '../../context/AppContext';

import { GameHeader } from '../shared/GameHeader';
import { QuitGameModal } from '../modals/QuitGameModal';

interface Game421Props {
  onBack: () => void;
  onShowPlayers: () => void;
}

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6 | null;

export const Game421: React.FC<Game421Props> = ({ onBack, onShowPlayers }) => {
  const { t } = useAppContext();
  const [rulesDismissed, setRulesDismissed] = useState(false);
  const [showRules, setShowRules] = useState(true);

  const getRandomDiceValue = () => (Math.floor(Math.random() * 6) + 1) as DiceValue;

  const faceRotations = {
    1: { x: 0, y: 0 },
    2: { x: 0, y: -90 },
    3: { x: -90, y: 0 },
    4: { x: 90, y: 0 },
    5: { x: 0, y: 90 },
    6: { x: 0, y: 180 }
  };

  const getRotationForValue = (val: DiceValue) => {
    return val ? faceRotations[val as keyof typeof faceRotations] : { x: 0, y: 0 };
  };

  const [dices, setDices] = useState<DiceValue[]>(() => [
    getRandomDiceValue(),
    getRandomDiceValue(),
    getRandomDiceValue()
  ]);
  const [rotations, setRotations] = useState<{ x: number, y: number }[]>(() => [
    getRotationForValue(dices[0]),
    getRotationForValue(dices[1]),
    getRotationForValue(dices[2])
  ]);
  const [rollsLeft, setRollsLeft] = useState(3);
  const [gameState, setGameState] = useState<"idle" | "playing" | "won" | "lost">("idle");
  const [rolling, setRolling] = useState(false);
  const [quitConfirm, setQuitConfirm] = useState(false);
  const [previousGameWas421, setPreviousGameWas421] = useState(false);

  const rollDice = async (forceReset = false) => {
    if ((rollsLeft === 0 && !forceReset) || (gameState === "won" && !forceReset) || rolling) return;

    setRolling(true);
    setGameState("playing");

    const currentDices = forceReset ? [null, null, null] as DiceValue[] : dices;
    const currentRollsLeft = forceReset ? 3 : rollsLeft;

    // Generate final values strictly once per roll for each non-fixed dice
    const nextFinalValues = currentDices.map((d, i) => {
      if (isFixed(currentDices, i)) return d;
      return getRandomDiceValue();
    });

    // Calculate final rotations: target face + multiple full spins
    const targetRotations = rotations.map((r, i) => {
      if (isFixed(currentDices, i)) return r;
      const val = nextFinalValues[i] as keyof typeof faceRotations;
      const target = faceRotations[val] || { x: 0, y: 0 };
      // Add 3-5 full rotations (1080 to 1800 degrees) plus the target offset
      const extraSpinsX = (Math.floor(Math.random() * 3) + 3) * 360;
      const extraSpinsY = (Math.floor(Math.random() * 3) + 3) * 360;
      return {
        x: extraSpinsX + target.x,
        y: extraSpinsY + target.y
      };
    });

    setRotations(targetRotations);

    setTimeout(() => {
        setRolling(false);
        setDices(nextFinalValues);
        
        const sorted = [...nextFinalValues].map(v => v || 0).sort((a, b) => b - a);
        const isWin = sorted[0] === 4 && sorted[1] === 2 && sorted[2] === 1;

        // Target numbers for 421
        const targetNums = [4, 2, 1];
        
        // Find what we had BEFORE this roll
        const oldUniqueTargets = new Set(currentDices.filter(v => v !== null && targetNums.includes(v as number)));
        
        // Find what we have NOW
        const newUniqueTargets = new Set(nextFinalValues.filter(v => v !== null && targetNums.includes(v as number)));
        
        // Check if we found something NEW
        const foundNewTarget = Array.from(newUniqueTargets).some(val => !oldUniqueTargets.has(val));

        const isOutOfRollsLoss = (currentRollsLeft === 1 || !foundNewTarget) && !isWin;
        const isLoss = isOutOfRollsLoss;

        if (isWin) {
            if (previousGameWas421) {
                setGameState("lost");
                setPreviousGameWas421(false);
            } else {
                setGameState("won");
                setPreviousGameWas421(true);
            }
        } else if (isLoss) {
            setGameState("lost");
            setPreviousGameWas421(false);
        } else {
            // If they are still playing, we don't reset previousGameWas421 yet
            // but if they eventually lose or win we'll set it.
        }

        setRollsLeft(prev => {
            const actualPrev = forceReset ? 3 : prev;
            if (isLoss || isWin) return actualPrev; 
            return Math.max(0, actualPrev - 1);
        });
    }, 1800); 
  };

  const isFixed = (currentDices: DiceValue[], index: number) => {
    if (gameState === "idle" || currentDices[index] === null) return false;
    
    const values = currentDices.filter(d => d !== null) as number[];
    
    const val = currentDices[index];
    if (val === 4 || val === 2 || val === 1) {
        const firstIndex = currentDices.findIndex(d => d === val);
        return firstIndex === index;
    }
    
    return false;
  };

  const resetGame = () => {
    const d1 = getRandomDiceValue();
    const d2 = getRandomDiceValue();
    const d3 = getRandomDiceValue();
    setDices([d1, d2, d3]);
    setRollsLeft(3);
    setGameState("idle");
    setRotations([
        getRotationForValue(d1),
        getRotationForValue(d2),
        getRotationForValue(d3)
    ]);
  };

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 overflow-hidden relative transition-colors h-full">
      <GameHeader
        onQuit={() => {
          if (showRules && gameState === "idle") {
            onBack();
          } else if (showRules && gameState !== "idle") {
            setShowRules(false);
          } else {
            setQuitConfirm(true);
          }
        }}
        title={<h2 className="text-sm font-bold uppercase tracking-widest text-[#10b981]">{t("game-421-title")}</h2>}
        rightContent={
          !showRules ? (
            <button
              onClick={resetGame}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <RotateCcw size={18} />
            </button>
          ) : (
            <div className="w-8" />
          )
        }
      />

      <React.Fragment>
        {showRules ? (
          <div 
            key="rules"
            className="flex-1 flex flex-col px-5 pt-8 pb-6 overflow-y-auto"
          >
            <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/20 dark:shadow-none text-center mb-8 relative overflow-hidden transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#10b981]" />
                <div className="w-16 h-16 bg-[#10b981]/10 dark:bg-[#10b981]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#10b981]">
                  <Dices size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{t("game-421-rules-title")}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed transition-colors">
                  {t("game-421-rules-desc")}
                </p>
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
                onClick={() => setShowRules(false)}
                className="w-full py-4 bg-[#10b981] hover:bg-[#059669] text-white rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-[#10b981]/25 flex items-center justify-center gap-2"
              >
                {t("start-game")}
              </button>
            </div>
          </div>
        ) : (
          <div 
            key="game"
            className="flex-1 flex flex-col bg-white dark:bg-slate-900 transition-colors"
          >
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="mb-4">
                <button 
                  onClick={() => setShowRules(true)}
                  className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                >
                  {t("rules")}
                </button>
              </div>

              <div className="mb-12 h-6 text-center">
                  {gameState === "won" || gameState === "lost" ? (
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                          gameState === "won" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                          "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                      }`}>
                          {gameState === "won" ? t("win-421") : t("lose-421")}
                      </span>
                  ) : null}
              </div>

              <div className="flex gap-10 mb-16 dice-viewport scale-75 sm:scale-100">
                {dices.map((val, idx) => (
                  <div key={idx} className="relative w-20 h-20">
                    <div 
                      className={`dice-cube ${isFixed(dices, idx) && !rolling ? 'dice-is-fixed' : ''}`}
                      style={{
                         transform: `rotateX(${rotations[idx].x}deg) rotateY(${rotations[idx].y}deg)`
                      }}
                    >
                      <div className="dice-face face-1 border dark:border-slate-700 dark:bg-slate-800 dark:text-white">1</div>
                      <div className="dice-face face-2 border dark:border-slate-700 dark:bg-slate-800 dark:text-white">2</div>
                      <div className="dice-face face-3 border dark:border-slate-700 dark:bg-slate-800 dark:text-white">3</div>
                      <div className="dice-face face-4 border dark:border-slate-700 dark:bg-slate-800 dark:text-white">4</div>
                      <div className="dice-face face-5 border dark:border-slate-700 dark:bg-slate-800 dark:text-white">5</div>
                      <div className="dice-face face-6 border dark:border-slate-700 dark:bg-slate-800 dark:text-white">6</div>
                    </div>
                    
                    {isFixed(dices, idx) && !rolling && (
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-white dark:border-slate-900 shadow-sm z-10 transition-colors">
                            <Check size={14} strokeWidth={4} />
                        </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="w-full max-w-xs space-y-4">
                  {gameState === "won" || gameState === "lost" ? (
                      <button
                          onClick={() => rollDice(true)}
                          className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-all shadow-xl shadow-slate-900/10 dark:shadow-none flex items-center justify-center gap-2"
                      >
                          <RotateCcw size={18} />
                          {t("retry")}
                      </button>
                  ) : (
                      <button
                          onClick={() => rollDice(false)}
                          disabled={rolling || rollsLeft === 0}
                          className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${
                              rolling || rollsLeft === 0
                              ? "bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed shadow-none"
                              : "bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 shadow-slate-900/10 dark:shadow-none"
                          }`}
                      >
                          <Play size={18} fill="currentColor" />
                          {t("roll-dice")}
                      </button>
                  )}
              </div>
            </div>

            <div className="p-8 text-center text-[10px] text-slate-400 dark:text-slate-500 font-medium leading-relaxed uppercase tracking-wider transition-colors">
                {t("game-421-desc")}
            </div>
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
