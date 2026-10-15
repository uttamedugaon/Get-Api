const express = require("express");
const router = express.Router();

const products = [
  { id: 11, name: "Mouse", price: 800 },
  { id: 12, name: "Keyboard", price: 1200 },
  { id: 13, name: "Monitor", price: 7500 }
];

// GET /products - fetch all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET /products/:id - fetch one product by ID
router.get("/:id", (req, res) => {
  const product = products.find((entry) => entry.id === Number(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

module.exports = router;
