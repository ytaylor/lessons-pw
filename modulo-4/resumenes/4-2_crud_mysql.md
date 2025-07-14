# Operaciones CRUD en SQL: SELECT, INSERT, UPDATE y DELETE

Las operaciones básicas que realizamos en cualquier base de datos se conocen como **CRUD**:  
- **C**reate: añadir nuevos datos (`INSERT`)
- **R**ead: leer datos existentes (`SELECT`)
- **U**pdate: modificar datos existentes (`UPDATE`)
- **D**elete: eliminar datos existentes (`DELETE`)

Vamos a repasar cada una con ejemplos reales y explicaciones sencillas.

---

## 🔍 SELECT: Leer datos

Usamos `SELECT` para leer información de la base de datos.  
Por ejemplo, si queremos obtener el email de todas las usuarias:

```sql
SELECT email FROM users;
```

Leer no modifica la base de datos. Se puede usar con condiciones (`WHERE`), orden (`ORDER BY`), límite de resultados (`LIMIT`), entre otros.

### Ejemplos:
```sql
-- Leer todos los datos de todas las usuarias
SELECT * FROM users;

-- Leer usuarias cuyo nombre sea 'Lucía'
SELECT * FROM users WHERE name = 'Lucía';

-- Leer los 5 primeros registros
SELECT * FROM users LIMIT 5;

-- Leer nombres únicos (sin duplicados)
SELECT DISTINCT name FROM users;
```

---

## ➕ INSERT: Añadir datos

`INSERT` sirve para añadir un nuevo registro.  
Por ejemplo, al registrarse una nueva usuaria:

```sql
INSERT INTO users (email, password, name)
VALUES ('ana@gmail.com', 'contraseña123', 'Ana');
```

### Agregar varios registros a la vez:
```sql
INSERT INTO users (email, password, name)
VALUES 
('juan@gmail.com', 'abc123', 'Juan'),
('laura@gmail.com', 'xyz789', 'Laura');
```

> Recuerda: el campo `id` no se especifica, ya que se genera automáticamente.

---

## ✏️ UPDATE: Modificar datos

`UPDATE` se usa para modificar registros existentes.  
Por ejemplo, si una usuaria cambia su email:

```sql
UPDATE users
SET email = 'nuevo_email@gmail.com'
WHERE id = 2;
```

> ⚠️ ¡Nunca olvides el `WHERE`! Si no lo pones, se actualizarán **todos** los registros.

### Ejemplo:
```sql
-- Cambiar el nombre y la contraseña de la usuaria 3
UPDATE users
SET name = 'Sofía G.', password = 'nuevaClave123'
WHERE id = 3;
```

---

## 🗑 DELETE: Eliminar datos

`DELETE` elimina registros.  
Por ejemplo, para borrar a la usuaria con `id = 1`:

```sql
DELETE FROM users WHERE id = 1;
```

> ⚠️ ¡Cuidado! Si no pones `WHERE`, borrarás **toda la tabla**.

### Ejemplo:
```sql
-- Borrar usuarias sin nombre
DELETE FROM users WHERE name IS NULL;
```

---

## 🧾 Ejemplo real: Gestión de biblioteca

Supón que tienes una base de datos con una tabla `libros`:

### 1. Añadir un libro:
```sql
INSERT INTO libros (titulo, autor, formato, stock)
VALUES ('El Quijote', 'Cervantes', 'físico', 5);
```

### 2. Ver todos los libros:
```sql
SELECT * FROM libros;
```

### 3. Actualizar el stock del libro:
```sql
UPDATE libros
SET stock = 10
WHERE titulo = 'El Quijote';
```

### 4. Eliminar libros físicos sin stock:
```sql
DELETE FROM libros
WHERE formato = 'físico' AND stock = 0;
```

---

## 🧠 Recuerda

- Combinar `SELECT`, `WHERE`, `ORDER BY`, `LIMIT`, etc. para leer datos con precisión.
- Usar `INSERT` para añadir, `UPDATE` para modificar y `DELETE` para eliminar.
- Siempre usar `WHERE` en `UPDATE` y `DELETE` para evitar errores graves.

