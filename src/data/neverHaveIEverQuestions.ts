export interface NHIEQuestion {
  id: string;
  en: string;
  fr: string;
  difficulty: "soft" | "hard";
  category: "habits" | "adventure" | "career" | "social" | "party" | "hot";
}

export const NHIE_QUESTIONS: NHIEQuestion[] = [
  { id: "1", en: "Never have I ever lied on my resume.", fr: "Je n'ai jamais menti sur mon CV.", difficulty: "soft", category: "career" },
  { id: "2", en: "Never have I ever been arrested.", fr: "Je n'ai jamais été arrêté.", difficulty: "hard", category: "social" },
  { id: "3", en: "Never have I ever kissed a stranger.", fr: "Je n'ai jamais embrassé un inconnu.", difficulty: "soft", category: "party" },
  { id: "4", en: "Never have I ever cheated on a partner.", fr: "Je n'ai jamais trompé un partenaire.", difficulty: "hard", category: "hot" },
  { id: "5", en: "Never have I ever traveled abroad.", fr: "Je n'ai jamais voyagé à l'étranger.", difficulty: "soft", category: "adventure" },
];
