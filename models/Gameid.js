const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GameId extends Model {}

GameId.init(
  {
    gameroomName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    // player1_id: {
    //   type: Sequelize.DataTypes.STRING,
    //   unique: true,
    // },
    // player2_id: {
    //   type: Sequelize.DataTypes.STRING,
    //   unique: true,
    // },
    // player1_turn: {
    //   type: Sequelize.DataTypes.BOOLEAN,
    //   allowNull: false,
    //   default: true,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "gameid",
  }
);

module.exports = GameId;
