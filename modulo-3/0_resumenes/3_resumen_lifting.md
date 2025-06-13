
## 🔼 Lifting
Permite que un componente hija pase información a su componente madre mediante una función pasada por props.

- Las props siempre fluyen de madre a hija.
- Para comunicar de hija a madre, se pasa una función sin ejecutar desde la madre a la hija.
- La hija ejecuta esa función en respuesta a un evento, enviando datos limpios como argumentos.
- Es importante no enviar el evento completo (`ev`), sino solo el valor necesario (`ev.target.value`).

## 🔁 Props y lifting en múltiples niveles
- Props y funciones de lifting pueden pasar por varios niveles (nietas, bisnietas...).
- Los componentes intermedios solo actúan como puente: reciben y vuelven a pasar las props o funciones.
- En el último nivel es donde se usan o ejecutan.

## 🎭 Pintado condicional
Permite mostrar contenido dinámico según condiciones usando operadores ternarios o lógicos.

```jsx
return <p>{isEditMode ? 'Modo edición ON' : 'Modo edición OFF'}</p>;
```

## 👶 props.children
Permiten crear componentes genéricos reutilizables que reciben contenido dinámico dentro de sus etiquetas.

```jsx
<ModalWindow>
  <h1>Contenido</h1>
</ModalWindow>
```

```jsx
const ModalWindow = (props) => {
  return <section>{props.children}</section>;
};
```


## ✅ Buenas prácticas generales
- Usar `lifting` para comunicar datos hacia arriba.
- Encadenar props y lifting correctamente entre múltiples niveles.
- Usar `<>...</>` para evitar `div` innecesarios.
- Pintar solo si hay datos (pintado condicional).
- Reutilizar componentes con `props.children`.
- Desestructurar props para código más limpio.