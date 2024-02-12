const express = require("express");
const bookingRoutes = express.Router();
const bookingController = require("../controllers/booking.controller");

// Obtener todas las reservas
bookingRoutes.get("/", bookingController.getAllBookings);

// Crear una nueva reserva
bookingRoutes.post("/:id", bookingController.createBooking);

// Actualizar una reserva
bookingRoutes.patch("/:id", bookingController.updateBooking);

// Borrar una reserva
bookingRoutes.delete("/:id", bookingController.deleteBooking);

module.exports = bookingRoutes;
