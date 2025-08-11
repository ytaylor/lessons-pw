const usuariosModel = require('../models/usuariosModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registro(req, res) {
    const { user, pass } = req.body;
    if (!user || !pass) {
        return res.status(400).json({ success: false, error: 'Faltan campos obligatorios: user o pass' });
    }
    try {
        const existing = await usuariosModel.findByEmail(user);
        if (existing) {
            return res.status(409).json({ success: false, error: 'El usuario ya existe' });
        }
        const hashedPassword = await bcrypt.hash(pass, 10);
        const id = await usuariosModel.create({ email: user, nombre: user, password: hashedPassword });
        const token = jwt.sign({ id, email: user }, process.env.JWT_SECRET || 'secreto', { expiresIn: '1d' });
        res.status(201).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error al registrar el usuario' });
    }
}

async function login(req, res) {
    const { user, pass } = req.body;
    if (!user || !pass) {
        return res.status(400).json({ success: false, error: 'Faltan campos obligatorios: user o pass' });
    }
    try {
        const usuario = await usuariosModel.findByEmail(user);
        if (!usuario) {
            return res.status(401).json({ success: false, error: 'Usuario o contraseña incorrectos' });
        }
        const passwordOk = await bcrypt.compare(pass, usuario.password);
        if (!passwordOk) {
            return res.status(401).json({ success: false, error: 'Usuario o contraseña incorrectos' });
        }
        const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET || 'secreto', { expiresIn: '1d' });
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error al iniciar sesión' });
    }
}

module.exports = { registro, login };