'use strict';

// SECCIÓN QUERY-SELECTOR (elementos de la página que usamos en JS)

const saveBtn = document.querySelector('.js_btn');
const catsUl = document.querySelector('.js_catsUl');

const nameInput = document.querySelector('.js_nameInput');
const imageInput = document.querySelector('.js_imageInput');
const descInput = document.querySelector('.js_descInput');


// SECCIÓN DE EVENTOS

saveBtn.addEventListener( 'click', (ev) => {
  ev.preventDefault();  // EH NAVEGADOR! NO RECARGUES LA PÁGINA

  const img = imageInput.value;
  const name = nameInput.value;
  const desc = descInput.value;

  //catsUl.innerHTML = catsUl.innerHTML + '<li>Holis</li>'; Machacar
  catsUl.innerHTML += `
      <li class="card">
        <img src="${img}" alt="Foto de ${name}" class="card__img">
        <h2 class="card__title">${name}</h2>
        <p class="card__description">${desc}</p>
      </li>`;  // Añadir
});

/*
'Texto'
`Texto` 

`Texto
de
varias
líneas`
*/
