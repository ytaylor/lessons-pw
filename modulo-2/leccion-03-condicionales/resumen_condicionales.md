
# 🔀 Módulo 2 - Condicionales en JavaScript

En esta sección aprenderás a tomar decisiones dentro de tu código: si se cumple una condición, haces algo; si no se cumple, haces otra cosa. ¡Esto es la base de la lógica de cualquier programa!

---

## 📌 ¿Qué cubrimos?

- Operadores de comparación y lógicos
- Estructuras condicionales con `if`, `else`, `else if`
- Uso de `classList.contains()` con condicionales
- Operador ternario `? :`
- Sentencias vs expresiones
- Bonus: `switch` y operador módulo `%`

---

## ❓ ¿Para qué sirven los condicionales?

Nos permiten **controlar el flujo del programa**. Por ejemplo:

- Mostrar un error si falta un campo obligatorio
- Mostrar diferentes secciones según la edad de una usuaria
- Ejecutar funciones si se cumplen determinadas reglas


---

## ⚖️ Operadores de comparación

Siempre devuelven `true` o `false`. Ejemplos:

```js
5 === 5; // true
5 !== 4; // true
4 < 10; // true
10 >= 10; // true
```

Siempre usamos `===` y `!==`, nunca `==` ni `!=` para evitar errores de tipo.


---

## 🔗 Operadores lógicos

- `!`: negación → `!true` es `false`
- `&&`: Y lógico → ambas condiciones deben cumplirse
- `||`: O lógico → basta con que una se cumpla

```js
const age = 35;
const name = "Ada";

if (age > 30 && name === "Ada") {
  console.log("Es Ada y tiene más de 30");
}
```

También podemos usarlos con valores no booleanos:

```js
const isAdmin = false;
const isModerator = true;
const name = "Layla";

const role = isAdmin && "admin" || isModerator && "moderadora";
console.log(role); // 'moderadora'
```


---

## 🧠 Condicionales: `if`, `else`, `else if`

```js
if (edad >= 18) {
  console.log("Mayor de edad");
} else if (edad >= 13) {
  console.log("Adolescente");
} else {
  console.log("Niña");
}
```

### Anidados

```js
if (edad < 18) {
  if (genero === "female") {
    console.log("Eres una niña");
  }
}
```

### `classList.contains`

```js
if (element.classList.contains("hidden")) {
  element.classList.remove("hidden");
} else {
  element.classList.add("hidden");
}
```

---

## 🎭 Operador ternario

Una forma corta de escribir un `if...else` simple:

```js
const theme = "halloween";
const color = theme === "halloween" ? "#ff5722" : "#000";
```

---

## 🎚️ Bonus: `switch` y módulo

### Switch

Ideal para muchas condiciones con la misma variable:

```js
const dia = "Viernes";

switch (dia) {
  case "Lunes":
    console.log("Reunión");
    break;
  case "Viernes":
    console.log("Cumpleaños de Paco");
    break;
  default:
    console.log("Día normal");
}
```

### Módulo (%)

```js
if (numero % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}
```

---

## 🧪 Buenas prácticas

- Usa `===` y `!==` para comparar
- Encadena condiciones solo si es necesario
- Usa `classList.contains()` para manejar clases en el DOM
- El operador ternario es útil, pero no abuses
- Usa `switch` cuando compares una misma variable con múltiples valores


