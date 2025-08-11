-- Tabla de autores
CREATE TABLE autores (
    id INT PRIMARY KEY auto_increment,
    nombre VARCHAR(255) NOT NULL,
    job VARCHAR(255),
    foto TEXT,
    descripcion TEXT
);

-- Tabla de proyectos
CREATE TABLE proyectos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    tecnologias TEXT,  -- puedes almacenar como string separado por comas o usar una tabla intermedia si quieres normalizar
    imagen TEXT,
    github_url TEXT,
    demo_url TEXT,
    autor_id INT,
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);


INSERT INTO autores (nombre, job, foto, descripcion) VALUES
('Laura Gómez', 'Full Stack Developer', 'https://example.com/fotos/laura.jpg', 'Apasionada del desarrollo web y el diseño UX.'),
('Carlos Pérez', 'Frontend Developer', 'https://example.com/fotos/carlos.jpg', 'Desarrollador con experiencia en React y accesibilidad.'),
('Ana Torres', 'Backend Developer', 'https://example.com/fotos/ana.jpg', 'Especialista en Node.js y bases de datos relacionales.');


INSERT INTO proyectos (nombre, descripcion, tecnologias, imagen, github_url, demo_url, autor_id) VALUES
('Galería de Imágenes', 
 'Aplicación que permite subir, visualizar y eliminar imágenes.', 
 'React, Node.js, MongoDB', 
 'https://example.com/img/galeria.png', 
 'https://github.com/lauragomez/galeria-imagenes', 
 'https://galeria-imagenes-demo.netlify.app', 
 1),

('ToDo App', 
 'Lista de tareas con filtros y almacenamiento local.', 
 'HTML, CSS, JavaScript', 
 'https://example.com/img/todo.png', 
 'https://github.com/carlosperez/todo-app', 
 'https://carlosperez-todo.netlify.app', 
 2),

('API de Clima', 
 'API REST que proporciona información del clima por ciudad.', 
 'Node.js, Express, OpenWeatherMap API', 
 'https://example.com/img/clima.png', 
 'https://github.com/anatorres/api-clima', 
 'https://api-clima.onrender.com', 
 3);
