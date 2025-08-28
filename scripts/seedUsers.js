require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });
const pool = require('../src/db');

const users = [
  { name: 'Ariel', email: 'ariel@example.com' },
  { name: 'Budi', email: 'budi@example.com' },
  { name: 'Citra', email: 'citra@example.com' }
];

async function seed() {
  try {
    for (const user of users) {
      await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING',
        [user.name, user.email]
      );
    }
    console.log('✅ Seed berhasil');
  } catch (err) {
    console.error('❌ Seed error:', err);
  } finally {
    pool.end();
  }
}

seed();
