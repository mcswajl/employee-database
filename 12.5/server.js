const express = require('express');
// const db = require('./db/connection');
const mysql = require("mysql2")
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Use apiRoutes
// app.use('/api', apiRoutes);

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// MySQL db Connection
const dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Wlbm1978*",
    database: "employee_db"
},
console.log("Connected to the emloyees_db database")
);

// Start server after DB connection
dbconnection.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

dbconnection.query("SELCET * FROM department", function (err, results) {
  console.log(results);
});

function employeeActions() {
  inquirer.prompt({name: "name", type: "list", message: "Select an action", options: [
    "Add a Role",
    "Add a Department",
    "View an Employee",
    "View an Employee by Department",
    "View an Employee by Manager",
    "Add an Employee",
    "Update an Employee Role",
    "Update an Employee Manager",
    "Add a new Role",
    "Exit"
    
  ]
})

}
