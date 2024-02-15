const { mongoose } = require("mongoose");

const GameScheme = mongoose.Schema(
  {
    senderId: {
      type: String
    },
    invitedUserId: {
      type: String
    },
    location: {
      type: String
    },
    schedule: {
      type: String
    },
    message: {
      type: String,
      trim: true
    },
    accepted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    collection: "games"
  }
);

module.exports = GameScheme;
