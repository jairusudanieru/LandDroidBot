const fs = require('fs');
const path = require('path');

function loadFunctions(folder) {
   const functionFiles = fs.readdirSync(folder).filter(file => file.endsWith('.js'));
   const functions = {};
   for (const file of functionFiles) {
      const functionName = file.replace('.js', '');
      const functionPath = path.join(folder, file);
      functions[functionName] = require(functionPath);
   }
   return functions;
}

module.exports = loadFunctions;