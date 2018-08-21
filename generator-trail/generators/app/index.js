var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      }, {
        type: 'list',
        name: 'dependencyManager',
        message: 'Choose Dependency Manager',
        choices: ["npm","yarn"]
      }, {
        type: 'confirm',
        name: 'cool',
        message: 'Would you like to enable the Cool feature?'
      },
    ]);


  }

  // installDependencyManager(){
  //   this.log(this.answers.dependencyManager);
  // }
  //
  // getDestinationPath(){
  //   this.log(this.destinationRoot());
  //   this.log(this.templatePath());
  // }

  writeOnFile() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(this.answers.name),
      { title: this.answers.name }
    )
  }
};