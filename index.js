require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to EduTrack API');
});

// Test route pehle
app.get('/test', (req, res) => {
  res.send('Test route is working');
});
// Import routes
const studentsRoutes = require('./routes/students');
const teachersRoutes = require('./routes/teachers');
const coursesRoutes = require('./routes/courses');

// Use routes
app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/courses', coursesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

