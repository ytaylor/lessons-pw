
# Resumen: Formas de Enviar Parámetros en Express

## 🟡 1. Query Params

- **Qué son**: Parámetros que se añaden al final de la URL después de un `?`, como `?name=Ana&age=30`.
- **Uso típico**: Filtrar, ordenar, buscar datos.
- **Desde el navegador**:
  - Se escriben directamente en la URL o se añaden en `fetch`.
  - Separados con `&`.
- **En el servidor**:
  - Se accede con `req.query`.
  - Todos los valores se reciben como **strings**.
- ✅ **Ventaja**: Puedes compartir URLs con parámetros incluidos.


### Ejemplo con Query Params

**Cliente (fetch):**
```js
fetch('http://localhost:3000/api?userName=Ana&age=30');
```

**Servidor (Express):**
```js
app.get('/api', (req, res) => {
  const name = req.query.userName;
  const age = req.query.age;
  res.send(\`Nombre: \${name}, Edad: \${age}\`);
});
```

---

## 🔵 2. URL Params

- **Qué son**: Parámetros que forman parte de la estructura de la ruta, como `/users/123`.
- **Uso típico**: Identificadores únicos (userId, productId...).
- **Desde el navegador**:
  - Incluidos directamente en la ruta.
- **En el servidor**:
  - Se accede con `req.params`.
  - Todos los valores se reciben como **strings**.
- ✅ **Ventaja**: Ideal para rutas dinámicas.


### Ejemplo con URL Params

**Cliente (fetch):**
```js
fetch('http://localhost:3000/users/123');
```

**Servidor (Express):**
```js
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(\`ID del usuario: \${userId}\`);
});
```

---

## 🔴 3. Body Params

- **Qué son**: Parámetros enviados en el cuerpo de la petición, no visibles en la URL.
- **Uso típico**: Formularios, datos sensibles como contraseñas.
- **Desde el navegador**:
  - Se envían con `fetch` usando `method: POST` y `body: JSON.stringify(...)`.
  - Es obligatorio añadir `headers: { 'Content-Type': 'application/json' }`.
- **En el servidor**:
  - Se accede con `req.body`.
  - Necesitas usar `express.json()` para que Express los reconozca.
- ✅ **Ventaja**: Mayor privacidad, permite enviar estructuras complejas.


### Ejemplo con Body Params

**Cliente (fetch):**
```js
fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email: 'ana@mail.com', password: '1234' }),
});
```

**Servidor (Express):**
```js
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.send(\`Email: \${email}, Contraseña: \${password}\`);
});
```

---

## 🟢 4. Header Params

- **Qué son**: Parámetros personalizados enviados en la cabecera de la petición.
- **Uso típico**: Autenticación, identificación de usuarias.
- **Desde el navegador**:
  - Se añaden con `fetch` en el objeto `headers`.
- **En el servidor**:
  - Se accede con `req.headers` o `req.header('nombre')`.
  - Todos los valores llegan como **strings** y los nombres en **minúsculas**.
- ✅ **Ventaja**: Permiten enviar datos de contexto o identificación de manera oculta en la cabecera.


### Ejemplo con Header Params

**Cliente (fetch):**
```js
fetch('http://localhost:3000/data', {
  method: 'GET',
  headers: {
    'user-id': '123',
  },
});
```

**Servidor (Express):**
```js
app.get('/data', (req, res) => {
  const userId = req.headers['user-id'];
  res.send(\`ID de usuaria desde headers: \${userId}\`);
});
```
