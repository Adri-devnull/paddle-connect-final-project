const mongoose = require("mongoose");
const MessageScheme = require("../schemes/message.scheme");

const MessageModel = mongoose.model("Message", MessageScheme);

module.exports = MessageModel;
