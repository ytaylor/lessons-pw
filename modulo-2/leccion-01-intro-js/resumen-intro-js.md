
# 🧑‍🏫 Módulo 2 - Introducción a la programación con JavaScript

## ¿Qué es programar?

Programar es dar instrucciones al ordenador para que **realice operaciones sobre datos** y obtenga un resultado.  
Ejemplo práctico: Traductor de Google, Contador, Interfaz de pestañas, Cámara de móvil.

```js
// Ejemplo simple: traducir un texto (simulado)
const original = 'Hello';
const translated = 'Hola';

console.log(`${original} se traduce como ${translated}`);
```

---

## Introducción a JavaScript

- JavaScript **sí** es un lenguaje de programación (a diferencia de HTML y CSS).
- Permite hacer páginas dinámicas y responder a eventos del usuario.

---

## Nuestro primer código

### Estructura HTML básica

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Mi primer código JavaScript</title>
  </head>
  <body>
    <h1 class="title"></h1>
    <script src="./main.js"></script>
  </body>
</html>
```

### Archivo `main.js`

```js
'use strict';
document.querySelector('.title').innerHTML = '¡Hola mundo!';
```

---

## Obtener y modificar elementos

### Obtener elementos del DOM

```js
const titleElement = document.querySelector('.title');
```

### Modificar su contenido

```js
titleElement.innerHTML = 'Bienvenida';
```

### Añadir contenido nuevo

```js
titleElement.innerHTML += ' adalaber';
```

### Añadir etiquetas HTML desde JS

```js
const list = document.querySelector('.list');
list.innerHTML = '<li>Home</li><li>Contacto</li>';
```

---

## Variables y constantes

### Declarar y asignar variables

```js
let name = 'Carmen';
let age = 34;
```

### Usar variables

```js
const greeting = `Hola, me llamo ${name} y tengo ${age} años.`;
console.log(greeting);
```

### Constantes

```js
const TAX_RATE = 0.21;
// TAX_RATE = 0.18; // ❌ Error: no se puede cambiar
```

### Buenas prácticas
- Escribe nombres claros y en camelCase
- Usa `const` por defecto
- Evita números mágicos en tu código

---

## Modificar clases desde JS

### Añadir una clase

```js
const section = document.querySelector('.section-b');
section.classList.add('hidden');
```

### Eliminar una clase

```js
section.classList.remove('hidden');
```

### Cambiar visibilidad de secciones

```js
const sectionA = document.querySelector('.section-a');
const sectionB = document.querySelector('.section-b');

sectionA.classList.add('hidden');
sectionB.classList.remove('hidden');
```

---

## ✅ Recomendaciones para practicar

- Modifica todos los ejemplos: cambia textos, etiquetas, clases...
- Comete errores y usa la consola para ver qué pasa
- Practica cada día y haz los ejercicios del módulo
- Usa pair programming para resolver dudas y mejorar la comprensión



¡A disfrutar programando! 🚀
