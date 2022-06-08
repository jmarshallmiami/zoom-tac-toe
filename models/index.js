const User = require("./user");
const GameId = require("./gameid");

User.hasMany(GameId, {
  foreignKey: "id",
});

GameId.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, GameId };
