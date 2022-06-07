const { Sequelize, Model, DataTypes } = require("sequelize");

class GameId extends Model { }

GameId.init({
    gameId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    player1_id: {
        type: Sequelize.DataTypes.String(10),
        unique: true
    },
    player2_id: {
        type: Sequelize.DataTypes.String(10),
        unique: true
    },
    player1_turn: {
        type: Sequelize.DataTypes.Boolean,
        allowNull: false,
        default: true
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "gameid"
});

module.exports = GameId;
