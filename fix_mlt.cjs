const fs = require('fs');
const path = require('path');

const mltPath = path.join(__dirname, 'src/data/mostLikelyToQuestions.ts');
let mltData = fs.readFileSync(mltPath, 'utf8');
mltData = mltData.replace(/"maman"/g, "'maman'").replace(/"papa"/g, "'papa'").replace(/"Mom"/g, "'Mom'").replace(/"Dad"/g, "'Dad'").replace(/"mamá"/g, "'mamá'").replace(/"papá"/g, "'papá'");
fs.writeFileSync(mltPath, mltData);
