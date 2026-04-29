import React from 'react';
import { AppProvider } from './context/AppContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Home } from './components/Home';
import { Undercover } from './components/Undercover';
import { MostLikelyTo } from './components/MostLikelyTo';
import { Game421 } from './components/Game421';
import { Trivia } from './components/Trivia';
import { Killer } from './components/Killer';
import { NeverHaveIEver } from './components/NeverHaveIEver';

import { Purple } from './components/Purple';
import { Header } from './components/Header';
import { EditPlayersModal } from './components/EditPlayersModal';
import { Settings } from './components/Settings';

function MainApp() {
  const [activeGame, setActiveGame] = React.useState<string | null>(null);
  const [showPlayersModal, setShowPlayersModal] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);

  return (
    <div className="relative z-10 w-full h-[100dvh] overflow-hidden">
      <div className="bg-white/90 dark:bg-slate-900/95 transition-colors duration-300 backdrop-blur-md h-[100dvh] relative flex flex-col w-full max-w-5xl mx-auto shadow-2xl shadow-slate-200/50 dark:shadow-none">
        {activeGame === null && (
          <Header 
            onShowPlayers={() => setShowPlayersModal(true)} 
            onShowSettings={() => setShowSettings(true)}
          />
        )}
        
        <EditPlayersModal 
          isOpen={showPlayersModal} 
          onClose={() => setShowPlayersModal(false)} 
        />

        <div className="flex-1 overflow-hidden flex flex-col relative">
          {showSettings && (
            <div className="absolute inset-0 z-40 bg-white dark:bg-slate-900">
              <Settings onBack={() => setShowSettings(false)} />
            </div>
          )}

          {activeGame === null && (
            <Home 
              onSelectGame={(id) => setActiveGame(id)} 
              onShowPlayers={() => setShowPlayersModal(true)}
            />
          )}

          {activeGame === 'undercover' && (
            <Undercover onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
          )}

          {activeGame === 'most-likely-to' && (
            <MostLikelyTo onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
          )}

          {activeGame === 'trivia' && (
            <Trivia onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
          )}

          {activeGame === 'game-421' && (
            <Game421 onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
          )}

          {activeGame === 'purple' && (
            <Purple onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
          )}

          {activeGame === 'killer' && (
            <Killer onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
          )}

          {activeGame === 'never-have-i-ever' && (
            <NeverHaveIEver onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BackgroundCanvas />
      <MainApp />
    </AppProvider>
  );
}
