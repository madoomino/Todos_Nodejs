const { mongoose } = require("../config/database");
// Schema Setup
const todoSchema = mongoose.Schema({
  todoDescription: {
    type: String,
  },
});

// Model Setup
Todos = mongoose.model("todo", todoSchema);

module.exports = Todos;
