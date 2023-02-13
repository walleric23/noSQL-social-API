const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    // between 1-280
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [],
});
