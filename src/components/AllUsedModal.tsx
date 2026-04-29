import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { RefreshCcw, LogOut } from "lucide-react";
import { useAppContext } from "../context/AppContext";

interface AllUsedModalProps {
  isOpen: boolean;
  onRestart: () => void;
  onQuit: () => void;
}

export const AllUsedModal: React.FC<AllUsedModalProps> = ({ isOpen, onRestart, onQuit }) => {
  const { t } = useAppContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto border border-slate-100 dark:border-slate-800">
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RefreshCcw size={32} />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {t("all-used-title")}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {t("all-used-desc")}
                </p>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex flex-col gap-3">
                <button
                  onClick={onRestart}
                  className="w-full py-4 bg-blue-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <RefreshCcw size={18} />
                  {t("all-used-restart")}
                </button>
                <button
                  onClick={onQuit}
                  className="w-full py-4 bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-2xl font-bold text-sm uppercase tracking-widest border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <LogOut size={18} />
                  {t("quit-game")}
                </button>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
