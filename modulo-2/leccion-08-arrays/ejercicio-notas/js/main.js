'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const addBtn = document.querySelector('.js_addBtn');
const numberInput = document.querySelector('.js_numberInput');
const scoresUl = document.querySelector('.js_scoresUl');

// Crear una array
const scores = [];


// SECCIÓN DE EVENTOS

const handleClickAddBtn = (ev) => {
  ev.preventDefault();
  
  // 1. Recoger el número de la usuaria
  const number = numberInput.value;

  // 2. Escribir un <li> en la página
  scoresUl.innerHTML += `<li>${number}</li>`;


  // 3. Almacenar el valor en la variable de la aplicación
  console.log(scores.length);
  scores[scores.length] = number; // equivalentes scores.push(number);
  console.log(scores.length);
  
  console.table(scores);

  // 3. Act número total
  // 4. Act la media

};

addBtn.addEventListener('click', handleClickAddBtn );
