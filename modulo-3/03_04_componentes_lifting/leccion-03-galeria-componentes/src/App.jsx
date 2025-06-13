import { useState } from "react";
import './styles/App.scss'
import Header from "./components/Header";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import AddPhotoForm from "./components/AddPhotoForm";


const initialPhotos = [
  { id: 1, url: "https://picsum.photos/id/1015/400/300", title: "Montaña" },
  { id: 2, url: "https://picsum.photos/id/1025/400/300", title: "Perro" },
  { id: 3, url: "https://picsum.photos/id/1040/400/300", title: "Bosque" }
];

function App() {
  const [photos, setPhotos] = useState(initialPhotos);

  const handleRemovePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  const handleAddPhoto = (newPhoto) => {
    setPhotos([...photos, newPhoto]);
  };

  return (
    <div className="app-container">
      <Header />
      <AddPhotoForm onAddPhoto={handleAddPhoto} /> {/* ✅ nuevo */}

      <div className="gallery">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} handleRemovePhoto={handleRemovePhoto} />
        ))}
      </div>
      <Footer />

    </div>

  );
}

export default App;
