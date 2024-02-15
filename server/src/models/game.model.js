const mongoose = require("mongoose");
const GameScheme = require("../schemes/game.scheme");

const GameModel = mongoose.model("Game", GameScheme);

module.exports = GameModel;
