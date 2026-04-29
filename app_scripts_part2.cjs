const fs = require('fs');
const path = require('path');

const mltPath = path.join(__dirname, 'src/data/mostLikelyToQuestions.ts');
let mltData = fs.readFileSync(mltPath, 'utf8');

const newMlt = [
  { id: 'new-hab-1', diff: 'soft', cat: 'habits', en: 'Who is most likely to sleep through their morning alarm?', fr: 'Qui est le plus susceptible de ne pas entendre son réveil ?', es: '¿Quién es más probable que se quede dormido sin escuchar su alarma?', frca: 'Qui a le plus de chances de pas entendre son cadran le matin ?' },
  { id: 'new-hab-2', diff: 'soft', cat: 'habits', en: 'Who is most likely to eat breakfast food for dinner?', fr: 'Qui est le plus susceptible de manger un petit-déjeuner au dîner ?', es: '¿Quién es más probable que coma algo de desayuno en la cena?', frca: 'Qui a le plus de chances de manger un petit-déjeuner pour souper ?' },
  { id: 'new-hab-3', diff: 'soft', cat: 'habits', en: 'Who is most likely to forget their own age?', fr: 'Qui est le plus susceptible d`oublier son propre âge ?', es: '¿Quién es más probable que olvide su propia edad?', frca: 'Qui a le plus de chances d`oublier quel âge il a ?' },
  
  { id: 'new-adv-1', diff: 'hard', cat: 'adventure', en: 'Who is most likely to go skydiving completely spontaneously?', fr: 'Qui est le plus susceptible de faire du saut en parachute de façon complètement spontanée ?', es: '¿Quién es más probable que se tire en paracaídas espontáneamente?', frca: 'Qui a le plus de chances de sauter en parachute sur un coup de tête ?' },
  { id: 'new-adv-2', diff: 'hard', cat: 'adventure', en: 'Who is most likely to survive alone in the wild for a month?', fr: 'Qui est le plus susceptible de survivre seul dans la nature pendant un mois ?', es: '¿Quién es más probable que sobreviva solo en la naturaleza por un mes?', frca: 'Qui a le plus de chances de survivre tout seul dans l`bois pendant un mois ?' },
  { id: 'new-adv-3', diff: 'soft', cat: 'adventure', en: 'Who is most likely to plan a trip and forget to book the hotel?', fr: 'Qui est le plus susceptible d`organiser un voyage et d`oublier de réserver l`hôtel ?', es: '¿Quién es más probable que planee un viaje y olvide reservar el hotel?', frca: 'Qui a le plus de chances d`organiser un voyage pis d`oublier de réserver l`hôtel ?' },

  { id: 'new-car-1', diff: 'soft', cat: 'career', en: 'Who is most likely to accidentally call their boss "Mom" or "Dad"?', fr: 'Qui est le plus susceptible d`appeler son patron "maman" ou "papa" par erreur ?', es: '¿Quién es más probable que llame accidentalmente "mamá" o "papá" a su jefe?', frca: 'Qui a le plus de chances d`appeler son boss "maman" ou "papa" par accident ?' },
  { id: 'new-car-2', diff: 'hard', cat: 'career', en: 'Who is most likely to quit their job to become a full-time influencer?', fr: 'Qui est le plus susceptible de quitter son travail pour devenir influenceur à temps plein ?', es: '¿Quién es más probable que deje su trabajo para ser influencer a tiempo completo?', frca: 'Qui a le plus de chances de lâcher sa job pour devenir influenceur à temps plein ?' },
  { id: 'new-car-3', diff: 'hard', cat: 'career', en: 'Who is most likely to become the CEO of a Fortune 500 company?', fr: 'Qui est le plus susceptible de devenir le PDG d`une entreprise du Fortune 500 ?', es: '¿Quién es más probable que se convierta en el director de una gran empresa?', frca: 'Qui a le plus de chances de devenir le boss d`une méga grosse compagnie ?' },

  { id: 'new-soc-1', diff: 'soft', cat: 'social', en: 'Who is most likely to talk their way out of a speeding ticket?', fr: 'Qui est le plus susceptible d`éviter une amende pour excès de vitesse en parlant ?', es: '¿Quién es más probable que logre librarse de una multa de tránsito hablando?', frca: 'Qui a le plus de chances de s`en sortir avec un ticket de vitesse juste en parlant au policier ?' },
  { id: 'new-soc-2', diff: 'hard', cat: 'social', en: 'Who is most likely to be recognized on the street by a stranger?', fr: 'Qui est le plus susceptible d`être reconnu dans la rue par un inconnu ?', es: '¿Quién es más probable que sea reconocido en la calle por un desconocido?', frca: 'Qui a le plus de chances d`être reconnu dans la rue par un inconnu ?' },
  { id: 'new-soc-3', diff: 'soft', cat: 'social', en: 'Who is most likely to laugh at a serious moment?', fr: 'Qui est le plus susceptible de rire pendant un moment sérieux ?', es: '¿Quién es más probable que se ría en un momento serio?', frca: 'Qui a le plus de chances de rire à un moment où tout le monde est sérieux ?' },

  { id: 'new-pty-1', diff: 'soft', cat: 'party', en: 'Who is most likely to be the last one on the dance floor?', fr: 'Qui est le plus susceptible d`être le dernier sur la piste de danse ?', es: '¿Quién es más probable que sea el último en la pista de baile?', frca: 'Qui a le plus de chances d`être le dernier sur le plancher de danse ?' },
  { id: 'new-pty-2', diff: 'hard', cat: 'party', en: 'Who is most likely to crash a wedding and blend right in?', fr: 'Qui est le plus susceptible de s`incruster à un mariage et de passer inaperçu ?', es: '¿Quién es más probable que se cuele en una boda y se integre perfectamente?', frca: 'Qui a le plus de chances de s`incruster dans un mariage pis de passer totalement inaperçu ?' },
  { id: 'new-pty-3', diff: 'hard', cat: 'party', en: 'Who is most likely to organise the best surprise party ever?', fr: 'Qui est le plus susceptible d`organiser la meilleure fête surprise de tous les temps ?', es: '¿Quién es más probable que organice la mejor fiesta sorpresa de la historia?', frca: 'Qui a le plus de chances d`organiser le meilleur party surprise de la vie ?' },

  { id: 'new-hot-1', diff: 'hard', cat: 'hot', en: 'Who is most likely to have a secret admirer right now?', fr: 'Qui est le plus susceptible d`avoir un admirateur secret en ce moment ?', es: '¿Quién es más probable que tenga un admirador secreto ahora mismo?', frca: 'Qui a le plus de chances d`avoir un admirateur secret en ce moment ?' },
  { id: 'new-hot-2', diff: 'hard', cat: 'hot', en: 'Who is most likely to flirt their way into getting free drinks?', fr: 'Qui est le plus susceptible de flirter pour obtenir des verres gratuits ?', es: '¿Quién es más probable que coquetee para conseguir bebidas gratis?', frca: 'Qui a le plus de chances de flirter pour se faire payer des verres ?' },
  { id: 'new-hot-3', diff: 'soft', cat: 'hot', en: 'Who is most likely to send a risky text entirely by mistake?', fr: 'Qui est le plus susceptible d`envoyer un message compromettant complètement par erreur ?', es: '¿Quién es más probable que envíe un mensaje arriesgado completamente por error?', frca: 'Qui a le plus de chances d`envoyer un texte risqué carrément par erreur ?' }
];

const mltStrings = newMlt.map(q => 
  "  {\n" +
  '    "id": "' + q.id + '",\n' +
  '    "difficulty": "' + q.diff + '",\n' +
  '    "category": "' + q.cat + '",\n' +
  '    "fr": "' + q.fr.replace(/'/g, "\\\'") + '",\n' +
  '    "en": "' + q.en.replace(/'/g, "\\\'") + '",\n' +
  '    "es": "' + q.es.replace(/'/g, "\\\'") + '",\n' +
  '    "fr-ca": "' + q.frca.replace(/'/g, "\\\'") + '"\n' +
  "  }"
).join(',\n');

// Find the last item before the array closing bracket
mltData = mltData.replace(/\n\];\s*$/, ",\n" + mltStrings + "\n];");
fs.writeFileSync(mltPath, mltData);

console.log("Done adding new MLT questions.");
