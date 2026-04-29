const fs = require('fs');
const path = require('path');

const nhiePath = path.join(__dirname, 'src/data/neverHaveIEverQuestions.ts');
let nhieData = fs.readFileSync(nhiePath, 'utf8');

const newNhie = [
  { id: 'new-nh-pty-1', diff: 'soft', cat: 'party', en: 'Never have I ever fallen asleep at a party.', fr: 'Je n`ai jamais dormi lors d`une soirée.', es: 'Yo nunca he me he quedado dormido en una fiesta.', frca: 'J`ai jamais dormi direct dans un party.' },
  { id: 'new-nh-pty-2', diff: 'hard', cat: 'party', en: 'Never have I ever been kicked out of a club.', fr: 'Je n`ai jamais été viré d`une boîte de nuit.', es: 'Yo nunca he sido expulsado de una discoteca.', frca: 'J`ai jamais été sacré dehors d`un club.' },
  { id: 'new-nh-pty-3', diff: 'soft', cat: 'party', en: 'Never have I ever sung karaoke in front of strangers.', fr: 'Je n`ai jamais chanté au karaoké devant des inconnus.', es: 'Yo nunca he cantado karaoke frente a extraños.', frca: 'J`ai jamais chanté au karaoké devant du monde que j`connais pas.' },

  { id: 'new-nh-hab-1', diff: 'soft', cat: 'habits', en: 'Never have I ever eaten food that fell on the floor.', fr: 'Je n`ai jamais mangé de la nourriture tombée par terre.', es: 'Yo nunca he comido comida que se cayó al piso.', frca: 'J`ai jamais mangé de quoi qui était tombé à terre.' },
  { id: 'new-nh-hab-2', diff: 'soft', cat: 'habits', en: 'Never have I ever worn the same clothes for three days.', fr: 'Je n`ai jamais porté les mêmes vêtements pendant trois jours.', es: 'Yo nunca he usado la misma ropa durante tres días.', frca: 'J`ai jamais porté le même linge pendant trois jours de suite.' },
  { id: 'new-nh-hab-3', diff: 'soft', cat: 'habits', en: 'Never have I ever forgotten to brush my teeth for a whole day.', fr: 'Je n`ai jamais oublié de me brosser les dents toute une journée.', es: 'Yo nunca he olvidado lavarme los dientes en todo un día.', frca: 'J`ai jamais oublié de me brosser les dents pendant toute une journée.' },

  { id: 'new-nh-soc-1', diff: 'hard', cat: 'social', en: 'Never have I ever ghosted someone after a first date.', fr: 'Je n`ai jamais ghosté quelqu`un après un premier rendez-vous.', es: 'Yo nunca he ignorado a alguien después de una primera cita.', frca: 'J`ai jamais ghosté quelqu`un après une première date.' },
  { id: 'new-nh-soc-2', diff: 'soft', cat: 'social', en: 'Never have I ever sent a text to the wrong person.', fr: 'Je n`ai jamais envoyé un message à la mauvaise personne.', es: 'Yo nunca he enviado un mensaje a la persona equivocada.', frca: 'J`ai jamais envoyé un texte à la mauvaise personne dans mes contacts.' },
  { id: 'new-nh-soc-3', diff: 'soft', cat: 'social', en: 'Never have I ever stood someone up.', fr: 'Je n`ai jamais posé un lapin à quelqu`un.', es: 'Yo nunca he dejado plantado a alguien.', frca: 'J`ai jamais posé un lapin à quelqu`un.' },

  { id: 'new-nh-adv-1', diff: 'soft', cat: 'adventure', en: 'Never have I ever traveled to another country alone.', fr: 'Je n`ai jamais voyagé seul(e) dans un autre pays.', es: 'Yo nunca he viajado a otro país solo.', frca: 'J`ai jamais voyagé tout seul dans un autre pays.' },
  { id: 'new-nh-adv-2', diff: 'hard', cat: 'adventure', en: 'Never have I ever jumped from a moving vehicle.', fr: 'Je n`ai jamais sauté d`un véhicule en mouvement.', es: 'Yo nunca he saltado de un vehículo en movimiento.', frca: 'J`ai jamais sauté en bas d`un véhicule qui roulait.' },
  { id: 'new-nh-adv-3', diff: 'hard', cat: 'adventure', en: 'Never have I ever hitchhiked.', fr: 'Je n`ai jamais fait de stop.', es: 'Yo nunca he hecho autostop.', frca: 'J`ai jamais fait de pouce.' },

  { id: 'new-nh-hot-1', diff: 'hard', cat: 'hot', en: 'Never have I ever had an office romance.', fr: 'Je n`ai jamais eu de romance au bureau.', es: 'Yo nunca he tenido un romance en la oficina.', frca: 'J`ai jamais eu d`amourette à la job.' },
  { id: 'new-nh-hot-2', diff: 'hard', cat: 'hot', en: 'Never have I ever sent a nude photo.', fr: 'Je n`ai jamais envoyé de photo de moi nu(e).', es: 'Yo nunca he enviado una foto mía desnudo(a).', frca: 'J`ai jamais envoyé de photo de moi tout nu.' },
  { id: 'new-nh-hot-3', diff: 'soft', cat: 'hot', en: 'Never have I ever flirted to get out of trouble.', fr: 'Je n`ai jamais flirté pour me sortir d`un problème.', es: 'Yo nunca he coqueteado para salir de un problema.', frca: 'J`ai jamais flirté avec le monde pour me sortir du trouble.' },

  { id: 'new-nh-car-1', diff: 'soft', cat: 'career', en: 'Never have I ever lied on my resume.', fr: 'Je n`ai jamais menti sur mon CV.', es: 'Yo nunca he mentido en mi currículum.', frca: 'J`ai jamais compté de menteries sur mon CV.' },
  { id: 'new-nh-car-2', diff: 'soft', cat: 'career', en: 'Never have I ever fallen asleep during a meeting.', fr: 'Je n`ai jamais dormi pendant une réunion.', es: 'Yo nunca he me he quedado dormido en una reunión.', frca: 'J`ai jamais cogné des clous pendant une réunion.' },
  { id: 'new-nh-car-3', diff: 'hard', cat: 'career', en: 'Never have I ever quit a job on the first day.', fr: 'Je n`ai jamais démissionné le premier jour.', es: 'Yo nunca he renunciado en mi primer día de trabajo.', frca: 'J`ai jamais démissionné direct la première journée.' }
];

const nhieStrings = newNhie.map(q => 
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


nhieData = nhieData.replace(/\n\];\s*$/, ",\n" + nhieStrings + "\n];");
fs.writeFileSync(nhiePath, nhieData);

console.log("Done adding new NHIE questions.");
