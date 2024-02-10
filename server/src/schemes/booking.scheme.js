const { mongoose } = require("mongoose");

const BookingScheme = mongoose.Schema(
  {
    schedule: {
      type: String,
      required: true,
      trim: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true,
    collection: "bookings"
  }
);

module.exports = BookingScheme;
