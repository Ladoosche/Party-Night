const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove lines that consist entirely of spaces and `}` 
      // (This will fix the multi-line broken tags)
      let lines = content.split('\n');
      
      // We are looking for lines that are just `   }` or `   } }`
      lines = lines.filter(line => !line.match(/^\s*\}+[\s\}]*$/));
      
      content = lines.join('\n');
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

walk('./src');
