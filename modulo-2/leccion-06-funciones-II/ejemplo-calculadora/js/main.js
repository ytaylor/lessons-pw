'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const displayEl = document.querySelector('.js_display');
const btn1 = document.querySelector('.js_btn1');
const btn2 = document.querySelector('.js_btn2');
const btn3 = document.querySelector('.js_btn3');
const btn4 = document.querySelector('.js_btn4');
const btn5 = document.querySelector('.js_btn5');
const btn6 = document.querySelector('.js_btn6');
const btn7 = document.querySelector('.js_btn7');
const btn8 = document.querySelector('.js_btn8');
const btn9 = document.querySelector('.js_btn9');
const btn0 = document.querySelector('.js_btn0');

// SECCIÓN DE LOS DATOS DE APLICACIÓN

// SECCIÓN DE FUNCIONES

const handleClickBtn = (ev) => {
  ev.preventDefault();

  console.log(ev.currentTarget.value);
  
  displayEl.value += ev.currentTarget.value;
}

// SECCIÓN DE EVENTOS

btn1.addEventListener('click', handleClickBtn);
btn2.addEventListener('click', handleClickBtn);
btn3.addEventListener('click', handleClickBtn);
btn4.addEventListener('click', handleClickBtn);
btn5.addEventListener('click', handleClickBtn);
btn6.addEventListener('click', handleClickBtn);
btn7.addEventListener('click', handleClickBtn);
btn8.addEventListener('click', handleClickBtn);
btn9.addEventListener('click', handleClickBtn);
btn0.addEventListener('click', handleClickBtn);

// click boton -> Que se ponga el 1 en la display
// 
/*
btn1.addEventListener('click', (ev) => {
  ev.preventDefault();
  // Que se ponga el 1 en la display

  //currentTarget = btn1
  console.log(ev.currentTarget.value);
  

  displayEl.value += ev.currentTarget.value;
});

btn2.addEventListener('click', (ev) => {
  ev.preventDefault();

  //currentTarget = btn2
  console.log(ev.currentTarget.value);

  displayEl.value += ev.currentTarget.value;
});
*/
// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA