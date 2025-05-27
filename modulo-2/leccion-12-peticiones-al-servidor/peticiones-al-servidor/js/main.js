'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const adalabersUl = document.querySelector('.js_adalabersUl');
let adalabers = [];  // Los corchetes me indican que esta variable va a contener un array

fetch('https://beta.adalab.es/resources/apis/adalabers-v1/promo-51.json')
  .then((response) => response.json())  // Quedarse de la respuesta solo con el JSON
  .then((data) => {
    console.log('DENTRO DEL THEN');
    console.log(data);

    adalabers = data;

    let html = '';

    /*
    for( let i = 0; i < adalabers.length; i++ ) {

      const adalaberObj = adalabers[i];
    */
    for (const adalaberObj of adalabers) {
      html += `
        <li class="card">
          <h2 class="crd__title">${adalaberObj.nombre}</h2>
          <p class="card__description">Promo ${adalaberObj.id}</p>
          <p class="card__description">Profe: Yanelis</p>
        </li>
      `;
    }

    adalabersUl.innerHTML = html;
  });


const newPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

























