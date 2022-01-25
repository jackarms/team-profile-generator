const inquirer = require("inquirer");
const fs = require("fs");
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
        "Manager",
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
        writeFile();
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
        "Intern",
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
        "Engineer",
        engineerAnswers.github
      );
      employeesArray.push(engineer);
      employeeQuestions();
    });
};

const createCards = () => {
  let html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="style.css" />
      <title>My Team</title>
    </head>
    <body>
    <header>
      <h1>My Team</h1>
    </header>
    <div class="card">
    `;
  for (let i = 0; i < employeesArray.length; i++) {
    console.log(employeesArray[i]);
    let name = employeesArray[i].name;
    let title = employeesArray[i].title;
    let id = employeesArray[i].id;
    let email = employeesArray[i].email;
    let school = employeesArray[i].school;
    let github = employeesArray[i].github;
    let officeNumber = employeesArray[i].officeNumber;
    let lastQuestion;
    if (employeesArray[i].title == "Intern") {
      lastQuestion = `School: ${school}`;
    } else if (employeesArray[i].title == "Engineer") {
      lastQuestion = `GitHub: ${github}`;
    } else if (employeesArray[i].title == "Manager") {
      lastQuestion = `Office Number: ${officeNumber}`;
    }
    html += `
  <div class="container">
    <h2><b>${name}</b></h2>
    <p>${title}</p>
    <p>ID: ${id}</p>
    <p>Email: <a href= "${email}">${email}</a></p>
    <p>${lastQuestion}</p>
  </div>`;
  }
  html += `</div>
  </body>`;
  return html;
};
function writeFile() {
  fs.writeFile("./index.html", createCards(), (err) => {
    if (err) throw err;
  });
}
