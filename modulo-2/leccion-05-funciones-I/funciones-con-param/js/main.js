'use strict';

// QUERY-SELECTORS

const greetingParagraph = document.querySelector('.js_greeting');
const btn = document.querySelector('.js_btn');


// FUNCIONES

const greetAdalabers = () => {
  console.log('Has llamado a greetAdalabers()');
  greetingParagraph.innerHTML = 'Hola Adalabers!';
}





/*
const greetPerson = () => {
  greetingParagraph.innerHTML += 'Hola ' + name + '!';
}


let name = 'MariCarmen';

greetPerson();

name = 'Amparo';

greetPerson();
*/



// DEFINICIÓN DE LA FUNCIÓN (parámetro)
const greetPerson = (name) => {  // let name = 'HorseLuis';
  greetingParagraph.innerHTML += `Hola ${name}!`;
}

console.log(name);


// LLAMADA A LA FUNCIÓN (argumento) = valor que le pasamos a un parámetro
greetPerson('MariCarmen');

greetPerson(42);

greetPerson('Amparo');

const variable = 'HorseLuis';
greetPerson(variable);








const totalElement = document.querySelector('.js_total');

const showTotal = (amount) => {
  totalElement.innerHTML = `El total es ${amount}€`;
}

let amountTotal = 0;

amountTotal += 100;

amountTotal += 50;

amountTotal += 120;

showTotal(amountTotal);

/* --------- */
/*
<li class="card">
  <img src="https://static.vecteezy.com/system/resources/thumbnails/028/607/729/small/funny-surprised-cat-with-a-questioning-pose-a-cute-kitten-asks-in-surprise-where-the-treats-are-generated-ai-photo.jpg" alt="Gato gracioso" class="card_img">
  <h2 class="card_title">Nala</h2>
</li>
*/

const catList = document.querySelector('.js_catList');
const nameInput = document.querySelector('.js_nameInput');
const imageInput = document.querySelector('.js_imageInput');
const formBtn = document.querySelector('.js_formBtn');

const createCatLi = (name, photo) => { // let name = XXX; let photo = YYY;
  catList.innerHTML += `
    <li class="card">
      <img src="${photo}" alt="Gato gracioso" class="card_img">
      <h2 class="card_title">${name}</h2>
    </li>
    `;
}



formBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  /*
  const catName = nameInput.value;
  const catPhoto = imageInput.value;
  */

  createCatLi(nameInput.value, imageInput.value);
});

const catName = 'Nala';
const photo = './images/cat1.webp';

createCatLi(catName, photo);

createCatLi('Akanne', './images/cat2.webp');
createCatLi('Fucko', './images/cat3.webp');
createCatLi('Luna', './images/cat4.webp');
createCatLi('Gato', './images/cat5.webp');



















// EVENTOS

btn.addEventListener('click', (ev) => {
  ev.preventDefault();


  //greetAdalabers();


  // Más instrucciones
})




























/*
alert('Holis!');  // NO la uséis!!

scrollTo(0, 600);

document.querySelector()

elemento.classList.add()

elemento.addEventListener()
*/


const miFuncion = () => {

  // Instrucción 1
  // Instrucción 2
  // Instrucción 3
  // if( condición ) {
  //   Instrucción de la condición
  // }

}
