<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // apne DB connection ka path check karo

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM students');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
// POST route for adding student
router.post('/', async (req, res) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) {
    return res.status(400).json({ error: 'All fields required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO students (name, email, course) VALUES (?, ?, ?)',
      [name, email, course]
    );
    res.status(201).json({ message: 'Student added', studentId: result.insertId });
  } catch (error) {
    console.error('Error adding student:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
=======
const express = require('express');
const router = express.Router();
const db = require('../config/db'); // apne DB connection ka path check karo

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM students');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
// POST route for adding student
router.post('/', async (req, res) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) {
    return res.status(400).json({ error: 'All fields required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO students (name, email, course) VALUES (?, ?, ?)',
      [name, email, course]
    );
    res.status(201).json({ message: 'Student added', studentId: result.insertId });
  } catch (error) {
    console.error('Error adding student:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
>>>>>>> e8330ced01ac477ebd4922ea09a1dadf12b554c9
