const { v4 } = require("uuid");
const MessageModel = require("../models/message.model");

const messageController = {};

// Obtener todos los mensajes
messageController.getAllMessages = async (req, res) => {
  try {
    const allMessages = await MessageModel.find();
    return res.status(200).send(allMessages);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Crear un nuevo mensaje
messageController.createMessage = async (req, res) => {
  const { message, average } = req.body;
  if (!message) return res.status(400).send({ error: "Bad request." + err });

  try {
    const newMessage = new MessageModel({
      message,
      average
    });

    await newMessage.save();

    const allMessages = await MessageModel.find();
    return res.status(200).send(allMessages);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

module.exports = messageController;
