const Employee = require("./employee");
console.log(Employee);

class Engineer extends Employee {
  constructor(name, id, email, title, github) {
    super(name, id, email);
    this.title = "Engineer";
    this.github = github;
  }
}

module.exports = Engineer;
