const { mongoose } = require("mongoose");

const BookingScheme = mongoose.Schema(
  {
    id: {
      type: String,
      trim: true
    },
    scheduleStart: {
      type: String,
      required: true,
      trim: true
    },
    scheduleEnd: {
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
    },
    position: {
      type: String
    },
    level: {
      type: String
    }
  },
  {
    timestamps: true,
    collection: "bookings"
  }
);

module.exports = BookingScheme;
