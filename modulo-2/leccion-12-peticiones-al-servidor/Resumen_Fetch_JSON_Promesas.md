
# 🌐 Resumen: Peticiones a Servidor con JavaScript (`fetch`, JSON, Promesas)

En esta lección aprendiste a hacer que tu aplicación web hable con un **servidor**. ¿Para qué? Para **recibir o enviar datos** a una API y actualizar tu web sin tener que recargarla.

---

## 📦 ¿Qué es JSON?

**JSON** (JavaScript Object Notation) es un formato para representar datos (muy similar a un objeto JS).

```json
{
  "name": "Paco",
  "age": 30
}
```

Es el formato en el que suelen llegar los datos desde un servidor. Para poder usarlo, se convierte con `response.json()`.

---
## ⛓ ¿Qué es una promesa?

Una **promesa** es un objeto que representa un valor que **aún no está disponible**, pero llegará.

- `fetch()` devuelve una promesa
- usamos `.then()` para trabajar con el resultado cuando llegue
- usamos `.catch()` para capturar errores

---

## 🔄 ¿Qué es `fetch`?

`fetch()` es el método moderno de hacer peticiones a un servidor. Devuelve una **promesa**, y con ella puedes hacer cosas cuando la respuesta llegue.

### 🛠 Ejemplo sencillo: pedir un emoji

```js
fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then((response) => response.json())
  .then((data) => {
    document.body.innerHTML = data.result;
  });
```
--

## 📡 ¿Qué es una API?
Una **API** (Interfaz de Programación de Aplicaciones) es un conjunto de reglas que permite a diferentes programas comunicarse entre sí. En este caso, tu aplicación web se comunica con un servidor para obtener o enviar datos.

### Ejemplos de APIs:
- https://pokeapi.co/: API de Pokémon
- https://dog.ceo/dog-api/: API de perros
- https://www.swapi.tech/: API de Star Wars
- https://github.com/public-apis/public-apis: Lista de APIs públicas
- https://jsonplaceholder.typicode.com/: API de prueba para practicar
- https://api.github.com/: API de GitHub


## Usando el API de JSONPlaceholder

Para obtener datos de un servidor, usamos `fetch()` con el método `GET`. Por ejemplo, para obtener una lista de publicaciones:
```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```
## 📤 Enviar datos: método `POST`

Cuando queremos **enviar datos** (como un formulario), usamos `fetch()` con `method: 'POST'`.

Por ejemplo para crear una nueva publicación, usamos `fetch()` con el método `POST`:
```js
const newPost = {
  title: 'Nuevo post',
  body: 'Este es el contenido del nuevo post',
};
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

---

## 🧵 Peticiones encadenadas y en paralelo (BONUS)

### ⏳ Encadenadas

Haces una petición, y cuando termina haces otra:
```js
fetch('api/usuario')
  .then((res) => res.json())
  .then((user) => fetch(`api/detalles/${user.id}`))
  .then((res) => res.json())
  .then((detalles) => console.log(detalles));
```

### ⚡ En paralelo: `Promise.all`

Lanzamos varias peticiones a la vez y esperamos a que todas terminen:

```js
Promise.all([
  fetch('api/perro1').then(r => r.json()),
  fetch('api/perro2').then(r => r.json())
]).then((respuestas) => {
  console.log(respuestas[0], respuestas[1]);
});
```

---

## 🛑 Gestión de errores

Siempre que uses `fetch`, añade `.catch()` para manejar errores:

```js
fetch('https://api.rand.fun/xyz')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Ups, algo ha fallado", error));
```

---

## 🧪 Ejemplos aplicados a la vida real

- Una **app de tareas** que guarda el estado de las tareas al marcarlas (POST)
- Una **web de perretes** que carga imágenes aleatorias de una raza (GET)
- Una **app de transporte** que consulta varias fuentes (Cabify, Uber...) a la vez para encontrar la mejor ruta (Promise.all)
- Una **búsqueda en GitHub** que devuelve los datos de un usuario (GET con JSON)
- Un **formulario de contacto** que se envía sin recargar la página (POST + JSON)

---

## 📚 Comparativa rápida

| Acción                     | Método  | Método HTTP | Devuelve    | Necesita `.json()` |
|---------------------------|---------|-------------|-------------|---------------------|
| Pedir datos               | `fetch` | `GET`       | Promesa     | ✅ Sí               |
| Enviar datos              | `fetch` | `POST`      | Promesa     | Depende del server |
| Varios a la vez           | `Promise.all` | Varios | Promesa     | ✅ Sí (cada uno)    |
| Gestionar error           | `.catch()` | —       | Error       | —                   |

---

## 🧠 Consejo final

🔁 Antes usábamos bucles, ahora usamos métodos funcionales.  
⚡ Cuanto más práctica, más natural te parecerá trabajar con APIs.

