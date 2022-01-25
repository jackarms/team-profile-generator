const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, title, officeNumber) {
    super(name, id, email);
    this.title = "Manager";
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
