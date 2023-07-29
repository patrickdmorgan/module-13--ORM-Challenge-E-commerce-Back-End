require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce_db', 'root', 'password', {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
