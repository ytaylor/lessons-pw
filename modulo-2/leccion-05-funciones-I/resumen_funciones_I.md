
# 🔧 Módulo 2 - Funciones y Ámbito de las Variables en JavaScript

Las funciones son **bloques reutilizables de código** que puedes ejecutar con diferentes datos para obtener distintos resultados. Además, conocer el **ámbito de las variables** (scope) te permite evitar errores y escribir código más organizado.

---

## 📌 ¿Qué cubrimos?

- Qué son las funciones y por qué son útiles
- Cómo declarar, ejecutar y reutilizar funciones
- Parámetros, argumentos y valores de retorno
- Funciones anónimas
- Qué es el ámbito (scope) y cómo afecta a las variables

---

## 🔁 ¿Qué es una función?

Una función es un **bloque de instrucciones** que definimos una vez y podemos reutilizar.  
Ejemplo:

```js
function makeMeCoffee(coffeeName) {
  return `Aquí tiene su ${coffeeName}, que lo disfrute`;
}
```

```js
console.log(makeMeCoffee('Café con coco')); 
// "Aquí tiene su Café con coco, que lo disfrute"
```

---

## 🛠️ Declaración y uso

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5
```

---

## 🧪 Parámetros y retorno

- Los **parámetros** son las variables que recibe la función.
- Los **argumentos** son los valores que le pasamos al llamarla.
- Podemos **devolver resultados** con `return`.

```js
function greeting(name) {
  return `Hola, ${name}`;
}

const message = greeting('María');
console.log(message); // Hola, María
```

---

## ⚠️ Si no usas `return`, devuelve `undefined`

```js
function noReturn() {
  const sum = 2 + 2;
}

console.log(noReturn()); // undefined
```

---

## 🌐 Ámbito (Scope) de las variables

El **ámbito** de una variable determina dónde puede usarse. Las variables declaradas con `let` o `const`:

- Son **locales** si están dentro de un bloque `{ ... }`
- Son **globales** si están fuera de cualquier bloque

### Ejemplo:

```js
const globalVar = 'Hola';

function sayHi() {
  const localVar = 'Adiós';
  console.log(globalVar); // "Hola"
  console.log(localVar);  // "Adiós"
}

console.log(globalVar); // "Hola"
console.log(localVar);  // ❌ Error: no está definida
```

---

## ✅ Buenas prácticas

- Usa funciones para **reutilizar lógica**
- Mantén tus funciones **cortas y legibles**
- Usa `return` cuando quieras devolver valores
- Usa nombres descriptivos para funciones y parámetros
- Declara las variables solo donde las necesitas

---

Con funciones y control del ámbito, tu código será más limpio, reutilizable y profesional. ¡A seguir practicando! ☕🚀
