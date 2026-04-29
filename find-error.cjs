const ts = require('typescript');
const fs = require('fs');

const file = process.argv[2];
const content = fs.readFileSync(file, 'utf8');

const sourceFile = ts.createSourceFile(
  file,
  content,
  ts.ScriptTarget.Latest,
  true
);

function walk(node) {
  // If the node has child nodes, we walk them
  ts.forEachChild(node, child => {
    // If we have an unexpected EOF or missing token error attached
    walk(child);
  });
}
walk(sourceFile);
// Typescript exposes parse diagnostics
console.log(sourceFile.parseDiagnostics.map(d => {
  const start = ts.getLineAndCharacterOfPosition(sourceFile, d.start);
  return `Error at ${start.line + 1}:${start.character + 1}: ${d.messageText}`;
}));
