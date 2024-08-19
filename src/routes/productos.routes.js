import { Router } from 'express';
import { createProducto, getProductoById } from '../controllers/productos.controllers.js'
import { validarCreacionProducto } from '../validations/productoValidations.js';
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

router.post('/productos', validarCreacionProducto, validar, createProducto);
router.get('/productos/:id', getProductoById);

export default router;
