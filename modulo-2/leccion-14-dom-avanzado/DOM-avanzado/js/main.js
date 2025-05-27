// 🌟 DOM - Document Object Mode l
'use strict';

// 🌟 Accedemos al elemento <main> para trabajar dentro de él
const main = document.querySelector('.js_main');

// es lo mismo hacer esto: /*
main.innerHTML += `<img
        class="js_image"
        src="https://placecats.com/300/300"
        alt="Kitten"
        invent="Funcionará"
        id="image01"
        name="image01"
      />`;


// ✅ Creamos una imagen de forma programática
const image = document.createElement('img');
image.src = 'https://placecats.com/300/300';  // Fuente de imagen
image.alt = 'Kitten lamiendo un peluche de un plátano';  // Texto alternativo
image.id = 'image01';  // Atributo ID
image.dataset.invent = 'Valor que me invento';  // Atributo personalizado data-invent

// Añadimos la imagen al DOM dentro del <main>
main.appendChild(image);

// 🐾 Detectamos cuando el ratón pasa por encima de la imagen                                                                              
image.addEventListener('mouseover', (ev) => {
  console.log('Eh! Que haces sobre el gato!');
});

// ✅ Creamos una lista de tareas programáticamente
const taskUl = document.createElement('ul');
taskUl.classList.add('cards');  // Añadimos clase para estilos

// es lo mismo hacer esto: /*
/*
<li
  class="js_task"
  data-id="1"
  data-author="Ivanico"
  data-invent="task1"
>
  <input type="checkbox">
  Comprar setas
</li>
*/



// Creamos un <li> con dataset y texto
const li1 = document.createElement('li');
li1.classList.add('js_task', 'card');
li1.dataset.id = 1;
li1.dataset.author = 'Ivanico';
li1.dataset.invent = 'task1';

// Añadimos texto como nodo (forma más segura que innerHTML)
const liText = document.createTextNode('Comprar setas');
li1.appendChild(liText);

// Mostramos el <li> en consola
console.log(li1);

// Añadimos el <li> a la <ul>
taskUl.appendChild(li1);

// Insertamos la lista entera al principio del <main>
main.prepend(taskUl);

// Eliminamos el <li> después de añadirlo (solo demostración)
li1.remove();

// ✅ Eliminamos el <header> del documento
const body = document.querySelector('body');
const header = document.querySelector('header');
body.removeChild(header);

// 🔍 Otras partes del código estaban comentadas:
// - Obtener atributos con getAttribute
// - Escuchar clics en tareas
// - Recorrer inputs
// - Leer o modificar clases
// - Usar innerHTML para inyectar HTML completo (menos seguro)

const image = document.querySelector('.js_image');

console.log(image.getAttribute('src'));
console.log(image.getAttribute('id'));
console.log(image.getAttribute('name'));

console.log(image.getAttribute('invent'));

image.setAttribute('atributo_invent', 'valor_invent')

console.dir(image.getAttribute('atributo_invent'))

console.log(image);
console.dir(image);


const allTaskLi = document.querySelectorAll('.js_task');
console.log(allTaskLi);

for (const li of allTaskLi) {
  li.addEventListener('click', (ev) => {
    //console.log('Click en',ev.currentTarget.getAttribute('invent'))

    console.log('Click en', ev.currentTarget.dataset);
  })
}


// Para obtener el valor de los atributos padres de un elemento.
const allTaskInput = document.querySelectorAll('input');
console.log(allTaskInput);

for (const input of allTaskInput) {
  input.addEventListener('click', (ev) => {
    //console.log('Click en',ev.currentTarget.getAttribute('invent'))
    const li = ev.currentTarget.closest('li');
    console.log('Click en', li);
  })
}