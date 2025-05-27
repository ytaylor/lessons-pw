'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const main = document.querySelector('main');

// SECCIÓN DE LOS DATOS DE APLICACIÓN

const variable = '0';

// SECCIÓN DE FUNCIONES

const getData = (search, order) => {
  // Llamar al servidor

  // Recoger los datos de los gatos que el nombre contenga search

  // Ordenar por el campo que indique order

  // Pintar los datos como tarjetas

  // Asignar eventos
}

const getData3 = function(search, order) {
  // Llamar al servidor

  // Recoger los datos de los gatos que el nombre contenga search

  // Ordenar por el campo que indique order

  // Pintar los datos como tarjetas

  // Asignar eventos
}

function getData2(search, order) {
  // Llamar al servidor

  // Recoger los datos de los gatos que el nombre contenga search

  // Ordenar por el campo que indique order

  // Pintar los datos como tarjetas

  // Asignar eventos
}

function connectToServer( funcCallback ) {
  // ....
  // ...

  funcCallback();
}


const handleClick = (ev) => {
  console.log('Funciona!')
}

// SECCIÓN DE EVENTOS

main.addEventListener( 'click', (ev) => {
  console.log('Funciona!')
} );


main.addEventListener( 'click', handleClick );

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

connectToServer( () => {} );


getData();
getData2();
getData3();
console.log(variable);







