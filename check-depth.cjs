const fs = require('fs');
const content = fs.readFileSync('src/components/MostLikelyTo.tsx', 'utf8');
const lines = content.split('\n');
let depth = 0;
lines.forEach((line, i) => {
  let inString = false;
  let stringChar = '';
  let justString = line.replace(/(["'`]).*?(?<!\\)\1/g, '""'); // Strip strings
  // Wait this is too simple. Let's just do an iterative approach
});
