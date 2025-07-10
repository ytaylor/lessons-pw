// src/components/CharacterList.jsx
function CharacterList({ characters }) {
    return (
        <ul>
            {characters.length === 0 ? (
                <li>No hay resultados</li>
            ) : (
                characters.map((char, index) => (
                    <li key={index}>{char.name}</li>
                ))
            )}
        </ul>
    );
}

export default CharacterList;
