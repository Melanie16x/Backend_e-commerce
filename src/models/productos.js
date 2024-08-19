import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../db/connection.js';
import Venta from './ventas.js';

class Producto extends Model {}

Producto.init({
  idProducto: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ventaId: {
    type: DataTypes.INTEGER,
    references: {
        model: Venta,
        key: 'idVenta',
      },
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaVencimiento: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'producto'
});

Producto.belongsTo(Venta, { foreignKey: 'ventaId' });

export default Producto;
