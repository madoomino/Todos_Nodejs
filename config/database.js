const db = {
  // capitalized properties saved in .env file in root dir
  mongoose: require("mongoose"),
  dotenv: require("dotenv").config(),
  LOCAL_DB: process.env.LOCAL_DB,
  ONLINE_DB: process.env.ONLINE_DB,
  USER: process.env.USER,
  PASS: process.env.PASS,
  PORT: process.env.PORT || 5000,
};

module.exports = db;
