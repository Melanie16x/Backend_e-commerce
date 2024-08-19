import { Router } from 'express';
import { createCarrito, getCarritoByUsuarioId } from '../controllers/carritos.controllers.js'
import { validarAgregarProductoAlCarrito } from '../validations/carritoValidations.js';
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

router.post('/carrito', validarAgregarProductoAlCarrito, validar, createCarrito);
router.get('/carrito/:usuarioId', getCarritoByUsuarioId);

export default router;
