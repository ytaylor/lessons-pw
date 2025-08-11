const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

// Obtener todas las recetas
app.get('/recetas', async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM recetas');
    await connection.end();

    res.json({
      info: { count: rows.length },
      results: rows
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las recetas' });
  }
});


// Obtener una receta por su ID
app.get('/recetas/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute('SELECT * FROM recetas WHERE id = ?', [id]);
    await connection.end();

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Receta no encontrada' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la receta' });
  }
});


// Crear una nueva receta
app.post('/recetas', async (req, res) => {
  const { nombre, ingredientes, instrucciones } = req.body;

  if (!nombre || !ingredientes || !instrucciones) {
    return res.status(400).json({
      success: false,
      message: 'Faltan campos obligatorios: nombre, ingredientes o instrucciones'
    });
  }

  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'INSERT INTO recetas (nombre, ingredientes, instrucciones) VALUES (?, ?, ?)',
      [nombre, ingredientes, instrucciones]
    );
    await connection.end();

    res.status(201).json({
      success: true,
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al crear la receta'
    });
  }
});


// Actualizar una receta existente
app.put('/recetas/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, ingredientes, instrucciones } = req.body;

  if (!nombre || !ingredientes || !instrucciones) {
    return res.status(400).json({
      success: false,
      message: 'Faltan campos obligatorios: nombre, ingredientes o instrucciones'
    });
  }

  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'UPDATE recetas SET nombre = ?, ingredientes = ?, instrucciones = ? WHERE id = ?',
      [nombre, ingredientes, instrucciones, id]
    );
    await connection.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Receta no encontrada'
      });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al actualizar la receta'
    });
  }
});


// Eliminar una receta
app.delete('/recetas/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'DELETE FROM recetas WHERE id = ?',
      [id]
    );
    await connection.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Receta no encontrada'
      });
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar la receta'
    });
  }
});


// Registro de usuario
app.post('/registro', async (req, res) => {
  const { user, pass } = req.body;

  if (!user || !pass) {
    return res.status(400).json({
      success: false,
      error: 'Faltan campos obligatorios: user o pass'
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(pass, 10);

    const connection = await getConnection();
    // Verifica si el usuario ya existe
    const [existing] = await connection.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [user]
    );
    if (existing.length > 0) {
      await connection.end();
      return res.status(409).json({
        success: false,
        error: 'El usuario ya existe'
      });
    }

    // Inserta el nuevo usuario
    const [result] = await connection.execute(
      'INSERT INTO usuarios (email, nombre, password) VALUES (?, ?, ?)',
      [user, user, hashedPassword]
    );
    await connection.end();

    // Genera el token JWT
    const token = jwt.sign(
      { id: result.insertId, email: user },
      process.env.JWT_SECRET || 'secreto',
      { expiresIn: '1d' }
    );

    res.status(201).json({
      success: true,
      token
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al registrar el usuario'
    });
  }
});

// Middleware de autenticación JWT
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, error: 'Token no proporcionado' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secreto');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, error: 'Token inválido' });
  }
}


// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
  const { user, pass } = req.body;

  if (!user || !pass) {
    return res.status(400).json({
      success: false,
      error: 'Faltan campos obligatorios: user o pass'
    });
  }

  try {
    const connection = await getConnection();
    const [rows] = await connection.execute(
      'SELECT * FROM usuarios WHERE email = ?',
      [user]
    );
    await connection.end();

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        error: 'Usuario o contraseña incorrectos'
      });
    }

    const usuario = rows[0];
    const passwordOk = await bcrypt.compare(pass, usuario.password);

    if (!passwordOk) {
      return res.status(401).json({
        success: false,
        error: 'Usuario o contraseña incorrectos'
      });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET || 'secreto',
      { expiresIn: '1d' }
    );

    res.json({
      success: true,
      token
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al iniciar sesión'
    });
  }
});