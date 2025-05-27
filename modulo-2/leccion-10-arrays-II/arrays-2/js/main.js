'use strict';

const namesUl = document.querySelector('.js_namesUl');
const nameInput = document.querySelector('.js_nameInput');
const deleteBtn = document.querySelector('.js_deleteBtn');
const renderNames = (names) => {
  for( const oneName of names ) {
    namesUl.innerHTML += `<li>${oneName}</li>`;
  }
}
deleteBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  const nameToDelete = nameInput.value;

  console.log(nameToDelete);

  const indexOfNameToDelete = names.indexOf(nameToDelete);

  console.log(indexOfNameToDelete);
  
  //if( indexOfNameToDelete >= 0 ) {
  if( names.includes(nameToDelete) ) {
    names.splice(indexOfNameToDelete, 1);

    // Actualizar la página
  
    namesUl.innerHTML = '';
    renderNames(names);
  }

});





const names = ['María', 'Marta', 'Julia', 'Dayana'];

names.push('Izaskun', 'Francheska', 'Fani');
names.unshift('Esther', 'Celia', 'Bianca');
renderNames(names);
console.table(names);




/*

const indice = names.indexOf('Dayana');

console.log(indice);

names.splice(indice, 1);

console.table(names);


const rodaja = names.splice( 6, 1, 'Yanelis', 'Ana' );

console.table(names);


names.splice(6, 1);
console.table(names);

renderNames(names);
*/


/*
const maxResults = 2;

const paginateNames = names.slice(0, maxResults);

renderNames(paginateNames);
/*
// Segunda página
namesUl.innerHTML = '';

const segundaPagina = names.slice(5,10);

renderNames(segundaPagina);
*/




/*
console.table(names);

const rodaja = names.slice(2,3);

console.table(rodaja);
*/
/*
const lastName = names.pop();

console.table(names);
console.log(lastName);

const firstName = names.shift();

console.table(names);
console.log(firstName);
*/