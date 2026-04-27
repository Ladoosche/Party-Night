import React from 'react';
import { AppProvider } from './context/AppContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Home } from './components/Home';
import { Undercover } from './components/Undercover';

function MainApp() {
  const [activeGame, setActiveGame] = React.useState<string | null>(null);

  return (
    <div className="relative z-10 w-full min-h-screen">
      <div className="bg-white/90 backdrop-blur-md min-h-screen relative flex flex-col w-full max-w-5xl mx-auto shadow-2xl shadow-slate-200/50">
        {activeGame === null && (
          <Home onSelectGame={(id) => setActiveGame(id)} />
        )}

        {activeGame === 'undercover' && (
          <Undercover onBack={() => setActiveGame(null)} />
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
