import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  X,
  SkipForward,
  Check,
  Plus,
  User,
  Smile,
  Zap,
  Info,
  LogOut
} from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { NHIE_QUESTIONS, NHIEQuestion } from "../data/neverHaveIEverQuestions";
import { QuitGameModal } from "./QuitGameModal";
import { AllUsedModal } from "./AllUsedModal";
import { NotEnoughPlayers } from "./NotEnoughPlayers";

interface NeverHaveIEverProps {
  onBack: () => void;
  onShowPlayers: () => void;
}

type Screen = "rules" | "config" | "game";

export const NeverHaveIEver: React.FC<NeverHaveIEverProps> = ({ onBack, onShowPlayers }) => {
  const { players: allPlayers, setPlayers, language, t, usedItems, setUsedItems } = useAppContext();
  const players = allPlayers.filter((p) => p.isActive !== false);
  
  const [screen, setScreen] = useState<Screen>("rules");
  const [difficulties, setDifficulties] = useState<NHIEQuestion["difficulty"][]>(["soft"]);
  const [selectedCategories, setSelectedCategories] = useState<NHIEQuestion["category"][]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<NHIEQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quitConfirm, setQuitConfirm] = useState(false);
  const [allUsedOpen, setAllUsedOpen] = useState(false);

  const toggleDifficulty = (d: NHIEQuestion["difficulty"]) => {
    if (difficulties.includes(d)) {
        if (difficulties.length > 1) {
            setDifficulties(prev => prev.filter(x => x !== d));
        }
    } else {
        setDifficulties(prev => [...prev, d]);
    }
  };

  const toggleCategory = (cat: NHIEQuestion["category"]) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(prev => prev.filter(c => c !== cat));
    } else {
      setSelectedCategories(prev => [...prev, cat]);
    }
  };

  const startGame = (clearUsed = false) => {
    if (selectedCategories.length === 0 || difficulties.length === 0) return;
    
    let usedIds = clearUsed ? [] : usedItems.nhie;
    if (clearUsed) {
      setUsedItems(prev => ({ ...prev, nhie: [] }));
    }

    let filtered = NHIE_QUESTIONS.filter(
      (q) => difficulties.includes(q.difficulty) && selectedCategories.includes(q.category) && !usedIds.includes(q.id)
    );
    
    if (filtered.length === 0) {
      // Check if exhausted
      let totalMatching = NHIE_QUESTIONS.filter(
        (q) => difficulties.includes(q.difficulty) && selectedCategories.includes(q.category)
      );
      if (totalMatching.length > 0) {
        setAllUsedOpen(true);
        return;
      }

      const backup = NHIE_QUESTIONS.filter((q) => selectedCategories.includes(q.category) && !usedIds.includes(q.id));
      if (backup.length === 0) {
        setAllUsedOpen(true);
        return;
      }
      filtered = backup;
    }

    const questions = filtered;
    setCurrentQuestions([...questions].sort(() => Math.random() - 0.5));
    
    setCurrentIndex(0);
    setScreen("game");
  };

  const recordQuestionUsed = (id: string) => {
    setUsedItems(prev => {
      const list = prev.nhie || [];
      if (!list.includes(id)) {
        return { ...prev, nhie: [...list, id] };
      }
      return prev;
    });
  };

  // Record initially presented question
  useEffect(() => {
    if (screen === 'game' && currentQuestions[currentIndex]) {
       recordQuestionUsed(currentQuestions[currentIndex].id);
    }
  }, [currentIndex, currentQuestions, screen]);

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      startGame(false);
    }
  };

  const currentQuestion = currentQuestions[currentIndex];
  const categories: NHIEQuestion["category"][] = ["habits", "adventure", "career", "social", "party", "hot"];

  if (screen !== "rules" && players.length < 2) {
    // Standard validation
    return <NotEnoughPlayers minPlayers={2} onBack={onBack} onManagePlayers={onShowPlayers} />;
  }

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
        <React.Fragment>
          {screen === "rules" && (
            <div
              key="rules"
              className="flex-1 flex flex-col px-5 py-6 overflow-y-auto bg-white dark:bg-slate-900 transition-colors"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
                <button
                  onClick={onBack}
                  className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
                >
                  <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <div className="w-10 sm:w-12" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white transition-colors">{t("nhie-title")}</h2>
                <div className="w-10" />
              </div>

              <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/20 dark:shadow-none text-center mb-8 relative overflow-hidden transition-colors">
                  <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-500">
                    <Info size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{t("nhie-rules-title")}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed transition-colors">
                    {t("nhie-rules-desc")}
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
            </div>
          )}

          {screen === "config" && (
          <div
            key="config"
            className="flex-1 flex flex-col px-5 py-6 overflow-y-auto bg-white dark:bg-slate-900 transition-colors"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
              <button
                onClick={onBack}
                className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="w-10 sm:w-12" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white transition-colors">{t("nhie-title")}</h2>
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
                   <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 transition-colors">
                      {t("nhie-desc")}
                   </p>

                   <div>
                      <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-3 transition-colors">
                      {t("mlt-mode")}
                      </label>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                      {(["soft", "hard"] as const).map((d) => (
                          <button
                          key={d}
                          onClick={() => toggleDifficulty(d)}
                          className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                              difficulties.includes(d)
                              ? "bg-purple-500 border-purple-500 text-white shadow-lg shadow-purple-500/20"
                              : "bg-slate-50 dark:bg-slate-800 border-transparent text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:border-slate-200 dark:hover:border-slate-600"
                          }`}
                          >
                          {d === "soft" ? <Smile size={18} /> : <Zap size={18} />}
                          <span className="font-bold text-xs uppercase tracking-wide">
                              {t(`nhie-mode-${d}`)}
                          </span>
                          </button>
                      ))}
                      </div>
                   </div>
                   
                   <div>
                      <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-3 transition-colors">
                      {t("nhie-categories")}
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat) => (
                          <button
                          key={cat}
                          onClick={() => toggleCategory(cat)}
                          className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                              selectedCategories.includes(cat)
                              ? "bg-white dark:bg-slate-800 border-purple-500 dark:border-purple-400 shadow-sm"
                              : "bg-slate-50 dark:bg-slate-800/50 border-transparent text-slate-400 dark:text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                          }`}
                          >
                          <span className={`text-[11px] font-bold uppercase tracking-tight ${selectedCategories.includes(cat) ? "text-slate-900 dark:text-slate-100" : "text-slate-400 dark:text-slate-600"}`}>
                              {t(`nhie-cat-${cat}`)}
                          </span>
                          {selectedCategories.includes(cat) ? (
                              <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-white">
                              <Check size={10} strokeWidth={4} />
                              </div>
                          ) : (
                              <div className="w-4 h-4 rounded-full border-2 border-slate-200 dark:border-slate-700" />
                          )}
                          </button>
                      ))}
                      </div>
                  </div>
              </div>
            </div>

            <div className="mt-8 px-5 mb-4">
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
                  ? "bg-purple-500 text-white hover:bg-purple-600 shadow-purple-500/20 shadow-xl" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed shadow-none"
                }`}
              >
                <Play size={18} fill="currentColor" />
                {t("nhie-start")}
              </button>
            </div>
          </div>
        )}

        {screen === "game" && currentQuestion && (
            <div
                key="game"
                className="flex-1 flex flex-col px-5 py-8 bg-white dark:bg-slate-900 transition-colors"
            >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-4">
                    <button
                        onClick={() => setQuitConfirm(true)}
                        className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
                    >
                        <LogOut size={16} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <div className="w-10 sm:w-12" />
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest transition-colors">
                        {t("nhie-title")}
                    </span>
                    <button
                        onClick={onShowPlayers}
                        className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
                    >
                        {t("edit-players")}
                    </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                    <div key={currentQuestion.id}
                        className="space-y-8 w-full"
                    >
                        <div className="inline-block px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800/30 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-2 transition-colors">
                           {t(`nhie-cat-${currentQuestion.category}`)}
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight max-w-sm mx-auto min-h-[140px] flex items-center justify-center transition-colors">
                            {language === 'fr' ? currentQuestion.fr : currentQuestion.en}
                        </h2>
                    </div>
                </div>

                <div className="pt-8 pb-4">
                    <button
                        onClick={nextQuestion}
                        className="w-full py-4 bg-purple-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-purple-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-500/20"
                    >
                        {t("nhie-next")}
                        <SkipForward size={18} />
                    </button>
                </div>
            </div>
        )}
        </React.Fragment>

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
