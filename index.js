const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const managerQuestions = function () {
  return inquirer.prompt([
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
  ]);
};

const employeeQuestions = function () {
  console.log(`New Employee Questions!`);
  return inquirer.prompt([
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
  ]);
};

managerQuestions()
  .then((answers) => {
    let manager = new Manager(
      answers.manager_name,
      answers.manager_id,
      answers.manager_email,
      answers.office_number
    );
    return manager;
    console.log(manager);
  })
  .then(employeeQuestions)
  .then((projectAnswers) => console.log(projectAnswers.pick_employee));

console.log(answers);
