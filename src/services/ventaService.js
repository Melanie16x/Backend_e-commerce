import Venta from "../models/ventas.js";

class VentaService {
    async createVenta(venta) {
        return await Venta.create(venta);
    }

    async getVentaById(id) {
        return await Venta.findByPk(id);
    }
}

export default new VentaService();
