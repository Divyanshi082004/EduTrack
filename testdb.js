const db = require('./config/db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT * FROM students');
    console.log('✅ Students:', rows);
  } catch (err) {
    console.error('❌ DB connection failed:', err.message);
  }
}

testConnection();
