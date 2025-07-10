

En estas lecciones aprendimos las herramientas necesarias para:
- Pedir y enviar datos a un servidor con `fetch`.
- Usar `useEffect`, un hook que nos permite ejecutar código en momentos especiales del ciclo de vida de un componente.

---

## 🪝 ¿Qué es `useEffect`?

`useEffect` es un **hook de React** que nos permite ejecutar código después de que el componente se haya renderizado.

### ¿Para qué sirve?

- Realizar **efectos secundarios**, como:
  - Llamadas a APIs con `fetch`.
  - Escritura/lectura en el `localStorage`.

### Sintaxis básica

```jsx
import { useEffect, useState } from "react";

useEffect(() => {
  // Código que queremos ejecutar
}, []);
```

### Segundo parámetro del `useEffect` (dependencias):

- No poner nada → se ejecuta siempre.
- Array vacío `[]` → se ejecuta solo al montar el componente.
- Array con dependencias `[x]` → se ejecuta cada vez que `x` cambie.

---

## 🔌 ¿Cómo usar `fetch` en React?

### 🚫 Forma NO recomendada

Escribir directamente `fetch(...)` en el `useEffect` del componente hace que el código esté mezclado (lógica + vista).

### ✅ Forma correcta: usar un **servicio**

1. Crear `src/services/api.js`:

```js
const callToApi = () => {
  return fetch("https://swapi.dev/api/people/5")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default callToApi;
```

2. Usar el servicio desde el componente:

```jsx
import { useEffect, useState } from "react";
import callToApi from "../services/api";

useEffect(() => {
  callToApi().then((data) => {
    setStarWarsData(data);
  });
}, []);
```

---

## 📥 Pasar parámetros al servicio

Se pueden pasar datos como parámetros a la función del servicio:

```js
const callToApi = (searchName) => {
  return fetch(`https://swapi.dev/api/people/?search=${searchName}`)
    .then((response) => response.json());
};
```

Y en el componente:

```jsx
useEffect(() => {
  callToApi(searchName).then((data) => {
    setCharacters(data.results);
  });
}, [searchName]);
```

---

## ✉️ Servicios POST

Para hacer una petición `POST`, simplemente se cambia el método:

```js
return fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" },
});
```



---

## ⏳ Loader en llamadas `fetch`

Para mostrar un loader:

1. Estado `isLoading` en `useState`.
2. Antes del `fetch`: `setIsLoading(true)`
3. Después del `fetch`: `setIsLoading(false)`
4. En el `return`, mostrar algo condicionalmente:

```jsx
{isLoading ? <p>Cargando...</p> : <p>Contenido cargado</p>}
```

---


---

## ✅ Conclusiones

- `useEffect` nos permite ejecutar código en momentos específicos:
  - Al montar el componente.
  - Cuando cambian ciertas variables.
- `fetch` se debe encapsular en **servicios** para mantener el código limpio.
- Los servicios son funciones JS que:
  - Reciben parámetros (si es necesario).
  - Hacen la llamada al servidor.
  - Devuelven una promesa.
- Usar `fetch` con `useEffect` es la manera estándar de trabajar con APIs en React.


