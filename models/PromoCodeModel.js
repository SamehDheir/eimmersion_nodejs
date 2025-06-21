const mongoose = require("mongoose");

const promoCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
  },
  discountType: {
    type: String,
    enum: ["percentage", "fixed"],
    required: true,
  },
  discountValue: {
    type: Number,
    required: true,
  },
  expiresAt: Date,
  usageLimit: Number,
  usedCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("PromoCode", promoCodeSchema);
