const db = require('../config/db');

async function getAllStudents() {
  const [rows] = await db.query('SELECT * FROM students');
  return rows;
}

async function addStudent({ name, email, course }) {
  const [result] = await db.query(
    'INSERT INTO students (name, email, course) VALUES (?, ?, ?)',
    [name.trim(), email.trim(), course.trim()]
  );
  return result.insertId;
}

module.exports = { getAllStudents, addStudent };
