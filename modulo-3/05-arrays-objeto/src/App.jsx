// src/App.js
import { useState } from 'react';
import data from './data/promo-51.json';
import StudentList from './componentes/StudentList';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('todas');

  // Crear array único de localidades ordenadas alfabéticamente
  const locations = Array.from(new Set(data.map((s) => s.localidad.trim())))
    .sort((a, b) => a.localeCompare(b));

  const filteredStudents = data
    .filter((student) =>
      student.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((student) =>
      locationFilter === 'todas' ? true : student.localidad === locationFilter
    );

  return (
    <div className="App">
      <h1>Listado de alumnas - Promo 51</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={{ marginLeft: '1rem' }}
        >
          <option value="todas">Todas las localidades</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;
