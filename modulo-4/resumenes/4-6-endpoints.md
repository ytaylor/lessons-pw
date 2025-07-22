# Respuestas y peticiones en Express JS

## 🧭 Partes de una petición

Una petición HTTP al servidor tiene:

- **Cabecera (headers):** información como tipo de contenido, navegador, método usado (GET, POST...).
- **Cuerpo (body):** datos que se envían, como formularios o JSON.

---

## 📬 Métodos HTTP más comunes

| Método  | Uso principal                             |
|---------|--------------------------------------------|
| GET     | Obtener datos (ej: lista de productos)     |
| POST    | Crear datos (ej: enviar formulario)        |
| PUT     | Reemplazar completamente un recurso        |
| PATCH   | Actualizar parcialmente un recurso         |
| DELETE  | Eliminar un recurso                        |
| OPTIONS | Pedir información sobre métodos permitidos |

### Ejemplo en Express:
```js
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => res.send('Got a POST request'));
app.put('/user', (req, res) => res.send('Got a PUT request at /user'));
app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'));
```

---

## 🛣️ ¿Qué es un endpoint?

Un endpoint es una combinación de:
- Ruta (`/`, `/user`)
- Método (`GET`, `POST`, etc.)

Cada combinación puede tener un comportamiento diferente.

---

## 🧾 ¿Qué son `req` y `res`?

- `req`: contiene la información de la solicitud.
- `res`: se usa para enviar la respuesta al cliente.

Ejemplo:
```js
app.get('/', function (req, res) {
  res.send('Hola Mundo');
});
```

---

## 📋 Cabeceras HTTP

Las cabeceras dan contexto a una petición/respuesta, como:
- Tipo de contenido (JSON, HTML…)
- Autenticación
- Caché

Más info: [MDN Headers](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)

---

## ✅ Códigos de estado HTTP

Indican el resultado de una petición:

- **200**: OK
- **201**: Creado con éxito
- **301**: Redirección permanente
- **304**: No ha cambiado
- **400**: Petición malformada
- **401**: No autorizado
- **403**: Prohibido
- **404**: No encontrado
- **500**: Error interno del servidor

### En Express:
```js
res.status(201).json({ success: true });
res.status(404).send('No encontrado');
```

Más info: [http.cat](https://http.cat) 🐱

---

## 📤 Tipos de respuesta en Express

### `res.send()`
Para enviar texto, objetos, HTML, etc.
```js
res.send('Hola');
res.send({ name: 'Ada' });
```

### `res.json()`
Para enviar datos en formato JSON.
```js
res.json({ name: 'Lovelace' });
```

### `res.status()`
Para especificar el código HTTP.
```js
res.status(400).send('Petición inválida');
```

### `res.render()`
Para enviar vistas HTML renderizadas (usando motores de plantillas).

---

## 📌 Conclusiones

1. Usa el método HTTP correcto para cada operación (GET, POST...).
2. Devuelve la respuesta usando `res.send()` o `res.json()`.
3. Acompaña cada respuesta con un código de estado con `res.status()`.
4. Usa herramientas como Postman para probar distintos métodos y endpoints.

