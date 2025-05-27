'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const playBtn = document.querySelector('.js_playBtn');
const userOptionSelect = document.querySelector('.js_userOptionSelect');
const resultDiv = document.querySelector('.js_result');

// SECCIÓN DE LOS DATOS DE APLICACIÓN

// SECCIÓN DE FUNCIONES

/**
 * Genera un número aleatorio entre 1 y el valor que el indiquemos
 * 
 * @param {*} max Número máximo que queremos que genere
 * @returns Un número entre 1 y el valor que le hayamos indicado
 */

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}



const genComputerMove = () => {
  // Generar un número random

  const randomNumber = getRandomNumber(9);
  console.log(randomNumber);
  
  // Registrar lo que la computadora ha generado
  let computerMove = '';

  if( randomNumber >= 1 && randomNumber <= 3 ) {
    computerMove = 'piedra';
  }
  else if( randomNumber >= 4 && randomNumber <= 6 ) {
    computerMove = 'papel';
  }
  else if( randomNumber >= 7 && randomNumber <= 9 ) {
    computerMove = 'tijera';
  }

  return computerMove;
};



const handleClickButton = (ev) => {
  ev.preventDefault();
  
  const computerMove = genComputerMove();

  console.log(computerMove);

  // Registrar lo que la usuaria haya escogido

  const userMove = userOptionSelect.value;

  console.log(userMove);

  const result = compareMoves(userMove, computerMove);

  resultDiv.innerHTML = result;
};



const compareMoves = (userMove, computerMove) => {
  // Comparar la jugada de la computadora y la jugada de la usuaria
  
  // Decir quién ha ganado o si han empatado

  if( userMove === computerMove ) {
    // ¡EMPATE!

    const result = 'Empate';
    
    return result;
  }
  else if( (userMove === 'tijera' && computerMove === 'papel') ||
           (userMove === 'papel'  && computerMove === 'piedra') || 
           (userMove === 'piedra' && computerMove === 'tijera') ) {
    // Usuaria gana

    const result = 'Has ganado';

    return result;
  }
  else {
    // Computadora gana

    const result = 'Has perdio';
    
    return result;
  }
}



// SECCIÓN DE EVENTOS

playBtn.addEventListener('click', handleClickButton);

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA
