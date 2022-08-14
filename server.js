const app = require("./app"),
  { mongoose, PORT, LOCAL_DB } = require("./config/database");

// DB Connection
mongoose
  .connect(LOCAL_DB)
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Server Start
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
