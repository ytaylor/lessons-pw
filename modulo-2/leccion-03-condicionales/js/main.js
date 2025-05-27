'use strict';

const holidaysParagraph = document.querySelector('.js__holidaysParagraph')
const monthSelect = document.querySelector('.js__month');



monthSelect.addEventListener('input', (ev) => {
  const mesSeleccionado = monthSelect.value;
  
  holidaysParagraph.innerHTML = 'Empieza el evento ' + mesSeleccionado;

  //if( (mesSeleccionado === 'agosto' || mesSeleccionado == 'julio') && profesion === 'profesor' ) {
  if( mesSeleccionado === 'agosto' || mesSeleccionado == 'julio' ) {    
    holidaysParagraph.innerHTML = 'Vacaciones';
  }

  if( mesSeleccionado === 'enero' ) {
    holidaysParagraph.innerHTML = 'Que vienen los Reyes Magos!!!';
  }
})


const checkBtn = document.querySelector('.js_checkBtn');
const ageInput = document.querySelector('.js_ageInput');
const messageParagraph = document.querySelector('.js_messageParagraph');


checkBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  
  // Recoger el número del input
  const num = ageInput.value;

  // Comprobar la edad

  if( num >= 18 ) {
    // Escribir mensajito "Puedes votar"

    messageParagraph.innerHTML = 'Puedes votar';
  }
  else {
    // Escribir mensajito "NO puedes votar"

    messageParagraph.innerHTML = 'NO puedes votar';
  }

});



/*
const edad = 22;

if( edad < 18 ) {
  // Hago una cosa
}

if( edad >= 18 ) {
  // Hago otra cosa
}
*/

const edad = 22;

if( edad < 18 ) {
  // Hago una cosa
}
else {
  // Hago otra cosa
}






