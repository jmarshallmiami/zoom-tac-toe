const User = require("./user");
const Game = require("./game_id");

User.hasMany(Game, {
  foreignKey: "id",
});

Game.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, Game };
