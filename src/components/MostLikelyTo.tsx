import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Trophy, 
  User, 
  Play, 
  RotateCcw, 
  SkipForward, 
  Target,
  Flame,
  Zap,
  Smile,
  X,
  Plus,
  Check,
  Trash2,
  Info
} from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { MLT_QUESTIONS, MLTQuestion } from "../data/mostLikelyToQuestions";
import { QuitGameModal } from "./QuitGameModal";

interface MostLikelyToProps {
  onBack: () => void;
  onShowPlayers: () => void;
}

type Screen = "rules" | "config" | "game" | "score";

export const MostLikelyTo: React.FC<MostLikelyToProps> = ({ onBack, onShowPlayers }) => {
  const { players: allPlayers, setPlayers, language, t } = useAppContext();
  const players = allPlayers.filter((p) => p.isActive !== false);
  
  const [screen, setScreen] = useState<Screen>("rules");
  const [difficulties, setDifficulties] = useState<MLTQuestion["difficulty"][]>(["soft"]);
  const [selectedCategories, setSelectedCategories] = useState<MLTQuestion["category"][]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<MLTQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quitConfirm, setQuitConfirm] = useState(false);

  const toggleDifficulty = (d: MLTQuestion["difficulty"]) => {
    if (difficulties.includes(d)) {
        if (difficulties.length > 1) {
            setDifficulties(prev => prev.filter(x => x !== d));
        }
    } else {
        setDifficulties(prev => [...prev, d]);
    }
  };

  const toggleCategory = (cat: MLTQuestion["category"]) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(prev => prev.filter(c => c !== cat));
    } else {
      setSelectedCategories(prev => [...prev, cat]);
    }
  };

  const startGame = () => {
    if (selectedCategories.length === 0 || difficulties.length === 0) return;
    
    const filtered = MLT_QUESTIONS.filter(
      (q) => difficulties.includes(q.difficulty) && selectedCategories.includes(q.category)
    );
    
    if (filtered.length === 0) {
      // In case no questions match, just take all from selected categories
      const backup = MLT_QUESTIONS.filter((q) => selectedCategories.includes(q.category));
      const shuffled = [...backup].sort(() => Math.random() - 0.5);
      setCurrentQuestions(shuffled);
    } else {
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      setCurrentQuestions(shuffled);
    }
    
    setCurrentIndex(0);
    setScreen("game");
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setScreen("game");
    } else {
      // Re-shuffle if we run out
      const shuffled = [...currentQuestions].sort(() => Math.random() - 0.5);
      setCurrentQuestions(shuffled);
      setCurrentIndex(0);
      setScreen("game");
    }
  };

  const addPoint = (playerId: string) => {
    setPlayers(allPlayers.map(p => 
      p.id === playerId ? { ...p, score: (p.score || 0) + 1 } : p
    ));
    nextQuestion();
  };

  const currentQuestion = currentQuestions[currentIndex];

  const categories: MLTQuestion["category"][] = ["habits", "adventure", "career", "social", "party", "hot"];

  const togglePlayerActive = (id: string) => {
    setPlayers(allPlayers.map((p) => (p.id === id ? { ...p, isActive: !p.isActive } : p)));
  };

  if (screen !== "rules" && players.length < 2) {
    // We already have state for this, but let's make sure it opens the modal
    // No, we should just show rules or config and the buttons will work.
    // Actually the user wants it to open automatically.
  }

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          {screen === "rules" && (
            <motion.div
              key="rules"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col px-5 py-6 overflow-y-auto bg-white dark:bg-slate-900 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
                <button
                  onClick={onBack}
                  className="p-2 -ml-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">{t("mlt-title")}</h2>
                <div className="w-10" />
              </div>

              <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/20 dark:shadow-none text-center mb-8 relative overflow-hidden transition-colors">
                  <div className="w-16 h-16 bg-[#ee6c4d]/10 dark:bg-[#ee6c4d]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#ee6c4d]">
                    <Info size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t("mlt-rules-title")}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {t("mlt-rules-desc")}
                  </p>
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
                    if (players.length < 2) {
                      onShowPlayers();
                      return;
                    }
                    setScreen("config");
                  }}
                  className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10 dark:shadow-none"
                >
                  {t("next")}
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          )}
          {screen === "config" && (
          <motion.div
            key="config"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col px-5 py-6 overflow-y-auto bg-white dark:bg-slate-900 transition-colors"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
              <button
                onClick={onBack}
                className="p-2 -ml-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">{t("mlt-title")}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={onShowPlayers}
                  className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
                >
                  {t("edit-players")}
                </button>
              </div>
            </div>
            
            <div className="px-5 flex-1">
              <div className="space-y-6">
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {t("mlt-desc")}
                </p>

                <div>
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-3">
                    {t("mlt-mode")}
                  </label>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                    {(["soft", "hard"] as const).map((d) => (
                      <button
                        key={d}
                        onClick={() => toggleDifficulty(d)}
                        className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                          difficulties.includes(d)
                            ? "bg-[#ee6c4d] border-[#ee6c4d] text-white shadow-lg shadow-[#ee6c4d]/20"
                            : "bg-slate-50 dark:bg-slate-800 border-transparent text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:border-slate-200 dark:hover:border-slate-600"
                        }`}
                      >
                        {d === "soft" ? <Smile size={18} /> : <Zap size={18} />}
                        <span className="font-bold text-xs uppercase tracking-wide">
                          {t(`mlt-mode-${d}`)}
                        </span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => toggleCategory(cat)}
                        className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                          selectedCategories.includes(cat)
                            ? "bg-white dark:bg-slate-800 border-slate-900 dark:border-slate-500 shadow-sm"
                            : "bg-slate-50 dark:bg-slate-800/50 border-transparent text-slate-400 dark:text-slate-600 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                        }`}
                      >
                        <span className={`text-[11px] font-bold uppercase tracking-tight ${selectedCategories.includes(cat) ? "text-slate-900 dark:text-slate-100" : "text-slate-400 dark:text-slate-600"}`}>
                          {t(`mlt-cat-${cat}`)}
                        </span>
                        {selectedCategories.includes(cat) ? (
                          <div className="w-4 h-4 rounded-full bg-slate-900 dark:bg-slate-500 flex items-center justify-center text-white dark:text-slate-100">
                            <Check size={10} strokeWidth={4} />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border-2 border-slate-200 dark:border-slate-700" />
                        )}
                      </button>
                    ))}
                  </div>
                  {selectedCategories.length === 0 && (
                    <p className="text-[10px] text-red-500 dark:text-red-400 mt-2 font-medium">
                      {t("mlt-no-category-selected")}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 px-5">
              <button
                onClick={() => {
                  if (players.length < 2) {
                    onShowPlayers();
                    return;
                  }
                  startGame();
                }}
                disabled={selectedCategories.length === 0}
                className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${
                  selectedCategories.length > 0
                  ? "bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 shadow-slate-900/10 dark:shadow-none" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed shadow-none"
                }`}
              >
                <Play size={18} fill="currentColor" />
                {t("mlt-start")}
              </button>
            </div>
          </motion.div>
        )}

        {screen === "game" && currentQuestion && (
          <motion.div
            key="game"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex-1 flex flex-col px-5 py-8 bg-white dark:bg-slate-900 transition-colors"
          >
             <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
                <button
                    onClick={() => setQuitConfirm(true)}
                    className="p-2 -ml-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                    <X size={24} />
                </button>
                <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        {t("mlt-title")}
                    </span>
                    <span className={`text-[10px] font-bold uppercase ${
                        currentQuestion.difficulty === "soft" ? "text-green-500 dark:text-green-400" : "text-orange-500 dark:text-orange-400"
                    }`}>
                        {t(`mlt-mode-${currentQuestion.difficulty}`)}
                    </span>
                </div>
                <button
                    onClick={onShowPlayers}
                    className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
                >
                  {t("edit-players")}
                </button>
             </div>

             <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={currentQuestion.id}
                    className="space-y-6"
                >
                    <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase">
                         {language === 'fr' ? 'Qui pourrait...' : 'Who would...'}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight max-w-sm mx-auto transition-colors">
                        {language === 'fr' ? currentQuestion.fr : currentQuestion.en}
                    </h2>
                </motion.div>
             </div>

             <div className="space-y-3 pt-8 pb-4">
                <button
                    onClick={() => setScreen("score")}
                    className="w-full py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 dark:shadow-none"
                >
                    <Target size={18} />
                    {t("mlt-vote-for")}
                </button>
                <button
                    onClick={nextQuestion}
                    className="w-full py-4 bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                    <SkipForward size={16} />
                    {t("mlt-skip")}
                </button>
             </div>
          </motion.div>
        )}

        {screen === "score" && (
            <motion.div
                key="score"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex-1 flex flex-col bg-white dark:bg-slate-900 transition-colors"
            >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
                    <button
                        onClick={() => setScreen("game")}
                        className="p-2 -ml-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">{t("mlt-vote-for")}</h2>
                    <div className="w-20"></div>
                </div>

                <div className="flex-1 flex flex-col px-5 overflow-y-auto">
                    <div className="mb-6">
                        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                            Select who won the vote to add a point.
                        </p>
                    </div>

                <div className="space-y-2 pb-8">
                    {players.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => addPoint(p.id)}
                            className="w-full flex items-center gap-3 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-slate-900 dark:hover:border-slate-500 hover:shadow-md transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:bg-slate-900 dark:group-hover:bg-slate-600 group-hover:text-white dark:group-hover:text-slate-100 transition-colors">
                                <User size={20} />
                            </div>
                            <div className="flex-1 text-left">
                                <div className="font-bold text-slate-900 dark:text-slate-100">{p.name}</div>
                                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                    {p.score || 0} {t("score-pts")}
                                </div>
                            </div>
                            <div className="text-slate-200 dark:text-slate-700 group-hover:text-slate-900 dark:group-hover:text-slate-400 transition-colors">
                                <Plus size={20} />
                            </div>
                        </button>
                    ))}
                </div>

                </div>
            </motion.div>
        )}
        </AnimatePresence>

      <QuitGameModal 
        isOpen={quitConfirm} 
        onClose={() => setQuitConfirm(false)} 
        onConfirm={onBack} 
      />
    </div>
  );
};
