import { Router } from 'express';
import { createUsuario, getUsuarioById } from '../controllers/usuarios.controllers.js';
import { validarCreacionUsuario } from '../validations/usuarioValidations.js';
import { validationResult } from 'express-validator';

// Middleware para manejar errores de validacion
const validar = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors. isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

const router = Router();

router.post('/usuarios', validarCreacionUsuario, validar, createUsuario);
router.get('/usuarios/:id', getUsuarioById);

export default router;