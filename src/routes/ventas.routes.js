import { Router } from 'express';
import { createVenta, getVentaById } from '../controllers/venta.controllers.js'
import { validarCreacionVenta } from '../validations/ventaValidations.js'
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

router.post('/ventas', validarCreacionVenta, validar, createVenta);
router.get('/ventas/:id', getVentaById);

export default router;
