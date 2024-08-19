import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../db/connection.js';
import Usuario from './usuarios.js';
import Vendedor from './vendedores.js';

class Venta extends Model {}

Venta.init({
  idVenta: {
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
  vendedorId: {
    type: DataTypes.INTEGER,
    references: {
        model: Vendedor,
        key: 'idVendedor',
      },
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalPrecio: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'venta'
});

Venta.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Venta.belongsTo(Vendedor, { foreignKey: 'vendedorId' });

export default Venta;
