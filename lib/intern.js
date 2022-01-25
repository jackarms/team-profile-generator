const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, title, school) {
    super(name, id, email);
    this.title = "Intern";
    this.school = school;
  }
}

module.exports = Intern;
