export interface TypeDef {
  id: string;
  text: string;
  difficulty: 'soft' | 'hard';
  category: 'habits' | 'adventure' | 'career' | 'social' | 'party' | 'hot';
}

export const getMLTQuestions = async (lang: string): Promise<TypeDef[]> => {
  switch (lang) {
    case 'fr': return (await import('./fr')).fr;
    case 'es': return (await import('./es')).es;
    case 'fr-ca': return (await import('./fr-ca')).frca;
    case 'en': 
    default: return (await import('./en')).en;
  }
};