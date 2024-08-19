import Vendedor from '../models/vendedores.js'

class VendedorService {
    async createVendedor(vendedor) {
        return await Vendedor.create(vendedor);
    }

    async getVendedorById(id) {
        return await Vendedor.findByPk(id);
    }
}

export default new VendedorService();
