const express = require("express");
const Gamecontroller = require("../controllers/game.controller");

const gameRoutes = express.Router();

// Obtener todas las partidas
gameRoutes.get("/", Gamecontroller.getAllGames);

// Crear un nueva invitacion de partida
gameRoutes.post("/:id", Gamecontroller.createGame);

module.exports = gameRoutes;
