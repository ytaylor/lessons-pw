const btnAcceder = document.getElementById('btnAcceder');
const input = document.getElementById('codigoInput');
const mensaje = document.getElementById('mensaje');
const toggleBtn = document.getElementById('togglePassword');

toggleBtn.addEventListener('click', function (e) {
  e.preventDefault(); // evita que el botón envíe un formulario si lo hay

  if (input.type === 'password') {
    input.type = 'text';
    toggleBtn.textContent = '🙈'; // Cambia el icono
  } else {
    input.type = 'password';
    toggleBtn.textContent = '👁️';
  }
});

// Función que comprueba si el código es correcto
function validarCodigo(codigoUsuario) {
  const codigoCorrecto = 'adalab123'; // ← Puedes cambiarlo
  if (codigoUsuario === codigoCorrecto) {
    mostrarMensaje('✅ Bienvenida a la sala privada', 'green');
  } else {
    mostrarMensaje('❌ Código incorrecto. Intenta de nuevo.', 'red');
  }
}

// Función para mostrar un mensaje
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// Evento
btnAcceder.addEventListener('click', (ev) => {
  ev.preventDefault(); // Evitar el comportamiento por defecto del botón
  const codigoIngresado = input.value;
  validarCodigo(codigoIngresado);
});
