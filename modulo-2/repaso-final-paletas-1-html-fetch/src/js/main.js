"use strict";

const spaceshipUl = document.querySelector(".js_spaceshipUl");

let allSpaceships = [];

const renderColorSquares = (colors) => {
  let html = '';

  for( const color of colors ) {
    html += `<div class="palette__color" style="background-color:#${color}"></div>`;
  }

  return html;
}


const renderOneSpaceship = (spaceshipObj) => {
  const colorsHtml = renderColorSquares(spaceshipObj.colors);

  const html = `
    <li class="js_spaceship spaceship__item">
      <h2>${spaceshipObj.name}</h2>
      <div class="palette">
        ${colorsHtml}
      </div>
    </li>`;

  return html;
};

const renderAllSpaceships = () => {
  let html = '';
  for( const  spaceshipObj  of  allSpaceships  ) {
    html += renderOneSpaceship(spaceshipObj);
  }
  spaceshipUl.innerHTML = html;

  const allSpaceshipLi = document.querySelectorAll('.js_spaceship');
  
  for( const li of allSpaceshipLi ) {
    li.addEventListener('click', handleFavourite);
  }
}

const handleFavourite = (ev) => {
  console.log('favorita!');
  console.log(ev.currentTarget);

  ev.currentTarget.classList.toggle('favourite');
  
};


// Cuando carga la página

fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
  .then((response) => response.json())
  .then((data) => {
    allSpaceships = data.palettes;

    renderAllSpaceships();

    console.table(allSpaceships);
  });


