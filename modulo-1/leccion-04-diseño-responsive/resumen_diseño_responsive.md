
## 📏 Diseño Flexible
El diseño flexible define los anchos de los contenedores en porcentajes en lugar de valores fijos. Esto permite que los elementos se ajusten dinámicamente al tamaño de la pantalla.

### Ten en cuenta:
- Uso de porcentajes y viewport para los anchos de los elementos.
- Unidades flexibles como `rem`, `vw`, `vh`, y `%`.
- Uso de *media queries* para adaptar el diseño a diferentes resoluciones.
- Configuración del *viewport* para garantizar un correcto escalado en dispositivos móviles.

---

## 🔍 Viewport
El *viewport* define cómo se escala el contenido en dispositivos móviles. Se configura con la siguiente etiqueta en el `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
✅ `width=device-width`: Adapta el ancho al dispositivo.  
✅ `initial-scale=1`: Ajusta el nivel de zoom inicial.

---

## 📐 Medidas Flexibles
### 📌 `vw` y `vh`
- `1vw` = 1% del ancho del viewport.
- `1vh` = 1% de la altura del viewport.

### 📌 `em` y `rem`
- `em`: Relativo al tamaño del texto del elemento padre.
- `rem`: Relativo al tamaño del texto del `html`.

📌 **Ejemplo de escalabilidad con `rem`:**
```css
html {
  font-size: 16px;
}

p {
  font-size: 1.5rem; /* Equivale a 24px */
}
```


### Tipografía Responsiva
📌 **Tipografía:** Se recomienda usar `rem` en lugar de píxeles para facilitar la escalabilidad.

- Ejemplo de codepen: https://codepen.io/adalab/pen/WadWay 
- Calculadora rem: https://nekocalc.com/es/px-a-em-conversor 

Usar unidades relativas como los rem. rem es una unidad relativa al tamaño de texto especificado en el elemento raíz de nuestro documento, que es el <html>. De manera que si el elemento html está a 16px (valor por defecto), 1rem equivaldrá a esos 16px.

## 🖼️ Imágenes y Vídeos Responsivos
Las imágenes y vídeos también deben adaptarse al diseño *responsive* mediante propiedades como:
- `max-width` y `min-width` para establecer límites de tamaño.
- Uso de contenedores para controlar el tamaño de las imágenes sin afectar la estructura del diseño.
- En vídeos, se pueden usar CSS o librerías de JS para asegurar la correcta adaptación al contenedor.

## 🎯 Media Queries
Las *media queries* permiten modificar los estilos CSS en función de las características del dispositivo, como el tamaño de pantalla u orientación.
```css
@media all and (min-width: 1024px) {
}
@media all and (min-width: 736px) {
}
@media all and (mix-width: 480px) {

}
```

### 🔧 Ejemplo de *media query*:
```css
@media screen and (min-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```
📝 **Tipos de media queries comunes:**
- `min-width`: Se aplica cuando el ancho es mayor o igual a un valor.
- `max-width`: Se aplica cuando el ancho es menor o igual a un valor.
- `orientation`: Permite diferenciar entre vista vertical (`portrait`) y horizontal (`landscape`).

---

## 📱 Enfoque *Mobile First*
La metodología *Mobile First* prioriza el diseño para dispositivos móviles y posteriormente lo adapta a pantallas más grandes.

**Beneficios:**
✅ Optimización de rendimiento en dispositivos con menor capacidad.  
✅ Reducción del consumo de datos móviles.  
✅ Mejor experiencia de usuario con botones y áreas clicables más grandes.

### 📌 Ejemplo de estructura Mobile First:
```css
/* Estilos base para móviles */
body {
  font-size: 14px;
}

/* Estilos para pantallas más grandes */
@media screen and (min-width: 768px) {
  body {
    font-size: 16px;
  }
}
```



