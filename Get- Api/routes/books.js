const express = require("express");
const router = express.Router();

const books = [
  { id: 201, title: "Swift Basics", author: "Apple" },
  { id: 202, title: "Node.js Mastery", author: "Ryan Dahl" }
];

router.get("/", (req, res) => {
  res.json(books);
});

module.exports = router;
