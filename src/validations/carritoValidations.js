import { body } from 'express-validator';

export const validarAgregarProductoAlCarrito = [
  body('usuarioId').isInt().withMessage('El ID del usuario debe ser un número entero.'),
  body('productoId').isInt().withMessage('El ID del producto debe ser un número entero.'),
  body('cantidad').isInt({ min: 1 }).withMessage('La cantidad debe ser al menos 1.')
];
