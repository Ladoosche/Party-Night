import React, { Suspense } from 'react';
import { AppProvider } from './context/AppContext';
import { BackgroundCanvas } from './components/shared/BackgroundCanvas';
import { Home } from './components/views/Home';
import { Header } from './components/shared/Header';

// Lazy loaded components to reduce initial bundle size
const Undercover = React.lazy(() => import('./components/games/Undercover').then(m => ({ default: m.Undercover })));
const MostLikelyTo = React.lazy(() => import('./components/games/MostLikelyTo').then(m => ({ default: m.MostLikelyTo })));
const Game421 = React.lazy(() => import('./components/games/Game421').then(m => ({ default: m.Game421 })));
const Trivia = React.lazy(() => import('./components/games/Trivia').then(m => ({ default: m.Trivia })));
const Killer = React.lazy(() => import('./components/games/Killer').then(m => ({ default: m.Killer })));
const NeverHaveIEver = React.lazy(() => import('./components/games/NeverHaveIEver').then(m => ({ default: m.NeverHaveIEver })));
const Purple = React.lazy(() => import('./components/games/Purple').then(m => ({ default: m.Purple })));
const Wheel = React.lazy(() => import('./components/games/Wheel').then(m => ({ default: m.Wheel })));
const EditPlayersModal = React.lazy(() => import('./components/modals/EditPlayersModal').then(m => ({ default: m.EditPlayersModal })));
const Settings = React.lazy(() => import('./components/views/Settings').then(m => ({ default: m.Settings })));

function MainApp() {
  const [activeGame, setActiveGame] = React.useState<string | null>(null);
  const [showPlayersModal, setShowPlayersModal] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);

  // We can show a small loading state while the game components download
  const loadingFallback = (
    <div className="flex items-center justify-center p-8 h-full bg-slate-50 dark:bg-slate-900 absolute inset-0 z-10 text-slate-400">
      Loading...
    </div>
  );

  return (
    <div className="relative z-10 w-full h-[100dvh] overflow-hidden">
      <div className="bg-white/90 dark:bg-slate-900/95 transition-colors duration-300 backdrop-blur-md h-[100dvh] relative flex flex-col w-full max-w-5xl mx-auto shadow-2xl shadow-slate-200/50 dark:shadow-none">
        {activeGame === null && (
          <Header 
            onShowPlayers={() => setShowPlayersModal(true)} 
            onShowSettings={() => setShowSettings(true)}
          />
        )}
        
        {showPlayersModal && (
          <Suspense fallback={null}>
            <EditPlayersModal 
              isOpen={showPlayersModal} 
              onClose={() => setShowPlayersModal(false)} 
            />
          </Suspense>
        )}

        <div className="flex-1 overflow-hidden flex flex-col relative">
          {showSettings && (
            <div className="absolute inset-0 z-40 flex flex-col bg-white dark:bg-slate-900">
              <Suspense fallback={loadingFallback}>
                <Settings onBack={() => setShowSettings(false)} />
              </Suspense>
            </div>
          )}

          {activeGame === null && (
            <Home 
              onSelectGame={(id) => setActiveGame(id)} 
              onShowPlayers={() => setShowPlayersModal(true)}
            />
          )}

          <Suspense fallback={loadingFallback}>
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

            {activeGame === 'wheel' && (
              <Wheel onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
            )}

            {activeGame === 'killer' && (
              <Killer onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
            )}

            {activeGame === 'never-have-i-ever' && (
              <NeverHaveIEver onBack={() => setActiveGame(null)} onShowPlayers={() => setShowPlayersModal(true)} />
            )}
          </Suspense>
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
