const fs = require('fs');
const path = require('path');

function processGameDict(sourceFile, outputDir, varName) {
    if (!fs.existsSync(sourceFile)) return;
    const content = fs.readFileSync(sourceFile, 'utf-8');
    const match = content.match(new RegExp(varName + '.*= (\\{([\\s\\S]*)\\});'));
    if (!match) return;
    let obj;
    try {
        obj = eval('(' + match[1] + ')');
    } catch (e) {
        console.error("eval error", sourceFile, e);
        return;
    }
    
    fs.mkdirSync(outputDir, { recursive: true });
    const idxLines = [];
    
    for (const lang of Object.keys(obj)) {
        const langLower = lang.toLowerCase().replace(/_/g, '-');
        const langVar = langLower.replace(/-/g, '');
        const langCode = "export const " + langVar + " = " + JSON.stringify(obj[lang], null, 2) + ";\n";
        fs.writeFileSync(path.join(outputDir, langLower + '.ts'), langCode);
        idxLines.push("import { " + langVar + " as " + langVar + "Data } from './" + langLower + "';");
    }
    
    idxLines.push('');
    idxLines.push("export const " + varName + " = {");
    for (const lang of Object.keys(obj)) {
        const langLower = lang.toLowerCase().replace(/_/g, '-');
        const langVar = langLower.replace(/-/g, '');
        idxLines.push('  "' + lang + '": ' + langVar + 'Data,');
    }
    idxLines.push('};');
    
    fs.writeFileSync(path.join(outputDir, 'index.ts'), idxLines.join('\n'));
}

function processGameArray(sourceFile, outputDir, varName, languages, interfaceCode) {
    if (!fs.existsSync(sourceFile)) return;
    const content = fs.readFileSync(sourceFile, 'utf-8');
    const match = content.match(new RegExp(varName + '.*= (\\[[\\s\\S]*\\]);'));
    if (!match) {
        console.error("NO MATCH FOR " + varName);
        return;
    }
    let arr;
    try {
        arr = eval(match[1]);
    } catch (e) {
        console.error("eval error", sourceFile, e);
        return;
    }
    
    fs.mkdirSync(outputDir, { recursive: true });
    const idxLines = [interfaceCode, ''];
    
    for (const lang of languages) {
        const langQs = [];
        const langSuffix = lang === 'fr-ca' ? 'frca' : lang; // because answer_frca
        for (const q of arr) {
            const langQ = Object.assign({}, q);
            langQ.text = q[lang] || q.en;
            if (q['answer_' + langSuffix] !== undefined) {
               langQ.answer = q['answer_' + langSuffix];
            } else if (q.answer_en !== undefined) {
               langQ.answer = q.answer_en;
            }
            if (q['hint_' + langSuffix] !== undefined) {
               langQ.hint = q['hint_' + langSuffix];
            } else if (q.hint_en !== undefined) {
               langQ.hint = q.hint_en;
            }
            
            // Delete all language specific keys
            for (const l of ['en', 'fr', 'es', 'fr-ca', 'frca']) {
                delete langQ[l];
                delete langQ['answer_' + l];
                delete langQ['hint_' + l];
            }
            langQs.push(langQ);
        }
        
        const langLower = lang.toLowerCase().replace(/_/g, '-');
        const varNameExport = langLower.replace(/-/g, '');
        const langCode = "import { TypeDef } from './index';\n\nexport const " + varNameExport + ": TypeDef[] = " + JSON.stringify(langQs, null, 2) + ";\n";
        fs.writeFileSync(path.join(outputDir, langLower + '.ts'), langCode);
        
        idxLines.push("import { " + varNameExport + " } from './" + langLower + "';");
    }
    
    idxLines.push('');
    idxLines.push("export const " + varName + ": Record<string, TypeDef[]> = {");
    for (const lang of languages) {
        const langLower = lang.toLowerCase().replace(/_/g, '-');
        const varNameExport = langLower.replace(/-/g, '');
        idxLines.push('  "' + lang + '": ' + varNameExport + ',');
    }
    idxLines.push('};');
    
    fs.writeFileSync(path.join(outputDir, 'index.ts'), idxLines.join('\n'));
}

const langs = ['en', 'fr', 'es', 'fr-ca'];

processGameArray('src/data/neverHaveIEverQuestions.ts', 'src/data/neverHaveIEver', 'NHIE_QUESTIONS', langs, "export interface TypeDef {\n  id: string;\n  text: string;\n  difficulty: 'soft' | 'hard';\n  category: 'habits' | 'adventure' | 'career' | 'social' | 'party' | 'hot';\n}");

processGameArray('src/data/mostLikelyToQuestions.ts', 'src/data/mostLikelyTo', 'MLT_QUESTIONS', langs, "export interface TypeDef {\n  id: string;\n  text: string;\n  difficulty: 'soft' | 'hard';\n  category: 'habits' | 'adventure' | 'career' | 'social' | 'party' | 'hot';\n}");

processGameArray('src/data/triviaQuestions.ts', 'src/data/trivia', 'TRIVIA_QUESTIONS', langs, "export interface TypeDef {\n  id: string;\n  difficulty: 'soft' | 'hard';\n  category: 'history' | 'science' | 'pop' | 'geo';\n  text: string;\n  answer: string;\n  hint: string;\n}");

processGameDict('src/data/killerActions.ts', 'src/data/killer', 'killerActions');
processGameDict('src/data/words.ts', 'src/data/undercover', 'wordGroups');

console.log("Done");
