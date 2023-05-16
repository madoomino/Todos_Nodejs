const mongoose = require("mongoose");

exports.connectDB = async (uri) => mongoose.connect(uri);
