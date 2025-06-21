const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { createStripeSession } = require("../controllers/paymentController");

router.post("/create-checkout-session", auth, createStripeSession);

module.exports = router;
