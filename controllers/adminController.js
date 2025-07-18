const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const Order = require("../models/orderModel");
const PromoCode = require("../models/PromoCodeModel");

// ------------ Categories ------------

exports.getAllCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.createCategory = async (req, res) => {
  const { name, image } = req.body;
  const category = await Category.create({ name, image });
  res.status(201).json(category);
};

exports.updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(category);
};

exports.deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Category deleted" });
};

// ------------ Products ------------

exports.getAllProducts = async (req, res) => {
  const products = await Product.find().populate("category");
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

// ------------ Orders ------------

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user").populate("items.product");
  res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  order.status = status;
  await order.save();
  res.json(order);
};

// ------------ Promo Code ------------

exports.getAllPromoCodes = async (req, res) => {
  const codes = await PromoCode.find();
  res.json(codes);
};

exports.createPromoCode = async (req, res) => {
  const { code, discountType, discountValue, expiresAt, usageLimit } = req.body;
  try {
    const newCode = await PromoCode.create({
      code,
      discountType,
      discountValue,
      expiresAt,
      usageLimit,
    });
    res.status(201).json(newCode);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePromoCode = async (req, res) => {
  try {
    const updated = await PromoCode.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePromoCode = async (req, res) => {
  await PromoCode.findByIdAndDelete(req.params.id);
  res.json({ message: "Promo code deleted" });
};