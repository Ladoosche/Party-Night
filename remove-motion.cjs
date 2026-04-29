const fs = require('fs');
const path = require('path');

function removeMotion(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip Game421 if it relies on it, wait I should remove rules animations
  const isPurple = filePath.includes('Purple.tsx');
  const isGame421 = filePath.includes('Game421.tsx'); // game421 uses css for dice, so we can remove motion

  if (isPurple || isGame421) {
    // For Purple, keep motion for the cards only.
    // Actually, it's easier to just remove it everywhere and use simple css classes for cards and dice if they need it.
    // But let's be careful.
  }

  // Remove imports
  content = content.replace(/import \{.*?motion.*?\} from "motion\/react";\n?/g, '');
  content = content.replace(/import \{.*?motion.*?\} from 'motion\/react';\n?/g, '');
  
  // Replace AnimatePresence
  content = content.replace(/<AnimatePresence[^>]*>/g, '<React.Fragment>');
  content = content.replace(/<\/AnimatePresence>/g, '</React.Fragment>');

  // Replace motion.div, motion.button, motion.li
  content = content.replace(/<motion\.div/g, '<div');
  content = content.replace(/<\/motion\.div>/g, '</div>');

  content = content.replace(/<motion\.button/g, '<button');
  content = content.replace(/<\/motion\.button>/g, '</button>');

  content = content.replace(/<motion\.li/g, '<li');
  content = content.replace(/<\/motion\.li>/g, '</li>');

  // Remove framer-motion specific props
  content = content.replace(/ initial=\{[^}]+\}/g, '');
  content = content.replace(/ animate=\{[^}]+\}/g, '');
  content = content.replace(/ exit=\{[^}]+\}/g, '');
  content = content.replace(/ transition=\{[^}]+\}/g, '');
  // sometimes they span multiple lines, let's just do a regex that handles multi-line?
  // a simplistic approach: 
  content = content.replace(/\s+(initial|animate|exit|transition)=\{([^}]+)\}/g, '');
  
  // Clean up any stray props that might have nested brackets
  // e.g. initial={{ opacity: 0, x: -80, rotateY: 180 }}
  content = content.replace(/\s+(initial|animate|exit|transition)=\{\{[^}]+\}\}/g, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned', filePath);
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      // Ignore components that need motion
      // Actually Purple needs motion for cards, let's just NOT process Purple and Game421 with this script, and do them manually.
      if (!fullPath.includes('Purple.tsx')) {
        removeMotion(fullPath);
      }
    }
  }
}

walk('./src');
