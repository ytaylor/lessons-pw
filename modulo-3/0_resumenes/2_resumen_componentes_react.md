
## 🧱 Introducción a los Componentes
React se basa en el uso de componentes: piezas reutilizables y personalizables de UI.  
Hoy veremos:
- Qué es y cómo se usa un componente.
- Cómo personalizarlos con props.
- Jerarquía y responsabilidad.
- Uso de Sass por componente.

## 🔧 Qué es un componente
Un componente es un bloque funcional y visual reutilizable, con su propio diseño y funcionalidad.

### Tipos:
- **Principal**: `App.jsx`
- **Simples no personalizables**: como un logo.
- **Simples personalizables**: como un botón con diferente texto.

## 🧬 Jerarquía y Responsabilidad
- Los componentes forman un árbol: `App` es madre, otros son hijas.
- Un componente **sabe quiénes son sus hijas**, pero no su madre o hermanas.
- Cada componente es responsable de:
  - Renderizar su HTML.
  - Pasar props a sus hijas.

## 🔄 Estado y Comunicación
- Cada componente puede tener su propio `useState`.
- Para compartir datos:
  - De madre a hija → props.
  - De hija a madre → lifting (se verá más adelante).

## 🛠️ Props
- Se usan para personalizar componentes.
- Se pasan desde la madre como atributos: `<Boton texto="Hola" />`
- Se reciben en la hija como parámetro `props`.
- `props` es un objeto con todas las propiedades.

### Tipos de props
- Strings, numbers, booleanos, arrays, objetos, funciones, componentes, etc.

## 🧵 Destructuring de props
Facilita el acceso directo a las props sin usar `props.` constantemente.

```jsx
const Product = ({ name, price }) => {
  return <p>{name}: {price}</p>;
};
```


## 🧩 Fragments
Permiten que un componente retorne múltiples elementos sin añadir nodos extra al DOM.

```jsx
return (
  <>
    <h1>Título</h1>
    <p>Texto</p>
  </>
);
```

## ✅ PropTypes
Permite validar que las props que recibe un componente sean del tipo correcto.

Pasos:
1. Instalar: `npm install prop-types`
2. Importar: `import PropTypes from "prop-types";`
3. Declarar:
```jsx
MiComponente.propTypes = {
  texto: PropTypes.string.isRequired,
  numero: PropTypes.number,
};
```

Muestra un warning en consola si algo no es correcto.


## 🎨 Sass por componente
- Cada componente debe importar su propio `.scss`.
- Ejemplo:
```jsx
// Header.jsx
import '../styles/Header.scss';
```
- Así se asegura que los estilos estén encapsulados y el componente sea reutilizable.

## 🔎 Depuración de props
- Puedes ver las props con `console.log(props)` o usando `React DevTools`.
- En DevTools → pestaña Components → seleccionas el componente y ves sus props.

## 🧠 Buenas prácticas
- Pensar y dibujar la jerarquía antes de programar.
- Usar nombres en PascalCase para ficheros y componentes.
- Usar propTypes en todos los componentes que reciben props.
- Dividir App en componentes pequeños reutilizables y con responsabilidad única.