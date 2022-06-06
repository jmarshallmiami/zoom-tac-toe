const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { v4: uuidv4 } = require("uuid");

class GameId extends Model {}

GameId.init({
  gameId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
});

module.exports = GameId;
