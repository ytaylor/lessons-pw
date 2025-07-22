USE protectoras_db;

-- ============================
-- 🔗 CONSULTAS CON JOIN
-- ============================

-- 1. Obtener el nombre de los animales y la protectora que los acoge
SELECT a.nombre AS animal, p.nombre AS protectora
FROM animal a
JOIN protectoras p ON a.protectoras_idprotectoras = p.idprotectoras;

-- 2. Listar animales y sus enfermedades
SELECT a.nombre AS animal, e.nombre AS enfermedad
FROM animal a
LEFT JOIN enfermedades_has_animal ea ON a.idanimal = ea.animal_idanimal
LEFT JOIN enfermedades e ON ea.enfermedades_idenfermedades = e.idenfermedades;

-- 3. Mostrar nombre y email de los voluntarios con usuario registrado
SELECT v.nombre, v.apellidos, u.email
FROM voluntarios v
JOIN usuarios u ON v.idvoluntarios = u.voluntarios_idvoluntarios;

-- 4. Mostrar protectoras y voluntarios que colaboran en ellas
SELECT p.nombre AS protectora, v.nombre AS voluntario
FROM protectoras p
JOIN protectoras_has_voluntarios pv ON p.idprotectoras = pv.protectoras_idprotectoras
JOIN voluntarios v ON pv.voluntarios_idvoluntarios = v.idvoluntarios;

-- 5. Animales que no tienen enfermedades (LEFT JOIN)
SELECT a.nombre AS animal, e.nombre AS enfermedad
FROM animal a
LEFT JOIN enfermedades_has_animal ea ON a.idanimal = ea.animal_idanimal
LEFT JOIN enfermedades e ON ea.enfermedades_idenfermedades = e.idenfermedades
WHERE e.nombre IS NULL;

-- 10. Voluntarios sin usuario creado
SELECT v.nombre, v.apellidos
FROM voluntarios v
LEFT JOIN usuarios u ON v.idvoluntarios = u.voluntarios_idvoluntarios
WHERE u.idusuarios IS NULL;
