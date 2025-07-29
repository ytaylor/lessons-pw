
# Motores de Plantillas en Express con EJS

## 🧩 ¿Qué es un servidor de ficheros dinámicos?

Un servidor de ficheros dinámicos genera una misma plantilla HTML y la personaliza con diferentes datos según la petición del navegador.

## 🛠️ ¿Qué es un motor de plantillas?

Es una herramienta que:
1. Recibe una petición.
2. Carga una plantilla.
3. Inserta datos dinámicos (desde JSON, base de datos, etc.).
4. Devuelve el HTML resultante al navegador.

## 🚀 Cómo usar EJS en Express

### 1. Instalación y configuración

```bash
npm install ejs
```

```js
app.set('view engine', 'ejs');
```

Las plantillas deben estar en la carpeta `views/`.

### 2. Crear un endpoint y renderizar

```js
app.get('/film', (req, res) => {
  const filmData = {
    title: 'Titanic',
    year: 1997,
    country: 'USA'
  };
  res.render('pages/film', filmData);
});
```

## 📄 Sintaxis en EJS

### Insertar datos

```html
<h1><%= title %></h1>
<p>Año: <%= year %></p>
```

### Incluir partials

```html
<%- include('../partials/header'); %>
```

### Condicionales

```html
<% if (country !== '') { %>
  <p>País: <%= country %></p>
<% } %>
```

### Bucles

```html
<ul>
<% awards.forEach(function(award) { %>
  <li><%= award.year %>: <%= award.info %></li>
<% }) %>
</ul>
```

## 🎨 Incluir CSS

1. Crear carpeta `src/public-css/` con `main.css`.
2. Configurar servidor estático:

```js
const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));
```

3. En la plantilla:

```html
<link rel="stylesheet" href="/main.css" />
```

## 🧠 Buenas prácticas

- Limpia y prepara los datos antes de pasarlos a la plantilla.
- Filtra los arrays o transforma los datos en el servidor (no en la plantilla).
- Usa estructuras simples para mantener las plantillas legibles.

## 🧪 Crear nuevas plantillas

```js
app.get('/es/director/:directorName', (req, res) => {
  const directorData = {
    name: req.params.directorName,
    films: ['Pelicula 1', 'Pelicula 2']
  };
  res.render('pages/director', directorData);
});
```

## ✅ Conclusiones

Para usar EJS con Express:

- Instala y configura EJS.
- Usa `res.render('plantilla', datos)`.
- Organiza las plantillas en `views/`.
- Usa partials, bucles y condicionales para generar contenido dinámico.
