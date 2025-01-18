const fs = require('fs');

// Read your file
const filePath = 'D:/cohort course codes/ui-unify/code-snippets/file.tsx';
let fileContent = fs.readFileSync(filePath, 'utf-8');

// Replace unescaped backticks with escaped ones
fileContent = fileContent.replace(/(?<!\\)`/g, '\\`');

// Write back to the file
fs.writeFileSync(filePath, fileContent, 'utf-8');

console.log('Escaped backticks successfully!');
