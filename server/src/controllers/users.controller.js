const { v4 } = require("uuid");
const UserModel = require("../models/user.model");

const controller = {};

// Obtener todos los usuarios
controller.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Obtener usuario por id
controller.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: "User not Exists" });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Crear un usuario nuevo
controller.createUser = async (req, res) => {
  const {
    name,
    username,
    email,
    password,
    active,
    gender,
    img,
    position,
    level
  } = req.body;
  if (!name || !email || !username || !password)
    return res.status(400).send({ error: "Bad request." + err });

  try {
    const newUser = new UserModel({
      name,
      username,
      email,
      password,
      active,
      gender,
      img,
      position,
      level
    });

    await newUser.save();

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Actualizar un usuario
controller.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(409).send({ error: "User not Exists" });
    }

    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });

    const userUpdated = await UserModel.findById(id);
    return res.status(200).send(userUpdated);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Eliminar usuario
controller.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(409).send({ error: "User not Exists" });

    await UserModel.deleteOne({ id: id });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

module.exports = controller;
