
# 📘 Resumen: Métodos Funcionales de Arrays en JavaScript


## 🧩 ¿Qué son los métodos funcionales?
métodos modernos y potentes que nos permiten **trabajar con arrays sin usar bucles explícitos**. Son más legibles, más cortos y muy utilizados en frameworks como React.

Son funciones que se aplican a arrays para:
- Transformarlos (`map`)
- Filtrarlos (`filter`)
- Buscar elementos (`find`, `findIndex`)
- Reducirlos a un único valor (`reduce`)
- Ordenarlos (`sort`)

### 🧠 ¿Por qué usarlos?

- Código más limpio y legible
- Evitas errores típicos de los bucles
- Permiten encadenar operaciones
- Son ideales para tratar listas de datos

### ¿Por qué usamos métodos funcionales en lugar de bucles?
```javascript
// Con map
const nombres = usuarios.map(u => u.nombre);

// Con bucle
const nombres = [];
for (let i = 0; i < usuarios.length; i++) {
  nombres.push(usuarios[i].nombre);
}
```
| Aspecto                 | Bucles tradicionales (`for`, `while`)                      | Métodos funcionales (`map`, `filter`, `reduce`...)      |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| 🧠 Nivel de abstracción | Bajo: describes **cómo** hacerlo paso a paso               | Alto: describes **qué** quieres obtener                 |
| ✍️ Código               | Más largo, con variables auxiliares (`i`, `acc`)           | Más corto, más directo                                  |
| 📚 Legibilidad          | A veces menos claro, especialmente con lógica compleja     | Más legible si conoces los métodos                      |
| 💥 Errores comunes      | Olvidar `i++`, olvidar hacer `push()`, index out of bounds | Muy pocos errores, lógica contenida en una sola línea   |
| 🔗 Encadenamiento       | No se puede encadenar                                      | Se pueden encadenar fácilmente (`.filter().map()...`)   |
| 🧰 Ideal para...        | Casos muy personalizados o complejos                       | Recorridos estándar: transformar, filtrar, contar, etc. |
| 📦 Modifica el array    | Manualmente, si quieres                                    | No: devuelven nuevos arrays (inmutabilidad)             |

✅ Conclusión:
Usa bucles cuando necesites control total paso a paso

Usa métodos funcionales cuando quieras código más limpio, conciso y fácil de mantener

---

## 🔁 `map()` – Transformar todos los elementos

👉 Aplica una función a cada elemento y devuelve **un nuevo array** del mismo tamaño.

### 🛍 Ejemplo: lista de productos con precio con IVA

```js
const precios = [10, 20, 30];
const preciosConIVA = precios.map((precio) => precio * 1.21);
// [12.1, 24.2, 36.3]
```

---

## 🚿 `filter()` – Filtrar los que cumplen una condición

👉 Devuelve **solo los elementos que cumplen un criterio**.

### 💬 Ejemplo: mostrar solo comentarios con más de 50 caracteres

```js
const comentarios = ["Bien", "Esto es muy útil, gracias", "Excelente recurso para aprender"];
const largos = comentarios.filter((c) => c.length > 20);
// ["Esto es muy útil, gracias", "Excelente recurso para aprender"]
```

---

## 🔍 `find()` y `findIndex()` – Buscar el primero que cumple

- `find()` devuelve el **elemento**
- `findIndex()` devuelve su **posición**

### 📚 Ejemplo: encontrar la primera palabra larga

```js
const palabras = ["casa", "refrigerador", "sol"];
const larga = palabras.find((p) => p.length > 6); // "refrigerador"
const indice = palabras.findIndex((p) => p.length > 6); // 1
```

---

## 🧮 `reduce()` – Resumir todos los datos en uno

👉 Toma todos los elementos y devuelve **un único valor**.

### 💸 Ejemplo: sumar precios

```js
const precios = [10, 15, 20];
const total = precios.reduce((acc, precio) => acc + precio, 0); // 45
```

---

## 📊 `sort()` – Ordenar elementos

👉 Ordena los elementos **modificando el array original**.

### 🔤 Ejemplo: ordenar nombres alfabéticamente

```js
const nombres = ["Zoe", "Ana", "Carlos"];
nombres.sort(); // ["Ana", "Carlos", "Zoe"]
```

### 🔢 Ejemplo: ordenar edades de menor a mayor

```js
const edades = [30, 18, 25];
edades.sort((a, b) => a - b); // [18, 25, 30]
```

---

## 🧵 Encadenar métodos: elegante y potente

👉 Puedes usar varios métodos seguidos.

### 🧠 Ejemplo: filtrar mayores de 18 y mostrar sus nombres en mayúsculas

```js
const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "María", edad: 19 },
];

const resultado = personas
  .filter((p) => p.edad >= 18)
  .map((p) => p.nombre.toUpperCase());

console.log(resultado); // ["LUIS", "MARÍA"]
```

---

## 🧪 Bonus: Comparación visual entre métodos

| Método     | Para qué sirve                  | Devuelve        | Modifica el array | Típico en...             |
|------------|----------------------------------|------------------|--------------------|---------------------------|
| `map`      | Transformar cada elemento        | Nuevo array      | ❌ No              | IVA, nombre en mayúsculas |
| `filter`   | Seleccionar algunos elementos    | Nuevo array      | ❌ No              | Filtros, búsquedas        |
| `find`     | Encontrar el primero que cumpla  | Un valor         | ❌ No              | Búsqueda puntual          |
| `findIndex`| Índice del primero que cumpla    | Un número        | ❌ No              | Para usar con splice      |
| `reduce`   | Un valor a partir de todos       | Un valor         | ❌ No              | Suma, media, ganador      |
| `sort`     | Ordenar                         | El mismo array   | ✅ Sí              | Rankings, alfabético      |

---

## ✨ Conclusión

Los métodos funcionales te ayudan a escribir menos código y con mayor claridad. Si estás trabajando con **listas** de datos, **estos métodos son tu mejor amigo**.

¡Practica con datos de tu día a día! Por ejemplo:

- Tu lista de la compra (`map` para mostrar con precios con IVA)
- Lista de tareas (`filter` para quedarte solo con las pendientes)
- Lista de pelis (`find` para buscar tu favorita)
- Gastos del mes (`reduce` para calcular el total)

