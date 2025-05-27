'use strict';

/*
if( condición ) {
  instrucción1();
}
else {
  instrucción2();
}


function nombreFunción() {

  instrucciones();

}

nombreFunción()

// FOR CLÁSICO

for( let i = 0 ; i <  N  ; i++ )
{

  instrucciones();

}


const nombreDelArray = [ 100, 200, 300, 400 ];
// FOR-OF (para Arrays)

for( const nombreParaUnValor of nombreDelArray ) {

  instrucciones();

}

// FOREACH (para Arrays también)

nombreDelArray.forEach((nombreParaUnValor) => {

  instrucciones();

});
*/

const form = document.querySelector('.js_form');

form.innerHTML = `<input class="js_display display" type="number" name="display" id="display">`;

debugger;
//for(     INICIO     ;   COND SALIDA    ;   FIN DE CADA ITERACIÓN    )
/*
for(  let i = 0  ;  i < 9  ;  i++ ) {
  form.innerHTML += `<input class="js_btn${i+1} btn" type="button" value="${i+1}">`;
}

form.innerHTML += `<input class="js_btn0 btn" type="button" value="0">`;
*/

/*
for(  let i = 1  ;  i < 10  ;  i++ ) {
  form.innerHTML += `<input class="js_btn${i} btn" type="button" value="${i}">`;
}

form.innerHTML += `<input class="js_btn0 btn" type="button" value="0">`;
*/
/*
// Orden inverso
for( let i = 9  ;  i >= 0  ;  i--  ) {
  form.innerHTML += `<input class="js_btn${i} btn" type="button" value="${i}">`;
}
*/