import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  Trophy, 
  Play, 
  Check,
  Zap,
  Smile,
  LogOut,
  Target
} from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { TRIVIA_QUESTIONS, TriviaQuestion } from "../data/triviaQuestions";
import { QuitGameModal } from "./QuitGameModal";
import { AllUsedModal } from "./AllUsedModal";

interface TriviaProps {
  onBack: () => void;
  onShowPlayers: () => void;
}

type Screen = "rules" | "config" | "select-asker" | "game" | "score";
type GameStyle = "points" | "plain";

export const Trivia: React.FC<TriviaProps> = ({ onBack, onShowPlayers }) => {
  const { players: allPlayers, setPlayers, language, t, usedItems, setUsedItems } = useAppContext();
  const players = allPlayers.filter((p) => p.isActive !== false);
  
  const [screen, setScreen] = useState<Screen>("rules");
  const [difficulties, setDifficulties] = useState<TriviaQuestion["difficulty"][]>(["soft"]);
  const [selectedCategories, setSelectedCategories] = useState<TriviaQuestion["category"][]>(["geo", "science", "history", "pop"]);
  const [gameStyle, setGameStyle] = useState<GameStyle>("points");
  
  const [currentQuestions, setCurrentQuestions] = useState<TriviaQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [askerId, setAskerId] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const [quitConfirm, setQuitConfirm] = useState(false);
  const [allUsedOpen, setAllUsedOpen] = useState(false);

  const categories: TriviaQuestion["category"][] = ["geo", "science", "history", "pop"];

  const toggleDifficulty = (d: TriviaQuestion["difficulty"]) => {
    if (difficulties.includes(d)) {
        if (difficulties.length > 1) {
            setDifficulties(prev => prev.filter(x => x !== d));
        }
    } else {
        setDifficulties(prev => [...prev, d]);
    }
  };

  const toggleCategory = (cat: TriviaQuestion["category"]) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(prev => prev.filter(c => c !== cat));
    } else {
      setSelectedCategories(prev => [...prev, cat]);
    }
  };

  const handleModeStart = () => {
    if (players.length < 2 && gameStyle === "points") {
        onShowPlayers();
        return;
    }
    if (selectedCategories.length === 0 || difficulties.length === 0) return;

    if (gameStyle === "points") {
        setScreen("select-asker");
    } else {
        startGame();
    }
  };

  const startGame = (clearUsed = false, overrideAsker?: string | null) => {
    let usedIds = clearUsed ? [] : (usedItems.trivia || []);
    if (clearUsed) {
      setUsedItems({ ...usedItems, trivia: [] });
    }

    let filtered = TRIVIA_QUESTIONS.filter(
      (q) => difficulties.includes(q.difficulty) && selectedCategories.includes(q.category) && !usedIds.includes(q.id)
    );
    
    if (filtered.length === 0) {
      let totalMatching = TRIVIA_QUESTIONS.filter(
        (q) => difficulties.includes(q.difficulty) && selectedCategories.includes(q.category)
      );
      if (totalMatching.length > 0) {
        setAllUsedOpen(true);
        return;
      }
      const backup = TRIVIA_QUESTIONS.filter((q) => selectedCategories.includes(q.category) && !usedIds.includes(q.id));
      if (backup.length === 0) {
        setAllUsedOpen(true);
        return;
      }
      filtered = backup;
    }
    
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setCurrentQuestions(shuffled);
    setCurrentIndex(0);
    if (overrideAsker !== undefined) {
      setAskerId(overrideAsker);
    }
    setScreen("game");
  };

  const recordQuestionUsed = (id: string) => {
    const list = usedItems.trivia || [];
    if (!list.includes(id)) {
      setUsedItems({ ...usedItems, trivia: [...list, id] });
    }
  };

  useEffect(() => {
    if (screen === 'game' && currentQuestions[currentIndex]) {
       recordQuestionUsed(currentQuestions[currentIndex].id);
    }
  }, [currentIndex, currentQuestions, screen]);

  const nextQuestion = (winnerId?: string) => {
    setShowHint(false);
    setShowAnswer(false);
    if (gameStyle === "points" && winnerId) {
        setPlayers(allPlayers.map(p => 
            p.id === winnerId ? { ...p, score: (p.score || 0) + 1 } : p
        ));
        if (askerId !== "everyone") {
            setAskerId(winnerId);
        }
    }

    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      startGame(false, askerId === "everyone" ? "everyone" : (winnerId || askerId));
    }
  };

  const currentQuestion = currentQuestions[currentIndex];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          {screen === "rules" && (
            <motion.div
              key="rules"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col p-6 overflow-y-auto bg-slate-900"
            >
              <button
                onClick={onBack}
                className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full mt-8">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-6 border border-emerald-500/20">
                  <Target className="text-emerald-400" size={40} />
                </div>
                
                <h1 className="text-3xl font-black text-white mb-4 tracking-tight text-center">
                  {t("trivia-title")}
                </h1>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                    <p className="text-sm font-medium text-slate-300 leading-relaxed text-center">
                      {t("trivia-rules-desc")}
                    </p>
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <button
                    onClick={() => setScreen("config")}
                    className="w-full min-h-[60px] bg-emerald-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {t("next")}
                    <ChevronLeft className="rotate-180" size={20} />
                  </button>
                </div>
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
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-6">
              <button
                onClick={onBack}
                className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="w-10 sm:w-12" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">{t("trivia-title")}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={onShowPlayers}
                  className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
                >
                  {t("edit-players")}
                </button>
              </div>
            </div>
            
            <div className="px-5 flex-1 space-y-6">
                <div>
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-3">
                    {t("trivia-game-mode")}
                  </label>
                  <div className="flex flex-col gap-2">
                    <button
                        onClick={() => setGameStyle("points")}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                            gameStyle === "points" 
                            ? "bg-emerald-500 border-emerald-500 text-white shadow-lg" 
                            : "bg-slate-50 dark:bg-slate-800 border-transparent text-slate-500 dark:text-slate-400"
                        }`}
                    >
                        <Trophy size={18} />
                        <span className="font-bold text-xs uppercase tracking-wide">{t('trivia-mode-points')}</span>
                    </button>
                    <button
                        onClick={() => setGameStyle("plain")}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                            gameStyle === "plain" 
                            ? "bg-blue-500 border-blue-500 text-white shadow-lg" 
                            : "bg-slate-50 dark:bg-slate-800 border-transparent text-slate-500 dark:text-slate-400"
                        }`}
                    >
                        <Play size={18} />
                        <span className="font-bold text-xs uppercase tracking-wide">{t('trivia-mode-plain')}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-3">
                    {t("trivia-difficulty")}
                  </label>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                    {(["soft", "hard"] as const).map((d) => (
                      <button
                        key={d}
                        onClick={() => toggleDifficulty(d)}
                        className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                          difficulties.includes(d)
                            ? "bg-indigo-500 border-indigo-500 text-white shadow-lg"
                            : "bg-slate-50 dark:bg-slate-800 border-transparent text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {d === "soft" ? <Smile size={18} /> : <Zap size={18} />}
                        <span className="font-bold text-xs uppercase tracking-wide">
                          {t(`trivia-diff-${d}`)}
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
                            : "bg-slate-50 dark:bg-slate-800/50 border-transparent text-slate-400 dark:text-slate-600"
                        }`}
                      >
                        <span className={`text-[11px] font-bold uppercase tracking-tight ${selectedCategories.includes(cat) ? "text-slate-900 dark:text-slate-100" : "text-slate-400 dark:text-slate-600"}`}>
                          {t(`trivia-cat-${cat}`)}
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
                      {t("trivia-no-category")}
                    </p>
                  )}
                </div>
            </div>

            <div className="mt-8 px-5 pb-5">
              <button
                onClick={handleModeStart}
                disabled={selectedCategories.length === 0}
                className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${
                  selectedCategories.length > 0
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                }`}
              >
                <Play size={18} fill="currentColor" />
                {t("start-game")}
              </button>
            </div>
          </motion.div>
          )}

          {screen === "select-asker" && (
          <motion.div
            key="select-asker"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col p-6 overflow-y-auto bg-slate-900"
          >
            <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
                <h1 className="text-2xl font-black text-white mb-6 text-center">
                  {t("trivia-who-asks")}
                </h1>
                
                <div className="flex flex-col gap-3 w-full">
                    <button
                        onClick={() => startGame(false, "everyone")}
                        className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-colors"
                    >
                        {t("trivia-everyone")}
                    </button>
                    {players.map(p => (
                        <button
                            key={p.id}
                            onClick={() => startGame(false, p.id)}
                            className="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-700 transition-colors"
                        >
                            {p.name}
                        </button>
                    ))}
                </div>
            </div>
          </motion.div>
          )}

          {screen === "game" && currentQuestion && (
          <motion.div
            key={`game-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col items-center justify-center p-6 bg-emerald-50 text-emerald-900 dark:bg-slate-900 dark:text-emerald-50 transition-colors"
          >
             <div className="w-full max-w-sm mx-auto flex-1 flex flex-col">
                <div className="flex items-center justify-between mt-4 mb-8">
                  <div className="flex gap-2">
                     <span className="px-3 py-1 bg-white/50 dark:bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider">
                         {t(`trivia-cat-${currentQuestion.category}`)}
                     </span>
                     <span className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                         {t(`trivia-diff-${currentQuestion.difficulty}`)}
                     </span>
                  </div>
                  <button
                    onClick={() => setScreen("score")}
                    className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-sm text-slate-400 hover:text-emerald-500 transition-colors"
                  >
                    <Trophy size={18} />
                  </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    {gameStyle === "points" && askerId && askerId !== "everyone" && (
                        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                            🎤 {players.find(p => p.id === askerId)?.name || "?"} {t('trivia-is-asking')}
                        </div>
                    )}
                    <h2 className="text-2xl sm:text-3xl font-black leading-tight mb-8">
                       {currentQuestion[language.toLowerCase() as "fr" | "en" | "es" | "fr-ca"] || currentQuestion.en}
                    </h2>

                    <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
                        {!showHint ? (
                            <button
                                onClick={() => setShowHint(true)}
                                className="w-full min-h-[52px] px-4 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex justify-center items-center"
                            >
                                💡 {t("trivia-hint")}
                            </button>
                        ) : (
                            <div className="w-full min-h-[52px] px-4 py-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl text-sm text-slate-700 dark:text-slate-300 font-medium flex justify-center items-center text-center">
                                💡 {(currentQuestion as any)[`hint_${language.toLowerCase().replace('-', '')}`] || (currentQuestion as any).hint_en}
                            </div>
                        )}
                        
                        {!showAnswer ? (
                            <button
                                onClick={() => setShowAnswer(true)}
                                className="w-full min-h-[52px] px-4 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors flex justify-center items-center"
                            >
                                🎯 {t("trivia-answer")}
                            </button>
                        ) : (
                            <div className="w-full min-h-[52px] px-4 py-3 bg-orange-500 text-white rounded-xl text-lg font-black tracking-wide shadow-inner flex justify-center items-center text-center">
                                {(currentQuestion as any)[`answer_${language.toLowerCase().replace('-', '')}`] || (currentQuestion as any).answer_en}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-auto space-y-4 pt-8">
                    {gameStyle === "plain" ? (
                        <button
                            onClick={() => nextQuestion()}
                            className="w-full py-4 bg-emerald-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center gap-2"
                        >
                            {t("trivia-next")}
                            <ChevronLeft className="rotate-180" size={18} />
                        </button>
                    ) : (
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-xl space-y-3">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-center text-slate-500 dark:text-slate-400">
                                {t("trivia-who-guessed")}
                            </h3>
                            <div className="grid grid-cols-2 gap-2">
                                {players.filter(p => p.id !== askerId).map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => nextQuestion(p.id)}
                                        className="py-3 px-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-slate-700 dark:text-slate-200 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800"
                                    >
                                        {p.name}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => nextQuestion()}
                                className="w-full py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                            >
                                {t("trivia-no-one")}
                            </button>
                        </div>
                    )}
                </div>

             </div>
          </motion.div>
          )}

          {screen === "score" && (
          <motion.div
            key="score"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col bg-slate-900"
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
              <button
                onClick={() => setScreen("game")}
                className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="w-10 sm:w-12" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-white">{t("scoreboard")}</h2>
              <div className="w-10"></div>
            </div>
            
            <div className="px-5 py-6 flex-1 overflow-y-auto">
              <div className="space-y-3">
                {[...players]
                  .sort((a, b) => (b.score || 0) - (a.score || 0))
                  .map((player, index) => (
                    <div 
                      key={player.id}
                      className="flex items-center justify-between p-4 bg-slate-800 rounded-2xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          index === 0 ? "bg-yellow-500/20 text-yellow-500" :
                          index === 1 ? "bg-slate-400/20 text-slate-400" :
                          index === 2 ? "bg-amber-700/20 text-amber-500" :
                          "bg-slate-700 text-slate-500"
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-bold text-white uppercase tracking-wide">{player.name}</span>
                      </div>
                      <span className="text-xl font-black text-white">{player.score || 0}</span>
                    </div>
                ))}
              </div>
            </div>
          </motion.div>
          )}
        </AnimatePresence>

        {/* Global sticky quit button */}
        {(screen === "game" || screen === "score" || screen === "select-asker") && (
          <button 
            onClick={() => setQuitConfirm(true)}
            className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
          >
            <LogOut size={16} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
        )}

      <QuitGameModal 
        isOpen={quitConfirm} 
        onClose={() => setQuitConfirm(false)} 
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
