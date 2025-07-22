# Guía completa: Backend con Node.js, Express y MySQL

Este documento reúne las principales lecciones sobre servidores en Node, uso de async/await, estructura de proyectos, conexión a bases de datos y pruebas con Postman. Además, incluye un ejemplo real basado en la base de datos `black_women_db`.

---

## 🧱 Arquitectura del servidor (MVC)

Separar responsabilidades ayuda a mantener el código limpio y fácil de mantener:

- **Modelo**: interactúa con la base de datos.
- **Controlador**: gestiona las peticiones y coordina con el modelo.
- **Vista**: genera HTML (no se usa en APIs REST, que devuelven JSON).

Estructura típica:
```
proyecto/
├── models/
├── controllers/
├── views/
├── index.js
└── package.json
```

---

## ⚡ Async / Await en JavaScript

Permite trabajar con operaciones asíncronas como llamadas a APIs o bases de datos.

```js
const cargarDatos = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const datos = await res.json();
    console.log(datos);
  } catch (error) {
    console.log('Error al cargar datos', error);
  }
};
```

Recuerda: `await` solo funciona dentro de funciones `async`.

---

## 🛠️ Conectar Express con MySQL

### Instalación:
```bash
npm install express mysql2
```

### Conexión:
```js
const mysql = require('mysql2/promise');
const conn = await mysql.createConnection({ /* config */ });
```

### Consulta básica:
```js
app.get('/user', async (req, res) => {
  const [results] = await conn.query('SELECT * FROM users');
  res.json(results);
});
```

---

## 🧪 Usar Postman para pruebas

- Instala desde [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
- Haz peticiones GET o POST a tus endpoints localmente

### GET
- URL: `http://localhost:3000/users`

### POST
- URL: `http://localhost:3000/new-user`
- Body → raw → JSON:
```json
{
  "name": "Ada Lovelace",
  "email": "ada@ejemplo.com"
}
```

---

## 🗃️ Base de datos `black_women_db`

Estructura de tablas:
- `women`: información personal
- `achievements`: logros
- `countries`: países
- `fields`: campos profesionales

Relaciones:
- `achievements.woman_id` → `women.id`
- `women.country_id` → `countries.id`
- `women.field_id` → `fields.id`

Ejemplo:
```sql
INSERT INTO women (full_name, birth_date, country_id, field_id)
VALUES ('Angela Davis', '1944-01-26', 1, 1);
```

---

## 🌱 Uso de dotenv

Permite cargar variables de entorno desde un archivo `.env`

### Instalación
```bash
npm install dotenv
```

### `.env` de ejemplo:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tuPassword
DB_NAME=black_women_db
```

### Uso en código:
```js
require('dotenv').config();
const port = process.env.PORT;
```

Añade `.env` a tu `.gitignore` para no subirlo a GitHub.

---

## ✅ Resultado

Con este conocimiento puedes:

- Organizar un proyecto Express de forma profesional
- Usar promesas con async/await
- Conectar y consultar una base de datos MySQL
- Usar Postman para testear tus rutas
- Proteger tus credenciales con dotenv

---

© Adalab & ChatGPT