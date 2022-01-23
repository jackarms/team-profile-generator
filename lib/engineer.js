const Employee = require("./employee");
console.log(Employee);

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}

module.exports = Engineer;
