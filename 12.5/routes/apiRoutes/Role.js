const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get the total salary for departments
router.get('/role', (req, res) => {
  const sql = `SELECT role.*, salary.name AS salary, 
                COUNT(department_id) 
                AS count FROM role 
                LEFT JOIN salary ON role.department_id = salary.id 
                LEFT JOIN parties ON department = department.id 
                GROUP BY role_id 
                ORDER BY count DESC`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Create a new role
router.post('/role', ({ body }, res) => {
  // Data validation
  const errors = inputCheck(body, 'role_id', 'title');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO role (id, title) VALUES (?,?)`;
  const params = [body.role_id, body.title];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body,
      changes: result.affectedRows
    });
  });
});

module.exports = router;
