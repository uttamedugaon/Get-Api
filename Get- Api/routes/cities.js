const express = require("express");
const router = express.Router();

const cities = [
  { id: 1, name: "Delhi", population: "2 Cr" },
  { id: 2, name: "Mumbai", population: "1.8 Cr" }
];

router.get("/", (req, res) => {
  res.json(cities);
});

module.exports = router;
