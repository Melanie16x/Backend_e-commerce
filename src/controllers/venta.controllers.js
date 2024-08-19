import VentaService from "../services/ventaService.js";

export const createVenta = async (req, res) => {
    try {
        const Venta = await VentaService.createVenta(req.body);
        res.status(201).json(Venta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getVentaById = async (req, res) => {
    try {
        const Venta = await VentaService.getVentaById(req.params.id);
        if (Venta) {
            res.status(200).json(Venta);
        } else {
            res.status(404).json({ message: 'Venta no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}