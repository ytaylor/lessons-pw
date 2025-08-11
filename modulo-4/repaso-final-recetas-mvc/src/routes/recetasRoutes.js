const express = require('express');
const router = express.Router();
const recetasController = require('../controllers/recetasController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, recetasController.getAll);
router.get('/:id', authMiddleware, recetasController.getById);
router.post('/', authMiddleware, recetasController.create);
router.put('/:id', authMiddleware, recetasController.update);
router.delete('/:id', authMiddleware, recetasController.remove);

module.exports = router;