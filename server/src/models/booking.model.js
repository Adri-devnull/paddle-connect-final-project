const mongoose = require("mongoose");
const BookingScheme = require("../schemes/booking.scheme");

const BookingModel = mongoose.model("Booking", BookingScheme);

module.exports = BookingModel;
