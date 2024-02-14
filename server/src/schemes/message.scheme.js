const { mongoose } = require("mongoose");

const MessageScheme = mongoose.Schema(
  {
    id: {
      type: String
    },
    senderId: {
      type: String
    },
    average: {
      type: Number
    },
    message: {
      type: String,
      trim: true
    },
    read: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    collection: "messages"
  }
);

module.exports = MessageScheme;
