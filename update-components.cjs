const fs = require('fs');

function replaceInComponent(file, varName, folder, typeDefRename) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf-8');
    
    // Replace import
    const importRegex = new RegExp("import\\\\s*\\\\{\\\\s*" + varName + "[^}]*\\\\}\\\\s*from\\\\s*['\"][^'\"]*['\"]([^;]*;?)");
    content = content.replace(importRegex, "import { " + varName + ", TypeDef as " + typeDefRename + " } from '../data/" + folder + "';");
    
    content = content.replace(new RegExp(varName + '\\\\.filter', 'g'), "(" + varName + "[language] || " + varName + "['en']).filter");
    content = content.replace(new RegExp(varName + '\\\\.map', 'g'), "(" + varName + "[language] || " + varName + "['en']).map");
    content = content.replace(new RegExp(varName + '\\\\.length', 'g'), "(" + varName + "[language] || " + varName + "['en']).length");

    fs.writeFileSync(file, content);
    console.log("Updated", file);
}

function updateDictImport(file, varName, folder) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf-8');
    const importRegex = new RegExp("import\\\\s*\\\\{\\\\s*" + varName + "[^}]*\\\\}\\\\s*from\\\\s*['\"][^'\"]*['\"]([^;]*;?)");
    content = content.replace(importRegex, "import { " + varName + " } from '../data/" + folder + "';");
    
    content = content.replace(new RegExp("const languageKey = language.toUpperCase\\\\(\\\\) as keyof typeof " + varName + ";", 'g'), "const languageKey = language as keyof typeof " + varName + ";");
    content = content.replace(new RegExp(varName + "\\\\[languageKey\\\\] \\\\|\\\\| " + varName + "\\\\['EN'\\\\]", 'g'), varName + "[languageKey] || " + varName + "['en']");
    
    fs.writeFileSync(file, content);
    console.log("Updated dict in", file);
}

replaceInComponent('src/components/NeverHaveIEver.tsx', 'NHIE_QUESTIONS', 'neverHaveIEver', 'NHIEQuestion');
replaceInComponent('src/components/MostLikelyTo.tsx', 'MLT_QUESTIONS', 'mostLikelyTo', 'MLTQuestion');
replaceInComponent('src/components/Trivia.tsx', 'TRIVIA_QUESTIONS', 'trivia', 'TriviaQuestion');

updateDictImport('src/components/Killer.tsx', 'wordGroups', 'undercover');
updateDictImport('src/components/Killer.tsx', 'killerActions', 'killer');

updateDictImport('src/components/Undercover.tsx', 'wordGroups', 'undercover');

console.log('done');
