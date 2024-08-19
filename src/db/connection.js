import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize(
  process.env.DB_NAME || 'e-commerce',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.PORT || 3306, 
  }
);

export const conectarDB = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Base de Datos Conectada");
  } catch (error) {
    console.log("Error de la base : " + error);
  }
};

export { sequelize, DataTypes };