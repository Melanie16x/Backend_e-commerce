import { Router } from 'express';
import { createVendedor, getVendedorById } from '../controllers/vendedores.controllers.js'
import { validarCreacionVendedor } from '../validations/vendedorValidations.js'
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

router.post('/vendedores', validarCreacionVendedor, validar, createVendedor);
router.get('/vendedores/:id', getVendedorById);

export default router;
