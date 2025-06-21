const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const admin = require("../middlewares/adminMiddleware");

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

// --------- Categories ---------
router.get("/categories", auth, admin, getAllCategories);
router.post("/categories", auth, admin, createCategory);
router.put("/categories/:id", auth, admin, updateCategory);
router.delete("/categories/:id", auth, admin, deleteCategory);

// --------- Products ---------
router.get("/products", auth, admin, getAllProducts);
router.post("/products", auth, admin, createProduct);
router.put("/products/:id", auth, admin, updateProduct);
router.delete("/products/:id", auth, admin, deleteProduct);

// --------- Orders ---------
router.get("/orders", auth, admin, getAllOrders);
router.put("/orders/:id/status", auth, admin, updateOrderStatus);

module.exports = router;
