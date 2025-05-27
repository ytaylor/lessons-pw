
# 🧱 Resumen: Manipulación del DOM en JavaScript

En esta sesión aprendimos a trabajar de forma más avanzada con el **DOM** (Document Object Model), que es la forma en que el navegador representa una página web. Esto nos permite **crear, modificar y eliminar elementos** con JavaScript.

---

## 🌐 ¿Qué es el DOM?

- El **DOM** es una representación en forma de árbol de tu página HTML.
- Cada etiqueta se convierte en un **objeto** que JavaScript puede consultar y modificar.
- No es exactamente el HTML, sino una versión procesada por el navegador que puede incluir cambios desde CSS y JS.

---

## 🔍 ¿Cómo accedemos al DOM?

### Selección de elementos:

| Método                       | ¿Qué hace?                                     |
|-----------------------------|------------------------------------------------|
| `document.getElementById()` | Busca un elemento por ID                       |
| `document.querySelector()`  | Busca el primer elemento que cumpla el selector CSS |
| `document.querySelectorAll()` | Busca todos los elementos que cumplan el selector |


### 🌐 Acceder al DOM

```js
const main = document.querySelector('.js_main');
```

👉 Seleccionamos el elemento `<main>` con clase `.js_main` para añadir contenido dinámico más adelante.

---

## 🏗 Crear y añadir elementos

### Crear con JavaScript:

```js
const nuevoLi = document.createElement('li');
const texto = document.createTextNode('Nuevo ítem');
nuevoLi.appendChild(texto);
```

### Añadir al DOM:

```js
const lista = document.querySelector('.items');
lista.appendChild(nuevoLi);
```

### Crear una imagen programáticamente

```js
const image = document.createElement('img');
image.src = 'https://placecats.com/300/300';
image.alt = 'Kitten lamiendo un peluche de un plátano';
image.id = 'image01';
image.dataset.invent = 'Valor que me invento';
main.appendChild(image);
```

✅ Creamos una imagen usando JavaScript, le añadimos atributos, y la insertamos en el DOM.

---

### Añadir un evento a la imagen

```js
image.addEventListener('mouseover', (ev) => {
  console.log('Eh! Que haces sobre el gato!');
});
```

🐾 Añadimos un **evento de ratón** para mostrar un mensaje cuando el cursor pasa sobre la imagen.

### Crear una lista de tareas

```js
const taskUl = document.createElement('ul');
taskUl.classList.add('cards');
```

Creamos un `<ul>` con clase `.cards`, y después:

```js
const li1 = document.createElement('li');
li1.classList.add('js_task', 'card');
li1.dataset.id = 1;
li1.dataset.author = 'Ivanico';
li1.dataset.invent = 'task1';
```

Agregamos un `<li>` con atributos `data-*` personalizados.

```js
const liText = document.createTextNode('Comprar setas');
li1.appendChild(liText);
taskUl.appendChild(li1);
main.prepend(taskUl);
```

✅ Se añade el ítem a la lista y esta al DOM.

---

## ❌ Borrar elementos

```js
element.remove(); // elimina el elemento directamente

parentElement.removeChild(childElement); // elimina un hijo concreto
```

---

## 🧭 Navegar por el DOM

| Propiedad         | ¿Qué hace?                            |
|------------------|----------------------------------------|
| `parentElement`  | Selecciona el padre                   |
| `children`       | Selecciona los hijos                  |
| `nextElementSibling` | El siguiente hermano               |
| `previousElementSibling` | El hermano anterior           |

--

## 🔗 Acceder al padre desde un input

```js
const allTaskInput = document.querySelectorAll('input');
for (const input of allTaskInput) {
  input.addEventListener('click', (ev) => {
    const li = ev.currentTarget.closest('li');
    console.log('Click en', li);
  });
}
```

✅ Con `closest()` localizamos el elemento `<li>` más cercano, útil para manejar eventos complejos.


---

## 🛠 Modificar atributos y estilos


```js
const image = document.querySelector('.js_image');
console.log(image.getAttribute('src'));       // Lee atributos estándar
console.log(image.getAttribute('invent'));    // Lee atributo inventado
image.setAttribute('atributo_invent', 'valor_invent'); // Añade nuevo atributo
```

---
### Modificar atributos directamente:

```js
input.value = "Hola";
img.src = "imagen.png";
link.href = "https://example.com";
```

### Estilos:

```js
element.style.color = "blue";
element.style = "font-size: 20px;";
```


---

## 🧩 Trabajar con atributos personalizados (`data-*`)

###  📦 ¿Qué es data-*?
Los atributos data-* permiten guardar información personalizada directamente en etiquetas HTML. No afectan al estilo ni al comportamiento visual, pero pueden ser leídos desde JavaScript.


Puedes guardar datos personalizados en etiquetas HTML con `data-*`:

```html
<li data-descripcion="Soy un ítem importante">Item 1</li>
```

Acceder desde JavaScript:

```js
element.dataset.descripcion; // "Soy un ítem importante"
```

---

## 🔧 Métodos `getAttribute()` y `setAttribute()`

Para trabajar con cualquier atributo (estándar o personalizado):

```js
element.getAttribute("href");
element.setAttribute("src", "nueva-imagen.jpg");
```

---

## 🧪 Ejemplo real: Lista de la compra dinámica

```js
const lista = document.querySelector('.listaCompras');
const input = document.querySelector('.nuevoItem');
const boton = document.querySelector('.agregarItem');

boton.addEventListener('click', () => {
  const texto = input.value.trim();
  if (texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
    input.value = '';
  }
});
```
---

## ✅ Conclusión

Manipular el DOM directamente con JavaScript nos permite crear webs más dinámicas e interactivas:

- Creamos y añadimos elementos de forma eficiente (sin `innerHTML`)
- Evitamos errores de referencias perdidas al evitar sobreescribir nodos
- Podemos asociar y leer datos personalizados con `data-*`
- Controlamos atributos, estilos y estructura del DOM fácilmente

