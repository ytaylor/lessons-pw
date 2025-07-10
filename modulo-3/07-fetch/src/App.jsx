import { useEffect, useState } from "react";
import callToApi from "./services/api";
import CharacterList from "./components/CharacterList";

function App() {
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (search !== "") {
      setIsLoading(true); // empezar a cargar
      callToApi(search).then((data) => {
        setCharacters(data);
        setIsLoading(false); // dejar de cargar
      });
    }
  }, [search]);

  return (
    <div className="app">
      <h1>Buscador de personajes de Star Wars</h1>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading ? (
        <p>Cargando personajes...</p>
      ) : (
        <CharacterList characters={characters} />
      )}
    </div>
  );
}

export default App;
