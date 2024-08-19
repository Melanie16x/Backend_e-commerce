import express from "express";
import cors from 'cors';
import morgan from "morgan";
import { DB_PORT } from '../config/config.js';
import { conectarDB } from "../db/connection.js";
import productoRoutes from '../routes/productos.routes.js';
import usuarioRoutes from '../routes/usuarios.routes.js';
import vendedorRoutes from '../routes/vendedores.routes.js';
import ventaRoutes from '../routes/ventas.routes.js';
import carritoRoutes from '../routes/carritos.routes.js';

class Server {

    constructor() {
        this.app = express();
        this.port = DB_PORT;

        this.conectDB();

        this.middlewares();
        this.routes();
    }

    async conectDB(){
        await conectarDB()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api', productoRoutes)
        this.app.use('/api', usuarioRoutes)
        this.app.use('/api', vendedorRoutes)
        this.app.use('/api', ventaRoutes)
        this.app.use('/api', carritoRoutes)
    }

    listen(){
        this.app.listen(3000, () => console.log(`Server on http://localhost:${this.port}`))
    }

}

export default Server;