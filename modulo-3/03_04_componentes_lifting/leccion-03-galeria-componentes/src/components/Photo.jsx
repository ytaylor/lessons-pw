function Photo({ photo, handleRemovePhoto }) {
    return (
        <div className="photo-card">
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
            <button className="remove-btn" onClick={() => handleRemovePhoto(photo.id)}>Eliminar</button>
        </div>
    );
}

export default Photo;
