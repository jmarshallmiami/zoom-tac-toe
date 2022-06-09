const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GameId extends Model {}

<<<<<<< HEAD
GameId.init({
    gameId: {
        type: DataTypes.UUID(10),
        allowNull: false,
    },
    player1_id: {
        type: Sequelize.DataTypes.STRING,
        unique: true
        
    },
    player2_id: {
        type: Sequelize.DataTypes.STRING,
        unique: true
    },
    player1_turn: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        default: true
    },
},
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamp: false,
        modelName: "gameid"
    });


=======
GameId.init(
  {
    gameroomName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
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
    timestamps: false,
    modelName: "gameid",
  }
);
>>>>>>> 049bac5268769a2b73a92019f4453bc9a52d098b

module.exports = GameId;
