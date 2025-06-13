// src/components/App.jsx
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (ev) => {
    setNewTask(ev.target.value);
  };

  const handleAddTask = (ev) => {
    ev.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
  };

  return (
    <div className="app">
      <h1>Lista de tareas</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={newTask}
          onChange={handleInputChange}
        />
        <button>Añadir</button>
      </form>

      <section>
        <h2>Tareas:</h2>
        {tasks.length === 0 ? (
          <p>No tienes tareas pendientes 😊</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default App;
