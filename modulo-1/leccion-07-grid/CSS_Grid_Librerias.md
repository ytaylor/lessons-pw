# 🎨 CSS Grid y Librerías CSS

- Definiendo columnas
- 


CSS Grid es una forma avanzada de organizar elementos en una página mediante un sistema de filas y columnas. Es otro tipo de display. 
- Explicar como funciona flex, recordar como funciona la herencia y los colores, como funciona lo de los rems para calcularlo. 
- Explicar que se lo tenemos que poner al contenedor padre

```css 
grid-template-columns: 25% 25% 25% 25 %; 
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-columns: repeat(4, 1fr);
grid-template-columns: repeat(4, 25%);
```

- Explicar que se puede poner en porcentajes, fracciones, repeticiones, etc.
- Se pueden poner que a las hijas le cambiemos el tamaño de la columna con el 

```css
grid-column: span 2;
grid-column: 1 / 3; /*Indica separadores */
```

- Se pueden definir filas, pero no va a hacer falta, tambien se podria definir, pero no es necesario porque se adapta al contenido de la caja.

```css
grid-template-rows: 100px 100px 100px;
grid-row: 1 / 3;

```

- No utilizarlo para dejar huecos,como margenes o paddings, para eso se utiliza el grid-gap

```css
gap: 20px;
row-gap: 20px;
column-gap: 20px;
```

- Trabajar con areas 

### 🔹 Definir una cuadrícula básica

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 200px 40px;
}
```

- 4 columnas de igual tamaño  
- 3 filas con alturas de `40px`, `200px` y `40px`  

### 🔹 Control de posiciones con `grid-column` y `grid-row`

```css
.item1 {
  grid-column: 1 / 4;
}
```

📌 Ocupa las 3 primeras columnas.

Para filas es similar:

```css
.item3 {
  grid-row: 2 / 4;
}
```

### 🔹 Espaciado entre elementos con `gap`

```css
.wrapper {
  gap: 20px;
}
```

### 🔹 Definir áreas en la cuadrícula

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "main aside"
    "footer footer";
}

.item--1 {
  grid-area: main;
}
```

📌 Mejora la claridad del código al asignar nombres a las áreas.


## Bonus
---

## 📌 Librerías CSS: Bootstrap 🎭

Bootstrap es una librería que facilita la maquetación de páginas con un sistema de **grid de 12 columnas** y componentes pre-diseñados.

### 🔹 Incluir Bootstrap en un proyecto

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
```

### 🔹 Uso del Grid de Bootstrap

```html
<div class="container">
  <div class="row">
    <div class="col-6">Columna 1</div>
    <div class="col-6">Columna 2</div>
  </div>
</div>
```

✅ **`col-6`** ocupa la mitad del ancho disponible.  
✅ **`container`** define un contenedor centralizado.  
✅ **`row`** indica una fila en el grid.  

-

## 📌 Librerías CSS: Tailwaid CSS 🎭
