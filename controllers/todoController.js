const Todos = require("../model/todoModel");
// ----{For All Todos}----

// getting all documents

exports.getTodos = async (req, res) => {
  const todos = await Todos.find();
  console.log(todos);
  res.render("./index", {
    title: "Todo List",
    todos,
  });
};

// creating document
exports.createTodo = async (req, res) => {
  try {
    await Todos.create(req.body);
    return res.redirect("/");
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// create many documents at once
exports.createTodos = async (req, res) => {
  try {
    const todos = await Todos.insertMany(req.body);
    return res.status(201).json({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
exports.deleteTodos = async (req, res) => {
  try {
    const todos = await Todos.deleteMany({});
    return res.status(201).json({
      status: "success",
      message: "All Deleted",
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
// ----{For Individual Todo}----

// getting document by id
exports.getTodo = async (req, res) => {
  try {
    const todo = await Todos.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      todo,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
// editing document's property
exports.editTodo = async (req, res) => {
  try {
    console.log(req.body);
    await Todos.findByIdAndUpdate(req.body.id, req.body, {
      returnDocument: "after",
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
// replacing document
exports.updateTodo = async (req, res) => {
  try {
    await Todos.findByIdAndUpdate(req.body.id, req.body);
    return res.redirect("/");
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// deleting document
exports.deleteTodo = async (req, res) => {
  try {
    console.log(req.body);
    await Todos.findByIdAndDelete(req.body.id);
    res.redirect("/");
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
