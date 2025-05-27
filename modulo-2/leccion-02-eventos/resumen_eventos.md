
# 🧑‍💻 Módulo 2 - Eventos en JavaScript

En esta lección aprenderás cómo hacer que tu página web **reaccione a las acciones de la usuaria**, como hacer clic en un botón, escribir en un input o mover el ratón. Todo esto es posible gracias a los **eventos**.

---

## 📌 Temas que cubrimos

- Cómo escuchar eventos con `addEventListener`
- Usar `event.currentTarget` y `event.target`
- Prevenir acciones por defecto con `event.preventDefault()`
- El concepto de `event bubbling` y `event delegation`
- Acceder a `input.value`
- Añadir y quitar clases con `classList.toggle`

---

## 🧠 ¿Qué es un evento?

Un evento representa una interacción de la usuaria o del sistema, como:
- Clic en un botón
- Scroll
- Cambio en un input
- Fin de un temporizador
- Llegada de datos del servidor

Desde JavaScript **no creamos eventos**, pero sí podemos escuchar que han ocurrido y ejecutar una función en respuesta.

---

## 👂 Escuchando eventos

Para escuchar un evento usamos `addEventListener`. Ejemplo:

```html
<button class="alert">Alerta</button>
```

```js
const button = document.querySelector(".alert");

button.addEventListener("click", () => {
  console.log("Has hecho clic");
});
```

Esto añade un *listener* al botón para que cuando se haga `click`, se ejecute la función que muestra el mensaje.

---

## 🧾 Objeto `event`

Cuando se dispara un evento, el navegador nos pasa un objeto con información útil: `event`.

```js
button.addEventListener('click', (event) => {
  console.log(event);
});
```

### 🔑 Propiedades útiles:

- `event.key`: tecla pulsada en eventos de teclado
- `event.currentTarget`: el elemento al que pusimos el listener
- `event.target`: el elemento exacto donde ocurrió el evento

```js
button.addEventListener("click", (event) => {
  console.log("currentTarget:", event.currentTarget);
  console.log("target:", event.target);
});
```

---

## 🧼 Prevenir el comportamiento por defecto

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Código para procesar el formulario
});
```

Esto evita que el navegador recargue la página al enviar un formulario.

---

## 📤 El burbujeo de eventos

Los eventos se propagan desde el hijo al padre, al abuelo… hasta `html`.  
Esto nos permite usar `event delegation`, es decir, poner un listener en un elemento padre y gestionar eventos de los hijos.

Ejemplo:
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Event Bubbling</title>
  <style>
    .abuelo {
      padding: 40px;
      background-color: #ffdddd;
    }
    .padre {
      padding: 30px;
      background-color: #ddffdd;
    }
    .hijo {
      padding: 20px;
      background-color: #ddddff;
    }
  </style>
</head>
<body>
  <div class="abuelo">
    Abuelo
    <div class="padre">
      Padre
      <div class="hijo">
        Hijo
      </div>
    </div>
  </div>
```




```js
const abuelo = document.querySelector('.abuelo');
const padre = document.querySelector('.padre');
const hijo = document.querySelector('.hijo');

abuelo.addEventListener('click', () => {
      console.log('Click en el ABUELO');
    });

    padre.addEventListener('click', () => {
      console.log('Click en el PADRE');
    });

    hijo.addEventListener('click', () => {
      console.log('Click en el HIJO');
    });

list.addEventListener('click', (event) => {
  if (event.target.matches('.fruit')) {
    event.target.classList.toggle('fruit--selected');
  }
});
```



## 🧺 Ejemplo completo: event delegation con frutas

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Frutas seleccionables</title>
  <style>
    .fruit {
      padding: 6px;
      cursor: pointer;
      border-bottom: 3px solid #b9b8ba;
    }
    .fruit--selected {
      border-bottom: 3px solid #64dac4;
    }
  </style>
</head>
<body>
  <ul class="fruits">
    <li class="fruit">Fresa</li>
    <li class="fruit">Plátano</li>
    <li class="fruit">Kiwi</li>
  </ul>

  <script>
    const fruitList = document.querySelector('.fruits');

    fruitList.addEventListener('click', (event) => {
      if (event.target.matches('.fruit')) {
        event.target.classList.toggle('fruit--selected');
      }
    });
  </script>
</body>
</html>
```

🧠 ¿Qué está pasando aquí?

- Usamos **event delegation** escuchando el evento en el `ul.fruits`.
- Gracias al `event.target`, sabemos qué fruta se ha clicado.
- Solo se activa si el elemento clicado tiene la clase `.fruit`.
- Se añade o quita la clase `fruit--selected` al `li` correspondiente.

Esto evita repetir el mismo `addEventListener` en cada fruta y hace el código más limpio y mantenible.


---

## 🧃 Otras formas (NO recomendadas)

```html
<button onclick="alert('Hola')">Click</button>
```

O:

```js
button.onclick = function () {
  alert('Hola');
};
```

⚠️ Evítalas. Siempre usaremos `addEventListener()` para separar estructura y comportamiento.

---

## ✅ Buenas prácticas

- Usa `addEventListener`, nunca `onclick`
- Trabaja con `currentTarget` salvo que necesites `target`
- Usa `preventDefault()` cuando trabajes con formularios
- Añade o quita clases con `classList.toggle`

---

¡Los eventos son la clave para hacer tu web **interactiva**! Sigue practicando para que tu JS responda como tú quieras. 🚀
