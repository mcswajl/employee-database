INSERT INTO department (name, description) 
VALUES 
("Parks:"),
("Rec:"),
("WQ:"),
("AQ:"),
("ITS:"); 

INSERT INTO roles (title, department_id, salary) 
VALUES 
("Inspector1", 1, 35000),
("Inspector2", 1, 45000),
("Inspector1", 2, 35000),
("Inspector2", 2, 45000),
("Inspector1", 3, 35000),
("Inspector1", 3, 45000),
("Inspector1", 4, 35000),
("Inspector1", 4, 45000),
("Developer1", 5, 75000),
("Developer2", 5, 95000);
  

INSERT INTO employee (first_name, last_name, roles_id, manager_id) 
VALUES 
("Gerald", "Griffin", 1, NULL),
("William", "Carleton", 2, 1),
("Sydney", "Owenson", 2, 1),
("Susan", "Hill", 2, 2),

("Eliza", "Parsons", 3, NULL),
("Charles", "Brown", 4, 3),
("Anne", "Padcliffe", 4, 3),

("Horace", "Walpole", 5, NULL),
("Matthew", "Lewis", 6, 5),
("William", "Bedford", 7, 5),

("Steve", "Jones", 8, NULL),
("Scott", "Brown", 9, 3),

("Sue", "Hamrick", 10, NULL),
("Kristy", "Carter", 10, 3);


  