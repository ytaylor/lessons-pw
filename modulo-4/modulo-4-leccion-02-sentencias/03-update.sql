
-- UPDATE: Actualizar registros

SELECT * FROM obras;

UPDATE obras
  SET tecnica = 'Óleo sobre lienzo'
  WHERE titulo = 'Flores del Desierto';
  
  
UPDATE obras
  SET tecnica = 'Óleo sobre lienzo', dimensiones = '40x50cm', precio = 1800000.00
  WHERE obra_id = 4;
  
UPDATE obras
  SET precio = precio * 1.20;
  