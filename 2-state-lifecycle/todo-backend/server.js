const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

let DATA = [];

// GET
app.get("/todos", (req, res) => {
  const activeTodos = DATA.filter((todo) => !todo.isDelete);
  res.json(activeTodos);
});

// POST
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  if (!newTodo.text) {
    return res.status(400).json({ message: "Todo text is required" });
  }
  newTodo.id = DATA.length + 1;
  newTodo.isChecked = false;
  newTodo.isDelete = false;
  DATA.push(newTodo);
  res.status(201).json(newTodo);
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { isChecked } = req.body;

  const todoIndex = DATA.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  DATA[todoIndex].isChecked = isChecked;

  res.status(200).json(DATA[todoIndex]);
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = DATA.findIndex((todo) => todo.id === parseInt(id));

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  DATA[todoIndex].isDelete = true;
  res.status(200).json({ message: `Todo with id ${id} marked as deleted` });
});

app.listen(port, () => {
  console.log(`Backend API server is running on http://localhost:${port}`);
});
