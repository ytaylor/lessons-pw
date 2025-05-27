
# Introducción a Bucles y Arrays con Objetos en JavaScript

---

## 🔁 ¿Qué es un bucle?

Un **bucle** permite repetir una acción varias veces sin escribir el mismo código muchas veces.

📝 Ejemplo: En vez de escribir "No llegaré tarde" 100 veces, con un bucle lo escribes una vez y le dices que lo repita.

---

## 🧪 Bucle `for`

```js
for (let i = 0; i < 3; i++) {
  console.log("Hola");
}
```

Este código imprimirá "Hola" tres veces.  
Funciona así:
1. `i` empieza en 0
2. Mientras `i < 3`, se ejecuta el bloque de código
3. Cada vez que se ejecuta, `i` aumenta en 1

---

## 🔂 Bucle `for...of`

Una forma más simple de recorrer arrays. No muestra el índice, solo el valor.

```js
const frutas = ["manzana", "pera"];
for (const fruta of frutas) {
  console.log(fruta);
}
```

Muestra:  
- "manzana"  
- "pera"

---

## 🔁 Bucle `forEach`

Es otra forma de recorrer arrays, usando una función.

```js
const numeros = [1, 2, 3];
numeros.forEach((num) => {
  console.log("Número:", num);
});
```
---

## 🌐 querySelectorAll

Sirve para seleccionar varios elementos HTML. Devuelve algo que se puede tratar como un array.

```js
const parrafos = document.querySelectorAll('p');
parrafos[0].innerHTML = "Soy el primero";
```

Recorrerlos con un bucle:
```js
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].classList.add('resaltado');
}
```
---

## 🎁 Bonus: `for...in` para objetos

Recorre las claves (propiedades) de un objeto:

```js
const datosUsuario = {
  email: "info@email.com",
  password: "secreta123",
};

for (let campo in datosUsuario) {
  const input = document.querySelector(".js-" + campo);
  input.value = datosUsuario[campo];
}
```

Esto rellena automáticamente los campos de un formulario si las clases coinciden con los nombres de las claves del objeto.
