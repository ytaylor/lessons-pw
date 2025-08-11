const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');

router.get('/list', controller.listProjects);
router.get('/', controller.newProjectForm);
router.post('/add', controller.createProject);
router.get('/find/:id', controller.showProject);

module.exports = router;
