'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const adalabersUl = document.querySelector('.js_adalabersUl');
const saveBtn = document.querySelector('.js_saveBtn');
const nameInput = document.querySelector('.js_nameInput');
const promoInput = document.querySelector('.js_promoInput');
const pairInput = document.querySelector('.js_pairInput');



// SECCIÓN DE LOS DATOS DE APLICACIÓN

const adalaber_1 = {
  name: 'MariCarmen',
  promo: 'Clara',
  pair: 0,
  team: 'Las domadoras del código',
};
const adalaber_2 = {};

adalaber_2.name = 'Amparo';
adalaber_2.promo = 'Betty';
adalaber_2.pair = 0;
adalaber_2.team = 'Coders';



// SECCIÓN DE FUNCIONES

const render = (adalaberEnGeneral) => {

  //console.table(adalaberEnGeneral);

  console.log(adalaberEnGeneral.name);

  const html = `
    <li class="js_izaskun card">
      <h2 class="card__title">${adalaberEnGeneral.name}</h2>
      <p class="card__description">Promo ${adalaberEnGeneral.promo}</p>
      <p class="card__description">Pair ${adalaberEnGeneral.pair}</p>
    </li>`;

  return html;
};

const handleClickSave = (ev) => {
  ev.preventDefault();
  

  // Recoger el nombre del input
  const name = nameInput.value;
  console.log(name);  // Antes de subirlo a git, habría que quitar los console

  // Recoger al promo del input
  const promo = promoInput.value;

  // Recoger el pair del input
  const pair = pairInput.value;


  // Montamos el obj
  const objAdalaber = {
    name: name,
    promo: promo,
    pair: pair
  };

  console.table(objAdalaber);  // Antes de subirlo a git, habría que quitar los console


  // Crear un <li> con nombre, promo, pair
  adalabersUl.innerHTML += render(objAdalaber);


  // BONUS de calidad
  /*
  nameInput.value = '';
  promoInput.value = '';
  pairInput.value = '';
  */

  const form = document.querySelector('form');
  form.reset();


};



// SECCIÓN DE EVENTOS

saveBtn.addEventListener('click', handleClickSave);



// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

adalabersUl.innerHTML  = render(adalaber_1);
adalabersUl.innerHTML += render(adalaber_2);



/* adalabersUl.innerHTML = `
      <li class="card">
        <h2 class="card__title">${adalaber_1.name}</h2>
        <p class="card__description">Promo ${adalaber_1.promo}</p>
        <p class="card__description">Pair ${adalaber_1.pair}</p>
      </li>
`; */

/*
adalabersUl.innerHTML += `
      <li class="card">
        <h2 class="card__title">${adalaber_2.name}</h2>
        <p class="card__description">Promo ${adalaber_2.promo}</p>
        <p class="card__description">Pair ${adalaber_2.pair}</p>
      </li>
`;
*/

