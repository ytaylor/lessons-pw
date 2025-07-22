-- 1. ¿Cuántos animales hay registrados en total?

-- Contamos el número total de registros en la tabla de animales
SELECT COUNT(*) AS total_animales
FROM animal;


-- 8. Número de animales por protectora
SELECT p.nombre AS protectora, COUNT(a.idanimal) AS total_animales
FROM protectoras p
LEFT JOIN animal a ON p.idprotectoras = a.protectoras_idprotectoras
GROUP BY p.idprotectoras;

-- 9. Número de enfermedades por animal
SELECT a.nombre AS animal, COUNT(ea.enfermedades_idenfermedades) AS total_enfermedades
FROM animal a
LEFT JOIN enfermedades_has_animal ea ON a.idanimal = ea.animal_idanimal
GROUP BY a.idanimal;

-- 2. ¿Cuál es la protectora que tiene más animales?
-- Contamos los animales por protectora y nos quedamos con la de mayor cantidad
SELECT p.nombre, COUNT(a.idanimal) AS total
FROM protectoras p
JOIN animal a ON p.idprotectoras = a.protectoras_idprotectoras
GROUP BY p.idprotectoras
ORDER BY total DESC
LIMIT 1;

-- 3. ¿Cuál es la media de animales por protectora?
-- Calculamos la media a partir del total de animales por cada protectora
SELECT AVG(animal_count) AS media_animales
FROM (
  SELECT COUNT(*) AS animal_count
  FROM animal
  GROUP BY protectoras_idprotectoras
) AS sub;

-- 📊 GROUP BY + HAVING
-- 4. ¿Cuántos animales tiene cada protectora?

-- Agrupamos los animales por protectora y contamos
SELECT p.nombre, COUNT(a.idanimal) AS total_animales
FROM protectoras p
LEFT JOIN animal a ON p.idprotectoras = a.protectoras_idprotectoras
GROUP BY p.idprotectoras;

-- 5. ¿Qué protectoras tienen más de 1 animal?
-- Filtramos los grupos que tienen más de un animal
SELECT p.nombre, COUNT(a.idanimal) AS total_animales
FROM protectoras p
JOIN animal a ON p.idprotectoras = a.protectoras_idprotectoras
GROUP BY p.idprotectoras
HAVING COUNT(a.idanimal) > 1;

-- 6. ¿Qué animales tienen al menos 2 enfermedades?
-- Agrupamos por animal en la tabla intermedia y contamos las enfermedades
SELECT a.nombre, COUNT(ea.enfermedades_idenfermedades) AS total_enfermedades
FROM animal a
JOIN enfermedades_has_animal ea ON a.idanimal = ea.animal_idanimal
GROUP BY a.idanimal
HAVING COUNT(ea.enfermedades_idenfermedades) > 0;


-- 🧩 CASE
-- 7. Clasifica los animales como “Canino”, “Felino” u “Otro”

-- Usamos CASE para crear una nueva columna con etiquetas según especie
SELECT nombre,
  especie,
  CASE 
    WHEN especie = 'Perro' THEN 'Canino'
    WHEN especie = 'Gato' THEN 'Felino'
    ELSE 'Otro'
  END AS categoria
FROM animal;

-- 8. Mostrar si el animal está esterilizado
-- Si la fecha de esterilización no es nula, marcamos como "Sí"
SELECT nombre,
  fecha_esterilizacion,
  CASE 
    WHEN fecha_esterilizacion IS NOT NULL THEN 'Sí'
    ELSE 'No'
  END AS esterilizado
FROM animal;
