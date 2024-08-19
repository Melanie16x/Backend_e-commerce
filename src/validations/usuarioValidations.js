import { body } from 'express-validator';

export const validarCreacionUsuario = [
  body('nombre').isString().withMessage('El nombre debe ser una cadena de texto.'),
  body('apellido').isString().withMessage('El apellido debe ser una cadena de texto.'),
  body('email').isEmail().withMessage('Debe ser un email válido.'),
  body('dni').isInt().withMessage('El dni debe estar conformado por números enteros.'),
  body('fechaNac').isDate()
];