const mysql = require("mysql2")
const inquirer = require("inquirer");
require('console.table');

// MySQL db Connection
const db = require('./db/connection');

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');

  function employeeActions() {
    inquirer.prompt([
      {
      name: "name", type: "list", message: "What would you like to do", choices: [
        "view all departments",
        "view all roles",
        "view all employee",
        "add a department",
        "add a new role",
        "add an employee",
        "update an employee role",
        "Exit"
      ]
    }
  ]).then(
      (answer) => {
        console.log(answer.name)
        if (answer.name == "view all departments") {
          db.query("SELECT * FROM department", function (err, results) {
            if(err) {
              console.log(err)
            }
            console.table(results);
          });
        }
      }),
    }
  }
  _______________________
    } else if (answer.name == 'view all roles') {
      db.query("SELECT * FROM roles", function (err, results) {
        if(err) {
          console.log(err)
        }
        console.table(results);
      });
    }
______________________
  } else if (answer.name == 'view all employees') {
    db.query("SELECT * FROM employee", function (err, results) {
      if(err) {
        console.log(err)
      }
      console.table(results);
    });
  }
________________
  if (answer.name == "Add a new department") {
    inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the department name?"
      },
      {
        name: "description",
        type: "input",
        message: "Please provide a desrciption?"
      },
    ])
      .then((ans) => {
        db.query("INSERT INTO roles SET ?", ans, function (err, results) {
          if(err) {
            console.log(err)
          }
          console.log(results);
        });
      })
_______________________

    }).then(
      (answer) => {
        console.log(answer.name)
        if (answer.name == "Add a new Role") {
          inquirer.prompt([
            {
              name: "title",
              type: "input",
              message: "What is the title of the role?"
            },
            {
              name: "salary",
              type: "input",
              message: "What is the salary of the role?"
            },
            {
              name: "department_id",
              type: "input",
              message: "What is the department_id of the role?"
            },
          ])
            .then((ans) => {
              db.query("INSERT INTO roles SET ?", ans, function (err, results) {
                if(err) {
                  console.log(err)
                }
                console.log(results);
              });
            })

          }).then(
            (answer) => {
              console.log(answer.name)
              if (answer.name == "Add a new employee") {
                inquirer.prompt([
                  {
                    name: "first_name",
                    type: "input",
                    message: "Employee first name?"
                  },
                  {
                    name: "las_name",
                    type: "input",
                    message: "Employee last name?"
                  },
                  {
                    name: "roles_id",
                    type: "input",
                    message: "Employees role ID?"
                  },
                  {
                    name: "manager_id",
                    type: "input",
                    message: "Employees manager ID?"
                  },
                ])
                  .then((ans) => {
                    db.query("INSERT INTO roles SET ?", ans, function (err, results) {
                      if(err) {
                        console.log(err)
                      }
                      console.log(results);
                    });
                  })
          }
      })

  employeeActions();


    // let deleteRow = 2;

    // db.query("DELETE FROM employee Where id = ?", deleteRow, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log(results);
    // });

// db.query("SELECT * FROM employee", function (err, results) {
//   console.log(results);
// });

