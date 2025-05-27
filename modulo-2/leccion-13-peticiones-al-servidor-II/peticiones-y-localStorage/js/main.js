'use strict';

// 🔍 SECCIÓN DE SELECTORES DEL DOM: capturamos elementos HTML para usarlos en JS

const kittensUl = document.querySelector('.js_kittensUl');        // Lista donde aparecerán los gatitos
const addBtn = document.querySelector('.js_AddBtn');              // Botón "Añadir gatito"
const nameInput = document.querySelector('.js_nameInput');        // Input: nombre del gatito
const descInput = document.querySelector('.js_descInput');        // Input: descripción del gatito
const imageInput = document.querySelector('.js_imageInput');      // Input: URL de la imagen del gatito

// 🗃️ SECCIÓN DE DATOS: array donde se guardan los gatitos

let kittens = [];

// 🛠️ FUNCIONES

/**
 * Genera el HTML para un solo gatito
 * @param {Object} objKitten - Un objeto con info del gatito: name, desc, image
 * @returns {string} HTML del gatito en formato <li>
 */
const renderOneKitten = (objKitten) => {
  console.log('objKitten', objKitten);

  const html = `
  <li class="card">
    <h3 class="card__title">${objKitten.name}</h3>
    <img src="${objKitten.image}" alt="Foto del gato ${objKitten.name}">
    <p class="card__description">${objKitten.desc}</p>
  </li>
  `;
  return html;
};

/**
 * Recorre el array de gatitos y pinta cada uno en pantalla
 */
const renderAllKittens = () => {
  let html = '';

  for (const objKitten of kittens) {
    html += renderOneKitten(objKitten);
  }

  kittensUl.innerHTML = html;
};

// 🖱️ EVENTOS

/**
 * Maneja el clic en el botón de añadir un nuevo gatito
 */
const handleClickAdd = (ev) => {
  ev.preventDefault(); // Evita recarga del formulario

  // 🧾 Leer los valores del formulario
  const nameNewKitten = nameInput.value;
  const desc = descInput.value;
  const image = imageInput.value;
  console.log(nameNewKitten, desc, image);

  // 📦 Crear el nuevo objeto gatito
  const newObjKitten = {
    name: nameNewKitten,
    desc: desc,
    image: image,
    race: "Callejero viajero"  // Propiedad fija por ahora
  };

  // 🐱 Añadir al array
  kittens.push(newObjKitten);

  // 👁️ Volver a pintar toda la lista
  renderAllKittens();

  // 💾 Guardar en LocalStorage
  localStorage.setItem('kittensLS', JSON.stringify(kittens));

  // 🌐 Enviar al servidor (simulado con fetch POST)
  fetch('https://dev.adalab.es/api/kittens/ytaylor', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newObjKitten)
  });
};

// Asociar el evento al botón
addBtn.addEventListener('click', handleClickAdd);

// 🚀 INICIALIZACIÓN AL CARGAR LA PÁGINA

if (localStorage.getItem('kittensLS') === null) {
  // Si no hay gatitos en LocalStorage, pedimos al servidor

  fetch('https://dev.adalab.es/api/kittens/ytaylor')
    .then(response => response.json())
    .then(data => {
      console.log('data', data);

      // Guardamos en memoria y pintamos
      kittens = data.results;
      renderAllKittens();

      // Guardamos en LocalStorage para futuras visitas
      localStorage.setItem('kittensLS', JSON.stringify(kittens));
    });

} else {
  // Si ya hay datos guardados en LocalStorage, los usamos directamente
  kittens = JSON.parse(localStorage.getItem('kittensLS'));
  console.log(kittens);
  renderAllKittens();
}

// 🎁 Prueba adicional: guardar y recuperar una variable de prueba
localStorage.setItem('variableDeIván', '🐑');
const valor = localStorage.getItem('variableDeIván');
console.log(valor);
