<<<<<<< HEAD
const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config();
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// ✅ Use students route from routes folder
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');
const teacherRoutes = require('./routes/teachers');
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/teachers', teacherRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
=======
const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config();
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('🚀 Server is running!');
});

// ✅ Use students route from routes folder
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');
const teacherRoutes = require('./routes/teachers');
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/teachers', teacherRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
>>>>>>> e8330ced01ac477ebd4922ea09a1dadf12b554c9
