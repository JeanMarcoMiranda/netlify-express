const mongoose = require("mongoose");

const FurnitureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },

    img: [{ type: String }],
    discount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Furniture", FurnitureSchema);
