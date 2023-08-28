const fs = require('fs');
const path = require('path');

function loadFunctions(folder) {
   const functions = {};
   function loadFunctionsRecursive(currentFolder) {
      const functionFiles = fs.readdirSync(currentFolder).filter(file => file.endsWith('.js'));
      for (const file of functionFiles) {
         const functionName = file.replace('.js', '');
         const functionPath = path.join(currentFolder, file);
         functions[functionName] = require(functionPath);
      }

      const subfolders = fs.readdirSync(currentFolder).filter(file => fs.statSync(path.join(currentFolder, file)).isDirectory());
      for (const subfolder of subfolders) {
         const subfolderPath = path.join(currentFolder, subfolder);
         loadFunctionsRecursive(subfolderPath);
      }
   }

   loadFunctionsRecursive(folder);
   return functions;
}

module.exports = loadFunctions;