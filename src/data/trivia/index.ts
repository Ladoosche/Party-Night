export interface TypeDef {
  id: string;
  difficulty: 'soft' | 'hard';
  category: 'history' | 'science' | 'pop' | 'geo';
  text: string;
  answer: string;
  hint: string;
}

export const getTriviaQuestions = async (lang: string): Promise<TypeDef[]> => {
  switch (lang) {
    case 'fr': return (await import('./fr')).fr;
    case 'es': return (await import('./es')).es;
    case 'fr-ca': return (await import('./fr-ca')).frca;
    case 'en':
    default: return (await import('./en')).en;
  }
};