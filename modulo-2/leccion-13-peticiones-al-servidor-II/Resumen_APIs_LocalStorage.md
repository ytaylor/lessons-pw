
# 🧠 Resumen: APIs, LocalStorage 

En esta sesión profundizamos en cómo interactuar con **APIs**, cómo **guardar datos en el navegador con LocalStorage**.

---

## 🌍 ¿Qué es una API?

Una **API (Application Programming Interface)** es una forma en que tu código puede **pedir o enviar datos** a un servidor.

- Funciona mediante **URLs especiales** que siguen ciertas reglas (REST).
- Usa el protocolo **HTTP**, basado en **peticiones** (GET, POST...) y **respuestas**.

### 📦 Tipos de peticiones HTTP comunes:

| Método   | ¿Qué hace?                                  | Ejemplo                  |
|----------|---------------------------------------------|--------------------------|
| `GET`    | Obtener datos                               | `/users` para ver lista |
| `POST`   | Enviar datos                                | `/users` para crear uno |
| `PUT`    | Actualizar un dato existente                | `/users/3` para editar  |
| `DELETE` | Borrar un dato                              | `/users/3` para eliminar|

---

## 📬 Peticiones con `fetch`

Ya sabemos usar `fetch()` para pedir datos de un servidor:

```js
fetch('https://api.dogs.com/random')
  .then((res) => res.json())
  .then((data) => console.log(data));
```

Para **enviar datos** (`POST`):

```js
fetch('https://api.dogs.com/favoritos', {
  method: 'POST',
  body: JSON.stringify({ nombre: 'Firulais' }),
  headers: { 'Content-Type': 'application/json' }
});
```

---

## 🎯 ¿Qué es LocalStorage?

`localStorage` nos permite **guardar datos en el navegador** del usuario, incluso si cierra la página.

### Ejemplo: guardar y recuperar nombre

```js
localStorage.setItem('nombre', 'Laura');
const nombre = localStorage.getItem('nombre'); // "Laura"
```

### Guardar objetos o arrays

```js
const tareas = [{ texto: "Aprender APIs", hecha: true }];
localStorage.setItem('tareas', JSON.stringify(tareas));
const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
```


## 🛠 Buenas prácticas

- Usa `JSON.stringify()` y `JSON.parse()` para trabajar con objetos en LocalStorage.
- Revisa `response.ok` en `fetch()` para detectar errores del servidor.
- Encadena `then()` y usa `catch()` para manejar errores correctamente.
- Usa herramientas como **DevTools → Network** o **Postman** para probar APIs.

---

## ✅ ¿Cuándo se usa todo esto?

- Cuando guardas **datos personalizados** para el usuario (LocalStorage)
- Cuando haces **apps dinámicas** que se comunican con un servidor (API + fetch)
- Cuando programas en equipo y necesitas **mantener código limpio y legible** (Linter + Prettier)

---

## 🧠 Frase clave para recordar

> "Las APIs traen y envían datos, el LocalStorage los guarda." 😄

