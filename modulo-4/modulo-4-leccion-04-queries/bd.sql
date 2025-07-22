-- 1. Crear la base de datos
DROP DATABASE IF EXISTS protectoras_db;
CREATE DATABASE protectoras_db;
USE protectoras_db;

-- 2. Crear tabla protectoras
CREATE TABLE protectoras (
    idprotectoras INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45),
    cif VARCHAR(45),
    ubicacion VARCHAR(45)
);

-- 3. Crear tabla voluntarios
CREATE TABLE voluntarios (
    idvoluntarios INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(45),
    nombre VARCHAR(45),
    apellidos VARCHAR(45),
    fecha_nacimiento DATE
);

-- 4. Crear tabla usuarios
CREATE TABLE usuarios (
    idusuarios INT AUTO_INCREMENT,
    email VARCHAR(45),
    password VARCHAR(45),
    user VARCHAR(45),
    voluntarios_idvoluntarios INT,
    PRIMARY KEY (idusuarios, voluntarios_idvoluntarios),
    FOREIGN KEY (voluntarios_idvoluntarios) REFERENCES voluntarios(idvoluntarios)
);

-- 5. Crear tabla protectoras_has_voluntarios
CREATE TABLE protectoras_has_voluntarios (
    protectoras_idprotectoras INT,
    voluntarios_idvoluntarios INT,
    PRIMARY KEY (protectoras_idprotectoras, voluntarios_idvoluntarios),
    FOREIGN KEY (protectoras_idprotectoras) REFERENCES protectoras(idprotectoras),
    FOREIGN KEY (voluntarios_idvoluntarios) REFERENCES voluntarios(idvoluntarios)
);

-- 6. Crear tabla animal
CREATE TABLE animal (
    idanimal INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45),
    chip VARCHAR(45),
    especie VARCHAR(45),
    fecha_esterilizacion DATETIME,
    foto LONGTEXT,
    lugar VARCHAR(45),
    fecha_registro DATE,
    protectoras_idprotectoras INT,
    FOREIGN KEY (protectoras_idprotectoras) REFERENCES protectoras(idprotectoras)
);

-- 7. Crear tabla enfermedades
CREATE TABLE enfermedades (
    idenfermedades INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45),
    sintomas VARCHAR(45),
    tratamiento VARCHAR(45)
);

-- 8. Crear tabla enfermedades_has_animal
CREATE TABLE enfermedades_has_animal (
    enfermedades_idenfermedades INT,
    animal_idanimal INT,
    PRIMARY KEY (enfermedades_idenfermedades, animal_idanimal),
    FOREIGN KEY (enfermedades_idenfermedades) REFERENCES enfermedades(idenfermedades),
    FOREIGN KEY (animal_idanimal) REFERENCES animal(idanimal)
);

-- ============================================
-- INSERTAR DATOS
-- ============================================

-- 🐾 Protectoras
INSERT INTO protectoras (nombre, cif, ubicacion) VALUES
('Huella Amiga', 'B12345678', 'Valencia'),
('Patitas Felices', 'C23456789', 'Sevilla'),
('Refugio Animal Sur', 'D34567890', 'Granada'),
('SOS Peludos', 'E45678901', 'Zaragoza');

-- 👥 Voluntarios
INSERT INTO voluntarios (dni, nombre, apellidos, fecha_nacimiento) VALUES
('12345678A', 'María', 'López Pérez', '1990-04-23'),
('23456789B', 'Carlos', 'Gómez Ruiz', '1988-11-15'),
('34567890C', 'Lucía', 'Fernández Díaz', '1995-06-30');

-- 🔐 Usuarios
INSERT INTO usuarios (email, password, user, voluntarios_idvoluntarios) VALUES
('maria@example.com', '1234', 'mariaL', 1),
('carlos@example.com', 'abcd', 'carlosG', 2),
('lucia@example.com', 'pass123', 'luciaF', 3);

-- 🧩 Relación protectoras-voluntarios
INSERT INTO protectoras_has_voluntarios VALUES
(1, 1),
(2, 2),
(1, 3);

-- 🐶 Animales
INSERT INTO animal (nombre, chip, especie, fecha_esterilizacion, lugar, protectoras_idprotectoras) VALUES
('Luna', '987654321000', 'Gato', '2023-05-12', NULL, 'Madrid', 2),
('Rocky', '112233445566', 'Perro', '2022-08-30', NULL, 'Sevilla', 1),
('Kira', '667788990011', 'Gato', NULL, NULL, 'Valencia', 2),
('Thor', '889900112233', 'Perro', '2021-06-15', NULL, 'Zaragoza', 1),
('Nina', '998877665544', 'Gato', '2022-09-01', NULL, 'Granada', 3),
('Max', '556677889900', 'Perro', NULL, NULL, 'Barcelona', 4),
('Milo', '443322110099', 'Gato', NULL, NULL, 'Toledo', 1),
('Simba', '121212121212', 'Perro', '2020-11-20', NULL, 'Bilbao', 2),
('Cleo', '343434343434', 'Gato', NULL, NULL, 'Murcia', 4),
('Toby', '565656565656', 'Perro', '2023-03-12', NULL, 'Valencia', 2),
('Mía', '787878787878', 'Gato', NULL, NULL, 'Sevilla', 1),
('Chispa', '909090909090', 'Conejo', NULL, NULL, 'Madrid', 3),
('Pelusa', '111111111111', 'Gato', '2022-02-14', NULL, 'Valladolid', 4),
('Bruno', '222222222222', 'Perro', '2021-10-05', NULL, 'Córdoba', 1),
('Daisy', '333333333333', 'Gato', NULL, NULL, 'Madrid', 2),
('Leo', '444444444444', 'Perro', '2020-04-28', NULL, 'Málaga', 3),
('Nube', '555555555555', 'Gato', NULL, NULL, 'Almería', 4),
('Sol', '666666666666', 'Gato', NULL, NULL, 'Granada', 3),
('Tigre', '777777777777', 'Perro', NULL, NULL, 'Jaén', 2),
('Blanca', '888888888888', 'Gato', '2021-01-11', NULL, 'Madrid', 1);


-- 🦠 Enfermedades
INSERT INTO enfermedades (nombre, sintomas, tratamiento) VALUES
('Leishmaniosis', 'Pérdida de pelo, heridas', 'Milteforan'),
('Moquillo', 'Fiebre, secreciones nasales', 'Soporte y antibióticos'),
('Parvovirus', 'Vómitos, diarrea', 'Fluidos y hospitalización'),
('Sarna', 'Picor, enrojecimiento', 'Ivermectina'),
('Otitis', 'Oído inflamado', 'Limpiador ótico y antibióticos'),
('Conjuntivitis', 'Ojos rojos, legañas', 'Colirios'),
('Cistitis', 'Dificultad para orinar', 'Antibióticos'),
('Gastroenteritis', 'Diarrea, vómitos', 'Ayuno, dieta blanda'),
('Tiña', 'Zonas sin pelo', 'Antifúngicos'),
('Anemia', 'Debilidad, palidez', 'Vitaminas y dieta');


-- 📎 Relación animales-enfermedades
INSERT INTO enfermedades_has_animal (enfermedades_idenfermedades, animal_idanimal) VALUES
(1, 1),   -- Luna → Leishmaniosis
(2, 2),   -- Rocky → Moquillo
(3, 3),   -- Kira → Parvovirus
(1, 4),   -- Thor → Leishmaniosis
(4, 5),   -- Nina → Sarna
(5, 6),   -- Max → Otitis
(6, 7),   -- Milo → Conjuntivitis
(2, 8),   -- Simba → Moquillo
(7, 9),   -- Cleo → Cistitis
(8, 10),  -- Toby → Gastroenteritis
(9, 11),  -- Mía → Tiña
(10, 12), -- Chispa → Anemia
(5, 13),  -- Pelusa → Otitis
(6, 14),  -- Bruno → Conjuntivitis
(3, 15),  -- Daisy → Parvovirus
(2, 16);  -- Leo → Moquillo

