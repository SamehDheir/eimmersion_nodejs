const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, createOrder);
router.get("/my-orders", authMiddleware, getUserOrders); 
router.get("/", authMiddleware, adminMiddleware, getAllOrders); 
router.put("/:orderId", authMiddleware, adminMiddleware, updateOrderStatus);

module.exports = router;
