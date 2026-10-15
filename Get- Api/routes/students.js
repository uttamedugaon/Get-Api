const express = require("express");
const router = express.Router();

const students = [
  { roll: 101, name: "Ajay", marks: 88 },
  { roll: 102, name: "Raman", marks: 76 },
  { roll: 103, name: "Amu", marks: 92 }
];

// GET /students - fetch all students
router.get("/", (req, res) => {
  res.json(students);
});

// GET /students/:name - fetch student(s) by name (case-insensitive)
router.get("/:name", (req, res) => {
  const matchingStudents = students.filter(
    (entry) => entry.name.toLowerCase() === req.params.name.toLowerCase()
  );
  if (matchingStudents.length === 0) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(matchingStudents);
});

module.exports = router;
