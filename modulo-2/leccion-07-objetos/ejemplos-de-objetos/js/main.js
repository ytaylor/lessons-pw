'use strict';

/*
// INICIALIZAR UN OBJ

const vari = {
  nombre1: valor1,
  nombre2: valor2,
  ...
};
*/

const adalabersUl = document.querySelector('.js_adalabersUl');

/*
const name_1 = 'MariCarmen';
const promo_1 = 'Clara';
const pair_1 = 0;
const team_1 = 'Las domadoras del código';
*/
const adalaber_1 = {
  name: 'MariCarmen',
  promo: 'Clara',
  pair: 0,
  team: 'Las domadoras del código',

  contact: {
    address: '',
    city: '',
    phone: ''
  },

  speak: () => {  // Métodos
    console.log(this);
  },
  talk: function() {  // Métodos
    console.log(this);
    console.log('Hola!')
  }
};

adalabersUl.innerHTML = `
      <li class="card">
        <h2 class="card__title">${adalaber_1.name}</h2>
        <p class="card__description">Promo ${adalaber_1.promo}</p>
        <p class="card__description">Pair ${adalaber_1.pair}</p>
      </li>
`;

adalaber_1.speak();
adalaber_1.talk();

/*
const name_2 = 'Amparo';
const promo_2 = 'Betty';
const pair_2 = 0;
const team_2 = 'Coders';
*/

const adalaber_2 = {};

adalaber_2.name = 'Amparo';
adalaber_2.promo = 'Betty';
adalaber_2.pair = 0;
adalaber_2.team = 'Coders';

console.table(adalaber_2);


