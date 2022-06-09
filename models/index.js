const User = require("./User");
const GameId = require("./GameId");



User.hasOne(GameId);


module.exports = { User, GameId };
