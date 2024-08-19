import ProductoService from '../services/productoService.js'

export const createProducto = async (req, res) => {
    try {
        const producto = await ProductoService.createProducto(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getProductoById = async (req, res) => {
    try {
        const producto = await ProductoService.getProductoById(req.params.id);
        if (producto) {
            res.status(200).json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

