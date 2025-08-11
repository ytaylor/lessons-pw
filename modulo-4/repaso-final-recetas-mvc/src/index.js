const express = require('express');
const cors = require('cors');
require('dotenv').config();

const recetasRoutes = require('./routes/recetasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/recetas', recetasRoutes);
app.use('/', usuariosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});