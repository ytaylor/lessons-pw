
# 🧠 Objetos en JavaScript

---

## ✨ Parte 1: Explicación cercana, con ejemplos de la vida real

### ¿Qué es un objeto?

Imagina una caja donde guardas cosas relacionadas entre sí. Por ejemplo, una "caja de lápices" donde tienes:
- El color del lápiz
- Si está afilado o no
- Cuánta mina le queda
- Y también puedes usarlo para pintar

En JavaScript, un **objeto** es justo eso: una caja donde agrupamos **propiedades** (las características) y **métodos** (las acciones).

---

### ¿Para qué sirven?

Nos ayudan a ordenar la información y trabajar con ella de forma más sencilla. Como tener cajones con etiquetas en vez de montones de papeles sueltos.

Ejemplos:
- Un usuario con nombre, edad, email.
- Un mensaje con título, contenido, si está visible.
- Un post con foto, texto, número de likes.

---

### ¿Cómo se crea un objeto?

```js
const lapiz = {
  color: "rojo",
  afilado: true,
  pintar: function () {
    return "Estoy pintando en rojo";
  },
};
```

---

### ¿Cómo se usa?

```js
lapiz.color       // "rojo"
lapiz["color"]    // también "rojo"
lapiz.pintar();   // "Estoy pintando en rojo"
```

---

### ¿Qué es `this`?

Es como decir "yo mismo" dentro del objeto:

```js
const persona = {
  nombre: "Ana",
  saludar: function () {
    return "Hola, me llamo " + this.nombre;
  },
};
```

---

### Objetos ya existentes en el navegador

- `document`: la página web
- `console`: para mostrar cosas
- `event`: info cuando haces clic

---

### Cuidado con las copias

Si copias un objeto, **no estás duplicando la caja**, solo estás apuntando a la misma. Cambias una y se cambia la otra.

---

## 🧑‍💻 Parte 2: Explicación técnica

### ¿Qué es un objeto?

Un tipo de dato en JavaScript que agrupa información en pares clave-valor. Permite representar entidades complejas.

---

### Sintaxis básica

```js
const adalaber = {
  name: "María",
  age: 31,
  isMarried: false,
};
```

---

### Acceso a propiedades

```js
adalaber.name        // con punto
adalaber["name"]     // con corchetes
```

---

### Modificación

```js
adalaber.name = "Lucía";
```

---

### Métodos

Funciones que son propiedades de un objeto:

```js
adalaber.speak = (phrase) => `Yo digo: ${phrase}`;
adalaber.speak("Hola"); // "Yo digo: Hola"
```

---

### `this` y funciones normales

```js
adalaber.sayHello = function () {
  return "Hola, me llamo " + this.name;
};
```

> Importante: usar `function`, no `=>`, si queremos que `this` funcione.

---

### Objetos del navegador

- `console`: consola de desarrollo
- `document`: estructura del HTML
- `event`: información sobre eventos

---

### `null`

Indica que una variable **debería** contener un objeto más adelante.

```js
let userData = null;
```

---

### Referencias y copia

```js
const a = { name: "Rosa" };
const b = a;
a.name = "Rocío";
console.log(b.name); // también es "Rocío"
```

---

### Métodos de otros tipos

- Strings: `.length`, `.toLowerCase()`, `.trim()`
- Números: `.toFixed()`

---

## 📚 Recursos adicionales

- [Introducción a los objetos en JS (YouTube)](https://www.youtube.com/watch?v=ycfoaxNhYbk)
- [Propiedades de cadenas](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)
- [Métodos de números](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number)
