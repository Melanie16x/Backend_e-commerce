import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../db/connection.js';
import Usuario from './usuarios.js';
import Producto from './productos.js';

class Carrito extends Model {}

Carrito.init({
  idCarrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
        model: Usuario,
        key: 'idUsuario',
      },
  },
  productoId: {
    type: DataTypes.INTEGER,
    references: {
        model: Producto,
        key: 'idProducto',
      },
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'carrito'
});

Carrito.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Carrito.belongsTo(Producto, { foreignKey: 'productoId' });

export default Carrito;
