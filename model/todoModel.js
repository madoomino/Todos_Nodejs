const mongoose = require("mongoose");
// Schema Setup
const todoSchema = mongoose.Schema({
  todoDescription: {
    type: String,
    required: true,
  },
});

// Model Setup
Todos = mongoose.model("todo", todoSchema);

module.exports = Todos;
