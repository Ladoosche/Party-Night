const fs = require('fs');
const path = require('path');

const mltPath = path.join(__dirname, 'src/data/mostLikelyToQuestions.ts');
const nhiePath = path.join(__dirname, 'src/data/neverHaveIEverQuestions.ts');
const triviaPath = path.join(__dirname, 'src/data/triviaQuestions.ts');
const wordsPath = path.join(__dirname, 'src/data/words.ts');
const killerActionsPath = path.join(__dirname, 'src/data/killerActions.ts');

function countCategoriesDifficulty(fileData, regexPattern) {
  const counts = {};
  let match;
  while ((match = regexPattern.exec(fileData)) !== null) {
      // match[1] = difficulty, match[2] = category
      const d = match[1];
      const c = match[2];
      const key = `${c}-${d}`;
      if (!counts[key]) counts[key] = { cat: c, diff: d, count: 0 };
      counts[key].count++;
  }
  return counts;
}

const mltData = fs.readFileSync(mltPath, 'utf8');
const nhieData = fs.readFileSync(nhiePath, 'utf8');
const triviaData = fs.readFileSync(triviaPath, 'utf8');
const wordsData = fs.readFileSync(wordsPath, 'utf8');
const killerActionsData = fs.readFileSync(killerActionsPath, 'utf8');

const regex = /"difficulty":\s*"([^"]+)",\s*"category":\s*"([^"]+)"/g;

const mltCounts = countCategoriesDifficulty(mltData, new RegExp(regex));
const nhieCounts = countCategoriesDifficulty(nhieData, new RegExp(regex));
const triviaCounts = countCategoriesDifficulty(triviaData, new RegExp(regex));

// For words
const wordsEnMatches = wordsData.match(/"EN":\s*\[(.*?)\]\s*,/s);
let wordsCount = 0;
if (wordsEnMatches) {
  wordsCount = (wordsEnMatches[1].match(/\[/g) || []).length;
}

// For killer actions
const killerEnMatches = killerActionsData.match(/"EN":\s*\[(.*?)\]\s*,/s);
let killerActionsCount = 0;
if (killerEnMatches) {
  killerActionsCount = (killerEnMatches[1].match(/"/g) || []).length / 2;
}

console.log('| Game | Category | Difficulty | Number of Questions |');
console.log('|---|---|---|---|');
for (const v of Object.values(mltCounts)) {
    console.log("| Who Would... | " + v.cat + " | " + v.diff + " | " + v.count + " |");
}
for (const v of Object.values(nhieCounts)) {
    console.log("| Never Have I Ever | " + v.cat + " | " + v.diff + " | " + v.count + " |");
}
for (const v of Object.values(triviaCounts)) {
    console.log("| Culture G / Trivia | " + v.cat + " | " + v.diff + " | " + v.count + " |");
}
console.log("| Undercover / Killer | Words (All Categories) | N/A | " + wordsCount + " |");
console.log("| Killer | Actions | N/A | " + killerActionsCount + " |");
