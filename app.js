const express = require("express"),
  app = express(),
  todoRouter = require("./routes/todoRouter"),
  morgan = require("morgan");

// Express Part
// process.env.STATUS === 'dev' ? app.use(morgan("dev")) : null;
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", todoRouter);

module.exports = app;
