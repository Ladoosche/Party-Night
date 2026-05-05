import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Info, Droplets, LogOut } from "lucide-react";
import { useAppContext } from '../../context/AppContext';
import { GameHeader } from '../shared/GameHeader';
import { QuitGameModal } from '../modals/QuitGameModal';

interface PurpleProps {
  onBack: () => void;
  onShowPlayers: () => void;
}

type Suit = "hearts" | "diamonds" | "spades" | "clubs";
type Color = "red" | "black";
interface Card {
  id: string;
  suit: Suit;
  value: number; // 1 to 13
  color: Color;
}

let nextCardId = 0;
function generateDeck(): Card[] {
  const suits: Suit[] = ["hearts", "diamonds", "spades", "clubs"];
  const deck: Card[] = [];
  for (const suit of suits) {
    for (let value = 1; value <= 13; value++) {
      deck.push({ 
        id: `card_${nextCardId++}`,
        suit, 
        value, 
        color: suit === "hearts" || suit === "diamonds" ? "red" : "black" 
      });
    }
  }
  return deck.sort(() => Math.random() - 0.5);
}

function getCardIcon(suit: Suit) {
  switch(suit) {
    case "hearts": return "♥";
    case "diamonds": return "♦";
    case "spades": return "♠";
    case "clubs": return "♣";
  }
}

function getCardLabel(value: number) {
  switch(value) {
    case 1: return "A";
    case 11: return "J";
    case 12: return "Q";
    case 13: return "K";
    default: return value.toString();
  }
}

export const Purple: React.FC<PurpleProps> = ({ onBack, onShowPlayers }) => {
  const { players, t, language } = useAppContext();
  const [showRules, setShowRules] = useState(true);
  const [quitConfirm, setQuitConfirm] = useState(false);
  
  const [deck, setDeck] = useState<Card[]>(generateDeck());
  const [pile, setPile] = useState<Card[]>([]);
  const activePlayers = players.filter(p => p.isActive !== false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  
  const [lastDrawn, setLastDrawn] = useState<Card[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [lastPenalty, setLastPenalty] = useState<number>(0);
  const [feedbackKey, setFeedbackKey] = useState<number>(0);

  const activePlayer = activePlayers[currentPlayerIndex];

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [feedback, feedbackKey]);

  const handlePrediction = (
      type: "red" | "black" | "purple" | "double-purple" | "plus" | "minus"
  ) => {
      let drawnCount = 1;
      if (type === "purple") drawnCount = 2;
      if (type === "double-purple") drawnCount = 4;

      if (deck.length < drawnCount) {
          // not enough cards!
          return;
      }

      let currentDeck = [...deck];
      const drawn: Card[] = [];
      for (let i = 0; i < drawnCount; i++) {
          drawn.push(currentDeck.pop()!);
      }
      setDeck(currentDeck);

      setLastDrawn(drawn);
      setFeedbackKey(prev => prev + 1);

      let success = false;
      const topCard = pile.length > 0 ? pile[pile.length - 1] : null;

      if (type === "red") {
          success = drawn[0].color === "red";
      } else if (type === "black") {
          success = drawn[0].color === "black";
      } else if (type === "purple") {
          success = (drawn[0].color === "red" && drawn[1].color === "black") || 
                    (drawn[0].color === "black" && drawn[1].color === "red");
      } else if (type === "double-purple") {
          const reds = drawn.filter(c => c.color === "red").length;
          const blacks = drawn.filter(c => c.color === "black").length;
          success = reds === 2 && blacks === 2;
      } else if (type === "plus" && topCard) {
          success = drawn[0].value > topCard.value;
      } else if (type === "minus" && topCard) {
          success = drawn[0].value < topCard.value;
      }

      setFeedback(success ? "correct" : "wrong");

      if (success) {
          setPile(prev => [...prev, ...drawn]);
      } else {
          setLastPenalty(pile.length + drawn.length);
          setPile([]);
      }
  };

  const stopAndDistribute = () => {
    setPile([]);
    setFeedback(null);
    setLastDrawn([]);
    nextPlayer();
  };

  const nextPlayer = () => {
      setCurrentPlayerIndex((prev) => (prev + 1) % activePlayers.length);
  };

  if (!activePlayer) return null;

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 overflow-hidden relative transition-colors h-full">
      <GameHeader
        onQuit={() => {
          if (showRules && pile.length === 0 && lastDrawn.length === 0) {
            onBack();
          } else if (showRules) {
            setShowRules(false);
          } else {
            setQuitConfirm(true);
          }
        }}
        title={<h2 className="text-sm font-bold uppercase tracking-widest text-purple-900 dark:text-purple-400">{t("purple-title")}</h2>}
        rightContent={
          <div className="w-8">
             {!showRules && (
                <button 
                  onClick={() => setShowRules(true)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400"
                >
                  <Info size={16} />
                </button>
             )}
          </div>
        }
      />

      <React.Fragment>
        {showRules ? (
          <div 
            key="rules"
            className="flex-1 flex flex-col px-5 pt-8 pb-6 overflow-y-auto"
          >
            <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/20 dark:shadow-none text-center mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-purple-500" />
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 dark:text-purple-400">
                  <Droplets size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t("purple-rules-title")}</h3>
                <div className="text-sm text-slate-500 dark:text-slate-400 text-left whitespace-pre-wrap leading-relaxed">
                  {t("purple-rules-desc")}
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
                onClick={() => setShowRules(false)}
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-sm uppercase tracking-widest transition-colors shadow-lg shadow-purple-500/25"
              >
                {t("start-game")}
              </button>
            </div>
          </div>
        ) : (
          <div 
            key="game"
            className="flex-1 flex flex-col h-full overflow-y-auto overflow-x-hidden p-4 sm:p-6"
          >
            <div className="text-center shrink-0 mt-2 h-8 relative">
               <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                 {t("purple-play-turn").replace("{0}", activePlayer.name)}
               </span>
            </div>

            <div className="flex-1 w-full flex flex-col justify-start sm:justify-center items-center relative min-h-[300px] mt-2 sm:mt-0">
               <div className="w-full text-center pointer-events-none min-h-[40px] z-50 mb-2 sm:mb-4">
                  <React.Fragment>
                    {feedback && (
                        <div
                           key={feedbackKey}
                           className={`inline-flex flex-col items-center justify-center px-4 py-1.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg backdrop-blur-md ${
                                feedback === "correct" 
                                ? "bg-green-500 text-white"
                                : "bg-red-500 text-white"
                           }`}
                        >
                            {feedback === "correct" 
                               ? t("purple-correct") 
                               : (
                                  <>
                                     <span className="leading-tight">{t("purple-wrong")}</span>
                                     <span className="leading-tight text-[10px] sm:text-xs opacity-90">{t("purple-drinks").replace("{0}", lastPenalty.toString())}</span>
                                  </>
                               )
                            }
                        </div>
                    )}
                  </React.Fragment>
               </div>
                <div className="flex items-center justify-center gap-4 sm:gap-10 w-full mb-6">
                  {/* DECK */}
                  <div className="relative w-16 h-24 sm:w-24 sm:h-32 shrink-0">
                    {deck.length > 0 ? (
                      <>
                        {deck.slice(0, Math.min(deck.length, 3)).map((_, i) => (
                          <div key={i} className="absolute inset-0 bg-slate-800 rounded-xl border-2 border-slate-600 shadow-md" style={{ transform: `translate(${-i * 2}px, ${-i * 2}px)` }}>
                              <div className="absolute inset-1 border border-slate-600 rounded flex items-center justify-center opacity-50">
                                <Droplets size={16} className="text-slate-500" />
                              </div>
                          </div>
                        ))}
                        <div className="absolute -bottom-6 w-full text-center text-[10px] sm:text-xs font-bold text-slate-400 cursor-default">
                           {deck.length}
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400">
                         <Droplets size={32} opacity={0.2} />
                      </div>
                    )}
                  </div>

                  {/* DRAWN CARDS */}
                  <div className="flex justify-center items-center relative min-w-[5rem] sm:min-w-[6rem] h-24 sm:h-32">
                     <AnimatePresence>
                       {lastDrawn.length > 0 ? (
                         <div className={lastDrawn.length === 4 ? "grid grid-cols-2 gap-1" : "flex gap-2"}>
                           {lastDrawn.map((card, i) => (
                             <motion.div 
                                initial={{ opacity: 0, x: -80, rotateY: 180 }}
                                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                                key={card.id}
                                className={`rounded-xl flex flex-col items-center justify-center border-2 border-slate-200 dark:border-slate-700 bg-white shadow-lg shrink-0 ${card.color === 'red' ? 'text-red-500' : 'text-slate-900'} ${lastDrawn.length === 4 ? 'w-10 h-14 sm:w-16 sm:h-24' : 'w-16 h-24 sm:w-24 sm:h-32'}`}
                             >
                                <span className={lastDrawn.length === 4 ? "text-sm sm:text-base font-bold" : "text-lg sm:text-xl font-bold"}>{getCardLabel(card.value)}</span>
                                <span className={lastDrawn.length === 4 ? "text-base sm:text-2xl" : "text-2xl sm:text-3xl"}>{getCardIcon(card.suit)}</span>
                             </motion.div>
                           ))}
                         </div>
                       ) : (
                         <div className="w-16 h-24 sm:w-24 sm:h-32 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 shrink-0">
                         </div>
                       )}
                     </AnimatePresence>
                  </div>
                </div>
                
                {deck.length === 0 && (
                   <button
                     onClick={() => setDeck(generateDeck())}
                     className="mt-2 py-2 px-6 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-colors shadow-lg"
                   >
                     {t('purple-reshuffle')}
                   </button>
                )}

            </div>

            <div className={`w-full max-w-sm mx-auto grid grid-cols-2 gap-2 sm:gap-3 mt-auto shrink-0 pb-1`}>
                   <button 
                     onClick={() => handlePrediction('red')}
                     disabled={deck.length < 1}
                     className="py-2.5 sm:py-3 bg-red-100 hover:bg-red-200 text-red-700 dark:bg-red-900/30 dark:hover:bg-red-900/50 dark:text-red-400 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors border border-red-200 dark:border-red-900/50 disabled:opacity-50"
                   >
                     {t('purple-red')}
                   </button>
                   <button 
                     onClick={() => handlePrediction('black')}
                     disabled={deck.length < 1}
                     className="py-2.5 sm:py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors border border-slate-300 dark:border-slate-700 disabled:opacity-50"
                   >
                     {t('purple-black')}
                   </button>

                   <button 
                     onClick={() => handlePrediction('plus')}
                     disabled={deck.length < 1 || pile.length === 0}
                     className="py-2.5 sm:py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 dark:text-blue-400 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors border border-blue-100 dark:border-blue-900/30 disabled:opacity-50"
                   >
                     {t('purple-plus')}
                   </button>
                   <button 
                     onClick={() => handlePrediction('minus')}
                     disabled={deck.length < 1 || pile.length === 0}
                     className="py-2.5 sm:py-3 bg-orange-50 hover:bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:hover:bg-orange-900/40 dark:text-orange-400 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors border border-orange-100 dark:border-orange-900/30 disabled:opacity-50"
                   >
                     {t('purple-minus')}
                   </button>

                   <button 
                     onClick={() => handlePrediction('purple')}
                     disabled={deck.length < 2}
                     className="col-span-2 py-2.5 sm:py-3 bg-purple-100 hover:bg-purple-200 text-purple-700 dark:bg-purple-900/30 dark:hover:bg-purple-900/50 dark:text-purple-400 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors border border-purple-200 dark:border-purple-900/50 disabled:opacity-50"
                   >
                     {t('purple-purple')}
                   </button>

                   <button 
                     onClick={() => handlePrediction('double-purple')}
                     disabled={deck.length < 4}
                     className="col-span-2 py-2.5 sm:py-3 bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:hover:bg-fuchsia-900/50 dark:text-fuchsia-400 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors border border-fuchsia-200 dark:border-fuchsia-900/50 disabled:opacity-50"
                   >
                     {t('purple-double-purple')}
                   </button>

                   <button 
                       onClick={stopAndDistribute}
                       disabled={pile.length === 0 && feedback !== 'wrong'}
                       className={`col-span-2 py-3 sm:py-4 mt-1 ${
                           pile.length >= 1 ? 'bg-[#10b981] hover:bg-[#059669] shadow-[#10b981]/25 text-white' : 
                           (pile.length === 0 && feedback !== 'wrong') ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-slate-300 dark:border-slate-700' :
                           'bg-slate-700 hover:bg-slate-800 shadow-slate-700/25 text-white'
                       } rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-widest transition-colors shadow-lg flex items-center justify-center gap-2`}
                   >
                       {pile.length >= 1 ? t('purple-stop').replace('{0}', pile.length.toString()) : t('purple-pass-turn')}
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
    </div>
  );
};
