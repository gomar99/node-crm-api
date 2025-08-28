const { Pool } = require('pg');
const dotenv = require('dotenv');

const envFile = `.env.${process.env.NODE_ENV || 'dev'}`;
dotenv.config({ path: envFile });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = pool;
