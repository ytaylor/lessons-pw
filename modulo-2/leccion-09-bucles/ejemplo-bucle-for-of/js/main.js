'use strict';

const namesUl = document.querySelector('.js_namesUl');

const names = [
  'Bianca',
  'Celia',
  'Esther',
  'Francheska',
  'Fani',
  'Izaskun',
  'Julia',
  'María',
  'Marta',
  'Seila'
];

// BUCLE FOR-OF

debugger;

for(  const oneName of names   ) {

  namesUl.innerHTML += `<li class="nameItem" title="${oneName}">${oneName}</li>`;

}

// BUCLE FOR-EACH

names.forEach(   (oneName, i) => {

  namesUl.innerHTML += `<li class="nameItem" title="${oneName}">${oneName} (es la número ${i+1})</li>`;

}   );




/*

// BUCLE FOR (clásico) equivalente a los anteriores

for( let index = 0 ; index < names.length ; index++   ) {

  const oneName = names[index];

  namesUl.innerHTML += `<li class="nameItem" title="${oneName}">${oneName}</li>`;

}
*/

/*

// CÓDIGO SIN BUCLES

let index = 0;

namesUl.innerHTML += `<li>${ names[index] }</li>`;

index++;

namesUl.innerHTML += `<li>${ names[index] }</li>`;

index++;

namesUl.innerHTML += `<li>${ names[index] }</li>`;

index++;

namesUl.innerHTML += `<li>${ names[index] }</li>`;

index++;
*/
