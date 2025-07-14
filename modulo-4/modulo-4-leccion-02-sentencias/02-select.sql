
-- SELECT: Consultar datos

SELECT obra_id, titulo, año, tecnica
FROM obras;

SELECT *
FROM obras;

SELECT *, precio*1.21
FROM obras;

SELECT *
  FROM obras
  WHERE estado = 'disponible';
  
SELECT *
  FROM obras
  WHERE estado != 'disponible';  --  estado <> 'disponible'
  
SELECT *
  FROM obras
  WHERE año  <= 1900;
  
  
  
SELECT *
  FROM obras
  WHERE estado != 'disponible' AND año < 1900;


SELECT *
  FROM obras
  WHERE estado = 'disponible' OR año > 1900;
  
  
SELECT *
  FROM obras
  WHERE estado = 'disponible' OR estado = 'no disponible';

  
  
SELECT *
  FROM obras
  WHERE estado IN ('disponible', 'no disponible');
  
SELECT *
  FROM obras
  WHERE titulo LIKE 'autorretrato%';

SELECT *
  FROM obras
  WHERE titulo NOT LIKE 'a%';

SELECT *
  FROM obras
  WHERE titulo LIKE '%de%';
  
  
SELECT * FROM obras ORDER BY titulo;



SELECT obra_id, titulo, año
  FROM obras
  WHERE estado = 'no disponible' AND año IS NOT NULL
  ORDER BY año DESC;

SELECT obra_id, titulo
  FROM obras
  ORDER BY año
  LIMIT 5;              -- OFFSET 0;  
SELECT obra_id, titulo
  FROM obras
  ORDER BY año
  LIMIT 5 OFFSET 5;  
SELECT obra_id, titulo
  FROM obras
  ORDER BY año
  LIMIT 5 OFFSET 10;  
  