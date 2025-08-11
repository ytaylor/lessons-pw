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

-- Inserta algunas recetas de ejemplo
INSERT INTO recetas (nombre, ingredientes, instrucciones) VALUES
('Tortilla de patatas', 'patatas,huevos,cebolla,aceite de oliva,sal', '1. Pela y corta las patatas y la cebolla. 2. Fríe en aceite de oliva. 3. Bate los huevos y mezcla con las patatas y cebolla. 4. Cuaja la mezcla en la sartén.'),
('Ensalada César', 'lechuga,pollo,pan tostado,queso parmesano,salsa césar', '1. Lava y corta la lechuga. 2. Cocina el pollo y córtalo en tiras. 3. Mezcla la lechuga, el pollo, el pan tostado y el queso. 4. Añade la salsa césar.'),
('Gazpacho', 'tomate,pepino,pimiento,ajo,aceite de oliva,vinagre,sal', '1. Lava y corta las verduras. 2. Tritura todos los ingredientes. 3. Añade aceite, vinagre y sal al gusto. 4. Sirve frío.'),
('Pasta carbonara', 'pasta,huevo,queso parmesano,bacon,sal,pimienta', '1. Cocina la pasta. 2. Fríe el bacon. 3. Mezcla huevo y queso. 4. Junta todo y añade sal y pimienta.'),
('Bizcocho', 'harina,huevos,azúcar,levadura,aceite de girasol,yogur', '1. Mezcla todos los ingredientes. 2. Vierte en un molde. 3. Hornea a 180ºC durante 35 minutos.');
