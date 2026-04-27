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
  Trash2
} from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { MLT_QUESTIONS, MLTQuestion } from "../data/mostLikelyToQuestions";

interface MostLikelyToProps {
  onBack: () => void;
}

type Screen = "config" | "game" | "score";

export const MostLikelyTo: React.FC<MostLikelyToProps> = ({ onBack }) => {
  const { players: allPlayers, setPlayers, language, t } = useAppContext();
  const players = allPlayers.filter((p) => p.isActive !== false);
  
  const [screen, setScreen] = useState<Screen>("config");
  const [difficulty, setDifficulty] = useState<MLTQuestion["difficulty"]>("soft");
  const [selectedCategories, setSelectedCategories] = useState<MLTQuestion["category"][]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<MLTQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quitConfirm, setQuitConfirm] = useState(false);
  const [editPlayersMode, setEditPlayersMode] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const addNewPlayer = () => {
    if (!newPlayerName.trim()) {
      setError(t("err-empty"));
      return;
    }
    if (allPlayers.some(p => p.name.toLowerCase() === newPlayerName.trim().toLowerCase())) {
      setError(t("err-duplicate"));
      return;
    }
    
    const newPlayer = {
      id: Math.random().toString(36).substr(2, 9),
      name: newPlayerName.trim(),
      score: 0,
      isActive: true
    };
    
    setPlayers([...allPlayers, newPlayer]);
    setNewPlayerName("");
    setError(null);
  };

  const removePlayerPermanently = (id: string) => {
    setPlayers(allPlayers.filter(p => p.id !== id));
  };

  const toggleCategory = (cat: MLTQuestion["category"]) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(prev => prev.filter(c => c !== cat));
    } else {
      setSelectedCategories(prev => [...prev, cat]);
    }
  };

  const startGame = () => {
    if (selectedCategories.length === 0) return;
    
    const filtered = MLT_QUESTIONS.filter(
      (q) => q.difficulty === difficulty && selectedCategories.includes(q.category)
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

  if (players.length < 2) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 mb-6">
            <X size={32} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">{t("err-not-enough-2")}</h2>
        <button 
          onClick={onBack}
          className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest"
        >
          {t("back")}
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      <AnimatePresence mode="wait">
        {screen === "config" && (
          <motion.div
            key="config"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col px-5 py-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={onBack}
                className="self-start text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
              >
                {t("back")}
              </button>
              <button
                onClick={() => setEditPlayersMode(true)}
                className="text-[10px] font-bold text-[#ee6c4d] bg-[#ee6c4d]/10 hover:bg-[#ee6c4d]/20 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
              >
                {t("edit-players")}
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                {t("mlt-title")}
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t("mlt-desc")}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">
                  Difficulty
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(["soft", "hard"] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all ${
                        difficulty === d
                          ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                          : "bg-slate-50 border-transparent text-slate-500 hover:bg-white hover:border-slate-200"
                      }`}
                    >
                      {d === "soft" ? <Smile size={18} /> : <Zap size={18} />}
                      <span className="font-bold text-xs uppercase tracking-wide">
                        {t(`mlt-mode-${d}`)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">
                  {t("mlt-mode")}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => toggleCategory(cat)}
                      className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all ${
                        selectedCategories.includes(cat)
                          ? "bg-white border-slate-900 shadow-sm"
                          : "bg-slate-50 border-transparent text-slate-400 hover:bg-white hover:border-slate-200"
                      }`}
                    >
                      <span className={`text-[11px] font-bold uppercase tracking-tight ${selectedCategories.includes(cat) ? "text-slate-900" : "text-slate-400"}`}>
                        {t(`mlt-cat-${cat}`)}
                      </span>
                      {selectedCategories.includes(cat) ? (
                        <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center text-white">
                          <Check size={10} strokeWidth={4} />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                      )}
                    </button>
                  ))}
                </div>
                {selectedCategories.length === 0 && (
                  <p className="text-[10px] text-red-500 mt-2 font-medium">
                    {t("mlt-no-category-selected")}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={startGame}
                disabled={selectedCategories.length === 0}
                className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${
                  selectedCategories.length > 0 
                  ? "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10" 
                  : "bg-slate-100 text-slate-300 cursor-not-allowed shadow-none"
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
            className="flex-1 flex flex-col px-5 py-8"
          >
             <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                    <button
                        onClick={() => setQuitConfirm(true)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200"
                    >
                        <X size={20} />
                    </button>
                    <button
                        onClick={() => setEditPlayersMode(true)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ee6c4d]/10 text-[#ee6c4d] hover:bg-[#ee6c4d]/20 transition-colors"
                    >
                        <User size={18} />
                    </button>
                </div>
                <div className="flex flex-col items-end text-right">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t(`mlt-cat-${currentQuestion.category}`)}
                    </span>
                    <span className={`text-[10px] font-bold uppercase ${
                        currentQuestion.difficulty === "soft" ? "text-green-500" : "text-orange-500"
                    }`}>
                        {t(`mlt-mode-${currentQuestion.difficulty}`)}
                    </span>
                </div>
             </div>

             <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={currentQuestion.id}
                    className="space-y-6"
                >
                    <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                         {language === 'fr' ? 'Qui pourrait...' : 'Who would...'}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 leading-tight tracking-tight max-w-sm mx-auto">
                        {language === 'fr' ? currentQuestion.fr : currentQuestion.en}
                    </h2>
                </motion.div>
             </div>

             <div className="space-y-3 pt-8 pb-4">
                <button
                    onClick={() => setScreen("score")}
                    className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                    <Target size={18} />
                    {t("mlt-vote-for")}
                </button>
                <button
                    onClick={nextQuestion}
                    className="w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
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
                className="flex-1 flex flex-col px-5 py-8"
            >
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">
                        {t("mlt-vote-for")}
                    </h2>
                    <p className="text-xs text-slate-500">
                        Select who won the vote to add a point.
                    </p>
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                    {players.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => addPoint(p.id)}
                            className="w-full flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:border-slate-900 hover:shadow-md transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                <User size={20} />
                            </div>
                            <div className="flex-1 text-left">
                                <div className="font-bold text-slate-900">{p.name}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    {p.score || 0} {t("score-pts")}
                                </div>
                            </div>
                            <div className="text-slate-200 group-hover:text-slate-900">
                                <Plus size={20} />
                            </div>
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setScreen("game")}
                    className="mt-6 w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
                >
                    {t("back")}
                </button>
            </motion.div>
        )}
      </AnimatePresence>

      {quitConfirm && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-8 text-white"
          onClick={() => setQuitConfirm(false)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-xs p-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xl font-bold text-slate-900 mb-2">
              {t("confirm-quit")}
            </div>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
              {t("confirm-quit-desc")}
            </p>
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => {
                   setQuitConfirm(false);
                   onBack();
                }}
                className="py-4 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-500/20"
              >
                {t("exit-to-home")}
              </button>
              <button
                onClick={() => setQuitConfirm(false)}
                className="py-4 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200"
              >
                {t("continue-playing")}
              </button>
            </div>
          </div>
        </div>
      )}

      {editPlayersMode && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setEditPlayersMode(false)}
        >
          <div 
            className="bg-white rounded-3xl w-full max-w-sm flex flex-col max-h-[80vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 tracking-tight">
                  {t("edit-players")}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {allPlayers.length} {t("players-label")}
                </span>
              </div>
              <button
                onClick={() => setEditPlayersMode(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 transition-colors"
              >
                <Check size={20} className="text-green-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              <div className="mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newPlayerName}
                    onChange={(e) => {
                        setNewPlayerName(e.target.value);
                        setError(null);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && addNewPlayer()}
                    placeholder={t("player-name-placeholder")}
                    className="flex-1 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-slate-300 transition-all font-medium"
                  />
                  <button
                    onClick={addNewPlayer}
                    className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-colors shrink-0"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-widest px-1">
                    {error}
                  </p>
                )}
              </div>

              {allPlayers.map((p) => (
                <div key={p.id} className="flex gap-2 group">
                    <button
                        onClick={() => togglePlayerActive(p.id)}
                        className={`flex-1 flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                            p.isActive !== false
                            ? "bg-white border-slate-900 shadow-sm"
                            : "bg-slate-50 border-transparent text-slate-400 opacity-60"
                        }`}
                    >
                        <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                            p.isActive !== false
                                ? "bg-slate-900 text-white"
                                : "bg-slate-200 text-slate-400"
                            }`}
                        >
                            {p.name.slice(0, 2).toUpperCase()}
                        </div>
                        <span className="flex-1 text-left font-bold text-slate-700">
                            {p.name}
                        </span>
                        <div
                            className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                            p.isActive !== false
                                ? "bg-green-500 text-white"
                                : "bg-slate-200 text-slate-400"
                            }`}
                        >
                            {p.isActive !== false ? <Check size={14} strokeWidth={4} /> : <X size={14} />}
                        </div>
                    </button>
                    <button
                        onClick={() => removePlayerPermanently(p.id)}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition-all opacity-0 group-hover:opacity-100 sm:opacity-100"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
