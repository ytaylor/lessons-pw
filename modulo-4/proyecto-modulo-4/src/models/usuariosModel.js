const getConnection = require('../db/connection');

async function findByEmail(email) {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    await connection.end();
    return rows[0];
}

async function create({ email, nombre, password }) {
    const connection = await getConnection();
    const [result] = await connection.execute(
        'INSERT INTO usuarios (email, nombre, password) VALUES (?, ?, ?)',
        [email, nombre, password]
    );
    await connection.end();
    return result.insertId;
}

module.exports = { findByEmail, create };