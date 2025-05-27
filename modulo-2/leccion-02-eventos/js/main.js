'use strict';

/* Traer los elementos HTML a JS */
const textParagraph = document.querySelector('.text');
const btn = document.querySelector('.js_btn');
const menuBtn = document.querySelector('.js_menuBtn');
const menuNav = document.querySelector('.js_menuNav');

const main = document.querySelector('.js_main');
             
const darkLink = document.querySelector('.js_darkLink');
const lightLink = document.querySelector('.js_lightLink');

const letterNameSpan1 = document.querySelector('.js_letterNameSpan1');
const letterNameSpan2 = document.querySelector('.js_letterNameSpan2');
const nameInput = document.querySelector('.js_nameInput');



/* Crear variables de datos de nuestra aplicación. */
const texto = 'Hola';



/* Eventos */
/* Cuando la usuaria hace algo -> Ejecutamos un código */

/* document.addEventListener('click', (ev) => {
  // Líneas de código que se ejecutan cuando sucede el click de la usuaria
  textParagraph.innerHTML = texto;
}); */

btn.addEventListener(  'click'  ,  (ev) => {
  textParagraph.innerHTML=texto;
});

darkLink.addEventListener(  'click'  ,  (ev) => {
  main.classList.add('dark');
}   );

lightLink.addEventListener(  'click'  ,  (ev) => {
  main.classList.remove('dark');
}   );

menuBtn.addEventListener('click', (ev) => {
  console.log(ev);
  menuNav.classList.toggle('hidden');
});






nameInput.addEventListener('input', (ev) => {
  letterNameSpan1.innerHTML = nameInput.value;
  letterNameSpan2.innerHTML = nameInput.value;
  console.log(ev);
  /* letterSection.innerHTML = '<p>Querida ' + nameInput.value + ',</p>' +
  '<p>Contacto contigo para ofrecerte una oportunidad laboral....</p>' +
  '<p>Espero recibir noticias tuyas, ' + nameInput.value + '.</p>';
  */
});





/* Código que se ejecuta cuando carga la página */
/*
main.classList.add('dark');
main.classList.remove('main');
*/
