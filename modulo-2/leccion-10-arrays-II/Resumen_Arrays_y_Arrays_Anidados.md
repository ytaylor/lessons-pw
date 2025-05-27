
# Resumen: Métodos de Arrays y Arrays Anidados en JavaScript


## Repaso de bucles:
### 🔂 Bucle `for...of`

Una forma más simple de recorrer arrays. No muestra el índice, solo el valor.

```js
const frutas = ["manzana", "pera"];
for (const fruta of frutas) {
  console.log(fruta);
}
```

Muestra:  
- "manzana"  
- "pera"

---

## 🛠 Métodos Básicos de Arrays

### `push()`
Agrega uno o más elementos al final de un array. Devuelve la nueva longitud del array.
```js
const arr = [1, 2];
arr.push(3, 4); // [1, 2, 3, 4]
```


###  📊 Comparativa de métodos de arrays
| Método      | Acción que realiza                         | ¿Dónde actúa?       | Devuelve                         | ¿Modifica el array? | Ejemplo antes → después             |
|-------------|---------------------------------------------|----------------------|-----------------------------------|----------------------|-------------------------------------|
| `push()`    | Añade uno o más elementos                   | Al final             | Nueva longitud del array          | ✅ Sí                | `[1, 2]` → `push(3)` → `[1, 2, 3]`  |
| `pop()`     | Elimina el último elemento                  | Al final             | Elemento eliminado                | ✅ Sí                | `[1, 2, 3]` → `pop()` → `[1, 2]`    |
| `unshift()` | Añade uno o más elementos                   | Al principio         | Nueva longitud del array          | ✅ Sí                | `[2, 3]` → `unshift(1)` → `[1, 2, 3]` |
| `shift()`   | Elimina el primer elemento                  | Al principio         | Elemento eliminado                | ✅ Sí                | `[1, 2, 3]` → `shift()` → `[2, 3]`  |

#### 🧠 Consejito:

Piensa en una cola del supermercado:

- push() y pop() actúan al final (como quien se pone o sale al final de la cola).
- unshift() y shift() actúan al principio (como quien se cuela o se va del principio de la cola 😄).



---

### `reverse()`
Invierte el orden de los elementos del array.
```js
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

---

### `concat()`
Une dos o más arrays en uno nuevo (sin modificar los originales).
```js
const result = [1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

---

### `slice()`
Devuelve una parte del array en un nuevo array (sin modificar el original).
```js
const names = ['Ana', 'Luis', 'Pedro'];
names.slice(0, 2); // ['Ana', 'Luis']
```

---

### `splice()`
Cambia el contenido del array eliminando o añadiendo elementos.
```js
const months = ['Jan', 'Feb', 'Mar'];
months.splice(1, 1, 'February'); // ['Jan', 'February', 'Mar']
```

---

### ✂️ Comparativa entre slice() y splice()
| Característica       | `slice()`                                      | `splice()`                                        |
|----------------------|------------------------------------------------|--------------------------------------------------|
| ¿Qué hace?           | Crea una **copia** de una parte del array      | **Modifica** el array original                   |
| ¿Modifica el array?  | ❌ No                                           | ✅ Sí                                             |
| Devuelve             | Un **nuevo array** con los elementos cortados  | Un array con los **elementos eliminados**        |
| Parámetros           | `(inicio, fin)`                                | `(inicio, cantidad, ...elementos nuevos)`        |
| Uso común            | Extraer sin afectar al original                | Eliminar o reemplazar 


#### 🧠 Recuerda:
- **slice** = como usar unas tijeras ✂️ para copiar una parte sin romper nada.
- **splice** = como usar un bisturí 🪓 para cortar y cambiar el array real de elementos                  |
---



### `indexOf()`
Devuelve la posición de un elemento o -1 si no existe en el array.
```js
const arr = ['a', 'b', 'c'];
arr.indexOf('b'); // 1
arr.indexOf('z'); // -1
```
---
## 🗺 Arrays Anidados

Un array anidado es un array que contiene otros arrays.

```js
const coordinates = [
  [4, 3],
  [9, 2],
  [2, 6]
];
```

Acceso a datos:
```js
const x = coordinates[1][0]; // 9
```

Modificación de datos:
```js
coordinates[1][0] = 8;
```

---

### 🔁 Recorrer Arrays Anidados

Ejemplo de recorrer un horario semanal:

```js
const schedule = [
  ["Kahoot", "Pair programming"],
  ["Agile", "Project"]
];

for (let day = 0; day < schedule.length; day++) {
  for (let hour = 0; hour < schedule[day].length; hour++) {
    console.log(`On day ${day} at hour ${hour}: ${schedule[day][hour]}`);
  }
}
`