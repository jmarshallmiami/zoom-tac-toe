const Sequelize = require("sequelize");

const sequelize = new Sequelize("gamepage_db", {
  host: "localhost",
  dialect: "mysql",
  port: 3100,
});

module.exports = sequelize;
