'use strict';

const resultsParagraph = document.querySelector('.js_results');
const catsUl = document.querySelector('.js_catsUl');


const obj = {
  nombre: 'valor',
  otro: 1
};

const variableArray = [
  /* [0] */ 'valor',
  /* [1] */ 'otro valor',
  /* [2] */ 1 ];
/*
console.table( obj );
console.table( variableArray );
*/
/*
console.log( obj.nombre );
obj.nombre = 'Otra cosa';
resultsParagraph.innerHTML = obj.nombre;
*/
/*
let indice = 0;
console.log( variableArray[indice] );
indice = 1;
console.log( variableArray[indice] );
indice = indice + 1;
console.log( variableArray[indice] );
*/

/*
const nombres = [];
nombres[0] = 'Ivanico';
nombres[1] = 'Dayana';
nombres[2] = 'Ana';
nombres[10] = 'Yanelis';

console.log(nombres);
console.log( nombres.length );
*/

const catNala = {
  name: 'Nala',
  age: 13,
  color: 'white',
  weight: 15.5
};

const nombresList = ['Ivanico', 'MariCarmen', 'Amparo'];

const catNames = [
  'Nala',
  'Luna',
  'Misifu'
];

const cats = [
  { name: "Nala", age: 13, hair: { color: "white", size: "short" } },
  { name: "Luna", age: 5, hair: { color: "black", size: "short" } },
  { name: "Misifu", age: 12, hair: { color: "gray", size: "long" } },
];
/*
console.table( cats );

cats[0].age = 14;

cats[1].hair.color = 'blue';
//cats[0].age += 1;

console.table( cats );
*/


const objOfOneCat = cats[0];
const nameOfOneCat = objOfOneCat.name

console.log(objOfOneCat);


catsUl.innerHTML = `
<li>
  ${ nameOfOneCat }
</li>
`;



/*
catsUl.innerHTML = `
<li>
  ${ cats[0].name + cats[0].age    }   ${ cats[0].hair.color }
</li>
`;
*/