export const getWheelActions = async (lang: string): Promise<string[]> => {
  switch (lang.toUpperCase()) {
    case 'FR':
    case 'FR-CA':
      return (await import('./fr')).fr;
    case 'ES':
      return (await import('./es')).es;
    case 'EN':
    default:
      return (await import('./en')).en;
  }
};
