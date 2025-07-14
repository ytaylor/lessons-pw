
-- Insertar datos
/*
Acepta comentarios
como en Javascript
*/

INSERT INTO obras (`titulo`, `año`, `tecnica`, `dimensiones`, `precio`)
VALUES ('La Noche Estrellada', 1889, 'Óleo sobre lienzo', '73.7x92.1cm', 3000000.00);

INSERT INTO obras (año, titulo)
VALUES (1932, 'Flores del Desierto');

INSERT INTO obras (titulo, año, tecnica, dimensiones)
VALUES ('Los Girasoles', NULL, 'Óleo sobre lienzo', NULL);

INSERT INTO obras (titulo, año)
VALUES ('Mierda de artista', 1961),
       ('Judith decapitando a Holofernes', 1612),
       ('La Consagracion', 1805);

INSERT INTO artistas (nombre, apellidos, nacionalidad)
VALUES ('Frida', 'Kahlo', NULL);
