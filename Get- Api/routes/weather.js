const express = require("express");
const router = express.Router();

const weather = [
  { city: "Delhi", temp: 30, condition: "Sunny" },
  { city: "Kolkata", temp: 28, condition: "Cloudy" }
];

router.get("/", (req, res) => {
  res.json(weather);
});

module.exports = router;
