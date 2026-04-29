import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { frCA } from './fr-ca';

export type Language = 'en' | 'fr' | 'es' | 'fr-ca';

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en,
  fr,
  es,
  'fr-ca': frCA,
};
