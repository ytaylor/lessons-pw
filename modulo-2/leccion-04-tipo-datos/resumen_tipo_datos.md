
# 🧠 Módulo 2 - Tipos de datos y consola en JavaScript

## 🔍 Introducción

Todo lo que manipulamos en programación son **valores**: datos que representan información y sobre los que aplicamos operaciones para obtener resultados.

---

## Consola de JavaScript

La consola es una herramienta indispensable para:
- Ver errores de sintaxis
- Consultar el valor de una variable con `console.log()`
- Ejecutar código JS directamente

```js
console.log('Hola mundo');
const age = 30;
console.log('Edad:', age);
```

También podemos ver elementos del DOM:
```js
const welcome = document.querySelector('.welcomeText');
console.log('Elemento welcome:', welcome);
```

**Consejo:** abre siempre la consola mientras programas.

---

## 🔢Tipo de dato `number`

Usamos `number` para representar números enteros o decimales.

```js
const price = 10;
const shipping = 3;
console.log(price + shipping); // 13
```

### Operaciones básicas:
```js
1 + 2; // 3
8 - 3; // 5
6 * 2; // 12
10 / 2; // 5
```

El operador `+` puede sumar o concatenar según el tipo de dato:
```js
'Hola ' + 'Mundo'; // 'Hola Mundo'
10 + '5'; // '105' (string)
```

---

## 🔠 Tipo de dato `string`

Representa texto, que puede estar entre comillas simples, dobles o backticks.

```js
const name = 'Ada';
const greeting = `Hola, ${name}!`;
console.log(greeting); // 'Hola, Ada!'
```

Concatenación:
```js
'Hola ' + 'Adalab'; // 'Hola Adalab'
```

Conversión de string a número:
```js
const age = '30';
console.log(parseInt(age)); // 30
```
---

## ✅ Tipo de dato `boolean`

Solo tiene dos valores: `true` o `false`.

```js
const isAdmin = true;
const isLogged = false;
```

### Valores falsy (se evalúan como `false`):
- false
- null
- undefined
- 0
- NaN
- '' / ""

```js
if (0) {
  console.log('No se ejecuta');
}
```
---

## 🕳️ Tipo de dato `undefined` y `NaN`

### `undefined`
Se asigna automáticamente cuando declaramos una variable sin valor:

```js
let name;
console.log(name); // undefined
```

### `typeof`
Nos dice qué tipo tiene una variable:

```js
typeof 'Hola'; // string
typeof 25; // number
typeof undefined; // undefined
```

### `NaN` (Not a Number)
Aparece cuando intentamos hacer operaciones inválidas con números.

```js
const result = 'mango' * 2; // NaN
isNaN(result); // true
```

---

## 🧪 Recomendaciones para practicar

- Usa la consola para probar expresiones y ver resultados
- Intercala `console.log()` en tu código para entender el flujo
- Experimenta con distintos tipos y operadores
- Utiliza `typeof` e `isNaN` para depurar errores

---

¡Sigue practicando! Todo lo que aprendas aquí lo aplicarás para condicionales, funciones, eventos y más adelante, ¡proyectos reales! 🚀
