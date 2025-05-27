## Resumen del módulo


#### 🧱 1. Estructura y Etiquetas HTML​
HTML estructura el contenido de una web.
- Documento básico: <!DOCTYPE html>, <html>, <head>, <body>.
- Etiquetas más comunes:
    - Texto: `<h1>, <p>, <strong>, <em>, <br>, <hr>`
    - Enlaces e imágenes: `<a>, <img>`
    - Listas: `<ul>, <ol>, <li>`
    - Tablas: `<table>, <tr>, <td>, <th>`
    - Semánticas: `<header>, <nav>, <main>, <section>, <article>, <footer>`


#### 📥 2. Formularios HTML​
- Elemento principal: `<form action="" method="get|post">`.
- Inputs: `text, email, password, tel, checkbox, radio, file, date`, etc.
- Atributos importantes: `name, id, placeholder, required, value, disabled`.
- Agrupar campos: `<fieldset>, <legend>.`
- Otras etiquetas: `<label>, <select>, <textarea>, <button>`.

####  3. CSS y Selectores​
- CSS da estilo a los elementos HTML.
- Tipos de selectores:
  - Básicos: `*, elemento, .clase, #id`
  - Combinadores:` >, +, ~`
  - Atributos: `[attr=value]`
  - Pseudo-clases: `:hover, :focus, :nth-child()`
  - Pseudo-elementos: `::before, ::after`
- Ejemplos: cambiar color, tipografía, márgenes, etc


#### 📦 4. Modelo de Caja en CSS (Box Model)
- Cada elemento es una caja: content + padding + border + margin.
- box-sizing: `border-box` evita sumar padding y border al tamaño total.
- Tipos de display: `inline-block`, `none`.
- Herencia y especificidad.
- Uso de variables`CSS (--color-principal)`.
- Google Fonts para tipografías personalizadas.

#### 5. Display, Position y Transform​
- display: define cómo se comporta un elemento (bloque, inline, flex, grid).
- position: `static, relative, absolute, fixed, sticky + top, left, z-index`.
- transform: `translate, rotate, scale, skew`.
- Centrado con transform: `translate(-50%, -50%)`.

#### 📐 6. Flexbox​
- Sistema de diseño en filas o columnas.
- Propiedades contenedor: `display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `gap`.
- Propiedades hijos: `order`, `flex-grow`, `flex-shrink`, `align-self`.


####  🧮 7. CSS Grid y Librerías​
- Define filas y columnas con `grid-template-columns`, `grid-template-rows`, `gap`.
- Posicionamiento con `grid-column,` `grid-row`, `grid-area`.
- Sistema más estructurado que Flexbox.

#### 📏 8. Diseño Responsive​
- Unidades relativas: `%, vw, vh, em, rem.`
- Viewport: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Media queries: adaptar estilos a distintos tamaños de pantalla.
- Mobile First: diseñar primero para móvil y luego escalar hacia escritorio.
- Imágenes y vídeos deben tener `max-width: 100%` para adaptarse.


#### ⚙️ 9. Starter Kit y herramientas modernas​
- Starter kit de Adalab (basado en Vite) para estructurar proyectos.
- Estructura: `src/, public/, docs/`.
- Comandos:    
    - `npm install` → instala dependencias.
    - `npm run dev` → servidor de desarrollo.
- Uso de load para HTML parcial (no estándar, propio del kit).
- Vite es rápido y permite proyectos modulares y escalables.



## Pasos para hacer un ejercicio

1. Leer el enunciado
2. Crear el repositorio 
3. Copiar el starer kit
   1. Asegurate de estar en la carpeta el proyecto
   2. hacer el npm install
   3. hacer el npm run dev
4. Hacer estructura semántica
5. Cargar las fuentes
6. Hacer versión mobile
7. Hacer versión desktop