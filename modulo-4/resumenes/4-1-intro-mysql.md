
Esta lección te introduce al uso de MySQL, una base de datos relacional muy utilizada, y cómo manipular su estructura con `ALTER TABLE`.

## 🌐 ¿Qué es una base de datos?

Una base de datos es el lugar donde guardamos los datos de nuestras aplicaciones. Por ejemplo:
- Los datos de las usuarias registradas en una web (nombre, email, contraseña...).
- Los comentarios en los vídeos de YouTube.
- Los eventos guardados en Google Calendar.

> A diferencia de una aplicación que "pierde" sus datos al cerrarse, una base de datos guarda los datos de forma permanente.

---

## 🧱 MySQL: el sistema que usamos

MySQL es un sistema de base de datos que funciona con tablas (filas y columnas), como una hoja de Excel.

Lo utilizamos a través de herramientas como **MySQL Workbench**, donde conectamos con nuestro servidor y gestionamos la base de datos de forma visual.

---

## 🏷 Tipos de datos en MySQL

Cuando creamos una tabla, debemos elegir bien el tipo de dato para cada columna. Algunos ejemplos:

| Tipo        | Ejemplo de uso                            |
|-------------|-------------------------------------------|
| `VARCHAR`   | Nombre o email                            |
| `TINYINT`   | Edad (0 a 255)                            |
| `DATE`      | Fecha de nacimiento (`2023-12-25`)        |
| `BOOL`      | Tiene portátil: `true` o `false`          |

> Elegir bien el tipo ahorra espacio y mejora el rendimiento. Por ejemplo, usar `TINYINT` para edad evita ocupar más disco con un `BIGINT`.

---

## 🔐 Campos especiales: `id`, claves y restricciones

- `id`: identificador único por fila. Siempre usamos `PRIMARY KEY`, `AUTO_INCREMENT` y `UNIQUE`.
- `NOT NULL`: asegura que una columna no pueda estar vacía (por ejemplo, email y password).
- `UNIQUE`: asegura que no haya duplicados (por ejemplo, dos usuarias con el mismo email).

---

## 🛠 Modificar tablas con `ALTER TABLE`

Imagina que tenemos una tabla de usuarias y queremos actualizarla. Aquí entran los comandos `ALTER TABLE`:

### 📌 Ejemplos reales

#### 1. Añadir una columna para el teléfono:
```sql
ALTER TABLE usuarias ADD COLUMN telefono VARCHAR(15);
```

#### 2. Eliminar una columna de apodo:
```sql
ALTER TABLE usuarias DROP COLUMN apodo;
```

#### 3. Cambiar el tipo de la columna edad:
```sql
ALTER TABLE usuarias MODIFY COLUMN edad TINYINT;
```

#### 4. Renombrar una columna:
```sql
ALTER TABLE usuarias CHANGE COLUMN nombre completo_nombre VARCHAR(50);
```

#### 5. Agregar clave foránea:
```sql
ALTER TABLE pedidos
ADD CONSTRAINT fk_user FOREIGN KEY (user_id)
REFERENCES usuarias(id);
```

#### 6. Mover una columna a la primera posición:
```sql
ALTER TABLE usuarias ADD columna_test VARCHAR(10) FIRST;
```

> Estos comandos te permiten adaptar la base de datos a nuevos requisitos sin perder la información existente.

---

## 🧠 Recuerda:

- MySQL guarda los datos **de forma estructurada y permanente**.
- Usar bien los tipos y restricciones mejora la calidad, velocidad y seguridad de tu aplicación.
- `ALTER TABLE` es tu herramienta para evolucionar la base de datos según cambian tus necesidades.

---

## 🧾 Ejemplo de la vida real

Supón que gestionas una app de recetas. Tienes una tabla `recetas` y quieres:

1. Añadir una columna `tiempo_preparacion`:
```sql
ALTER TABLE recetas ADD COLUMN tiempo_preparacion INT;
```

2. Cambiar `descripcion` para que pueda tener más texto:
```sql
ALTER TABLE recetas MODIFY COLUMN descripcion TEXT;
```

3. Eliminar la columna `dificultad` si ya no la usas:
```sql
ALTER TABLE recetas DROP COLUMN dificultad;
```

Así adaptas la base de datos sin necesidad de crearla de nuevo.

