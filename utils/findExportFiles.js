const path = require('path');

const fs = require('fs');


// 递归遍历目录并获取所有 index.js 文件的路径
module.exports=function findIndexFiles(dirname,dir) {
  const indexFiles = {

  };
  const regex = /\.ts$/,directory=path.resolve(dirname,dir);

  function traverse(currentDir) {
    const files = fs.readdirSync(currentDir);
    files.forEach(file => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (regex.test(file)) {
        indexFiles[file.split('.')[0]]=('./'+path.relative(dirname, filePath))
      }
    });
  }

  traverse(directory);
  console.log(indexFiles)
  return indexFiles;
}