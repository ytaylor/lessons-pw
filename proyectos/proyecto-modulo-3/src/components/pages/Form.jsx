import GetAvatar from "../web_components/GetAvatar";

import ButtonLarge from "../web_components/ButtonLarge";

function Form({
  changeData,
  data,
  onSubmit,
  responseFetch,
}) {
  const handleChange = (event) => {
    const newValue = event.currentTarget.value;
    const attrIdOfInput = event.currentTarget.id;

    changeData(attrIdOfInput, newValue);
  };

  const updateAvatarAuthor = (image) => {

    changeData('photo', image);

  };

  const updateAvatarProject = (image) => {

    changeData('image', image);
    
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          onChange={handleChange}
          value={data.name}
        />
        <input
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          onChange={handleChange}
          value={data.slogan}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            placeholder="Repositorio"
            onChange={handleChange}
            value={data.repo}
          />
          <input
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            placeholder="Demo"
            onChange={handleChange}
            value={data.demo}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          onChange={handleChange}
          value={data.technologies}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
          onChange={handleChange}
          value={data.desc}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="autor"
          id="autor"
          placeholder="Nombre"
          onChange={handleChange}
          value={data.autor}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          placeholder="Trabajo"
          onChange={handleChange}
          value={data.job}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <GetAvatar
          text="Subir foto del proyecto"
          updateAvatar={updateAvatarProject}
        ></GetAvatar>

        <GetAvatar
          text="Subir foto de la autora"
          updateAvatar={updateAvatarAuthor}
        ></GetAvatar>

        <ButtonLarge text="Guardar proyecto" onSubmit={onSubmit} />

      </fieldset>
      {responseFetch !== "" && responseFetch.success && (
          <p className="result">
            Tu proyecto ha sido creado en la siguiente dirección:{" "}
            <a className="result--link" href={responseFetch.cardURL}>{responseFetch.cardURL}</a>
          </p>
        )}

        {responseFetch !== "" && !responseFetch.success && (
          <p className="result">
            Ha ocurrido un error:
            <p className="result--error">{responseFetch.error}</p>
          </p>
        )}
    </form>
  );
}

export default Form;
