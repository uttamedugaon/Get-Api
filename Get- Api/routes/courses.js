const express = require("express");
const router = express.Router();

const courses = [
  { id: 101, course: "Web Development", duration: "3 Months" },
  { id: 102, course: "App Development", duration: "4 Months" }
];

router.get("/", (req, res) => {
  res.json(courses);
});

module.exports = router;
