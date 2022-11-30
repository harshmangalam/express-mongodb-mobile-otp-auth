const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/mobile-otp-auth";
// connect with mongodb
exports.connectMongo = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("Connected with mongodb");
};
