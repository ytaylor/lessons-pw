//import suma from './matematicas';
const {suma} = require('./matematicas');
const isOdd = require('is-odd');

const data = require('./data/adalabers.json')
console.log(data);
/*
const fs = require('node:fs/promises');

fs.readFile('./package.json')
.then(content => {
  console.log(content.toString());
})
*/
const a = 33;
console.log(a);
console.log(isOdd(a))


const b = 55;
console.log(b);

const c = suma(a,b);
console.log(c);

const resultado = suma(1,2);
console.log(resultado);

const otroRsultado = suma('hola', ' adalabers');
console.log(otroRsultado);