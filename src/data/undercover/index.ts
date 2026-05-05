export const getWordGroups = async (lang: string) => {
  switch (lang.toUpperCase()) {
    case 'FR': return (await import('./fr')).fr;
    case 'FR-CA': return (await import('./fr-ca')).frca;
    case 'ES': return (await import('./es')).es;
    case 'EN':
    default: return (await import('./en')).en;
  }
};