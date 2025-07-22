const express = require('express');
const cors = require('cors');
const picturesJson = require('./data/pictures.json');
const path = require('path');

const server = express();
server.use(cors());
server.use(express.json());

const port = 3000;
server.listen(port, () => {
  console.log(`Server ready at: <http://localhost:${port}>`)
});

// Resumen de rutas/Paths summary:
//
// - /               (texto)
// - /api/pictures/  (API)
// - /contacto.html  (fichero estático)
// - /index.html          |
// - /css/main.css        | express.static('/FRONTEND')
// - /js/main.js          |
// - /images/Museum...jpg |
// - /*              (fichero estático)

server.get('/', (req, res)=>{
  // req: La petición HTTP  (request)
  // res: La respuesta HTTP (response)

  res.status(200).send('Holis Adalabers!');
});

server.get('/api/pictures/', (req, res) => {
  
  res.json(picturesJson);
});


/* FICHEROS */

server.get('/contacto.html', (req, res)=>{

  res.sendFile(path.join(__dirname, './pages/contact.html'));
});

/*
server.get('/index.html', (req, res)=>{

  res.sendFile(path.join(__dirname, './FRONTEND/index.html'));
});
*/
/* ESTÁTICOS */

server.use(express.static(path.join(__dirname, './FRONTEND')));

server.use(express.static(path.join(__dirname, './ruta/para/imagenes')));


/* ELSE PAG-404 */

server.get('*', (req, res) => {

  res.status(404).sendFile(path.join(__dirname, './pages/error404.html'));
});