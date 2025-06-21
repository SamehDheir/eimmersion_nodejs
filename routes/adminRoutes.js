const express = require("express");
const router = express.Router();

const {
  getAllPromoCodes,
  createPromoCode,
  updatePromoCode,
  deletePromoCode,
} = require("../controllers/adminPromoController");

const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/adminCategoryController");

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/adminProductController");

const {
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/adminOrderController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

// --------- Categories ---------
router.get("/categories", authMiddleware, adminMiddleware, getAllCategories);
router.post("/categories", authMiddleware, adminMiddleware, createCategory);
router.put("/categories/:id", authMiddleware, adminMiddleware, updateCategory);
router.delete("/categories/:id", authMiddleware, adminMiddleware, deleteCategory);

// --------- Products ---------
router.get("/products", authMiddleware, adminMiddleware, getAllProducts);
router.post("/products", authMiddleware, adminMiddleware, createProduct);
router.put("/products/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/products/:id", authMiddleware, adminMiddleware, deleteProduct);

// --------- Orders ---------
router.get("/orders", authMiddleware, adminMiddleware, getAllOrders);
router.put("/orders/:id/status", authMiddleware, adminMiddleware, updateOrderStatus);

// --------- Promo Code ---------
router.get("/", authMiddleware, adminMiddleware, getAllPromoCodes);
router.post("/", authMiddleware, adminMiddleware, createPromoCode);
router.put("/:id", authMiddleware, adminMiddleware, updatePromoCode);
router.delete("/:id", authMiddleware, adminMiddleware, deletePromoCode);

module.exports = router;
