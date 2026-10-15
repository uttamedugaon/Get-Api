const express = require("express");
const router = express.Router();

const orders = [
  { id: 101, item: "Laptop", amount: 50000 },
  { id: 102, item: "Mobile", amount: 15000 },
  { id: 103, item: "Tablet", amount: 25000 }
];

// GET /orders - fetch all orders
router.get("/", (req, res) => {
  res.json(orders);
});

// GET /orders/:id - fetch one order by ID
router.get("/:id", (req, res) => {
  const order = orders.find((entry) => entry.id === Number(req.params.id));
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
});

module.exports = router;
