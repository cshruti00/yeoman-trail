var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  sayHi() {
    this.log("say hi from sub");
  }
};