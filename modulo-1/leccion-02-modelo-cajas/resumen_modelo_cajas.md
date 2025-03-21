## Review 
- Crear html con etiquetas básicas con carga semántica
- Crear css con selectores de clase
- Usar diferentes estilos css:
  - color
  - background-color
  - font-size
  - font-family
  - text-align




## 🎨 Variables en CSS 
¿Te imaginas tener que cambiar manualmente el color azul de 100 líneas de CSS porque ahora debe ser naranja? **Con las variables CSS puedes evitarlo.** Las variables se definen dentro de `:root` (la raíz del documento) y se usan en cualquier parte del CSS.

```css
:root {
  --color-principal: blue;
}

h1 {
  color: var(--color-principal);
}
```
Si quieres cambiar el color azul por rojo, solo necesitas editar `--color-principal` en un solo lugar.

### 🔹 Otras aplicaciones:
- Guardar fuentes (`--fuente-principal: 'Arial', sans-serif;`)
- Guardar tamaños (`--tamaño-texto: 16px;`)

💡 **Pro tip**: Usa variables para mantener un código CSS más limpio y fácil de modificar.

---

## Herencia y especificidad en CSS

- **Herencia**: Algunas propiedades se aplican a los elementos hijos automáticamente. Por ejemplo, si pones `color: red` en el `<body>`, todos los elementos dentro del `<body>` tendrán el texto rojo a menos que se especifique lo contrario.
- **Especificidad**: Si dos reglas CSS entran en conflicto, la más específica se aplica. Por ejemplo, si tienes un `h1` con `color: blue` y un `h1.destacado` con `color: red`, el texto será rojo porque la clase es más específica que la etiqueta.
- **!important**: Si añades `!important` a una propiedad, esta se aplicará siempre, incluso si hay reglas más específicas. **¡Úsalo con moderación!**

## 📌  Modelo de caja en CSS (Box Model)

Cuando escribes código HTML, cada etiqueta que añades se representa visualmente como una **caja**. CSS usa el **modelo de caja** para decidir cómo se verá cada elemento en la página.

Las partes más importantes de una caja en CSS son:


### Margin, padding y border
- **Contenido**: lo que hay dentro de la caja (texto, imagen, etc.).
- **Margin (margen)**: Espacio entre un elemento y los elementos de alrededor. `margin: 10px;`
- **Padding (relleno)**: Espacio entre el contenido y el borde. `padding: 10px;`
- **Border (borde)**: Línea que rodea el contenido. `boder: 1px solid black;` 

- width + padding + border = tamaño total del elemento.
  
**Diferencia entre margin y padding:** el padding afecta al contenido, mientras que el margin afecta al espacio entre elementos.

📌 **Ejemplo rápido:**  
Si tienes un div con `width: 100px` y `padding: 10px`, la caja total no medirá 100px sino **120px** (porque el padding se suma).

## Box-sizing
  - **Box-sizing**: Propiedad que define cómo se calcula el tamaño total de un elemento.
  
  ```css
  * {
    box-sizing: border-box;
  }
  ```
  - `content-box`: El tamaño total del elemento es el tamaño del contenido. Es el valor por defecto.
  - `border-box`: El tamaño total del elemento incluye el padding y el borde.
  - `padding-box`: No se usa en la práctica.

💡 **Pro tip**: Usa `box-sizing: border-box` para que el padding y el borde no sumen tamaño extra a la caja.

## Display Block

Además, los elementos HTML pueden mostrarse de diferentes formas según su **display**:

- `block`: Ocupa todo el ancho disponible (ej. `div`, `p`, `h1`).
- `inline`: Solo ocupa el espacio de su contenido (ej. `span`, `a`). No funciona con `width` ni `height`.
- `inline-block`: Mezcla de ambos, ocupa solo lo necesario pero permite establecer dimensiones.
- `none`: Hace que el elemento desaparezca.

---

# Bonus
## 🛠️ Herramientas para desarrolladores (DevTools)

Los navegadores (como Chrome o Firefox) tienen herramientas que te permiten inspeccionar y depurar tu web.

Una de las pestañas más útiles es **Network**, que te dice:
- Qué archivos se están cargando (CSS, imágenes, JS…).
- Cuánto tardan en cargar.
- Si hay errores en la carga.

🔹 **Consejo clave**: Activa **"Disable cache"** en la pestaña Network cuando estés desarrollando. Así te aseguras de ver siempre la última versión de tu web sin que el navegador te muestre una versión guardada (cacheada).

👀 **Ejercicio recomendado**: Inspecciona [Wikipedia.org](https://wikipedia.org) y mira cuántos recursos carga y cuánto pesa la página.

---

## ✨ Uso de fuentes en Google Fonts

¿Quieres usar una fuente personalizada sin instalar nada? **Google Fonts** lo hace fácil.

### 🔹 ¿Cómo usar una fuente de Google Fonts?
1. Ve a [Google Fonts](https://fonts.google.com) y elige una fuente.
2. Copia el link y pégalo en el `<head>` de tu HTML:

   ```html
   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
   ```

3. Usa la fuente en tu CSS:

   ```css
   body {
     font-family: 'Roboto', sans-serif;
   }
   ```

### 🔹 Variaciones de fuentes
Si quieres negritas o cursivas, puedes añadir valores extra:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700,italic">
```

💡 **Pro tip**: No uses más de **dos fuentes diferentes** en una web para mantenerla limpia y fácil de leer.
