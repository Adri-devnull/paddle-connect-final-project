const express = require("express");
const gameController = require("../controllers/game.controller");

const gameRoutes = express.Router();

// Obtener todas las partidas
gameRoutes.get("/", gameController.getAllGames);

// Obtener las partidas por id del usuario
gameRoutes.get("/:invitedUserId", gameController.getGameInvitationById);

// Crear un nueva invitacion de partida
gameRoutes.post("/:senderUserId/:invitedUserId", gameController.createGame);

module.exports = gameRoutes;
