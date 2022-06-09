const User = require("./User");
const GameId = require("./GameId");

User.hasMany(GameId, {
  foreignKey: "gameId",
});

GameId.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, GameId };
