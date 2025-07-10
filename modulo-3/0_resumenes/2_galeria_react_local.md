
# 📸 Galería de Fotos en React

Este proyecto es una galería de fotos hecha con React, donde las imágenes se cargan desde una carpeta local (`public/images`). Las imágenes se pueden visualizar y eliminar desde la interfaz. Todo el código está contenido en un único componente: `App`.


## Lo normal en proyectos reales
Sin embargo, lo más habitual en proyectos reales es que las imágenes estén cargadas en un servidor o servicio externo, y que el frontend (React, en este caso) reciba las URLs como parte de los datos desde una API o una base de datos.

## ✅ Situación común en el mundo real
Las imágenes suelen venir de una fuente como:
- Un CMS (como Strapi, WordPress, Sanity…)
- Un servicio tipo Firebase Storage, Cloudinary, AWS S3...
- Una API que devuelve objetos con url, title, etc.
- Un backend propio que expone una ruta tipo /api/photos

##  🧠 ¿Por qué se evita cargar imágenes desde local?
- Escalabilidad: no puedes subir imágenes fácilmente desde el navegador a public/.
- Despliegue: si usas Netlify, Vercel o GitHub Pages, los archivos locales no cambian dinámicamente.
- Actualización de contenido: con URLs puedes cambiar el contenido sin re-deploy.
- Evitas duplicar imágenes: con una base de datos puedes controlar si una URL ya existe.

## 🗂️ Estructura del proyecto

```
my-gallery/
├── public/
│   └── images/
│       ├── foto1.jpg
│       ├── foto2.jpg
│       └── foto3.jpg
├── src/
│   └── App.jsx
└── index.html
```

## 🖼️ Array de imágenes precargadas

En `App.jsx`:

```jsx
const initialPhotos = [
  { id: 1, url: "/images/foto1.jpg", title: "Atardecer" },
  { id: 2, url: "/images/foto2.jpg", title: "Montaña" },
  { id: 3, url: "/images/foto3.jpg", title: "Ciudad" }
];
```

## 💻 Código completo (`App.jsx`)

```jsx
import { useState } from "react";

const initialPhotos = [
  { id: 1, url: "/images/foto1.jpg", title: "Atardecer" },
  { id: 2, url: "/images/foto2.jpg", title: "Montaña" },
  { id: 3, url: "/images/foto3.jpg", title: "Ciudad" }
];

function App() {
  const [photos, setPhotos] = useState(initialPhotos);

  const handleRemovePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  return (
    <>

      <div className="app-container">
        <h1>Galería de Fotos</h1>
        <div className="gallery">
          {photos.map(photo => (
            <div className="photo-card" key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
              <button className="remove-btn" onClick={() => handleRemovePhoto(photo.id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
```

## ▶️ Cómo usar

1. Coloca tus imágenes en la carpeta `public/images`.
2. Asegúrate de que las rutas en `initialPhotos` coincidan.
3. Inicia tu app con Vite o CRA (`npm run dev` o `npm start`).

## Para generar un array de fotos automáticamente:

```js
const generatePhotos = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    url: `/images/foto${i + 1}.jpg`,
    title: `Foto ${i + 1}`
  }));
};

const initialPhotos = generatePhotos(50);

```

