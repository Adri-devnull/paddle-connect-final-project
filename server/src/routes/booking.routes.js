const express = require("express");
const bookingRoutes = express.Router();
const bookingController = require("../controllers/booking.controller");

// Obtener todas las reservas
bookingRoutes.get("/", bookingController.getAllBookings);

// Crear una nueva reserva
bookingRoutes.post("/", bookingController.createBooking);

// Actualizar un usuario
bookingRoutes.patch("/:id", bookingController.updateBooking);

// Actualizar un usuario
bookingRoutes.delete("/:id", bookingController.deleteBooking);

module.exports = bookingRoutes;
