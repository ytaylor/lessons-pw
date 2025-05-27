'use strict';

const resultParagraph = document.querySelector('.js_result');  // -> <p class="js_result"></p>

const getHour = () => {
  const variable = (new Date()).getHours();

  return variable;
}

const getMinute = () => {
  const minutes = (new Date()).getMinutes();
  return minutes;
}


const hour = getHour();  // --> 19
const minute = getMinute();  // --> 59


resultParagraph.innerHTML = `Son las ${hour}:${minute}`;





/*

DEFINICIÓN DE LA FUNCIÓN

const nombreFuncion = (param) => {
  // ...
  // ...
  // ...
  return resultadoQueRetorna;
}

function nombreFuncion(param) {
  // ...
  // ...
  // ...
  return resultadoQueRetorna;
}


LLAMADA A LA FUNCIÓN

const valorAEnviar = 'XXX';

const valorARecoger = nombreFuncion(valorAEnviar);


*/