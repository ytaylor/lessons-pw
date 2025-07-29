
// index.js - Proyecto Express + MySQL sin estructura MVC

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());


// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


// Conexión a la base de datos usando variables de entorno
const getConnection = async () => {
  return await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT
  });
};


// GET - Obtener todas las mujer




// POST - Insertar una nueva mujer
app.post('/api/women', async (req, res) => {
  const { full_name, birth_date, death_date, bio, country_id, field_id, photo_url } = req.body;

  if (!full_name || !country_id || !field_id) {
    return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
  }

  try {
    const connection = await getConnection();
    const query = `
      INSERT INTO women (full_name, birth_date, death_date, bio, country_id, field_id, photo_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [full_name, birth_date, death_date, bio, country_id, field_id, photo_url];
    const [result] = await connection.query(query, values);
    connection.end();

    res.status(201).json({ success: true, message: 'Mujer insertada', id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

