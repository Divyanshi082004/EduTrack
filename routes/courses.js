<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /courses
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM courses');
    res.json(rows);
  } catch (err) {
    console.error('❌ Failed to fetch courses:', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /courses
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM courses');
    res.json(rows);
  } catch (err) {
    console.error('❌ Failed to fetch courses:', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
>>>>>>> e8330ced01ac477ebd4922ea09a1dadf12b554c9
