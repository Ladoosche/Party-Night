export interface MLTQuestion {
  id: string;
  en: string;
  fr: string;
  difficulty: 'soft' | 'hard';
  category: 'habits' | 'adventure' | 'career' | 'social' | 'party' | 'hot';
}

export const MLT_QUESTIONS: MLTQuestion[] = [
  // --- HABITS (VIE QUOTIDIENNE) ---
  { id: 'hab-s1', difficulty: 'soft', category: 'habits', fr: "Perdre ses clés alors qu'il les a dans la main ?", en: "Lose their keys while holding them?" },
  { id: 'hab-s2', difficulty: 'soft', category: 'habits', fr: "Arriver avec 1h de retard à son propre anniversaire ?", en: "Arrive 1 hour late to their own birthday party?" },
  { id: 'hab-s3', difficulty: 'soft', category: 'habits', fr: "S'endormir en plein milieu d'un film d'action ?", en: "Fall asleep in the middle of an action movie?" },
  { id: 'hab-s4', difficulty: 'soft', category: 'habits', fr: "Oublier le prénom de quelqu'un 2 secondes après les présentations ?", en: "Forget someone's name 2 seconds after being introduced?" },
  { id: 'hab-s5', difficulty: 'soft', category: 'habits', fr: "Rater son arrêt de bus car il est sur son téléphone ?", en: "Miss their bus stop because they are on their phone?" },
  { id: 'hab-s6', difficulty: 'soft', category: 'habits', fr: "Manger le même plat tous les jours pendant un mois ?", en: "Eat the same meal every day for a month?" },
  { id: 'hab-s7', difficulty: 'soft', category: 'habits', fr: "Appuyer sur 'Snooze' 10 fois de suite ?", en: "Hit 'Snooze' 10 times in a row?" },
  { id: 'hab-s8', difficulty: 'soft', category: 'habits', fr: "Se perdre avec un GPS allumé ?", en: "Get lost even with GPS on?" },
  { id: 'hab-h1', difficulty: 'hard', category: 'habits', fr: "Vider son compte en banque sur un coup de tête ?", en: "Empty their bank account on a whim?" },
  { id: 'hab-h2', difficulty: 'hard', category: 'habits', fr: "Se faire bannir d'un restaurant à volonté ?", en: "Get banned from an all-you-can-eat restaurant?" },
  { id: 'hab-h3', difficulty: 'hard', category: 'habits', fr: "Mentir sur son âge pour payer moins cher ?", en: "Lie about their age to pay less?" },
  { id: 'hab-h4', difficulty: 'hard', category: 'habits', fr: "Voler des stylos au bureau ?", en: "Steal pens from the office?" },

  // --- ADVENTURE (AVENTURE) ---
  { id: 'adv-s1', difficulty: 'soft', category: 'adventure', fr: "Survivre seul sur une île déserte ?", en: "Survive alone on a deserted island?" },
  { id: 'adv-s2', difficulty: 'soft', category: 'adventure', fr: "Accepter un aller simple pour Mars ?", en: "Accept a one-way trip to Mars?" },
  { id: 'adv-s3', difficulty: 'soft', category: 'adventure', fr: "Gagner Koh-Lanta ?", en: "Win a survival reality show?" },
  { id: 'adv-s4', difficulty: 'soft', category: 'adventure', fr: "Savoir faire un feu sans briquet ?", en: "Know how to make a fire without a lighter?" },
  { id: 'adv-h1', difficulty: 'hard', category: 'adventure', fr: "Mourir en premier dans un film d'horreur ?", en: "Die first in a horror movie?" },
  { id: 'adv-h2', difficulty: 'hard', category: 'adventure', fr: "Devenir un fugitif international ?", en: "Become an international fugitive?" },
  { id: 'adv-h3', difficulty: 'hard', category: 'adventure', fr: "Rejoindre une secte par accident ?", en: "Join a cult by accident?" },

  // --- CAREER (CARRIÈRE) ---
  { id: 'car-s1', difficulty: 'soft', category: 'career', fr: "Devenir millionnaire avant 40 ans ?", en: "Become a millionaire before 40?" },
  { id: 'car-s2', difficulty: 'soft', category: 'career', fr: "Inventer un objet génial ?", en: "Invent a brilliant object?" },
  { id: 'car-s3', difficulty: 'soft', category: 'career', fr: "Prendre sa retraite à 30 ans ?", en: "Retire at 30?" },
  { id: 'car-h1', difficulty: 'hard', category: 'career', fr: "Devenir un dictateur ?", en: "Become a dictator?" },
  { id: 'car-h2', difficulty: 'hard', category: 'career', fr: "Se faire virer le premier jour ?", en: "Get fired on their first day?" },
  { id: 'car-h3', difficulty: 'hard', category: 'career', fr: "Mentir sur tout son CV ?", en: "Lie about everything on their CV?" },

  // --- SOCIAL (RELATIONS) ---
  { id: 'soc-s1', difficulty: 'soft', category: 'social', fr: "Tomber amoureux d'un inconnu ?", en: "Fall in love with a stranger?" },
  { id: 'soc-s2', difficulty: 'soft', category: 'social', fr: "Se marier sur un coup de tête ?", en: "Get married on a whim?" },
  { id: 'soc-s3', difficulty: 'soft', category: 'social', fr: "Oublier l'anniversaire de son meilleur ami ?", en: "Forget their best friend's birthday?" },
  { id: 'soc-h1', difficulty: 'hard', category: 'social', fr: "Révéler un secret d'état ?", en: "Reveal a state secret?" },
  { id: 'soc-h2', difficulty: 'hard', category: 'social', fr: "Ghoster après 3 ans ?", en: "Ghost someone after 3 years?" },
  { id: 'soc-h3', difficulty: 'hard', category: 'social', fr: "Sortir avec l'ex d'un ami ?", en: "Date a friend's ex?" },

  // --- PARTY (SOIRÉE) ---
  { id: 'par-s1', difficulty: 'soft', category: 'party', fr: "Danser sur les tables ?", en: "Dance on tables?" },
  { id: 'par-s2', difficulty: 'soft', category: 'party', fr: "Chanter faux au karaoké ?", en: "Sing out of tune at karaoke?" },
  { id: 'par-s3', difficulty: 'soft', category: 'party', fr: "Commander des pizzas à 3h du matin ?", en: "Order pizza at 3 AM?" },
  { id: 'par-h1', difficulty: 'hard', category: 'party', fr: "S'incruster sans invitation ?", en: "Crash a party without an invitation?" },
  { id: 'par-h2', difficulty: 'hard', category: 'party', fr: "Finir en garde à vue ?", en: "End up in police custody?" },
  { id: 'par-h3', difficulty: 'hard', category: 'party', fr: "Se réveiller dans un autre pays ?", en: "Wake up in another country?" },

  // --- HOT (SEXUALITÉ) ---
  { id: 'hot-s1', difficulty: 'soft', category: 'hot', fr: "S'endormir juste après l'acte ?", en: "Fall asleep right after sex?" },
  { id: 'hot-s2', difficulty: 'soft', category: 'hot', fr: "Envoyer un SMS coquin à la mauvaise personne ?", en: "Send a naughty text to the wrong person?" },
  { id: 'hot-s3', difficulty: 'soft', category: 'hot', fr: "Oublier le prénom d'un partenaire d'un soir ?", en: "Forget a one-night stand's name?" },
  { id: 'hot-s4', difficulty: 'soft', category: 'hot', fr: "Faire l'amour dans une tente de camping ?", en: "Have sex in a camping tent?" },
  { id: 'hot-h1', difficulty: 'hard', category: 'hot', fr: "Participer à une orgie ?", en: "Participate in an orgy?" },
  { id: 'hot-h2', difficulty: 'hard', category: 'hot', fr: "Filmer ses ébats sexuels ?", en: "Film their sexual encounters?" },
  { id: 'hot-h3', difficulty: 'hard', category: 'hot', fr: "Avoir un compte OnlyFans secret ?", en: "Have a secret OnlyFans account?" },
  { id: 'hot-h4', difficulty: 'hard', category: 'hot', fr: "Faire l'amour dans un lieu sacré (église, etc.) ?", en: "Have sex in a sacred place (church, etc.)?" },
];
