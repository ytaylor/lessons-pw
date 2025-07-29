
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
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


//funciones del token
const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
  return token;
};


const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return null;
  }
};


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);

  if (!authHeader) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  // Extraer el token (quita "Bearer " si está presente)
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : authHeader;

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: 'Credenciales no válidas' });
  }

  req.user = decoded; // guarda los datos del token por si se necesitan después
  next();
}

app.post("/api/register", async (req, res) => {
  const username = req.body.user;
  const password = req.body.pass;
  console.log(password);

  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);

  let sql = "INSERT INTO users (user,pass) VALUES (?,?)";
  let user = {
    username: username,
  };

  jwt.sign(user, process.env.JWT_SECRET_KEY, async (err, token) => {
    if (err) {
      res.status(400).send({ msg: "Error" });
    } else {
      const connection = await getConnection();
      const [results, fields] = await connection.query(sql, [
        username,
        passwordHash,
      ]);
      connection.end();
      res.json({ msg: "success", token: token, id: results.insertId });
    }
  });
});

//Endpoint Login
app.post("/api/login", async (request, response) => {
  const body = request.body;

  //Buscar si el usuario existe en la bases de datos
  let sql = "SELECT * FROM users WHERE user= ?";
  const connection = await getConnection();
  const [users, fields] = await connection.query(sql, [body.user]);
  connection.end();

  const user = users[0];
  console.log(user);

  //verificar si la contraeña
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.pass, user.pass);

  //Sino existe el usuario o el password no es correcto
  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  //Crear el token para enviar al front
  const userForToken = {
    username: user.user,
    id: user.idusers,
  };
  const token = generateToken(userForToken);

  //enviar la respuesta correcta
  response.status(200).json({ token, user: user.user });
});

//get articles
app.get("/api/women", authenticateToken, async (req, res) => {

  const { country, sort } = req.query;
  const filters = [];

  let query = "SELECT * FROM women ";
  if (country) {
    query += "WHERE country_id = ? ";
    filters.push(country);
  }
  if (sort) {
    query += "ORDER BY full_name ASC";
  }
  const connection = await getConnection();
  const [results] = await connection.query(query, filters);
  connection.end()

  res.status(200).json({
    success: true, women: results
  })
});




