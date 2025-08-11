-- Crea la base de datos (si no existe)
CREATE DATABASE IF NOT EXISTS recetas_db;
USE recetas_db;

-- Crea la tabla 'recetas'
CREATE TABLE IF NOT EXISTS recetas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  ingredientes VARCHAR(500) NOT NULL,
  instrucciones TEXT NOT NULL
);


-- Crea la tabla 'usuarios'
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  nombre VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
