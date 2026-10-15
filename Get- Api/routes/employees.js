const express = require("express");
const router = express.Router();

const employees = [
  { id: 1, name: "Raman", dept: "HR" },
  { id: 2, name: "Ajay", dept: "IT" },
  { id: 3, name: "Neha", dept: "Finance" }
];

// GET /employees - fetch all employees
router.get("/", (req, res) => {
  res.json(employees);
});

// GET /employees/:id - fetch one employee by ID
router.get("/:id", (req, res) => {
  const employee = employees.find((entry) => entry.id === Number(req.params.id));
  if (!employee) return res.status(404).json({ message: "Employee not found" });
  res.json(employee);
});

module.exports = router;
