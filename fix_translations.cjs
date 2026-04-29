const fs = require('fs');
const path = require('path');

const locales = ['en', 'fr', 'es', 'fr-ca'];

const transMap = {
  en: {
    'trivia-hint': 'Show Hint',
    'trivia-answer': 'Show Answer'
  },
  fr: {
    'trivia-hint': 'Indice',
    'trivia-answer': 'Réponse'
  },
  'fr-ca': {
    'trivia-hint': 'Indice',
    'trivia-answer': 'Réponse'
  },
  es: {
    'trivia-hint': 'Pista',
    'trivia-answer': 'Respuesta'
  }
};

for (const loc of locales) {
  const p = path.join(__dirname, 'src/i18n', `${loc}.ts`);
  let data = fs.readFileSync(p, 'utf8');
  
  const injectKeys = Object.entries(transMap[loc]).map(([k, v]) => `  "${k}": "${v}"`).join(',\n');
  
  data = data.replace(/\n};\s*$/, `,\n${injectKeys}\n};\n`);
  fs.writeFileSync(p, data);
}
