const User = require("./User");
const GameId = require("./Gameid");

User.hasMany(GameId, {
  foreignKey: "gameId",
});

GameId.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, GameId };
