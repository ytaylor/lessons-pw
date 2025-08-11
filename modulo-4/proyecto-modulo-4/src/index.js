const express = require('express');
const cors = require('cors');
require('dotenv').config();

const projectRoutes = require('./routes/projectRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Configuración
app.set('view engine', 'ejs');
app.use(express.json({
  limit: "100mb"
}));
app.use(express.json());

app.use(cors());

// Rutas
app.use('/projects', projectRoutes);
app.use('/', usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


//Servidor de estáticos para css y aplicación para publicarla en nuestro servidor
app.use(express.static('./src/public-react'));
app.use(express.static('./src/public-css'));