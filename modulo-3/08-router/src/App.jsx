import { Routes, Route } from "react-router";
import { NavLink, Link } from "react-router";

import Home from "./components/Home";
import Contact from "./components/Contact";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        {" | "}
        <NavLink to="/contact">Contacto</NavLink>
        {" | "}
        <NavLink to="/users" >Usuarios</NavLink>
      </nav>
      <hr />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
