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
    inquirer.prompt({
      name: "name", type: "list", message: "What would you like to do", choices: [
        "view all departments",
        "view all roles",
        "view all employee",
        "add a department",
        "add a new role",
        "view roles",
        "add a role",
        "add an employee",
        "update an employee role",
        "Exit"

      ]

    }).then(
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
    // } else if (answer.name == 'View all Roles') {
    //   db.query("SELECT * FROM roles", function (err, results) {
    //     if(err) {
    //       console.log(err)
    //     }
    //     console.table(results);
    //   });
    // }


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

        } else if (answer.name == 'View all Roles') {
          db.query("SELECT * FROM roles", function (err, results) {
            if(err) {
              console.log(err)
            }
            console.table(results);
          });
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

