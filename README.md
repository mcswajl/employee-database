## employee-database

## My Task
My challenge this wee was to create an interface that makes it easy for non-developers to view and interact with information stored in my mySQL database. This interfaces is called content management systems (CMS). I built a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.

This application won’t be deployed, I had to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. I submited a link to the video and added it to the bottom of this README.

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Tools used for this application
I used the MySQL2 package to connect to your MySQL database and perform queries
I used the Inquirer package to interact with the user via the command-line
I used console.table package to print MySQL rows to the console.

## Screenshot (taken during development)
Screenshot of my website
![Screenshot](/images/screenshot.jpg)


## Github repo link
https://github.com/mcswajl/employee-database

## My walkthrough video link
https://watch.screencastify.com/v/dgS7f0kT8nlKf9KgF2E6


Contact
Josh McSwain 
joshua.mcswain@mecklenburgcountync.gov 
UNCC coding boot camp 2021
