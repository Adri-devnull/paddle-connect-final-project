const { v4 } = require("uuid");
const BookingModel = require("../models/booking.model");
const UserModel = require("../models/user.model");

const bookingController = {};

// Obtener todas las reservas de partidas
bookingController.getAllBookings = async (req, res) => {
  try {
    const allBookings = await BookingModel.find();
    return res.status(200).send(allBookings);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Obtener una reserva por id
bookingController.getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await BookingModel.find({ id });
    if (!booking) return res.status(409).send({ error: "User not Exists" });
    return res.status(200).send(booking);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Crear una nueva reserva de partida
bookingController.createBooking = async (req, res) => {
  const { scheduleStart, scheduleEnd, location, message } = req.body;
  const { id } = req.params;
  if (!scheduleStart || !location || !scheduleEnd)
    return res.status(400).send({ error: "Bad request." + err });

  try {
    const userInfo = await UserModel.findById({ _id: id });
    const userPosition = userInfo.position;
    const userLevel = userInfo.level;
    const newBooking = new BookingModel({
      id,
      scheduleStart,
      scheduleEnd,
      location,
      message,
      position: userPosition,
      level: userLevel
    });

    await newBooking.save();

    await UserModel.updateOne({ _id: id }, { $set: { booked: true } });

    const allBookings = await BookingModel.find();
    return res.status(200).send(allBookings);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Actualizar una reserva
bookingController.updateBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await BookingModel.findById(id);

    if (!booking) {
      return res.status(409).send({ error: "Booking not exists" });
    }

    await BookingModel.updateOne({ _id: id }, { $set: { ...req.body } });

    const allBookings = await BookingModel.find();
    return res.status(200).send(allBookings);
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

// Eliminar reserva de partida
bookingController.deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await BookingModel.find({ id });

    if (!booking) return res.status(409).send({ error: "Booking not exists" });

    await BookingModel.deleteOne({ id });
    await UserModel.updateOne({ _id: id }, { $set: { booked: false } });
    const userUpdated = await UserModel.find({ id });
    const allBookings = await BookingModel.find();
    return res
      .status(200)
      .send({ bookings: allBookings, userData: userUpdated });
  } catch (err) {
    return res.status(500).send({ error: "Error reading database." + err });
  }
};

module.exports = bookingController;
