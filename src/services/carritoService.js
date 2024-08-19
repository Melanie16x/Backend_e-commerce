import Carrito from '../models/carritos.js'

class CarritoService {
    async createCarrito(data) {
        return await Carrito.create(data);
    }

    async getCarritoByUsuarioId(usuarioId) {
        return await Carrito.findAll({ where: { usuarioId } });
    }
}

export default new CarritoService();
