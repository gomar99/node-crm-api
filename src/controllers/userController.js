const pool = require('../db');

exports.getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name, email, created_at FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
};
