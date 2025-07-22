#  Node.js y Express

Node.js permite ejecutar JavaScript fuera del navegador, desde la terminal. Ideal para crear aplicaciones backend.

### ¿Para qué sirve?
- Leer y escribir archivos.
- Crear servidores.
- Automatizar tareas.

### Diferencias con JS en navegador
- No tiene interfaz gráfica.
- Más permisos (ficheros, red, etc).
- Solo ejecuta JS, no HTML/CSS.

---

## 📦 Módulos en Node.js

### ¿Qué es un módulo?
Una librería de código reutilizable.

### Tipos:
1. **Propios**
2. **Nativos**
3. **De NPM**
4. **JSON**

### Sintaxis antigua en Node.js
```js
module.exports = { suma };
const operaciones = require('./operaciones.js');
```

---

## ⚙️ Iniciar un proyecto Node.js

```bash
npm init
npm install <nombre-del-modulo>
```

Esto crea el `package.json` y gestiona dependencias.

---

## 🚀 Express.js

### ¿Qué es?
Un módulo de Node.js para crear servidores de forma sencilla.

### Ejemplo básico:
```js
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('¡Hola mundo!');
});
```

---

## 🛡️ CORS

### ¿Qué es?
Protección del navegador cuando haces peticiones a otro dominio.

### Solución:
```bash
npm install cors
```
```js
const cors = require('cors');
app.use(cors());
```

---

## ⚡ Nodemon

Reinicia el servidor automáticamente al guardar cambios.

### Instalación:
```bash
sudo npm install -g nodemon
```

### Uso:
```bash
nodemon index.js
```

---

## 📄 Servidor de archivos estáticos

### ¿Qué es?
Entrega archivos como HTML, CSS, imágenes, sin modificarlos.

### Configuración:
```js
const path = require('path');
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));
```

### Comportamiento:
- `/` → busca `public/index.html`
- `/blog/` → busca `public/blog/index.html`
- `/contact.html` → busca `public/contact.html`

---

## ❌ Error 404 personalizado

```js
app.get('*', (req, res) => {
  res.status(404).sendFile(
    path.join(__dirname, '../public/404-not-found.html')
  );
});
```

---

## 🔁 Servidores estáticos múltiples

```js
app.use(express.static('./web'));
app.use(express.static('./lessons'));
```

Orden importa: busca primero en `web`, luego en `lessons`.

---

## ✅ Resumen final

1. `npm init`
2. `npm install express cors`
3. Usa `nodemon` para desarrollo
4. Usa `express.static()` para servir HTML/CSS
5. Usa `app.get()` para datos (API)
6. Añade manejo de error 404
