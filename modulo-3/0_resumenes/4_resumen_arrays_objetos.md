
En estas lecciones se aborda el trabajo con **arrays y objetos en React**, incluyendo cómo pintarlos, modificarlos desde el estado, aplicar filtros y utilizar la sintaxis spread para mantener la inmutabilidad.

---

## Pintar arrays en React

- React puede renderizar listas usando el método `map`.
- El método `map` retorna JSX, que se pinta como cualquier otro código en React.
- Cuando se pinta un listado, **es obligatorio usar la propiedad `key`** en el primer elemento retornado por `map`.
  - Si hay un `id` único, se debe usar como `key`.
  - Si no, se puede usar el `index` del `map`.

```jsx
const adalabers = [
  { id: "8341", name: "María" },
  { id: "2676", name: "Lucía" },
  { id: "1004", name: "Sofía" },
];

adalabers.map((adalaber) => <li key={adalaber.id}>{adalaber.name}</li>);
```

---

## Arrays en el estado de React

- Se puede inicializar el estado con un array vacío o relleno:
  ```js
  const [series, setSeries] = useState([]);
  ```
- Para modificar un array del estado:
  1. Se crea una función manejadora.
  2. Se modifica el array.
  3. Se actualiza el estado usando `setSeries([...seriesModificado])`.

- **Es crucial usar el operador spread** al actualizar el estado para evitar problemas de referencia.

---

## Filtrar y buscar arrays en React

- El filtrado debe hacerse **en el momento de renderizar**, no se deben guardar arrays filtrados en el estado.
- Ejemplo de doble filtrado (por nombre y favoritos):

```js
const renderSeries = () => {
  return series
    .filter((serie) => serie.name.includes(searchName))
    .filter((serie) => !filterFavorites || serie.isFavorite)
    .map((serie) => <li key={serie.id}>{serie.name}</li>);
};
```

---

## Objetos en React

- Igual que con arrays, los objetos se pueden manejar desde el estado:

```js
const [shipping, setShipping] = useState({ address: "", city: "" });
```

- Para actualizar un objeto:

```js
shipping.city = ev.target.value;
setShipping({ ...shipping });
```

- Se puede usar varios estados o uno solo como objeto. La elección depende del proyecto.

---

## Spread en JavaScript

- Spread (`...`) **copia elementos de un array u objeto** creando una nueva referencia.
- Es útil para mantener la inmutabilidad en React.
- Ejemplo con array:

```js
const fishes = ["Nemo", "Dory"];
const newFishes = ["Moby Dick", ...fishes, "Willy"];
```

- Ejemplo con objeto:

```js
const personA = { name: "Ana", age: 30 };
const personB = { ...personA, age: 31 };
```

- Importancia en React: al usar `setState`, React solo actualiza si cambia la **referencia**, no solo el contenido.

---

## Conclusión general

1. Usa `map` para renderizar arrays.
2. Usa `key` único para cada elemento renderizado.
3. Filtra los datos en la función de renderizado, no en el estado.
4. Usa `spread` para copiar arrays y objetos antes de actualizarlos en el estado.

---

**Fuente:** Lecciones prácticas de React sobre arrays, objetos, estado y spread.
