
# 🧱 DOM Avanzado con JavaScript – Resumen y Código Explicado

En esta guía conectamos los conceptos de manipulación del DOM con ejemplos prácticos del archivo `main.js`.

---

## 🌐 Acceder al DOM

```js
const main = document.querySelector('.js_main');
```

👉 Seleccionamos el elemento `<main>` con clase `.js_main` para añadir contenido dinámico más adelante.

---

## 🏗 Crear y añadir elementos al DOM

### 1. Crear una imagen programáticamente

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

### 2. Añadir un evento a la imagen

```js
image.addEventListener('mouseover', (ev) => {
  console.log('Eh! Que haces sobre el gato!');
});
```

🐾 Añadimos un **evento de ratón** para mostrar un mensaje cuando el cursor pasa sobre la imagen.

---

### 3. Crear una lista de tareas

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

## ❌ Eliminar elementos

```js
li1.remove();
```

O bien:

```js
body.removeChild(header);
```

👉 Eliminamos nodos del DOM con `.remove()` o desde su padre.

---

## 🧩 Leer y modificar atributos

```js
const image = document.querySelector('.js_image');
console.log(image.getAttribute('src'));       // Lee atributos estándar
console.log(image.getAttribute('invent'));    // Lee atributo inventado
image.setAttribute('atributo_invent', 'valor_invent'); // Añade nuevo atributo
```

---

## 🔍 Atributos personalizados con `data-*`

```js
const allTaskLi = document.querySelectorAll('.js_task');
for (const li of allTaskLi) {
  li.addEventListener('click', (ev) => {
    console.log('Click en', ev.currentTarget.dataset);
  });
}
```

🧠 Se accede a `dataset` para trabajar con información personalizada.

---

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

## 🧠 Conclusión

Este ejemplo completo muestra cómo:

- Crear elementos desde cero y añadirlos al DOM
- Añadir atributos y datasets personalizados
- Usar eventos como `click` o `mouseover`
- Acceder a nodos relacionados (padres, hermanos)
- Leer y escribir atributos HTML desde JS

¡Ideal para cualquier app dinámica en JavaScript!
