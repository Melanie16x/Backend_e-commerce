import { body} from 'express-validator';

export const validarCreacionProducto = [
  body('nombre').isString().withMessage('El nombre del producto es requerido.'),
  body('precio').isFloat({ min: 0 }).withMessage('El precio debe ser un número positivo.'),
  body('stock').isInt({ min: 0 }).withMessage('El stock debe ser un número entero positivo.'),
  body('fechaVencimiento').isDate(),
  body('ventaId').isInt().withMessage('El ID de la venta debe ser un número entero.')
];
