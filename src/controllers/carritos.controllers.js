import CarritoService from '../services/carritoService.js'

export const createCarrito = async (req, res) => {
    try {
        const carrito = await CarritoService.createCarrito(req.body);
        res.status(201).json(carrito);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getCarritoByUsuarioId = async (req, res) => {
    try {
        const carritos = await CarritoService.getCarritoByUsuarioId(req.params.usuarioId);
        res.status(200).json(carritos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
