const path = require('path');

module.exports=function getLibraryName(filePath) {
    let pathName=path.basename(filePath, '.ts')
    return pathName==='index'?'BootsJS':pathName
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
        .replace(/^[a-z]/, (letter) => letter.toUpperCase());
}