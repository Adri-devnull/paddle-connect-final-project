const express = require("express");
const messageController = require("../controllers/message.controller");
const messageRoutes = express.Router();

// Obtener todos los mensajes
messageRoutes.get("/", messageController.getAllMessages);

// Crear un nuevo mensaje
messageRoutes.post("/:id", messageController.createMessage);

module.exports = messageRoutes;
