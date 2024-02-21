module.exports=function upperCamelCaseName(name) {
    return name.replace(/-([a-z])/g, function (match, letter) {
      return letter.toUpperCase();
    }).replace(/^[a-z]/, function (letter) {
      return letter.toUpperCase();
    });
  }