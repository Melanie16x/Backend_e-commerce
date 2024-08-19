import VendedorService from "../services/vendedorService.js";

export const createVendedor = async (req, res) => {
    try {
        const vendedor = await VendedorService.createVendedor(req.body);
        res.status(201).json(vendedor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getVendedorById = async (req, res) => {
    try {
        const vendedor = await VendedorService.getVendedorById(req.params.id);
        if (vendedor) {
            res.status(200).json(vendedor);
        } else {
            res.status(404).json({ message: 'Vendedor no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
