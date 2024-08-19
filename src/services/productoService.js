import Producto from '../models/productos.js'

class ProductoService {
    async createProducto(producto) {
        return await Producto.create(producto);
    }

    async getProductoById(id) {
        return await Producto.findByPk(id);
    }
}

export default new ProductoService();
