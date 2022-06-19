const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    img: [{ type: String }],
    portrait: { type: String },
    releasedate: { type: String },
    publisher: { type: String },
    tags: [{ type: String }],
    categories: [{ type: String }],
    about: { type: String },
    languages: { type: String },
    genre: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", GameSchema);
