const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use("/orders", require("./routes/orders"));
app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));
app.use("/students", require("./routes/students"));
app.use("/employees", require("./routes/employees"));
app.use("/books", require("./routes/books"));
app.use("/movies", require("./routes/movies"));
app.use("/courses", require("./routes/courses"));
app.use("/cities", require("./routes/cities"));
app.use("/weather", require("./routes/weather"));


app.use((req, res) => {
  res.status(404).json({ message: "API endpoint not found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
