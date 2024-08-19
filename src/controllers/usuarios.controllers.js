import UsuarioService from '../services/usuarioService.js'

export const createUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioService.createUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getUsuarioById = async (req, res) => {
    try {
        const usuario = await UsuarioService.getUsuarioById(req.params.id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}