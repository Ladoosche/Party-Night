const fs = require('fs');

function cleanFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let lines = content.split('\n');
    let filteredLines = lines.filter(line => !line.match(/\(v\d+\)/) && !line.match(/\(v \d+\)/));
    
    let newContent = filteredLines.join('\n');
    fs.writeFileSync(filePath, newContent);
    console.log(`Cleaned ${filePath}, lines from ${lines.length} to ${filteredLines.length}`);
}

cleanFile('/app/applet/src/data/neverHaveIEverQuestions.ts');
cleanFile('/app/applet/src/data/mostLikelyToQuestions.ts');
