const Project = require('../models/projectModel');

async function listProjects(req, res) {
    const projects = await Project.getAll();
    console.log(projects);
    res.json({ projects: projects });
    //res.render('index', { projects });
}

async function showProject(req, res) {
    const project = await Project.getById(Number(req.params.id));
    if (!project) return res.status(404).send('Proyecto no encontrado');
    console.log(project);
    res.render('show', { project });
}

function newProjectForm(req, res) {
    res.render('new');
}

async function createProject(req, res) {
    const data = req.body;
    const newProject = {
        nombre: data.nombre,
        descripcion: data.descripcion,
        tecnologias: data.tecnologias,
        imagen: data.imagen,
        github_url: data.github_url,
        demo_url: data.demo_url,
        autor: {
            nombre: data.autor_nombre,
            job: data.autor_job,
            foto: data.autor_foto,
            descripcion: data.autor_descripcion
        }
    };
    await Project.create(newProject);
    res.json({ success: true });
    //res.redirect('/projects');
}

module.exports = { listProjects, showProject, newProjectForm, createProject };
