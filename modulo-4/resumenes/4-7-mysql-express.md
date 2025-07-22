
# Proyecto Express + MySQL (sin MVC) - API sobre Mujeres Negras Influyentes

Este proyecto muestra cómo crear un servidor Express que se conecta a una base de datos MySQL usando un único archivo `index.js`. Incluye dos endpoints:

- `GET /api/women`: Devuelve todas las mujeres de la base de datos.
- `POST /api/women`: Inserta una nueva mujer en la tabla.

---

## 🛠️ Requisitos

- Node.js y npm instalados
- MySQL con la base de datos `black_women_db` cargada
- Paquete `mysql2`

---

## 📦 Instalación

```bash
npm init -y
npm install express mysql2
```

---

## 📁 index.js

```js
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

app.use(express.json());

const getConnection = async () => {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tuPassword', // Reemplázalo con tu contraseña real
    database: 'black_women_db'
  });
};

app.get('/api/women', async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.query('SELECT * FROM women');
    connection.end();
    res.json({ success: true, women: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/women', async (req, res) => {
  const { full_name, birth_date, death_date, bio, country_id, field_id, photo_url } = req.body;

  if (!full_name || !country_id || !field_id) {
    return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
  }

  try {
    const connection = await getConnection();
    const query = \`
      INSERT INTO women (full_name, birth_date, death_date, bio, country_id, field_id, photo_url)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    \`;
    const values = [full_name, birth_date, death_date, bio, country_id, field_id, photo_url];
    const [result] = await connection.query(query, values);
    connection.end();

    res.status(201).json({ success: true, message: 'Mujer insertada', id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(\`Servidor escuchando en http://localhost:\${PORT}\`);
});
```

---

## 🧪 Cómo probar con Postman

### GET
- Método: `GET`
- URL: `http://localhost:3000/api/women`
- Pulsa **Send**

### POST
- Método: `POST`
- URL: `http://localhost:3000/api/women`
- Body → raw → JSON:

```json
{
  "full_name": "Ejemplo Nombre",
  "birth_date": "1990-01-01",
  "death_date": null,
  "bio": "Biografía breve",
  "country_id": 1,
  "field_id": 2,
  "photo_url": "https://..."
}
```

---

## ✅ Resultado

Una pequeña API funcional que permite obtener e insertar datos sobre mujeres negras influyentes usando MySQL y Node.js sin estructura compleja.

# Uso de dotenv en proyectos Node.js

El paquete `dotenv` permite gestionar variables de entorno a través de un archivo `.env`. Es una buena práctica para evitar exponer credenciales sensibles directamente en el código fuente.

---

## 📦 Instalación

```bash
npm install dotenv
```

---

## 📁 Estructura típica

```
proyecto/
├── .env
├── index.js
└── package.json
```

---

## 📝 Contenido del archivo `.env`

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tuPassword
DB_NAME=black_women_db
```

---

## 🔧 Uso en el código JavaScript

### 1. Importar dotenv al inicio de tu archivo

```js
require('dotenv').config();
```

### 2. Acceder a las variables de entorno

```js
const port = process.env.PORT;
const dbUser = process.env.DB_USER;
```

---

## ✅ Ventajas

- **Separación de configuración**: No mezclas claves o contraseñas en tu código.
- **Facilita el despliegue**: Puedes tener diferentes `.env` según el entorno (desarrollo, test, producción).
- **Evita errores en equipo**: Cada miembro puede tener sus variables sin afectar a los demás.

---

## ⚠️ Buenas prácticas

- **Nunca subas tu archivo `.env` al repositorio.**
- Añade `.env` a tu archivo `.gitignore`:

```
.env
```

---

## 🧪 Comprobación rápida

Puedes añadir un `console.log(process.env)` en tu archivo para ver que se están leyendo correctamente las variables.

---