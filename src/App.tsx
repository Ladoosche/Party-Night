import React from 'react';
import { AppProvider } from './context/AppContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Home } from './components/Home';
import { Undercover } from './components/Undercover';
import { MostLikelyTo } from './components/MostLikelyTo';
import { Game421 } from './components/Game421';
import { Killer } from './components/Killer';
import { NeverHaveIEver } from './components/NeverHaveIEver';

function MainApp() {
  const [activeGame, setActiveGame] = React.useState<string | null>(null);

  return (
    <div className="relative z-10 w-full h-[100dvh] overflow-hidden">
      <div className="bg-white/90 backdrop-blur-md h-[100dvh] relative flex flex-col w-full max-w-5xl mx-auto shadow-2xl shadow-slate-200/50">
        {activeGame === null && (
          <Home onSelectGame={(id) => setActiveGame(id)} />
        )}

        {activeGame === 'undercover' && (
          <Undercover onBack={() => setActiveGame(null)} />
        )}

        {activeGame === 'most-likely-to' && (
          <MostLikelyTo onBack={() => setActiveGame(null)} />
        )}

        {activeGame === 'game-421' && (
          <Game421 onBack={() => setActiveGame(null)} />
        )}

        {activeGame === 'killer' && (
          <Killer onBack={() => setActiveGame(null)} />
        )}

        {activeGame === 'never-have-i-ever' && (
          <NeverHaveIEver onBack={() => setActiveGame(null)} />
        )}

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
