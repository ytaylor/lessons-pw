import { useState } from "react";
import '../styles/App.scss'

import foto1 from '../images/1.png';
import foto2 from '../images/2.png';
import foto3 from '../images/3.png';

const initialPhotos2 = [
  { id: 1, url: foto1, title: "Foto 1" },
  { id: 2, url: foto2, title: "Foto 2" },
  { id: 3, url: foto3, title: "Foto 3" }
];

const initialPhotos = [
  { id: 1, url: "https://picsum.photos/id/1015/400/300", title: "Montaña" },
  { id: 2, url: "https://picsum.photos/id/1025/400/300", title: "Perro" },
  { id: 3, url: "https://picsum.photos/id/1040/400/300", title: "Bosque" }
];

function App() {
  const [photos, setPhotos] = useState(initialPhotos);

  return (
    <div className="app-container">
      <h1>Galería de Fotos</h1>

      <div className="gallery">
        {photos.map((photo, index) => (
          <div className="photo-card" key={index}>
            <img src={photo.url} alt={`Foto ${index + 1}`} />

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
