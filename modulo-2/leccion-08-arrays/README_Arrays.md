

# Introducción a Arrays 

## 🧺 ¿Qué es un array?

Un **array** es como una **caja de zapatos con compartimentos** donde podemos guardar datos en orden: nombres, números, colores, etc.

```js
const listaCompra = ["pan", "leche", "huevos"];
```

El primer elemento está en la posición 0, el segundo en la 1, etc.

---

## 🎛 ¿Para qué sirven los arrays?

Sirven para guardar **muchos datos similares** y trabajar con ellos más fácilmente.

Ejemplos típicos:
- Productos en un carrito de compra
- Tareas del día
- Resultados de búsqueda

---

## 🎯 Cómo acceder a un dato del array

```js
const frutas = ["pera", "manzana", "naranja", "plátano"];
console.log(frutas[1]); // "manzana"
```

Recuerda: **el primer índice es 0**.

---

## ➕ Añadir elementos

```js
const saludos = [];
saludos[0] = "Hola";
saludos[1] = "¿Qué tal?";
```

⚠️ Si te saltas posiciones, se generan huecos vacíos:
```js
const numeros = [1, 2, 3];
numeros[8] = 24;
// [1, 2, 3, vacío × 5, 24]
```

---

## 📝 Modificar un valor

```js
const frutas = ["plátano", "manzana", "pera"];
frutas[1] = "limón"; // Reemplaza "manzana"
```

---

## 🧠 Asignación por referencia

```js
const original = [1, 2, 3];
const copia = original;
original[3] = 4;

console.log(copia); // [1, 2, 3, 4]
```

Ambas constantes apuntan al mismo array.

---

## 📏 Saber cuántos elementos tiene un array

```js
const tareas = ["lavar", "comer", "dormir"];
console.log(tareas.length); // 3
```

---

## ✅ Saber si algo es un array

```js
Array.isArray(["hola"]); // true
Array.isArray("hola");   // false
```
---

## 🧩 Arrays con Objetos

Puedes guardar objetos dentro de un array. Muy útil para listas de datos como contactos:

```js
const contactos = [
  { name: 'Raquel', phone: '915552323' },
  { name: 'Pedro', phone: '915554564' },
];
```

Acceder al nombre del primer contacto:
```js
console.log(contactos[0].name); // "Raquel"
```

Modificar el email del segundo:
```js
contactos[1].email = 'pedro@email.com';
```

---

## 📋 Objetos con Arrays dentro

También puedes tener un objeto que contenga un array:

```js
const tarea = {
  name: 'Hacer app',
  participantes: ['Ana', 'Luis'],
};
```

Acceder al primer participante:
```js
console.log(tarea.participantes[0]); // "Ana"
```