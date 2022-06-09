const User = require("./User");
const GameId = require("./GameId");

User.(GameId, {
  foreignKey: "player1_id",
});

GameId.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, GameId };
