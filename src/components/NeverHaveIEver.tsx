import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  Zap
} from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { NHIE_QUESTIONS, NHIEQuestion } from "../data/neverHaveIEverQuestions";
import { NotEnoughPlayers } from "./NotEnoughPlayers";
import { EditPlayersModal } from "./EditPlayersModal";

interface NeverHaveIEverProps {
  onBack: () => void;
}

type Screen = "config" | "game";

export const NeverHaveIEver: React.FC<NeverHaveIEverProps> = ({ onBack }) => {
  const { players: allPlayers, setPlayers, language, t } = useAppContext();
  const players = allPlayers.filter((p) => p.isActive !== false);
  
  const [screen, setScreen] = useState<Screen>("config");
  const [tab, setTab] = useState<"play" | "rules">("play");
  const [difficulty, setDifficulty] = useState<NHIEQuestion["difficulty"]>("soft");
  const [selectedCategories, setSelectedCategories] = useState<NHIEQuestion["category"][]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<NHIEQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quitConfirm, setQuitConfirm] = useState(false);
  const [editPlayersMode, setEditPlayersMode] = useState(false);

  const toggleCategory = (cat: NHIEQuestion["category"]) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(prev => prev.filter(c => c !== cat));
    } else {
      setSelectedCategories(prev => [...prev, cat]);
    }
  };

  const startGame = () => {
    if (selectedCategories.length === 0) return;
    
    const filtered = NHIE_QUESTIONS.filter(
      (q) => q.difficulty === difficulty && selectedCategories.includes(q.category)
    );
    
    const questions = filtered.length > 0 ? filtered : NHIE_QUESTIONS.filter((q) => selectedCategories.includes(q.category));
    setCurrentQuestions([...questions].sort(() => Math.random() - 0.5));
    
    setCurrentIndex(0);
    setScreen("game");
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % currentQuestions.length);
  };

  const currentQuestion = currentQuestions[currentIndex];

  const categories: NHIEQuestion["category"][] = ["habits", "adventure", "career", "social", "party", "hot"];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      {players.length < 2 && !editPlayersMode ? (
        <NotEnoughPlayers 
          minPlayers={2} 
          onBack={onBack} 
          onManagePlayers={() => setEditPlayersMode(true)} 
        />
      ) : (
        <AnimatePresence mode="wait">
          {screen === "config" && (
          <motion.div
            key="config"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col px-5 py-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 mb-8">
              <button
                onClick={onBack}
                className="p-2 -ml-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900">{t("nhie-title")}</h2>
              <div className="flex items-center gap-2">
                <select 
                  value={language} 
                  onChange={(e) => useAppContext().setLanguage(e.target.value as any)}
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
            
            {/* Similar structure to MostLikelyTo */}
            <div className="px-5 flex-1">
              <div className="flex gap-2 mb-6">
                <button 
                  onClick={() => setTab('play')}
                  className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl border-2 transition-all ${
                    tab === 'play' ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-100 text-slate-400'
                  }`}
                >
                  {t("start-game")}
                </button>
                <button 
                  onClick={() => setTab('rules')}
                  className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl border-2 transition-all ${
                    tab === 'rules' ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-100 text-slate-400'
                  }`}
                >
                  {t("rules")}
                </button>
              </div>

              {tab === 'play' ? (
                <div className="space-y-6">
                     <p className="text-xs text-slate-500 leading-relaxed">
                        {t("nhie-desc")}
                     </p>

                     <div>
                        <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">
                        {t("mlt-mode")}
                        </label>
                        <div className="grid grid-cols-2 gap-3 mb-6">
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
                                {t(`nhie-mode-${d}`)}
                            </span>
                            </button>
                        ))}
                        </div>
                     </div>
                     
                     {/* Category selection - same as MLT */}
                     <div>
                        <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">
                        {t("nhie-categories")}
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
                                {t(`nhie-cat-${cat}`)}
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
                    </div>
                </div>
              ) : (
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 animate-in fade-in slide-in-from-bottom-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">{t("nhie-rules-title")}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    {t("nhie-rules-desc")}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 px-5">
              <button
                onClick={startGame}
                disabled={selectedCategories.length === 0 || tab === 'rules'}
                className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${
                  selectedCategories.length > 0 && tab === 'play'
                  ? "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10" 
                  : "bg-slate-100 text-slate-300 cursor-not-allowed shadow-none"
                }`}
              >
                <Play size={18} fill="currentColor" />
                {t("nhie-start")}
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
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 mb-8">
                    <button
                        onClick={() => setQuitConfirm(true)}
                        className="p-2 -ml-2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {t("nhie-title")}
                    </span>
                    <div className="w-10"></div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={currentQuestion.id}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-slate-900 leading-tight tracking-tight max-w-sm mx-auto">
                            {language === 'fr' ? currentQuestion.fr : currentQuestion.en}
                        </h2>
                    </motion.div>
                </div>

                <div className="pt-8 pb-4">
                    <button
                        onClick={nextQuestion}
                        className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                    >
                        <SkipForward size={18} />
                        {t("nhie-next")}
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
      )}

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

      <EditPlayersModal 
        isOpen={editPlayersMode} 
        onClose={() => setEditPlayersMode(false)} 
      />
    </div>
  );
};
