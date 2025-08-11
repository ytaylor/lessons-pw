const getConnection = require('../db/connection');

async function getAll() {
  const connection = await getConnection();
  const [rows] = await connection.execute('SELECT * FROM recetas');
  await connection.end();
  return rows;
}

async function getById(id) {
  const connection = await getConnection();
  const [rows] = await connection.execute('SELECT * FROM recetas WHERE id = ?', [id]);
  await connection.end();
  return rows[0];
}

async function create({ nombre, ingredientes, instrucciones }) {
  const connection = await getConnection();
  const [result] = await connection.execute(
    'INSERT INTO recetas (nombre, ingredientes, instrucciones) VALUES (?, ?, ?)',
    [nombre, ingredientes, instrucciones]
  );
  await connection.end();
  return result.insertId;
}

async function update(id, { nombre, ingredientes, instrucciones }) {
  const connection = await getConnection();
  const [result] = await connection.execute(
    'UPDATE recetas SET nombre = ?, ingredientes = ?, instrucciones = ? WHERE id = ?',
    [nombre, ingredientes, instrucciones, id]
  );
  await connection.end();
  return result.affectedRows;
}

async function remove(id) {
  const connection = await getConnection();
  const [result] = await connection.execute(
    'DELETE FROM recetas WHERE id = ?',
    [id]
  );
  await connection.end();
  return result.affectedRows;
}

module.exports = { getAll, getById, create, update, remove };