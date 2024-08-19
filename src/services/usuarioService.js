import Usuario from "../models/usuarios.js";

class UsuarioService {
    constructor() {}

    async createUsuario(usuario) {
        return await Usuario.create(usuario);
    }

    async getUsuarioById(id) {
        return await Usuario.findByPk(id);
    }
}

export default new UsuarioService();
