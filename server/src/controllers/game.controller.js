const { v4 } = require("uuid");
const GameModel = require("../models/game.model");

const Gamecontroller = {};

// Obtener todas las partidas
Gamecontroller.getAllGames = async (req, res) => {
  try {
    const allGames = await GameModel.find();
    return res.status(200).send(allGames);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Crear una nueva invitacion de partida
Gamecontroller.createGame = async (req, res) => {
  const { id } = req.params;

  const { invitedUserId, location, schedule, message } = req.body;
  if (!invitedUserId || !location || !schedule)
    return res.status(400).send({ error: "Bad request." + err });

  try {
    const newGame = new GameModel({
      senderId: id,
      invitedUserId,
      location,
      schedule,
      message
    });

    await newGame.save();

    const allGames = await GameModel.find();
    return res.status(200).send(allGames);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Eliminar una invitacion de partida
// Gamecontroller.deleteGame = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await UserModel.findById(id);

//     if (!user) return res.status(409).send({ error: "User not Exists" });

//     await UserModel.deleteOne({ _id: id });

//     const allUsers = await UserModel.find();
//     return res.status(200).send(allUsers);
//   } catch (err) {
//     return res.status(500).send({ error: "Error reading database." + err });
//   }
// };

module.exports = Gamecontroller;
