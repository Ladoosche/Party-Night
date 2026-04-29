import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAppContext } from "../context/AppContext";
import { wordGroups } from "../data/words";
import { QuitGameModal } from "./QuitGameModal";
import { AllUsedModal } from "./AllUsedModal";

import {
  ChevronLeft,
  ChevronRight,
  Info,
  Settings,
  Play,
  Check,
  X,
  ShieldAlert,
  User,
  MessageSquare,
  Plus,
  Trash2,
  Eye,
  LogOut
} from "lucide-react";

interface UndercoverProps {
  onBack: () => void;
  onShowPlayers: () => void;
}

type Screen =
  | "intro"
  | "config"
  | "pass"
  | "reveal"
  | "game"
  | "recheck"
  | "undercover-win-guess"
  | "end";
type Role = "civilian" | "undercover" | "mrwhite";

interface GamePlayer {
  id: string;
  name: string;
  role: Role;
  word: string;
  recheckCount: number;
  isEliminated: boolean;
  eliminatedAtRound?: number;
}

export const Undercover: React.FC<UndercoverProps> = ({ onBack, onShowPlayers }) => {
  const { players: allPlayers, setPlayers, language, t, usedItems, setUsedItems } = useAppContext();
  const players = allPlayers.filter((p) => p.isActive !== false);

  const [screen, setScreen] = useState<Screen>("intro");
  const [undercovers, setUndercovers] = useState(1);
  const [mrWhiteOn, setMrWhiteOn] = useState(false);
  const [wordsHidden, setWordsHidden] = useState(false);
  const [gameMasterId, setGameMasterId] = useState<string | null>(null);
  const [isExternalHost, setIsExternalHost] = useState(false);
  const [customWord1, setCustomWord1] = useState("");
  const [customWord2, setCustomWord2] = useState("");
  const [gamePlayers, setGamePlayers] = useState<GamePlayer[]>([]);
  const [passOrder, setPassOrder] = useState<number[]>([]);
  const [passIndex, setPassIndex] = useState(0);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState<Role | "civilians" | null>(null);
  const [recheckPlayerId, setRecheckPlayerId] = useState<string | null>(null);
  const [recheckPlayerReveal, setRecheckPlayerReveal] = useState<boolean>(false);
  const [showWord, setShowWord] = useState<boolean>(false);
  const [mrWhiteGuessingId, setMrWhiteGuessingId] = useState<string | null>(
    null,
  );
  const [undercoverBonusId, setUndercoverBonusId] = useState<string | null>(null);
  const [quitConfirm, setQuitConfirm] = useState(false);
  const [undercoverFinalGuessSuccess, setUndercoverFinalGuessSuccess] = useState<boolean | null>(null);
  const [allUsedOpen, setAllUsedOpen] = useState(false);

  useEffect(() => {
    if (players.length > 5) setUndercovers(2);
    if (players.length > 9) setUndercovers(3);
    
    // No MJ if few players
    if (players.length <= 3) {
      setWordsHidden(true);
      setGameMasterId(null);
    }
  }, [players.length]);

  useEffect(() => {
    if (screen === "config" && !customWord1 && !customWord2) {
      suggestWords();
    }
  }, [screen, language, wordsHidden]);

  const suggestWords = (clearUsed = false) => {
    const wordLang = language.toUpperCase() as "EN" | "FR";
    const list = wordGroups[wordLang] || wordGroups["EN"];
    
    let currentUsed = clearUsed ? [] : usedItems.undercoverWords;
    if (clearUsed) {
      setUsedItems({ ...usedItems, undercoverWords: [] });
    }

    const availableIndices = list.map((_, i) => i).filter(i => !currentUsed.includes(i));
    
    if (availableIndices.length === 0) {
      setAllUsedOpen(true);
      return;
    }

    const selectedIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const group = list[selectedIndex];
    
    // Record it as used immediately upon suggestion
    setUsedItems({ ...usedItems, undercoverWords: [...currentUsed, selectedIndex] });

    const words = [...group];

    // Pick two random distinct words from the group
    const idx1 = Math.floor(Math.random() * words.length);
    const word1 = words.splice(idx1, 1)[0];
    const idx2 = Math.floor(Math.random() * words.length);
    const word2 = words[idx2];

    setCustomWord1(word1);
    setCustomWord2(word2);
  };

  const activePlayersToAssign = players.filter(p => !p.isActive === false && (wordsHidden || p.id !== gameMasterId));
  const minRequiredCount = 3;
  const isStartDisabled = (!wordsHidden && !gameMasterId) || activePlayersToAssign.length < minRequiredCount;

  const updateScores = (winningRole: Role | "civilians", mrWhiteGuessed = false, undercoverGuessed = false) => {
    setPlayers(prev => prev.map(p => {
      let extra = 0;
      const gp = gamePlayers.find(g => g.id === p.id);
      
      if (gp) {
        if (winningRole === "civilians" && gp.role === "civilian") {
          extra = 1;
        } else if (winningRole === "undercover") {
          if (gp.role === "undercover") {
            extra = undercoverGuessed ? 2 : 1;
          }
          if (gp.role === "mrwhite" && !gp.isEliminated) {
            extra = 2; // Mr White survives
          }
        } else if (winningRole === "mrwhite" && mrWhiteGuessed && gp.role === "mrwhite") {
          extra = 3;
        }
      }
      return { ...p, score: (p.score || 0) + extra };
    }));
  };

  const startGame = () => {
    if (isStartDisabled) return;

    let w1 = customWord1,
      w2 = customWord2;
    if (wordsHidden || !w1 || !w2) {
      const wordLang = language.toUpperCase() as "EN" | "FR";
      const list = wordGroups[wordLang] || wordGroups["EN"];
      const group = list[Math.floor(Math.random() * list.length)];
      const words = [...group];

      const idx1 = Math.floor(Math.random() * words.length);
      w1 = words.splice(idx1, 1)[0];
      const idx2 = Math.floor(Math.random() * words.length);
      w2 = words[idx2];
    }

    let rolesPool: Role[] = [];
    for (let i = 0; i < undercovers; i++) rolesPool.push("undercover");
    if (mrWhiteOn) rolesPool.push("mrwhite");
    while (rolesPool.length < activePlayersToAssign.length) rolesPool.push("civilian");
    rolesPool.sort(() => Math.random() - 0.5);

    const gp: GamePlayer[] = activePlayersToAssign.map((p, i) => ({
      ...p,
      role: rolesPool[i],
      word:
        rolesPool[i] === "undercover"
          ? w2
          : rolesPool[i] === "civilian"
            ? w1
            : "",
      recheckCount: 0,
      isEliminated: false,
    }));

    setGamePlayers(gp);

    const civilians = gp
      .map((_, i) => i)
      .filter((i) => gp[i].role === "civilian");
    const startIdx = civilians[Math.floor(Math.random() * civilians.length)];
    const mwIdx = gp.findIndex((p) => p.role === "mrwhite");

    let orderExcludeMW: number[] = [];
    for (let i = 0; i < gp.length; i++) {
      const idx = (startIdx + i) % gp.length;
      if (idx !== mwIdx) orderExcludeMW.push(idx);
    }

    let finalOrder = [...orderExcludeMW];
    if (mwIdx !== -1) {
      const minPos = Math.max(1, Math.floor(gp.length * 0.6));
      const randomPos =
        minPos + Math.floor(Math.random() * (gp.length - minPos));
      finalOrder.splice(randomPos, 0, mwIdx);
    }

    setPassOrder(finalOrder);
    setPassIndex(0);
    setRound(1);
    setScreen("pass");
  };

  const nextReveal = () => {
    if (passIndex < passOrder.length - 1) {
      setPassIndex(passIndex + 1);
      setScreen("pass");
    } else {
      setScreen("game");
    }
  };

  const checkWinner = (currentPlayers: GamePlayer[]) => {
    const active = currentPlayers.filter((p) => !p.isEliminated);
    const U = active.filter((p) => p.role === "undercover");
    const C = active.filter((p) => p.role === "civilian");
    const MW = active.filter((p) => p.role === "mrwhite");

    if (U.length === 0 && MW.length === 0) {
        setWinner("civilians");
        updateScores("civilians");
        setScreen("end");
    } else if (C.length === 0 || (U.length === 1 && C.length === 1 && MW.length === 0)) {
        setScreen("undercover-win-guess");
    }
  };

  const eliminate = (id: string) => {
    const player = gamePlayers.find((p) => p.id === id);
    if (player?.role === "mrwhite") {
      setMrWhiteGuessingId(id);
      return;
    }
    
    if (player?.role === "undercover") {
      setUndercoverBonusId(id);
      return;
    }

    const newPlayers = gamePlayers.map((p) =>
      p.id === id ? { ...p, isEliminated: true, eliminatedAtRound: round } : p,
    );
    setGamePlayers(newPlayers);
    setRound(round + 1);
    checkWinner(newPlayers);
  };

  const undercoverBonusAction = (correct: boolean) => {
    const id = undercoverBonusId!;
    if (correct) {
      setPlayers(allPlayers.map(p => p.id === id ? { ...p, score: (p.score || 0) + 1 } : p));
    }
    const newPlayers = gamePlayers.map((p) =>
      p.id === id ? { ...p, isEliminated: true, eliminatedAtRound: round } : p,
    );
    setGamePlayers(newPlayers);
    setRound(round + 1);
    setUndercoverBonusId(null);
    checkWinner(newPlayers);
  };

  const mrWhiteAction = (correct: boolean) => {
    const id = mrWhiteGuessingId!;
    if (correct) {
      setWinner("mrwhite");
      updateScores("mrwhite", true);
      setScreen("end");
    } else {
      const newPlayers = gamePlayers.map((p) =>
        p.id === id
          ? { ...p, isEliminated: true, eliminatedAtRound: round }
          : p,
      );
      setGamePlayers(newPlayers);
      setRound(round + 1);
      checkWinner(newPlayers);
    }
    setMrWhiteGuessingId(null);
  };

  const handleUndercoverFinalGuess = (correct: boolean) => {
    setUndercoverFinalGuessSuccess(correct);
    setWinner("undercover");
    updateScores("undercover", false, correct);
    setScreen("end");
  };

  const handleRecheck = (id: string) => {
    setGamePlayers((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, recheckCount: p.recheckCount + 1 } : p,
      ),
    );
    setRecheckPlayerId(id);
  };

  const resetGame = () => {
    setWinner(null);
    setGamePlayers([]);
    setPassOrder([]);
    setPassIndex(0);
    setRound(1);
    setScreen("config");
  };

  const handleQuit = () => {
    if (screen === "intro" || screen === "config") {
      onBack();
    } else {
      setQuitConfirm(true);
    }
  };

  const togglePlayerActive = (id: string) => {
    setPlayers(allPlayers.map(p => p.id === id ? { ...p, isActive: !p.isActive } : p));
  };

  if (winner) {
    return (
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
            <button onClick={resetGame} className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group">
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="w-10 sm:w-12" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">{t("roles-recap")}</h2>
            <button 
              onClick={onShowPlayers}
              className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
            >
              {t("edit-players")}
            </button>
        </div>

        <div className="flex-1 flex flex-col px-5 overflow-y-auto">
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-2xl bg-slate-900 dark:bg-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-none flex items-center justify-center mx-auto mb-6 border-4 border-white/10 dark:border-slate-700/50 text-4xl">
              🏆
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-tight mb-2">
              {winner === "civilians"
                ? t("civilians-win")
                : winner === "mrwhite"
                  ? t("mrwhite-wins")
                  : t("undercover-wins")}
            </h2>
            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500">
              {t("end-title")}
            </div>
          </div>

        <div className="space-y-3 mb-8">
          <div className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-2 px-1">
            {t("roles-recap")}
          </div>
          {gamePlayers
            .sort(
              (a, b) =>
                (a.eliminatedAtRound || 99) - (b.eliminatedAtRound || 99),
            )
            .map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm"
              >
                <div className="flex flex-col gap-1 items-start">
                  <span
                    className={`text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase ${p.role === "civilian" ? "bg-[#e0f4f8] dark:bg-[#0077b6]/20 text-[#0077b6] dark:text-[#00b4d8]" : p.role === "undercover" ? "bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"}`}
                  >
                    {t("role-" + p.role)}
                  </span>
                  <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
                    {p.word || "—"}
                  </span>
                </div>
                <span className="flex-1 font-bold text-sm text-slate-700 dark:text-slate-300">
                  {p.name}
                </span>
                <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-[#0077b6] dark:text-[#00b4d8]">
                        {allPlayers.find(ap => ap.id === p.id)?.score || 0} {t("score-pts")}
                    </span>
                    { (winner === p.role || (winner === 'civilians' && p.role === 'civilian')) && (
                        <span className="text-[8px] font-bold text-green-500 dark:text-green-400 uppercase tracking-tighter">
                            {t("winner-pts").replace("{0}", 
                                p.role === 'mrwhite' ? '3' : 
                                (p.role === 'undercover' && undercoverFinalGuessSuccess ? '2' : '1')
                            )}
                        </span>
                    )}
                    { p.role === 'mrwhite' && !p.isEliminated && winner === 'undercover' && (
                        <span className="text-[8px] font-bold text-[#0077b6] dark:text-[#00b4d8] uppercase tracking-tighter">
                            {t("winner-pts").replace("{0}", "2")} (Survival)
                        </span>
                    )}
                </div>
              </div>
            ))}
            
            {!wordsHidden && gameMasterId && (
                <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 border-dashed rounded-xl opacity-80">
                    <span className="text-[9px] font-bold tracking-widest px-2 py-0.5 rounded uppercase bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                      {t("is-mj")}
                    </span>
                    <span className="flex-1 font-bold text-sm text-slate-700 dark:text-slate-300">
                      {isExternalHost ? t("external-host") : allPlayers.find(p => p.id === gameMasterId)?.name}
                    </span>
                    <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase italic">
                      {t("mj-no-points")}
                    </span>
                </div>
            )}
        </div>

        <div className="mt-auto pt-8 mb-4 space-y-3">
          <button
            onClick={resetGame}
            className="w-full py-4 bg-[#0077b6] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#023e8a] transition-all shadow-lg shadow-[#0077b6]/20"
          >
            {t("play-again")}
          </button>
          <button
            onClick={onBack}
            className="w-full py-3 bg-slate-900 dark:bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-700 transition-all"
          >
            {t("exit-to-home")}
          </button>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      {screen === "undercover-win-guess" && (
        <div 
          key="undercover-win-guess" 
          className="flex-1 flex flex-col overflow-y-auto px-5 py-8 text-center bg-red-50/30 dark:bg-red-950/20"
          onClick={() => {}}
        >
          <div 
            className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-3xl flex items-center justify-center text-red-500 dark:text-red-400 mx-auto mb-6 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <User size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{t("undercover-win-guess-title")}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-xs mx-auto">
            {t("undercover-win-guess-desc")}
          </p>
          <div className="grid grid-cols-1 gap-4 mt-auto">
            <button
               onClick={() => handleUndercoverFinalGuess(true)}
               className="w-full py-4 bg-red-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl shadow-red-500/20"
            >
                {t("undercover-guess-success")}
            </button>
            <button
               onClick={() => handleUndercoverFinalGuess(false)}
               className="w-full py-4 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
            >
                {t("undercover-guess-fail")}
            </button>
          </div>
        </div>
      )}

      {screen === "intro" && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-1 flex flex-col px-5 py-6 overflow-y-auto bg-white dark:bg-slate-900"
        >
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-8">
            <button
              onClick={onBack}
              className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="w-10 sm:w-12" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">Undercover</h2>
            <div className="w-10" />
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/20 dark:shadow-none text-center mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0077b6]" />
              <div className="w-16 h-16 bg-[#0077b6]/10 dark:bg-[#0077b6]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#0077b6] dark:text-[#00b4d8]">
                <Info size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">{t('uc-desc')}</h3>
              
              <div className="space-y-4 pt-4 text-left">
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 text-[#0077b6] dark:text-[#00b4d8]">
                    <User size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-900 dark:text-slate-100">{t('role-civilian')}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('role-civilian-desc')}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 text-red-500 dark:text-red-400">
                    <ShieldAlert size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-900 dark:text-slate-100">{t('role-undercover')}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('role-undercover-desc')}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="mt-0.5 text-slate-900 dark:text-slate-100 font-mono font-bold">
                    ?
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-900 dark:text-slate-100">{t('role-mrwhite')}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t('role-mrwhite-desc')}</p>
                  </div>
                </div>
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
                if (players.length < 3) {
                  onShowPlayers();
                  return;
                }
                localStorage.setItem("seenRules_uc", "true");
                setScreen("config");
              }}
              className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10"
            >
              {t("next")}
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      )}

      {screen === "config" && (
        <div className="flex-1 flex flex-col scrollbar-hide px-5 py-6 pb-12 md:pb-6 overflow-y-auto bg-white dark:bg-slate-900">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-4 mb-4">
            <button
              onClick={onBack}
              className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="w-10 sm:w-12" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-slate-100">
              {t("game-settings")}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={onShowPlayers}
                className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-md uppercase tracking-wider transition-colors"
              >
                {t("edit-players")}
              </button>
            </div>
          </div>
          <div className="px-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8 text-center">
              {t("customise-match")}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                    <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
                        {t("players-label")} ({players.length})
                    </label>
                    <button 
                        onClick={onShowPlayers}
                        className="text-[9px] font-bold text-[#0077b6] dark:text-[#00b4d8] flex items-center gap-1 uppercase tracking-widest"
                    >
                        <Plus size={12} /> {t("add-player-btn") || "Ajouter"}
                    </button>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                    {allPlayers.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => togglePlayerActive(p.id)}
                            className={`px-3 py-1.5 rounded-lg border text-[10px] font-bold transition-all ${p.isActive !== false ? "bg-white dark:bg-slate-700 border-[#0077b6] dark:border-[#00b4d8] text-[#0077b6] dark:text-[#00b4d8] shadow-sm" : "bg-slate-100 dark:bg-slate-900 border-transparent text-slate-400 dark:text-slate-600 opacity-60"}`}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 block mb-3 text-center uppercase">
                {t("undercovers")}{" "}
                <span className="font-medium normal-case tracking-normal text-[9px] opacity-80 text-slate-400 dark:text-slate-500">
                  (
                  {t("suggested-count").replace(
                    "{0}",
                    (players.length > 9
                      ? 3
                      : players.length > 5
                        ? 2
                        : 1
                    ).toString(),
                  )}
                  )
                </span>
              </label>
              <div className="flex items-center gap-6 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <button
                  onClick={() => setUndercovers(Math.max(1, undercovers - 1))}
                  className="w-10 h-10 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xl text-slate-600 dark:text-slate-300 hover:border-[#0a9396] transition-colors shadow-sm"
                >
                  −
                </button>
                <span className="flex-1 text-center font-mono text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {undercovers}
                </span>
                <button
                  onClick={() =>
                    setUndercovers(
                      Math.min(players.length - 1 - (!wordsHidden && gameMasterId ? 1 : 0), undercovers + 1),
                    )
                  }
                  className="w-10 h-10 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xl text-slate-600 dark:text-slate-300 hover:border-[#0077b6] transition-colors shadow-sm"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 px-1">
                <span className="font-bold text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400">
                  {t("mr-white")}
                </span>
                <button
                  onClick={() => {
                    if (players.length > 2) {
                       setMrWhiteOn(!mrWhiteOn);
                    }
                  }}
                  disabled={players.length <= 2}
                  className={`w-11 h-6 rounded-full relative transition-colors ${mrWhiteOn ? "bg-[#0077b6] dark:bg-[#00b4d8]" : "bg-slate-200 dark:bg-slate-700"} ${players.length <= 2 ? "opacity-30 cursor-not-allowed" : ""}`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${mrWhiteOn ? "left-6" : "left-1"}`}
                  />
                </button>
              </div>
              <div className="flex justify-between items-center py-3 border-t border-slate-100 dark:border-slate-800 px-1">
                <span className="font-bold text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-400">
                  {t("hide-words")}
                </span>
                <button
                  onClick={() => {
                    if (players.length > 3) {
                        const nextVal = !wordsHidden;
                        setWordsHidden(nextVal);
                        // Reset MJ when words are shown to force a conscious choice
                        if (!nextVal) {
                            setGameMasterId(null);
                        }
                    }
                  }}
                  disabled={players.length <= 3}
                  className={`w-11 h-6 rounded-full relative transition-colors ${wordsHidden ? "bg-[#0077b6] dark:bg-[#00b4d8]" : "bg-slate-200 dark:bg-slate-700"} ${players.length <= 3 ? "opacity-30 cursor-not-allowed" : ""}`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${wordsHidden ? "left-6" : "left-1"}`}
                  />
                </button>
              </div>
            </div>

            {!wordsHidden && (
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-3 text-center">
                    {t("select-mj")}
                  </label>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {players.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setGameMasterId(p.id);
                        setIsExternalHost(false);
                      }}
                      className={`px-4 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${!isExternalHost && gameMasterId === p.id ? "bg-slate-900 dark:bg-slate-700 text-white border-slate-900 dark:border-slate-600 shadow-lg scale-105" : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300"}`}
                    >
                      {!isExternalHost && gameMasterId === p.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      {p.name}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setIsExternalHost(true);
                      setGameMasterId("external-host");
                    }}
                    className={`px-4 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${isExternalHost ? "bg-slate-900 dark:bg-slate-700 text-white border-slate-900 dark:border-slate-600 shadow-lg scale-105" : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300"}`}
                  >
                    {isExternalHost && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    <Plus size={12} /> {t("external-host") || "External Host"}
                  </button>
                </div>

                {isExternalHost && (
                  <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl">
                    <p className="text-[10px] text-blue-700 dark:text-blue-400 font-bold uppercase tracking-widest text-center">
                      {t("external-host-active") || "External host mode active - Hide words from this device"}
                    </p>
                  </div>
                )}
                  
                  <p className="text-[9px] text-slate-400 dark:text-slate-500 text-center mt-1 leading-tight italic">
                    {t("mj-desc")}
                  </p>
                </div>

                <div>
                   <label className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block mb-3 text-center">
                    {t("word-pair")}
                  </label>
                  <div className="space-y-3">
                    <input
                      value={customWord1}
                      onChange={(e) => setCustomWord1(e.target.value)}
                      placeholder={t("civilian-word")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm outline-none focus:border-[#0077b6] transition-all shadow-sm font-medium"
                    />
                    <input
                      value={customWord2}
                      onChange={(e) => setCustomWord2(e.target.value)}
                      placeholder={t("undercover-word")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm outline-none focus:border-[#0077b6] transition-all shadow-sm font-medium"
                    />
                    <button
                      onClick={suggestWords}
                      className="text-[10px] text-[#0077b6] dark:text-[#38bdf8] font-bold uppercase tracking-widest px-1 hover:opacity-80 transition-colors w-full"
                    >
                      {t("suggest-words")}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {wordsHidden && (
              <div className="p-4 bg-slate-900 dark:bg-slate-800 rounded-xl text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center leading-relaxed">
                {t("random-pair-desc")}
              </div>
            )}
          </div>

          <div className="mt-auto pt-8 flex gap-3">
            <button
              onClick={() => setScreen("intro")}
              className="flex-1 py-4 border border-slate-200 bg-white text-slate-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
            >
              {t("back")}
            </button>
            <button
              onClick={startGame}
              disabled={isStartDisabled}
              className={`flex-[2] py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg ${isStartDisabled ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none" : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/10"}`}
            >
              {t("start-game")}
            </button>
          </div>
          {isStartDisabled && (
            <p className="text-[9px] text-red-500 font-bold uppercase tracking-widest text-center mt-3 animate-pulse">
                {!wordsHidden && !gameMasterId 
                  ? t("mj-required-error") 
                  : activePlayersToAssign.length < minRequiredCount 
                    ? t("err-not-enough")
                    : ""
                }
            </p>
          )}
        </div>
      )}

      {screen === "pass" && (
        <div className="flex-1 flex flex-col overflow-y-auto px-5 py-8 items-center text-center">
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <div className="w-24 h-24 rounded-2xl bg-slate-900 dark:bg-slate-800 shadow-xl shadow-slate-900/20 dark:shadow-none flex items-center justify-center font-mono text-3xl font-bold text-white mb-8 border-4 border-white/10 dark:border-slate-700 ring-1 ring-slate-900 dark:ring-transparent">
              {gamePlayers[passOrder[passIndex]]?.name
                .slice(0, 2)
                .toUpperCase()}
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 tracking-tight">
              {gamePlayers[passOrder[passIndex]]?.name}
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 px-8 leading-relaxed font-medium">
              {t("pass-device-desc")}
            </p>
          </div>
          <button
            onClick={() => setScreen("reveal")}
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
          >
            {t("reveal-word")}
          </button>
        </div>
      )}

      {screen === "reveal" && (
        <div className="flex-1 flex flex-col overflow-y-auto px-5 py-8 items-center justify-center text-center">
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 dark:text-slate-500 mb-8 border border-slate-300 dark:border-slate-700">
              <Eye size={32} />
            </div>
            <h2 className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">{gamePlayers[passOrder[passIndex]]?.name}</h2>

            {showWord ? (
              <div className="w-full animate-in zoom-in duration-300">
                <div className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-10 shadow-sm relative overflow-hidden mb-10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#0077b6] dark:bg-[#00b4d8] opacity-20 dark:opacity-40"></div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-8 pb-4 border-b border-slate-100 dark:border-slate-700">
                    {t("your-secret-word")}
                  </div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    {gamePlayers[passOrder[passIndex]]?.word || "? ? ?"}
                  </div>
                  {gamePlayers[passOrder[passIndex]]?.role === "mrwhite" && (
                    <div className="text-red-500 dark:text-red-400 text-xs uppercase tracking-widest font-bold mt-4">
                      {t("you-have-no-word")}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => {
                    setShowWord(false);
                    nextReveal();
                  }}
                  className="w-full py-4 bg-[#0077b6] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#0077b6] transition-all shadow-lg shadow-[#0077b6]/20"
                >
                  {t("hide-word")}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowWord(true)}
                className="px-10 py-5 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl flex items-center gap-3 hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors mx-auto"
              >
                <Eye size={20} /> {t("reveal-word")}
              </button>
            )}
          </div>
        </div>
      )}

      {screen === "game" && (
        <div className="flex-1 flex flex-col overflow-y-auto pb-12 md:pb-6">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 mb-8">
            <button 
              onClick={handleQuit}
              className="absolute top-4 left-4 z-40 p-2 sm:p-2.5 bg-white shadow-md border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-full text-slate-800 dark:text-white hover:scale-105 transition-all group"
            >
              <LogOut size={16} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="w-10 sm:w-12" />
            <div className="flex flex-col items-center">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Undercover</h2>
              <p className="text-[9px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest mt-0.5">{t("round-label")} {round}</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
                {gamePlayers.filter((p) => !p.isEliminated).length}{" "}
                {t("active-label")}
              </div>
              {!wordsHidden && gameMasterId && !isExternalHost && (
                <div className="mt-1">
                  <div className="text-[#0077b6] text-[8px] font-bold px-1 uppercase tracking-wider">
                    MJ: {players.find(p => p.id === gameMasterId)?.name}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide space-y-1.5 px-5">
            {passOrder.map((idx) => {
              const p = gamePlayers[idx];
              return (
                <div
                  key={p.id}
                  className={`flex items-center gap-3 p-2.5 bg-white border border-slate-200 rounded-xl transition-all shadow-sm ${p.isEliminated ? "opacity-30 grayscale" : "hover:border-[#0077b6]"}`}
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-mono text-[10px] font-bold text-slate-600 border border-slate-200"
                  >
                    {p.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <span
                      className={`font-bold text-sm text-slate-700 ${p.isEliminated ? "line-through" : ""}`}
                    >
                      {p.name}
                    </span>
                    {p.recheckCount > 0 && (
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                        {t("word-rechecked").replace(
                          "{0}",
                          String(p.recheckCount),
                        )}
                      </span>
                    )}
                  </div>
                  {!p.isEliminated && (
                    <button
                      onClick={() => eliminate(p.id)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors border border-red-100"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={() => setScreen("recheck")}
              className="w-full py-3 bg-white border border-slate-200 rounded-xl font-bold text-[10px] uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm"
            >
              {t("word-check-btn")}
            </button>
            <div className="p-4 bg-slate-900 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-center text-slate-400 leading-relaxed shadow-xl shadow-slate-900/10">
              {t("give-clue-vote")}
            </div>
          </div>
        </div>
      )}

      {screen === "recheck" && (
        <div className="flex-1 flex flex-col overflow-y-auto px-5 py-6 pb-12 md:pb-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {t("word-check-title")}
            </h2>
            <button
              onClick={() => setScreen("game")}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-xs text-slate-500 mb-6 text-center">
            {t("word-check-desc")}
          </p>
          <div className="flex-1 overflow-y-auto scrollbar-hide space-y-2">
            {gamePlayers
              .filter((p) => !p.isEliminated)
              .map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleRecheck(p.id)}
                  className="w-full flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-[#0077b6] transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-mono font-bold text-slate-600">
                    {p.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-slate-800">{p.name}</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {t("word-checked").replace("{0}", String(p.recheckCount))}
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}

      {recheckPlayerId && !recheckPlayerReveal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 animate-in fade-in"
          onClick={() => {
            setRecheckPlayerId(null);
            setRecheckPlayerReveal(false);
          }}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-xs p-10 text-center shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700/50 rounded-3xl flex items-center justify-center text-slate-400 dark:text-slate-500 mx-auto mb-6">
              <User size={40} />
            </div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-2">
              {t("pass-title")}
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              {gamePlayers.find((p) => p.id === recheckPlayerId)?.name}
            </div>
            <button
              onClick={() => setRecheckPlayerReveal(true)}
              className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-lg"
            >
              {t("reveal-word")}
            </button>
          </div>
        </div>
      )}

      {recheckPlayerId && recheckPlayerReveal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/80 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center p-8 animate-in zoom-in-95"
          onClick={() => {
            setRecheckPlayerId(null);
            setRecheckPlayerReveal(false);
          }}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-xs p-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
              {t("secret-word-for").replace(
                "{0}",
                gamePlayers.find((p) => p.id === recheckPlayerId)?.name || "",
              )}
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              {gamePlayers.find((p) => p.id === recheckPlayerId)?.word ||
                "NO WORD"}
            </div>
            <button
              onClick={() => {
                setRecheckPlayerId(null);
                setRecheckPlayerReveal(false);
              }}
              className="w-full py-4 bg-slate-900 dark:bg-slate-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors shadow-lg"
            >
              {t("done-btn")}
            </button>
          </div>
        </div>
      )}

      {mrWhiteGuessingId && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setMrWhiteGuessingId(null)}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-xs p-10 text-center shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {t("mrwhite-elimination")}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              {t("mrwhite-guess-desc")}
            </p>
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => mrWhiteAction(true)}
                className="py-4 bg-[#0077b6] text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#0077b6]/20"
              >
                {t("mrwhite-guess-btn")}
              </button>
              <button
                onClick={() => mrWhiteAction(false)}
                className="py-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-600"
              >
                {t("mrwhite-dont-know-btn")}
              </button>
            </div>
          </div>
        </div>
      )}

      {undercoverBonusId && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center p-8"
          onClick={() => setUndercoverBonusId(null)}
        >
          <div 
            className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-xs p-10 text-center shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {t("undercover-guess-title")}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              {t("undercover-guess-desc")}
            </p>
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => undercoverBonusAction(true)}
                className="py-4 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-500/20"
              >
                {t("guess-bonus-win")}
              </button>
              <button
                onClick={() => undercoverBonusAction(false)}
                className="py-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-600"
              >
                {t("guess-bonus-fail")}
              </button>
            </div>
          </div>
        </div>
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
          suggestWords(true);
        }}
        onQuit={onBack}
      />
    </div>
  );
};
