const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "Raman", email: "raman@gmail.com" },
  { id: 2, name: "Ajay", email: "ajay@gmail.com" },
  { id: 3, name: "Ramanjay", email: "ramanjay@gmail.com" }
];

// GET /users - fetch all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:name - fetch user(s) by name (case-insensitive)
router.get("/:name", (req, res) => {
  const matchingUsers = users.filter(
    (entry) => entry.name.toLowerCase() === req.params.name.toLowerCase()
  );
  if (matchingUsers.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  // Return an array because more than one user may match the same name.
  res.json(matchingUsers);
});

module.exports = router;
