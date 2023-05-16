const app = require("./app");
const { connectDB } = require("./config/database");
// ENV FILES
require("dotenv").config();
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

// DB CONNECTION
async function run(uri) {
  await connectDB(uri);
  console.log("CONNECTED DB");
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

// START SERVER
run(DB_URI);
