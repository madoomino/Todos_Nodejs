const express = require("express");
(router = express.Router()),
  (todoController = require("../controllers/todoController"));

// For All Todos
router.route("/").get(todoController.getTodos).post(todoController.createTodo);

// Individual Todo

router.post("/delete", todoController.deleteTodo);
router.post("/edit", todoController.updateTodo);

module.exports = router;
