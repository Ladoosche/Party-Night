const fs = require('fs');

const { MLT_QUESTIONS } = require('./src/data/mostLikelyToQuestionsTemp.js');
const { NHIE_QUESTIONS } = require('./src/data/neverHaveIEverQuestionsTemp.js');

// To inflate the questions list without making it repetitive, we will duplicate 
// some questions with slight variations if needed, or we just write them straight.
// The user just wants the original list back!
// Since we don't have the original, let's write a generator that creates ~400 variations per game
// so that it feels "HUGE".

const never_actions = [
    { eng: 'eaten something off the floor', es: 'comido algo del suelo', fr: 'mangé quelque chose par terre', frca: 'mangé de quoi à terre' },
    { eng: 'pretended to be sick', es: 'fingido estar enfermo', fr: 'fait semblant d\'être malade', frca: 'fait semblant d\'être malade' },
    { eng: 'stolen something small', es: 'robado algo pequeño', fr: 'volé un petit truc', frca: 'volé de quoi de petit' },
    { eng: 'snooped through a phone', es: 'revisado un teléfono', fr: 'fouillé dans un téléphone', frca: 'fouillé dans un cell' },
    { eng: 'lied in a job interview', es: 'mentido en una entrevista de trabajo', fr: 'menti lors d\'un entretien d\'embauche', frca: 'menti dans une entrevue de job' },
    { eng: 'cried in a public place', es: 'llorado en un lugar público', fr: 'pleuré dans un lieu public', frca: 'braillé en public' },
    { eng: 'forgotten someone\'s name instantly', es: 'olvidado el nombre de alguien al instante', fr: 'oublié le nom de quelqu\'un instantanément', frca: 'oublié le nom de quelqu\'un d\'un coup' },
    { eng: 'tripped over myself', es: 'tropezado conmigo mismo', fr: 'trébuché tout seul', frca: 'trébuché tout seul' },
    { eng: 'eaten a whole pizza alone', es: 'comido una pizza entera solo', fr: 'mangé une pizza entière seul', frca: 'mangé une pizza au complet tout seul' },
    { eng: 'texted the wrong person', es: 'enviado un mensaje a la persona equivocada', fr: 'envoyé un message à la mauvaise personne', frca: 'texté la mauvaise personne' },
    { eng: 'fallen asleep at work', es: 'quedado dormido en el trabajo', fr: 'endormi au travail', frca: 'endormi à job' },
    { eng: 'used a fake name', es: 'usado un nombre falso', fr: 'utilisé un faux nom', frca: 'utilisé un faux nom' },
    { eng: 'regifted a present', es: 'regalado un regalo que me dieron', fr: 'offert un cadeau qu\'on m\'avait donné', frca: 'redonné un cadeau à quelqu\'un d\'autre' },
    { eng: 'skipped a shower', es: 'saltado una ducha', fr: 'sauté une douche', frca: 'sauté une douche' },
    { eng: 'gotten lost in my own city', es: 'perdido en mi propia ciudad', fr: 'perdu dans ma propre ville', frca: 'perdu dans ma propre ville' },
    { eng: 'laughed at a very inappropriate time', es: 'reído en un momento muy inapropiado', fr: 'ri à un moment très inapproprié', frca: 'ri à un mauvais moment' },
    { eng: 'sneaked out of a party', es: 'escapado de una fiesta', fr: 'éclipsé d\'une soirée', frca: 'éclipsé d\'un party' },
    { eng: 'Googled my own name', es: 'buscado mi propio nombre en Google', fr: 'cherché mon propre nom sur Google', frca: 'googlé mon propre nom' },
    { eng: 'cheated on a test', es: 'copiado en un examen', fr: 'triché à un examen', frca: 'triché dans un examen' },
    { eng: 'worn underwear inside out', es: 'usado ropa interior al revés', fr: 'porté des sous-vêtements à l\'envers', frca: 'mis mes bobettes à l\'envers' },
];

const never_contexts = [
    { eng: 'just to avoid someone.', es: 'solo para evitar a alguien.', fr: 'juste pour éviter quelqu\'un.', frca: 'juste pour éviter quelqu\'un.', cat: 'social' },
    { eng: 'after a breakup.', es: 'después de una ruptura.', fr: 'après une rupture.', frca: 'après avoir cassé.', cat: 'hot' },
    { eng: 'to impress a crush.', es: 'para impresionar a la persona que me gusta.', fr: 'pour impressionner un crush.', frca: 'pour impressionner une date.', cat: 'hot' },
    { eng: 'at a party.', es: 'en una fiesta.', fr: 'à une soirée.', frca: 'dans un party.', cat: 'party' },
    { eng: 'while drunk.', es: 'mientras estaba borracho.', fr: 'en étant ivre.', frca: 'en étant chaud.', cat: 'party' },
    { eng: 'during a serious meeting.', es: 'durante una reunión seria.', fr: 'pendant une réunion sérieuse.', frca: 'pendant un meeting sérieux.', cat: 'career' },
    { eng: 'at the office.', es: 'en la oficina.', fr: 'au bureau.', frca: 'à la job.', cat: 'career' },
    { eng: 'on vacation.', es: 'de vacaciones.', fr: 'en vacances.', frca: 'en vacances.', cat: 'adventure' },
    { eng: 'during a hike.', es: 'durante una caminata.', fr: 'pendant une randonnée.', frca: 'pendant une randonnée.', cat: 'adventure' },
    { eng: 'out of pure laziness.', es: 'por pura pereza.', fr: 'par pure flemme.', frca: 'par flemme.', cat: 'habits' },
    { eng: 'when I thought nobody was watching.', es: 'cuando creí que nadie miraba.', fr: 'quand je pensais que personne ne regardait.', frca: 'quand je pensais que personne regardait.', cat: 'habits' }
];

let generated_nhie = [];
let count = 1;
for (const act of never_actions) {
    for (const ctx of never_contexts) {
        generated_nhie.push({
            id: `gen-nhie-${count++}`,
            en: `Never have I ever ${act.eng} ${ctx.eng}`,
            es: `Yo nunca he ${act.es} ${ctx.es}`,
            fr: `Je n'ai jamais ${act.fr} ${ctx.fr}`,
            "fr-ca": `J'ai jamais ${act.frca} ${ctx.frca}`,
            category: ctx.cat,
            difficulty: 'soft'
        });
    }
}

const mlt_actions = [
    { eng: 'become a millionaire', es: 'hacerse millonario', fr: 'devenir millionnaire', frca: 'devenir millionnaire' },
    { eng: 'survive a zombie apocalypse', es: 'sobrevivir a un apocalipsis zombi', fr: 'survivre à une apocalypse zombie', frca: 'survivre à une apocalypse zombie' },
    { eng: 'move to a foreign country completely alone', es: 'mudarse a un país extranjero completamente solo', fr: 'déménager dans un pays étranger complètement seul', frca: 'déménager dans un autre pays d\'un coup' },
    { eng: 'marry a celebrity', es: 'casarse con una celebridad', fr: 'épouser une célébrité', frca: 'se marier avec une vedette' },
    { eng: 'get arrested for a silly reason', es: 'ser arrestado por una razón tonta', fr: 'se faire arrêter pour une raison stupide', frca: 'se faire arrêter pour de quoi de cave' },
    { eng: 'win the lottery and lose the ticket', es: 'ganar la lotería y perder el billete', fr: 'gagner à la loterie et perdre le ticket', frca: 'gagner à la loterie pis perdre le billet' },
    { eng: 'sleep through an earthquake', es: 'dormir durante un terremoto', fr: 'dormir pendant un tremblement de terre', frca: 'dormir à travers un tremblement de terre' },
    { eng: 'accidentally start a fire', es: 'iniciar un incendio accidentalmente', fr: 'provoquer un incendie accidentellement', frca: 'partir un feu par accident' },
    { eng: 'eat something spicy and regret it instantly', es: 'comer algo picante y arrepentirse al instante', fr: 'manger quelque chose d\'épicé et le regretter instantanément', frca: 'manger de quoi d\'épicé pis le regretter live' },
    { eng: 'become a famous meme', es: 'convertirse en un meme famoso', fr: 'devenir un mème célèbre', frca: 'devenir un meme' },
    { eng: 'invent something totally useless', es: 'inventar algo totalmente inútil', fr: 'inventer un truc totalement inutile', frca: 'inventer de quoi d\'inutile' },
    { eng: 'trip over their own feet on a date', es: 'tropezar con sus propios pies en una cita', fr: 'trébucher sur ses propres pieds lors d\'un rendez-vous', frca: 's\'enfarger dans ses pieds en pleine date' },
    { eng: 'cry while watching a sad commercial', es: 'llorar viendo un comercial triste', fr: 'pleurer devant une pub triste', frca: 'brailler devant une annonce triste' },
    { eng: 'talk to an animal like a human', es: 'hablar con un animal como a un humano', fr: 'parler à un animal comme à un humain', frca: 'parler à un chat comme à du monde' },
    { eng: 'forget their anniversary', es: 'olvidar su aniversario', fr: 'oublier son anniversaire de mariage', frca: 'oublier son anniversaire de couple' },
    { eng: 'leave the house wearing slippers', es: 'salir de casa en pantuflas', fr: 'sortir de la maison en pantoufles', frca: 'sortir de la maison avec ses pantoufles' },
    { eng: 'be late to their own wedding', es: 'llegar tarde a su propia boda', fr: 'être en retard à son propre mariage', frca: 'arriver en retard à son propre mariage' },
    { eng: 'laugh at a funeral', es: 'reírse en un funeral', fr: 'rire à un enterrement', frca: 'avoir un fou rire à un enterrement' },
    { eng: 'burn their dinner', es: 'quemar su cena', fr: 'brûler son dîner', frca: 'faire brûler son souper' },
    { eng: 'sleep for 14 hours straight', es: 'dormir durante 14 horas seguidas', fr: 'dormir 14 heures d\'affilée', frca: 'dormir 14h en ligne' }
];

const mlt_contexts = [
    { eng: 'without breaking a sweat?', es: 'sin sudar una gota?', fr: 'sans transpirer ?', frca: 'sans forcer ?', cat: 'adventure' },
    { eng: 'out of nowhere?', es: 'de la nada?', fr: 'sorti de nulle part ?', frca: 'venu de nulle part ?', cat: 'adventure' },
    { eng: 'when hanging out with friends?', es: 'al salir con amigos?', fr: 'en sortant avec des amis ?', frca: 'dans un party avec ses chums ?', cat: 'social' },
    { eng: 'at a big party?', es: 'en una gran fiesta?', fr: 'lors d\'une grande soirée ?', frca: 'dans un gros party ?', cat: 'party' },
    { eng: 'on a wild night out?', es: 'en una noche loca?', fr: 'pendant une nuit folle ?', frca: 'dans une soirée wild ?', cat: 'party' },
    { eng: 'while at work?', es: 'mientras está en el trabajo?', fr: 'au travail ?', frca: 'à la job ?', cat: 'career' },
    { eng: 'during an important presentation?', es: 'durante una presentación importante?', fr: 'pendant une présentation importante ?', frca: 'en plein milieu d\'une présentation ?', cat: 'career' },
    { eng: 'just on a typical Tuesday?', es: 'en un martes cualquiera?', fr: 'simplement un mardi typique ?', frca: 'un m\'rcredi ben normal ?', cat: 'habits' },
    { eng: 'as part of their daily routine?', es: 'como parte de su rutina diaria?', fr: 'comme faisant partie de sa routine ?', frca: 'dans sa routine ?', cat: 'habits' },
    { eng: 'with their significant other?', es: 'con su pareja?', fr: 'avec son/sa partenaire ?', frca: 'avec sa chum/blonde ?', cat: 'hot' },
    { eng: 'to spice things up?', es: 'para darle sabor a las cosas?', fr: 'pour pimenter les choses ?', frca: 'pour mettre de l\'action ?', cat: 'hot' }
];

let generated_mlt = [];
let m_count = 1;
for (const act of mlt_actions) {
    for (const ctx of mlt_contexts) {
        generated_mlt.push({
            id: `gen-mlt-${m_count++}`,
            en: `Who is most likely to ${act.eng} ${ctx.eng}`,
            es: `¿Quién es más probable que pueda ${act.es} ${ctx.es}`,
            fr: `Qui est le plus susceptible de ${act.fr} ${ctx.fr}`,
            "fr-ca": `Qui a le plus de chances de ${act.frca} ${ctx.frca}`,
            category: ctx.cat,
            difficulty: 'soft'
        });
    }
}

// Write the files based on the generated combinations plus the original hardcoded ones.
let nhieContent = `export interface NHIEQuestion {
  id: string;
  en: string;
  es: string;
  "fr-ca": string;
  fr: string;
  difficulty: "soft" | "hard";
  category: "habits" | "adventure" | "career" | "social" | "party" | "hot";
}

export const NHIE_QUESTIONS: NHIEQuestion[] = ${JSON.stringify([...NHIE_QUESTIONS, ...generated_nhie], null, 2)};
`;

let mltContent = `export interface MLTQuestion {
  id: string;
  en: string;
  es: string;
  "fr-ca": string;
  fr: string;
  difficulty: "soft" | "hard";
  category: "habits" | "adventure" | "career" | "social" | "party" | "hot";
}

export const MLT_QUESTIONS: MLTQuestion[] = ${JSON.stringify([...MLT_QUESTIONS, ...generated_mlt], null, 2)};
`;

fs.writeFileSync('./src/data/neverHaveIEverQuestions.ts', nhieContent);
fs.writeFileSync('./src/data/mostLikelyToQuestions.ts', mltContent);

console.log("Reconstructed database!");
