import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  RotateCcw,
  Play,
  Check
} from "lucide-react";
import { useAppContext } from "../context/AppContext";

interface Game421Props {
  onBack: () => void;
}

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6 | null;

export const Game421: React.FC<Game421Props> = ({ onBack }) => {
  const { t } = useAppContext();
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

  const rollDice = async () => {
    if (rollsLeft === 0 || gameState === "won" || rolling) return;

    setRolling(true);
    setGameState("playing");

    // Generate final values strictly once per roll for each non-fixed dice
    const nextFinalValues = dices.map((d, i) => {
      if (isFixed(dices, i)) return d;
      return getRandomDiceValue();
    });

    // Calculate final rotations: target face + multiple full spins
    const targetRotations = rotations.map((r, i) => {
      if (isFixed(dices, i)) return r;
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
        const uniqueTargetsFound = new Set(nextFinalValues.filter(v => v !== null && targetNums.includes(v as number)));
        const anyTargetFound = uniqueTargetsFound.size > 0;

        const isFirstRollLoss = rollsLeft === 3 && !anyTargetFound;
        const isOutOfRollsLoss = (rollsLeft === 1) && !isWin;
        const isLoss = isFirstRollLoss || isOutOfRollsLoss;

        if (isWin) {
            setGameState("won");
        } else if (isLoss) {
            setGameState("lost");
        }

        setRollsLeft(prev => {
            if (isLoss) return prev; 
            if (prev === 3 && uniqueTargetsFound.size === 2) {
                return 1;
            }
            return Math.max(0, prev - 1);
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
    <div className="flex-1 flex flex-col bg-white overflow-hidden relative">
      {/* Header */}
      <div className="px-5 py-6 flex justify-between items-center border-b border-slate-50">
        <button
          onClick={onBack}
          className="text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
        >
          {t("back")}
        </button>
        <div className="text-center">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">{t("game-421-title")}</h2>
        </div>
        <button
          onClick={resetGame}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-slate-400 hover:bg-slate-200 transition-colors"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="mb-12 text-center">
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                gameState === "won" ? "bg-green-100 text-green-600" :
                gameState === "lost" ? "bg-red-100 text-red-600" :
                "bg-slate-100 text-slate-400"
            }`}>
                {gameState === "won" ? t("win-421") :
                 gameState === "lost" ? t("lose-421") :
                 t("rolls-left").replace("{0}", rollsLeft.toString())}
            </span>
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
                <div className="dice-face face-1">1</div>
                <div className="dice-face face-2">2</div>
                <div className="dice-face face-3">3</div>
                <div className="dice-face face-4">4</div>
                <div className="dice-face face-5">5</div>
                <div className="dice-face face-6">6</div>
              </div>
              
              {isFixed(dices, idx) && !rolling && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm z-10">
                      <Check size={14} strokeWidth={4} />
                  </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full max-w-xs space-y-4">
            {gameState === "won" || gameState === "lost" ? (
                <button
                    onClick={resetGame}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2"
                >
                    <RotateCcw size={18} />
                    {t("retry")}
                </button>
            ) : (
                <button
                    onClick={rollDice}
                    disabled={rolling || rollsLeft === 0}
                    className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${
                        rolling || rollsLeft === 0
                        ? "bg-slate-100 text-slate-300 cursor-not-allowed shadow-none"
                        : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10"
                    }`}
                >
                    <Play size={18} fill="currentColor" />
                    {t("roll-dice")}
                </button>
            )}
        </div>
      </div>

      <div className="p-8 text-center text-[10px] text-slate-400 font-medium leading-relaxed uppercase tracking-wider">
          {t("game-421-desc")}
      </div>
    </div>
  );
};
