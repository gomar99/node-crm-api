// controllers/userController.js
const pool = require('../db');

exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error("DB ERROR:", err.message); // <--- tambahin ini
    res.status(500).json({ error: "Internal server error" });
  }
};
