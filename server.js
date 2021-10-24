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
          "add a role",
          "add an employee",
          // "update an employee role",
          "Exit"
        ]
      }
    ]).then(
      (answer) => {
        console.log(answer.name)
        if (answer.name == "view all departments") {
          db.query("SELECT * FROM department", function (err, results) {
            if (err) {
              console.log(err)
            }
            console.table(results);
            employeeActions();
          });
        }


        else if (answer.name == 'view all roles') {
          db.query("SELECT * FROM roles", function (err, results) {
            if (err) {
              console.log(err)
            }
            console.table(results);
            employeeActions();
          });
        }

        else if (answer.name == 'view all employee') {
          db.query("SELECT * FROM employee", function (err, results) {
            if (err) {
              console.log(err)
            }
            console.table(results);
            employeeActions();
          });
        }

        else if (answer.name == "add a department") {
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
            .then((answer) => {
              db.query("INSERT INTO department SET ?", answer, function (err, results) {
                if (err) {
                  console.log(err)
                }
                console.log(results);
                employeeActions();
              });
            })
          }
                      
            else if (answer.name == "add a role") {
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
                    .then((answer) => {
                      db.query("INSERT INTO roles SET ?", answer, function (err, results) {
                        if (err) {
                          console.log(err)
                        }
                        console.log(results);
                        employeeActions();
                      });
                    })
                  }

                  else if (answer.name == "add an employee") {
                    inquirer.prompt([
                      {
                        name: "first_name",
                        type: "input",
                        message: "What is the employee first name?"
                      },
                      {
                        name: "last_name",
                        type: "input",
                        message: "What is the employee last name?"
                      },
                      {
                        name: "roles_id",
                        type: "input",
                        message: "What is the employee rold ID?"
                      },
                      {
                        name: "manager_id",
                        type: "input",
                        message: "What is the employee manager ID?"
                      },
                    ]) 
                          .then((answer) => {
                            db.query("INSERT INTO employee SET ?", answer, function (err, results) {
                              if (err) {
                                console.log(err)
                              }
                              console.log(results);
                              employeeActions();
                            });
                          })
                        }
                  employeeActions();


    // let deleteRow = 2;

    // db.query("DELETE FROM employee Where id = ?", deleteRow, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log(results);
    // });
});
  }
  employeeActions();
})
