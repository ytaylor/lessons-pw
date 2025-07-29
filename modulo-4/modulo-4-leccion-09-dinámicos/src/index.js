
// index.js - Proyecto Express + MySQL sin estructura MVC
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');

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


// Estáticas
const staticServerPath = './styles';
app.use(express.static(staticServerPath));

// Dinámicas

app.get("/", async (req, res) => {
  const conn = await getConnection();

  const [result] = await conn.query(
    `SELECT *
      FROM women`
  );
  console.log(result);

  await conn.end();
  res.render('listView', { list: result });
});


// /detail/1
// /detail/2
// /detail/3

// /detail/:id_exposicion

app.get("/detail/:id", async (req, res) => {
  console.log(req.params);

  const id = req.params.id;

  const conn = await getConnection();

  const [result] = await conn.query(
    `SELECT *
      FROM women
      WHERE id = ?;`,
    [id]
  ); //const [rows, fields] = await conn.query(...);
  //rows: los resultados de la consulta(lo que suele interesarte).
  //fields: metadatos de las columnas(normalmente no se usan).

  console.log(result);

  await conn.end();

  if (result.length === 0) {
    return res.status(404).render('notFound');
  }
  //const data = result[0];
  //const data = result.at(0);
  const [data] = result; //Esto usa destructuración de arrays, una sintaxis moderna de ES6.

  /*
    const data = {
      variable: 'PEPINO',
      nombre: 'Obras femeninas',
      fecha_inicio: '03/03/2025',
      fecha_fin: '15/03/2025',
      descripcion: 'asdf'
    }
  */
  res.render('detailView', {
    ...data,
    contenido: '<section><h2>Título</h2> </section>'
  });

});


