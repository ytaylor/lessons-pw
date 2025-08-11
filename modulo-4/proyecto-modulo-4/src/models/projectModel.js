const getConnection = require('../db/connection');

// Obtener todos los proyectos con info de autor
async function getAll() {
  const connection = await getConnection();
  const [rows] = await connection.query(`
    SELECT p.*, a.nombre AS autor_nombre, a.job, a.foto, a.descripcion AS autor_descripcion
    FROM proyectos p
    JOIN autores a ON p.autor_id = a.id
  `);
  return rows;
}

// Obtener un proyecto por ID
async function getById(id) {
  const db = await getConnection();
  const [rows] = await db.query(`
    SELECT p.*, a.nombre AS autor_nombre, a.job, a.foto, a.descripcion AS autor_descripcion
    FROM proyectos p
    JOIN autores a ON p.autor_id = a.id
    WHERE p.id = ?
  `, [id]);
  return rows[0];
}

// Crear un nuevo proyecto y autor asociado
async function create(project) {
  const db = await getConnection();

  const [autorResult] = await db.query(`
    INSERT INTO autores (nombre, job, foto, descripcion)
    VALUES (?, ?, ?, ?)
  `, [project.autor.nombre, project.autor.job, project.autor.foto, project.autor.descripcion]);

  const autorId = autorResult.insertId;

  await db.query(`
    INSERT INTO proyectos (nombre, descripcion, tecnologias, imagen, github_url, demo_url, autor_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `, [project.nombre, project.descripcion, project.tecnologias, project.imagen, project.github_url, project.demo_url, autorId]);
}

module.exports = { getAll, getById, create };
