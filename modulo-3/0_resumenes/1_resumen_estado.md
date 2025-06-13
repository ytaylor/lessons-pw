# Resumen de Lecciones de React

## 🔷 1. Introducción general
**Objetivo del día:** Aprender a dar funcionalidad con JavaScript dentro de React:  
- Qué es JSX.  
- Cómo usar eventos.  
- Cómo trabajar con datos (estado).  
- Cómo depurar código React.

## 🟠 2. JSX (JavaScript eXtended)
JSX permite mezclar JS y HTML en el mismo fichero, lo que facilita trabajar con componentes.

Partes clave de un componente:
- Importaciones.
- Función del componente.
- Retorno JSX.
- Exportación.

Dentro del JSX:
- Podemos **usar JS entre llaves `{}`** para mostrar variables, interpolaciones, ejecutar funciones, etc.
- JSX trata el HTML como un dato: puede guardarse en variables o retornarse desde funciones.
- **No se pueden usar sentencias JS** dentro del JSX, solo expresiones (e.g., nada de `if`, `for`, etc.).

---

### 📌 ¿Qué significa que en JSX **solo se pueden usar expresiones**, no sentencias?

En JavaScript hay dos tipos de código:

#### ✅ **Expresiones**: producen un valor.

Ejemplos:

* `2 + 2`
* `"Hola" + " mundo"`
* `userName`
* `getName()`
* `user.isAdmin ? "Admin" : "User"`

Estas **sí se pueden usar dentro del JSX**, porque generan un valor que React puede pintar en pantalla.

```jsx
<h1>Hola {userName}</h1>
<p>La suma es: {2 + 2}</p>
<p>{isLoggedIn ? 'Bienvenida' : 'Haz login'}</p>
```

---

#### ❌ **Sentencias**: son instrucciones que hacen algo, pero **no devuelven directamente un valor**.

Ejemplos:

* `if (...) { ... }`
* `for (...) { ... }`
* `const x = 3`
* `function saludar() { ... }`

Estas **no se pueden usar directamente dentro de JSX**, porque **no devuelven nada que se pueda pintar**.

⛔ Esto está mal:

```jsx
<div>
  <p>{if (userName === "Lola") { return "Hola Lola"; }}</p>  // ❌ ERROR
</div>
```

### ✅ ¿Y entonces cómo hacemos condicionales en JSX?

Usamos **operadores ternarios** o **&&** (AND lógico):

```jsx
<p>{userName === "Lola" ? "Hola Lola" : "Hola desconocida"}</p>

{isAdmin && <span>🔒 Admin</span>}
```

### ✅ ¿Y bucles? ¿No puedo usar `for`?

Correcto, **no puedes usar `for` directamente dentro del JSX**. Pero puedes usar **`.map()`**, que **sí es una expresión** y devuelve un array de elementos JSX.

```jsx
const users = ["Lola", "Ana", "Lucía"];

return (
  <ul>
    {users.map((user, index) => <li key={index}>{user}</li>)}
  </ul>
);
```

### 🧠 En resumen

| Tipo      | Se puede usar en JSX | Ejemplo                    |
| --------- | -------------------- | -------------------------- |
| Expresión | ✅ Sí                 | `{2 + 2}`, `{getName()}`   |
| Sentencia | ❌ No                 | `if`, `for`, `const`, etc. |

¿Quieres que prepare una tabla visual o una mini práctica para ver si lo tienes claro?


## 🟡 3. Eventos en React
La sintaxis de los eventos se simplifica:
- Se definen **dentro del mismo componente**, no hay que hacer `querySelector`.
- Se usan con la sintaxis: `<button onClick={handleClick}>`.
- La función manejadora no lleva paréntesis: `onClick={handleClick}` (no `handleClick()`).
- Funciona igual que en JS: `ev.preventDefault()`, `ev.target`, etc.
- No se pueden usar eventos fuera del DOM que React controla (por ejemplo, el scroll de `body`).

## 🔵 4. El estado en React (`useState`)
El **estado** es donde se guardan los datos dinámicos:
- Se declara con `useState(valorInicial)`.
- Devuelve un array con una constante y una función: `[name, setName]`.
- Cuando `setName` actualiza el estado, React re-renderiza el componente.

Puntos clave:
- Cada dato en el estado necesita su propio `useState`.
- El valor inicial se usa **solo la primera vez** que se renderiza.
- Las declaraciones de estado deben estar **en la raíz del componente**, no dentro de `if`, `for`, etc.
- `setName` se debe usar **solo dentro de funciones manejadoras o `useEffect`**.

## 🟢 5. Estado y eventos trabajando juntos
Este es el núcleo de React: cómo los eventos modifican el estado y React reacciona.

Flujo típico:
1. El usuario interactúa (evento).
2. Ejecutamos una función que actualiza el estado con `setX`.
3. React vuelve a ejecutar la función `App()` y pinta lo nuevo en pantalla.

Consejos://
- Guarda en el estado solo los datos que cambian por acciones de la usuaria.
- **No guardes en el estado valores derivados que se puedan calcular.**
- Piensa siempre en React como un sistema reactivo: **cambian los datos → cambia la vista.**

## 🟣 6. Depuración en React
- Puedes usar `console.log` y `debugger` en cualquier parte de JS **excepto dentro del `return`** del JSX.
- La extensión [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es) es clave para ver el estado de cada componente.
- Recomendaciones:
  - Coloca `debugger` dentro de las funciones manejadoras.
  - Observa el estado en la pestaña `Components` de DevTools.