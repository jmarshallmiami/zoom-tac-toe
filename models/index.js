const User = require("./User");
<<<<<<< HEAD
const GameId = require("./Gameid");
=======
const GameId = require("./GameId");
>>>>>>> 049bac5268769a2b73a92019f4453bc9a52d098b

User.hasMany(GameId, {
  foreignKey: "gameId",
});

GameId.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, GameId };
