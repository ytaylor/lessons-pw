
-- DELETE: Borra registros

SELECT * FROM artistas;

DELETE FROM artistas;  -- TRUCATE TABLE artistas;

DELETE FROM artistas
  WHERE artista_id = 1;