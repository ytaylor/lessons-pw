
# 🧃 Funciones en JavaScript: ¡como una máquina de hacer zumo!

## ¿Qué es una función?

Una **función** es como una máquina:  
- Le das ingredientes (parámetros)  
- Hace algo con ellos  
- Te devuelve un resultado (`return`)

---

## 🔧 Metáfora Visual

```
             🍊    🍓
            fruta1 fruta2
                ↓
       +--------------------+
       |   hacerZumo()      |
       |                    |
       |  mezcla fruta1 y   |
       |  fruta2            |
       +--------------------+
                ↓
              🧃 zumo
```

---

## 💻 Ejemplo en código JavaScript

```js
function hacerZumo(fruta1, fruta2) {
  return `Aquí tienes un zumo de ${fruta1} y ${fruta2}! 🧃`;
}

const miZumo = hacerZumo("naranja", "fresa");
console.log(miZumo);
// Resultado: Aquí tienes un zumo de naranja y fresa! 🧃
```

---

## 🧩 ¿Qué estamos viendo?

- `function hacerZumo(fruta1, fruta2)` → es la función
- `fruta1` y `fruta2` → son los **parámetros**
- `return` → es el **resultado devuelto**
- `hacerZumo("naranja", "fresa")` → es **llamar** a la función
- `miZumo` → guarda el valor retornado

---

## 💡 ¿Por qué usar funciones?

- Reutilizas código
- Te ayuda a organizar mejor tus ideas
- Hace tu código más limpio y fácil de entender



---


## 🔇 Funciones anónimas

Una función sin nombre, normalmente usada como argumento de otra función.

```javascript
setTimeout(function () {
  console.log("Hola después de 2 segundos");
}, 2000);

//También con funciones flecha:
setTimeout(() => {
  console.log("Hola desde una arrow function anónima");
}, 2000);

//función anónima asignada a una variable
//La función no tiene nombre propio, no es function suma() {...} sino function (a, b) {...}.
//Está siendo asignada a una variable llamada sum. Es decir, el identificador lo tiene la variable, no la función en sí.

const sum = function (a, b) {
  return a + b;
};

console.log(sum(4, 5)); // 9
```




---
## 📁 **Funciones Flecha (Arrow Functions)**

### 🔹 Qué son:
Una forma simplificada de escribir funciones anónimas introducida en ES6.

### 🔹 Características:
- Sintaxis más corta:  
  ```js
  const sum = (a, b) => a + b;
  ```
- Paréntesis opcionales si hay **un solo parámetro**.
- Llaves y `return` pueden omitirse si hay **una sola expresión** (retorno implícito).

### 🔹 Nota clave:
Paréntesis y llaves son opcionales en ciertos casos, pero independientes entre sí.

---

## 📁 **Funciones Manejadoras de Eventos**

### 🔹 Qué son:
Funciones que se ejecutan **cuando ocurre un evento** (clic, envío de formulario, cambio en un input, etc.), Son específicas para manejar eventos del navegador.


### 🔹 Cómo se usan:
1. Se define la función manejadora:
   ```js
   function handleClick() {
     console.log("¡Has hecho clic!");
   }
   ```
2. Se asocia al evento:
   ```js
   button.addEventListener("click", handleClick);
   ```

---

## 📁 **Funciones Callback**

### 🔹 Qué son:
Funciones **pasadas como argumento** a otra función, y ejecutadas cuando ocurre algo (evento, tarea completada...).

### 🔹 Ejemplo común:
```js
button.addEventListener("click", miCallback);
```

### 🔹 Variaciones:
- Función nombrada: `miCallback`
- Función anónima:
  ```js
  addEventListener("click", function () { ... });
  ```
- Arrow function:
  ```js
  addEventListener("click", () => { ... });
  ```

### 🔹 Importante:
Los callbacks pueden recibir parámetros como el evento (`event`) para acceder a más información.

---

### ❓ Diferencia entre funciones manejadoras y callbacks
## ❓ Diferencia entre funciones manejadoras y funciones callback

| Característica                         | Función Manejadora                                              | Función Callback                                                   |
|----------------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------|
| 💡 Propósito principal                  | Responder a eventos del navegador (DOM)                          | Ejecutarse después de una acción o tarea                           |
| 📍 Contexto típico                      | Eventos como `click`, `submit`, `change`, etc.                  | Eventos, tareas asincrónicas, temporizadores, peticiones AJAX...   |
| 🧠 Cómo se usa                          | Se pasa como argumento a `addEventListener`                     | Se pasa como argumento a **cualquier función**                      |
| 🔁 ¿Es siempre anónima?                 | No necesariamente (puede ser nombrada o anónima)                | Puede ser nombrada o anónima                                       |
| 🧱 Forma común                          | `function handleClick() { ... }`                                | `setTimeout(() => { ... }, 1000)`                                  |
| 🔄 ¿Son lo mismo?                       | Es un tipo específico de callback                               | Es un concepto más general                                         |
| ✔️ Relación                             | ✅ Toda función manejadora es una callback                       | ❌ No toda callback es una función manejadora                      |



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
