
// const nombre = valor;

// Cuando la usuaria haga click en el botón

const boton = document.querySelector('.form__btn');

const input = document.querySelector('.form__input-text');

const lista = document.querySelector('.js_list');


boton.addEventListener('click', (ev) => {
  ev.preventDefault();

  // 1. Coja el valor (lo que la usuaria ha escrito) del input

  const textoEscrito = input.value;

  // 2. Crea un nuevo <li> y ponga el texto del input

  const html = `<li>${textoEscrito}</li>`;

  lista.innerHTML += html;

});


