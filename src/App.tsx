import React from 'react';
import { AppProvider } from './context/AppContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Home } from './components/Home';
import { Undercover } from './components/Undercover';

function MainApp() {
  const [activeGame, setActiveGame] = React.useState<string | null>(null);

  return (
    <div className="relative z-10 w-full h-full flex items-center justify-center p-4 max-md:p-0">
      <div className="bg-white/95 backdrop-blur-md md:rounded-2xl overflow-hidden relative flex flex-col w-full max-w-4xl h-full shadow-2xl max-md:rounded-none shadow-slate-200/50 md:h-[min(90vh,900px)]">
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
