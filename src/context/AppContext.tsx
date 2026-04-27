import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr';

export interface Player {
  id: string;
  name: string;
  isActive?: boolean;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    'app-title': 'Game Night',
    'app-sub': 'Choose your game',
    'lang-label': 'Language',
    'players-label': 'Players',
    'games-label': 'Games',
    'uc-title': 'Undercover',
    'uc-desc': "Find the spy hiding among civilians before it's too late.",
    'new-game-title': 'New game',
    'coming-soon': 'Soon',
    'coming-soon-desc': 'Another game is coming...',
    'player-input-placeholder': 'Player name',
    'err-empty': 'Please enter a name.',
    'err-duplicate': 'This name is already in the list.',
    'err-not-enough': 'At least 3 active players are required to play.',
    'start-game': 'Start game',
    'back': 'Back',
    'next': 'Next',
    'civilians-win': 'Civilians win!',
    'undercover-wins': 'Undercovers win!',
    'mrwhite-wins': 'Mr. White wins!',
    'role-civilian': 'Civilian',
    'role-undercover': 'Undercover',
    'role-mrwhite': 'Mr. White',
    'end-title': 'Game Over',
    'roles-recap': 'Roles Summary',
    'active-label': 'Players active',
    'reveal-word': 'Reveal word',
    'hide-word': 'HIDE WORD',
    'pass-title': 'Pass the device',
    'pass-device-desc': 'Pass the device to this player to reveal their secret word.',
    'your-secret-word': 'Your secret word is',
    'you-have-no-word': 'You have no word!',
    'keep-it-secret': 'Keep it secret • Stay alert',
    'round-label': 'Round',
    'word-check-btn': 'Word Check',
    'word-check-title': 'Word Check',
    'word-check-desc': 'Select who wants to check their word. Beware of cheaters!',
    'word-checked': 'Checked {0} times',
    'word-rechecked': 'Rechecked {0} times',
    'secret-word-for': 'Secret word for {0}',
    'done-btn': 'Done',
    'game-settings': 'Game Settings',
    'customise-match': 'Customise your match',
    'undercovers': 'Undercovers',
    'mr-white': 'Mr. White',
    'hide-words': 'Hide words from host',
    'word-language': 'Word language',
    'word-pair': 'Word Pair',
    'civilian-word': 'Civilian word',
    'undercover-word': 'Undercover word',
    'suggest-words': '+ Generate new words',
    'random-pair-desc': 'A random pair will be chosen automatically based on the language.',
    'play-again': 'Play again',
    'exit-to-home': 'Exit to home',
    'mrwhite-elimination': 'Mr. White Elimination',
    'mrwhite-guess-desc': 'Can you guess the secret civilian word and steal the victory?',
    'mrwhite-guess-btn': 'I guessed it!',
    'mrwhite-dont-know-btn': 'I don\'t know',
    'give-clue-vote': 'Give your clue, then vote for the suspect!',
    'role-civilian-desc': 'Share a common word. Describe it without giving it away.',
    'role-undercover-desc': 'Have a different word. Try to blend in and guess the civilian word!',
    'role-mrwhite-desc': 'Has no word at all! Listen carefully to clues and try to steal the win by guessing the secret word.',
    'suggested-count': 'Suggested: {0}',
  },
  fr: {
    'app-title': 'Soirée Jeux',
    'app-sub': 'Choisissez votre jeu',
    'lang-label': 'Langue',
    'players-label': 'Joueurs',
    'games-label': 'Jeux',
    'uc-title': 'Undercover',
    'uc-desc': "Trouvez l'espion caché parmi les civils avant qu'il ne soit trop tard.",
    'new-game-title': 'Nouveau jeu',
    'coming-soon': 'Prochainement',
    'coming-soon-desc': 'Un autre jeu arrive bientôt...',
    'player-input-placeholder': 'Nom du joueur',
    'err-empty': 'Veuillez entrer un nom.',
    'err-duplicate': 'Ce nom est déjà dans la liste.',
    'err-not-enough': 'Au moins 3 joueurs actifs sont nécessaires pour jouer.',
    'start-game': 'Commencer',
    'back': 'Retour',
    'next': 'Suivant',
    'civilians-win': 'Les civils gagnent !',
    'undercover-wins': 'Les infiltrés gagnent !',
    'mrwhite-wins': 'Mr. White gagne !',
    'role-civilian': 'Civil',
    'role-undercover': 'Infiltré',
    'role-mrwhite': 'Mr. White',
    'end-title': 'Partie Terminée',
    'roles-recap': 'Récapitulatif des rôles',
    'active-label': 'Joueurs actifs',
    'reveal-word': 'Voir mon mot',
    'hide-word': 'CACHER LE MOT',
    'pass-title': 'Passez le téléphone',
    'pass-device-desc': 'Passez le téléphone à ce joueur pour révéler son mot secret.',
    'your-secret-word': 'Votre mot secret est',
    'you-have-no-word': 'Vous n\'avez aucun mot !',
    'keep-it-secret': 'Gardez-le secret • Restez sur vos gardes',
    'round-label': 'Tour',
    'word-check-btn': 'Vérifier son mot',
    'word-check-title': 'Vérification',
    'word-check-desc': 'Sélectionnez qui veut vérifier son mot. Attention aux tricheurs !',
    'word-checked': 'Vérifié {0} fois',
    'word-rechecked': 'Revérifié {0} fois',
    'secret-word-for': 'Mot secret de {0}',
    'done-btn': 'Terminé',
    'game-settings': 'Paramètres de la partie',
    'customise-match': 'Personnalisez votre partie',
    'undercovers': 'Infiltrés',
    'mr-white': 'Mr. White',
    'hide-words': 'Cacher les mots à l\'hôte',
    'word-language': 'Langue des mots',
    'word-pair': 'Paire de mots',
    'civilian-word': 'Mot civil',
    'undercover-word': 'Mot infiltré',
    'suggest-words': '+ Générer d\'autres mots',
    'random-pair-desc': 'Une paire aléatoire sera choisie automatiquement en fonction de la langue.',
    'play-again': 'Rejouer',
    'exit-to-home': 'Quitter',
    'mrwhite-elimination': 'Élimination de Mr. White',
    'mrwhite-guess-desc': 'Pouvez-vous deviner le mot civil et voler la victoire ?',
    'mrwhite-guess-btn': 'Je l\'ai deviné !',
    'mrwhite-dont-know-btn': 'Je ne sais pas',
    'give-clue-vote': 'Donnez votre indice, puis votez !',
    'role-civilian-desc': 'Partagez un mot commun. Décrivez-le sans le révéler.',
    'role-undercover-desc': 'Ayez un mot différent. Essayez de vous fondre dans la masse et de deviner le mot civil !',
    'role-mrwhite-desc': 'N\'a aucun mot ! Écoutez attentivement les indices et essayez de voler la victoire en devinant le mot secret.',
    'suggested-count': 'Suggéré : {0}',
  }
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('uc_lang');
    return (saved as Language) || 'en';
  });

  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = localStorage.getItem('uc_players');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('uc_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('uc_players', JSON.stringify(players));
  }, [players]);

  const t = (key: string) => {
    return TRANSLATIONS[language][key] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, players, setPlayers, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}
