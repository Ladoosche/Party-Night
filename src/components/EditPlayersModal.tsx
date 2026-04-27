import React, { useState } from 'react';
import { X, Plus, Check, Trash2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface EditPlayersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditPlayersModal: React.FC<EditPlayersModalProps> = ({ isOpen, onClose }) => {
  const { players: allPlayers, setPlayers, t } = useAppContext();
  const [newPlayerName, setNewPlayerName] = useState("");
  const [errorNewPlayer, setErrorNewPlayer] = useState<string | null>(null);

  if (!isOpen) return null;

  const addNewPlayer = () => {
    if (!newPlayerName.trim()) {
      setErrorNewPlayer(t("err-empty"));
      return;
    }
    if (allPlayers.some(p => p.name.toLowerCase() === newPlayerName.trim().toLowerCase())) {
      setErrorNewPlayer(t("err-duplicate"));
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
    setErrorNewPlayer(null);
  };

  const removePlayerPermanently = (id: string) => {
    setPlayers(allPlayers.filter(p => p.id !== id));
  };

  const togglePlayerActive = (id: string) => {
    setPlayers(allPlayers.map(p => p.id === id ? { ...p, isActive: !p.isActive } : p));
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex flex-col p-6"
      onClick={onClose}
    >
       <div 
         className="bg-white rounded-3xl flex-1 flex flex-col overflow-hidden max-w-md mx-auto w-full shadow-2xl"
         onClick={(e) => e.stopPropagation()}
       >
          <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-slate-900 text-sm">{t("edit-players")}</h3>
              <button onClick={onClose} className="bg-slate-200 text-slate-500 rounded-full p-1 hover:bg-slate-300 transition-colors">
                  <X size={16} />
              </button>
          </div>
          <div className="p-4 border-b border-slate-100 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newPlayerName}
                  onChange={(e) => {
                      setNewPlayerName(e.target.value);
                      setErrorNewPlayer(null);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && addNewPlayer()}
                  placeholder={t("player-name-placeholder")}
                  className="flex-1 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-slate-400 transition-all font-medium"
                />
                <button
                  onClick={addNewPlayer}
                  className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-colors shrink-0"
                >
                  <Plus size={20} />
                </button>
              </div>
              {errorNewPlayer && (
                <p className="mt-2 text-[10px] font-bold text-red-500 uppercase tracking-widest px-1">
                  {errorNewPlayer}
                </p>
              )}
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-3 custom-scrollbar">
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
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${
                      p.isActive !== false
                        ? "bg-slate-900 text-white"
                        : "bg-slate-200 text-slate-400"
                    }`}
                  >
                    {p.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="flex-1 text-left font-bold text-slate-700 text-sm">
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
          <div className="p-6 border-t border-slate-100">
              <button 
                onClick={onClose}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest"
              >
                  {t("done-btn")}
              </button>
          </div>
       </div>
    </div>
  );
};
