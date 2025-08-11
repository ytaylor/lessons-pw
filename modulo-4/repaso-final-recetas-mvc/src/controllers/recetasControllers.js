const recetasModel = require('../models/recetasModel');

async function getAll(req, res) {
  try {
    const rows = await recetasModel.getAll();
    res.json({ info: { count: rows.length }, results: rows });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las recetas' });
  }
}

async function getById(req, res) {
  try {
    const receta = await recetasModel.getById(req.params.id);
    if (!receta) {
      return res.status(404).json({ error: 'Receta no encontrada' });
    }
    res.json(receta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la receta' });
  }
}

async function create(req, res) {
  const { nombre, ingredientes, instrucciones } = req.body;
  if (!nombre || !ingredientes || !instrucciones) {
    return res.status(400).json({
      success: false,
      message: 'Faltan campos obligatorios: nombre, ingredientes o instrucciones'
    });
  }
  try {
    const id = await recetasModel.create({ nombre, ingredientes, instrucciones });
    res.status(201).json({ success: true, id });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear la receta' });
  }
}

async function update(req, res) {
  const { nombre, ingredientes, instrucciones } = req.body;
  if (!nombre || !ingredientes || !instrucciones) {
    return res.status(400).json({
      success: false,
      message: 'Faltan campos obligatorios: nombre, ingredientes o instrucciones'
    });
  }
  try {
    const affectedRows = await recetasModel.update(req.params.id, { nombre, ingredientes, instrucciones });
    if (affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Receta no encontrada' });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al actualizar la receta' });
  }
}

async function remove(req, res) {
  try {
    const affectedRows = await recetasModel.remove(req.params.id);
    if (affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Receta no encontrada' });
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al eliminar la receta' });
  }
}

module.exports = { getAll, getById, create, update, remove };