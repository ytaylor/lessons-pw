import { useState } from "react";
import UserList from "./components/UserList";
import localidades from "./data/localidades.json";
import "./styles/App.scss";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "Madrid",
    plan: "",
    legal: false,
  });

  const [users, setUsers] = useState([]);

  const handleChange = (ev) => {

    //«Estamos usando el nombre del input (name) para saber qué propiedad del estado hay que actualizar. Como los inputs pueden ser de tipo checkbox o text/email/etc, si el tipo es checkbox cogemos checked, y si no, usamos value. Luego usamos spread (...formData) para copiar todos los valores anteriores y solo sustituimos el que ha cambiado.»

    const { name, value, type, checked } = ev.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });


    //version más clara: 
    const inputName = ev.target.name;
    const inputType = ev.target.type;
    const inputValue = inputType === "checkbox" ? ev.target.checked : ev.target.value;

    const newFormData = {
      ...formData,
      [inputName]: inputValue,
    };

    setFormData(newFormData);
  };

  // para explicar en clase hacerlo con funciones separadas
  const handleNameChange = (ev) => {
    setFormData({ ...formData, name: ev.target.value });
  };

  const handleEmailChange = (ev) => {
    setFormData({ ...formData, email: ev.target.value });
  };

  const handleLegalChange = (ev) => {
    setFormData({ ...formData, legal: ev.target.checked });
  };


  const handleSubmit = (ev) => {
    ev.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      name: "",
      email: "",
      location: localidades[0] || "",
      plan: "",
      legal: false,
    });
  };

  const handleReset = (ev) => {
    ev.preventDefault(); // evita que se envíe el formulario si es botón dentro de <form>
    setFormData({
      name: "",
      email: "",
      location: localidades[0] || "",
      plan: "",
      legal: false,
    });
  };


  return (
    <div className="app">
      <h1>Formulario de registro</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="location">Localidad:</label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          {localidades.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <fieldset className="fieldset">
          <legend>Plan:</legend>
          <label>
            <input
              type="radio"
              name="plan"
              value="básico"
              checked={formData.plan === "básico"}
              onChange={handleChange}
            />
            Básico
          </label>
          <label>
            <input
              type="radio"
              name="plan"
              value="premium"
              checked={formData.plan === "premium"}
              onChange={handleChange}
            />
            Premium
          </label>
        </fieldset>

        <label className="checkbox">
          <input
            type="checkbox"
            name="legal"
            checked={formData.legal}
            onChange={handleChange}
          />
          Acepto los términos legales
        </label>


        <div className="buttons">
          <button type="submit" disabled={!formData.legal}>
            Registrar
          </button>
          <button onClick={handleReset}>Limpiar</button>
        </div>

      </form>

      <UserList users={users} />
    </div>
  );
}

export default App;
