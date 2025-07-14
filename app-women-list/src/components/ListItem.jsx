const ListItem = ({ woman }) => (
    <div className="list-item">
        <img src={woman.photo_url} alt={woman.full_name} />
        <div className="list-item-content">
            <h2>{woman.full_name}</h2>
            <p><strong>Nacimiento:</strong> {woman.birth_date}</p>
            {woman.death_date && <p><strong>Fallecimiento:</strong> {woman.death_date}</p>}
            <p><strong>País:</strong> {woman.country}</p>
            <p><strong>Área:</strong> {woman.field}</p>
            <p>{woman.bio}</p>
            {woman.achievements?.length > 0 && (
                <ul className="achievements">
                    {woman.achievements.map((ach, idx) => (
                        <li key={idx}>
                            <strong>{ach.title}</strong> ({ach.year}): {ach.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
);

export default ListItem;
