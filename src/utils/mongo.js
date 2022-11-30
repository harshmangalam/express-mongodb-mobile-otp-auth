const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
// connect with mongodb
exports.connectMongo = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("Connected with mongodb");
};
