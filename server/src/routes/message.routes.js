const express = require("express");
const messageController = require("../controllers/message.controller");
const messageRoutes = express.Router();

// Obtener todas las reservas
messageRoutes.get("/", messageController.getAllMessages);

// Crear una nueva reserva
messageRoutes.post("/:id", messageController.createMessage);

module.exports = messageRoutes;
