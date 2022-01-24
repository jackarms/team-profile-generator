const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
let employeesArray = [];

const managerQuestions = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manager_name",
        message: "What is your team manager's name?",
      },
      {
        type: "number",
        name: "manager_id",
        message: "What is your team manager's ID number?",
      },
      {
        type: "input",
        name: "manager_email",
        message: "What is your team manager's email address?",
      },
      {
        type: "number",
        name: "office_number",
        message: "What is your team manager's office number?",
      },
    ])
    .then((answers) => {
      let manager = new Manager(
        answers.manager_name,
        answers.manager_id,
        answers.manager_email,
        answers.office_number
      );
      employeesArray.push(manager);
      employeeQuestions();
    });
};
managerQuestions();

const employeeQuestions = function () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "pick_employee",
        message: "Would you like to add another employee to the team?",
        choices: [
          "engineer",
          "intern",
          "no, I would not like to add another employee.",
        ],
      },
    ])
    .then((answers) => {
      if (answers.pick_employee == "intern") {
        internQuestions();
      } else if (answers.pick_employee == "engineer") {
        engineerQuestions();
      } else {
        console.log(`Your team has been created!`);
        createCards();
      }
    });
};
const internQuestions = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is employee's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What university did employee attend?",
      },
    ])
    .then((internAnswers) => {
      let intern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      employeesArray.push(intern);
      employeeQuestions();
    });
};
const engineerQuestions = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is employee's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is employee's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is employee's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is employee's GitHub username?",
      },
    ])
    .then((engineerAnswers) => {
      let engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
      );
      employeesArray.push(engineer);
      employeeQuestions();
    });
};

const createCards = function () {
  for (let i = 0; i < employeesArray.length; i++) {
    console.log([i].name);
  }
};
