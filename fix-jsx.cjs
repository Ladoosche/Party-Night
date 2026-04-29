const fs = require('fs');
const path = require('path');

function fixJSX(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // We are looking for tags that have stray '}' or '{' 
  // e.g. <div }  animate... 
  // It's probably easier to just remove any stray } characters inside <div ... > or <button ... >
  
  content = content.replace(/<(div|button|li|React\.Fragment)([\s\S]*?)>/g, (match, tag, inner) => {
    // If the inner contains '}', let's be careful.
    // We only want to remove '}' that are not part of an object '{{...}}' or string.
    // Actually, because my bad regex left ONLY '}' characters, they look like:
    // <div } } } className="..." >
    // So we can just remove all '}' that appear before 'className' or 'onClick' etc, if they are standalone.

    let cleanedInner = inner.replace(/\}/g, '');
    let cleanedInner2 = cleanedInner.replace(/\{/g, ''); // just in case
    // wait, what about style={{ ... }} ?
    // If we remove all '}', style={{color: 'red'}} breaks!
    return `<${tag}${inner}>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      // let's do simple regex replacements
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix specific broken patterns from the previous regex:
      // The previous regex left `}` or `} }` or `} } }`
      // Example: <div } className="...">
      content = content.replace(/<div\s+\}(\s+\})?(\s+\})?\s+className/g, '<div className');
      content = content.replace(/<div\s+\}(\s+\})?(\s+\})?\s+key/g, '<div key');
      content = content.replace(/<div\s+\}(\s+\})?(\s+\})?\s*>/g, '<div>');
      
      content = content.replace(/<button\s+\}(\s+\})?(\s+\})?\s+className/g, '<button className');
      content = content.replace(/<button\s+\}(\s+\})?(\s+\})?\s+onClick/g, '<button onClick');
      content = content.replace(/<button\s+\}(\s+\})?(\s+\})?\s*>/g, '<button>');

      // Similarly for <React.Fragment key="..." } >
      content = content.replace(/<React\.Fragment(\s+\})?(\s+\})?\s*>/g, '<React.Fragment>');
      
      // There may also be `} >`
      content = content.replace(/\s+\}\s+>/g, '>');
      content = content.replace(/\s+\}\s+\}\s+>/g, '>');

      // Let's also check for `key="rules" }`
      content = content.replace(/"\s+\}\s+className/g, '" className');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

walk('./src');
