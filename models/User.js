const { Schema, Types } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    // trimmed
    // unique
  },
  email: {
    type: String,
    required: true,
    // unique
    // must match
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
