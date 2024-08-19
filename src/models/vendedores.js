import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../db/connection.js';

class Vendedor extends Model {}

Vendedor.init({
  idVendedor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fechaNac: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'vendedor'
});

export default Vendedor;
