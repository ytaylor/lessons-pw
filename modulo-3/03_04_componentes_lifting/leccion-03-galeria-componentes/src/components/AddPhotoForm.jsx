import { useState } from "react";
import '../styles/Form.scss';

function AddPhotoForm({ onAddPhoto }) {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!url.trim()) return;

        const newPhoto = {
            id: Date.now(),
            url: url.trim(),
            title: title.trim() || "Sin título"
        };

        onAddPhoto(newPhoto);
        setUrl("");
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="URL de la imagen"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" >Añadir</button>
        </form>
    );
}

export default AddPhotoForm;
