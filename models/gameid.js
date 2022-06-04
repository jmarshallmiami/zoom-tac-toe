const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GameId extends Model {}

GameId.init({
  gameId: {
    type: DataTypes.STRING,
  },
});

module.exports = GameId;
