import React from 'react';
import { AppProvider } from './context/AppContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Home } from './components/Home';
import { Undercover } from './components/Undercover';

function MainApp() {
  const [activeGame, setActiveGame] = React.useState<string | null>(null);

  return (
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden relative flex flex-col w-[min(380px,100vw)] h-[min(760px,100vh)] max-md:rounded-none max-md:border-none shadow-xl shadow-slate-200/50">
        <div className="w-[100px] h-6 bg-slate-900 rounded-b-2xl mx-auto mb-1 flex-shrink-0 max-md:hidden" />
        
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
