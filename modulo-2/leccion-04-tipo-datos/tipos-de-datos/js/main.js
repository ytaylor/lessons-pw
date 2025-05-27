'use strict';

/*
  Tipos de datos que se pueden guardar en varis:
  - Elementos
  - Textos
    - Comillas simples
    - Comillas dobles (igual que simples)
    - String template (con `` nos permite varias líneas e interpolar ${variables})
  - Números
    - int
    - float
  - undefined
  - Booleanos

  (no hemos visto aún)
  - Objetos
    - Literales (con {})
    - null
    - De clase
      - Arrays (con [])
      - Date
      - Set
  - Funciones

  (no vamos a ver jamás)
  - BigInt
  - Symbol
*/

/* VARIABLE CON UN ELEMENTO */

const elementosHTML = document.querySelector('.clase');



/* VARIABLES CON TEXTOS */

const texto = 'Holis!';
const htmlComoTexto = '<li class="clase">Item de una lista</li>';
const textosStringTemplate = `
  <li>
    Texto con varias líneas
  </li>`;



/* VARIABLES CON NÚMEROS */

const num = 1;    // int (enteros)
const numConDecimales = 1.55;   // float o double o real  (números con decimales)

const nota1 = 5;
const nota2 = 7;
const nota3 = 10;

const media = (nota1+nota2+nota3) / 3;



/* VARIABLES CAMBIANTES */

let variableQuePuedeCambiar = 1;

console.log(variableQuePuedeCambiar);

/*
  . . .

  mucho código que usa la variable con el valor 1

  . . .
*/

console.log(variableQuePuedeCambiar);

variableQuePuedeCambiar = 5;

console.log(variableQuePuedeCambiar);

/*
  . . .

  mucho código que ahora usa la variable con el valor 5
  
  . . .
*/

console.log(variableQuePuedeCambiar);



/* VARIABLES CAMBIANTES CON NÚMEROS */

let suma = 0;
console.log(suma);  // -> 0

// suma = suma + 5;
suma += 5;
console.log(suma);  // -> 5

suma += 6;
console.log(suma);  // -> 11



/* VARIABLES CAMBIANTES CON TEXTOS */

let html = `
  <li>
    Un elemento
  </li>`;

console.log(html);

html += `
  <li>
    Otro elemento
  </li>`;

console.log(html);



/* LAS VARIABLES NO GUARDAN FÓRMULAS */
/* Las variables guardan valores */

let a = 5;
let b = 20;

let c = a + b;

console.log(c);  // -> 25


a = 100;

console.log(c);  // -> 25 (no se actualiza c)

c = a + b;

console.log(c);  // -> 120


const elemento = document.querySelector('.div');

let contenido = elemento.innerHTML;


contenido = 'Otras cosas'; // No se actualiza innerHTML, solo la variable contenido

elemento.innerHTML = 'Otras cosas';



/* VARIABLES CON TEXTOS QUE SON NÚMEROS */

const x = '42';
const y = '100';

//const z = x + y;  // -> '42100'
const z = parseInt(x) + parseInt(y);  // -> 142

parseFloat('3.1416');  // ->  3.1416
