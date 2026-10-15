const express = require("express");
const router = express.Router();

const movies = [
  { id: 1, name: "Inception", rating: 9 },
  { id: 2, name: "Interstellar", rating: 8 }
];

router.get("/", (req, res) => {
  res.json(movies);
});

module.exports = router;
