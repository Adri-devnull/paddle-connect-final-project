const { mongoose } = require("mongoose");

const MessageScheme = mongoose.Schema(
  {
    sender: {
      type: Number,
      trim: true
    },
    average: {
      type: Number
    },
    message: {
      type: String,
      trim: true
    },
    read: {
      type: Boolean
    }
  },
  {
    timestamps: true,
    collection: "messages"
  }
);

module.exports = MessageScheme;
