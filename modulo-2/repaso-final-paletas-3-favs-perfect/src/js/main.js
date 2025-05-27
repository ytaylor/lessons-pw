"use strict";

const spaceshipUl = document.querySelector(".js_spaceshipUl");
const favouritesUl = document.querySelector('.js_favouritesUl');

let allSpaceships = [];
let favourites = [];



const renderColorSquares = (colors) => {
  let html = '';

  for( const color of colors ) {
    html += `<div class="palette__color" style="background-color:#${color}"></div>`;
  }

  return html;
}


const renderOneSpaceship = (spaceshipObj) => {
  const colorsHtml = renderColorSquares(spaceshipObj.colors);

  // Buscamos en el de favoritos
  const favouritesIdx = favourites.findIndex((eachSpaceship) => eachSpaceship.id === spaceshipObj.id);

  if( favouritesIdx === -1 ) {
    const html = `
      <li class="js_spaceship spaceship__item" id="${spaceshipObj.id}">
        <h2>${spaceshipObj.name}</h2>
        <div class="palette">
          ${colorsHtml}
        </div>
      </li>`;
    return html;
  }
  else {
    const html = `
      <li class="js_spaceship spaceship__item favourite" id="${spaceshipObj.id}">
        <h2>${spaceshipObj.name}</h2>
        <div class="palette">
          ${colorsHtml}
        </div>
      </li>`;
    return html;
  }
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

const renderFavourites = () => {
  let html = '';
  for( const spaceshipObj of favourites ) {
    html += renderOneSpaceship(spaceshipObj);
  }
  favouritesUl.innerHTML = html;
}


const handleFavourite = (ev) => {
  console.log('favorita!');
  console.log(ev.currentTarget.id);

  //ev.currentTarget.classList.toggle('favourite');
  
  // OBTENER EL OBJ DE LA NAVE PULSADA
  // Traernos el attr gancho

  const clickedId = ev.currentTarget.id;

  // El valor de ese atributo me permite identificar el objeto en el array
  // Usamos el valor del atrib gancho en el find para obtener el obj
  // del <li> pulsado


  // Buscamos en el de todos
  const clickedSpaceshipObj = allSpaceships.find((eachSpaceship) => eachSpaceship.id === clickedId);

  // Buscamos en el de favoritos
  const favouritesIdx = favourites.findIndex((eachSpaceship) => eachSpaceship.id === clickedId);

  if( favouritesIdx === -1 ) {
    // Añadimos el <li> de la favorita al HTML:
    favourites.push(clickedSpaceshipObj);
    renderFavourites();
    renderAllSpaceships();


    //const liFavourite = renderOneSpaceship(clickedSpaceshipObj);
    //favouritesUl.innerHTML += liFavourite;

  }
  else {
    // Quitar del array de fav
    favourites.splice(favouritesIdx, 1);

    // Quitar del HTML
    renderFavourites();
    renderAllSpaceships();
  }

  localStorage.setItem('starshipsFavs', JSON.stringify(favourites));
};


// Cuando carga la página

fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
  .then((response) => response.json())
  .then((data) => {
    allSpaceships = data.palettes;

    renderAllSpaceships();

    console.table(allSpaceships);
  });

//localStorage.setItem('nombre', JSON.stringify('valor'));
//JSON.parse(localStorage.getItem('nombre'));  --> 'valor'

if( localStorage.getItem('starshipsFavs') !== null ) {
  favourites = JSON.parse(localStorage.getItem('starshipsFavs'))
  renderFavourites();
}
