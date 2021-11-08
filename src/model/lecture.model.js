const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    batch: { type: String },
    instructor: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = new mongoose.model("lecture", lectureSchema);
