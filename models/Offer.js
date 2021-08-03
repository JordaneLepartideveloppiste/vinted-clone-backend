const mongoose = require("mongoose");

const Offer = mongoose.model("Offer", {
  product_details: Array,
  product_name: String,
  product_description: String,
  product_price: Number,
  product_image: { type: mongoose.Schema.Types.Mixed, default: {} },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Offer;
