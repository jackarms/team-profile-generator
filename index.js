const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

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
      console.log(answers);
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
      }
    });
};
const internQuestions = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "Which school did you attend?",
      },
    ])
    .then((schoolAnswers) => {
      console.log(schoolAnswers);
      employeeQuestions();
    });
};
const engineerQuestions = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
    ])
    .then((githubAnswers) => {
      console.log(githubAnswers);
      employeeQuestions();
    });
};
