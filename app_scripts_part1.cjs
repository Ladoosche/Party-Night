const fs = require('fs');
const path = require('path');

// 1. Update killerActions.ts
const killerActionsPath = path.join(__dirname, 'src/data/killerActions.ts');
let killerActionsData = fs.readFileSync(killerActionsPath, 'utf8');

const newFR = [
  "Marcher à reculons pendant 5 mètres",
  "Demander à quelqu'un de te chanter une chanson",
  "Faire croire que tu as perdu ton téléphone",
  "Raconter un mensonge évident sans rire",
  "Boire dans le verre de quelqu'un d'autre par 'accident'",
  "Demander un câlin à quelqu'un",
  "Dire que tu as un talent caché sans vouloir dire lequel",
  "Inventer un nouveau prénom pour quelqu'un présent",
  "Mettre la musique sur pause d'un coup",
  "Parler en chuchotant pendant 2 minutes"
];

const newEN = [
  "Walk backwards for 5 meters",
  "Ask someone to sing you a song",
  "Pretend you lost your phone",
  "Tell an obvious lie with a straight face",
  "Drink from someone else's glass by 'accident'",
  "Ask someone for a hug",
  "Say you have a hidden talent but refuse to say what it is",
  "Invent a new name for someone present",
  "Pause the music suddenly",
  "Speak in a whisper for 2 minutes"
];

const newFRCA = [
  "Marcher de reculons pendant 5 mètres",
  "Demander à quelqu'un de te chanter une toune",
  "Faire à croire que t'as perdu ton cell",
  "Conter une menterie évidente sans rire",
  "Boire dans le verre de quelqu'un d'autre par 'erreur'",
  "Demander un free hug",
  "Dire que t'as un don caché mais tu veux pas dire c'est quoi",
  "Inventer un nouveau surnom pour quelqu'un dans place",
  "Arrêter la musique d'une sec",
  "Parler en chuchotant pendant 2 minutes"
];

const newES = [
  "Caminar hacia atrás por 5 metros",
  "Pedirle a alguien que te cante una canción",
  "Fingir que perdiste tu teléfono",
  "Decir una mentira obvia sin reírte",
  "Beber del vaso de otra persona por 'accidente'",
  "Pedirle un abrazo a alguien",
  "Decir que tienes un talento oculto sin revelar cuál es",
  "Inventar un nuevo nombre para alguien presente",
  "Pausar la música de repente",
  "Hablar en susurros durante 2 minutos"
];

killerActionsData = killerActionsData.replace(
  /"FR":\s*\[/g,
  `"FR": [\n    ${newFR.map(a => `"${a}"`).join(',\n    ')},`
);
killerActionsData = killerActionsData.replace(
  /"EN":\s*\[/g,
  `"EN": [\n    ${newEN.map(a => `"${a}"`).join(',\n    ')},`
);
killerActionsData = killerActionsData.replace(
  /"FR-CA":\s*\[/g,
  `"FR-CA": [\n    ${newFRCA.map(a => `"${a}"`).join(',\n    ')},`
);
killerActionsData = killerActionsData.replace(
  /"ES":\s*\[/g,
  `"ES": [\n    ${newES.map(a => `"${a}"`).join(',\n    ')},`
);

fs.writeFileSync(killerActionsPath, killerActionsData);

// 2. Update words.ts
const wordsPath = path.join(__dirname, 'src/data/words.ts');
let wordsData = fs.readFileSync(wordsPath, 'utf8');

const newWordsEN = `    [ "Mirror", "Window", "Glass" ],
    [ "Sandwich", "Burger", "Hotdog" ],
    [ "Helicopter", "Airplane", "Drone" ],
    [ "Pool", "Jacuzzi", "Bathtub" ],
    [ "Jacket", "Coat", "Sweater" ],`;

const newWordsFR = `    [ "Miroir", "Fenêtre", "Verre" ],
    [ "Sandwich", "Burger", "Hotdog" ],
    [ "Hélicoptère", "Avion", "Drone" ],
    [ "Piscine", "Jacuzzi", "Baignoire" ],
    [ "Veste", "Manteau", "Pull" ],`;

const newWordsFRCA = `    [ "Miroir", "Fenêtre", "Verre" ],
    [ "Sandwich", "Burger", "Hotdog" ],
    [ "Hélicoptère", "Avion", "Drone" ],
    [ "Piscine", "Jacuzzi", "Bain" ],
    [ "Manteau", "Veston", "Coton ouaté" ],`;

const newWordsES = `    [ "Espejo", "Ventana", "Cristal" ],
    [ "Sándwich", "Hamburguesa", "Perrito caliente" ],
    [ "Helicóptero", "Avión", "Dron" ],
    [ "Piscina", "Jacuzzi", "Bañera" ],
    [ "Chaqueta", "Abrigo", "Suéter" ],`;

wordsData = wordsData.replace(/"EN":\s*\[/g, `"EN": [\n${newWordsEN}`);
wordsData = wordsData.replace(/"FR":\s*\[/g, `"FR": [\n${newWordsFR}`);
wordsData = wordsData.replace(/"FR-CA":\s*\[/g, `"FR-CA": [\n${newWordsFRCA}`);
wordsData = wordsData.replace(/"ES":\s*\[/g, `"ES": [\n${newWordsES}`);

fs.writeFileSync(wordsPath, wordsData);

console.log("Updated Killer actions & words. Moving to MLT/NHIE...");
