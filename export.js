const fs = require('fs');
const db = require('./config/db'); // apne db.js ka path check karo

async function exportTables() {
  try {
    // Students table
    const [students] = await db.query('SELECT * FROM students');
    fs.writeFileSync('./sql/students.json', JSON.stringify(students, null, 2));

    // Courses table
    const [courses] = await db.query('SELECT * FROM courses');
    fs.writeFileSync('./sql/courses.json', JSON.stringify(courses, null, 2));

    // Enrollments table
    const [enrollments] = await db.query('SELECT * FROM enrollments');
    fs.writeFileSync('./sql/enrollments.json', JSON.stringify(enrollments, null, 2));

    console.log('✅ All tables exported as JSON in sql folder');
    process.exit();
  } catch (err) {
    console.error('❌ Export failed:', err.message);
    process.exit(1);
  }
}

exportTables();
