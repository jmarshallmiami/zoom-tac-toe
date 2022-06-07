const { Sequelize, Model, DataTypes } = require("sequelize");

class GameId extends Model {}

GameId.init({
  gameId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  player1_id:{
    type: Sequelize.DataTypes.String(10)
  },
  player2_id:{
    type: Sequelize.DataTypes.String(10)
  },
},
{
  freezeTableName: true,
  
});

module.exports = GameId;
