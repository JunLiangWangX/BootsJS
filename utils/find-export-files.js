const path = require('path');

const fs = require('fs');


module.exports=function findIndexFiles(dirname,dir) {
  const indexFiles = {

  };
  const regex = /\.ts$/,directory=path.resolve(dirname,dir),excludeFile=['index.ts'];

  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (regex.test(file)&&!excludeFile.includes(file)) {
        indexFiles[file.split('.')[0]]=('./'+path.relative(dirname, filePath))
      }
    });
  }

  traverse(directory);
  return indexFiles;
}