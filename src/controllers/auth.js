const User = require("../models/user");

const signup = async (req, res, next) => {
  // extract phone number from request body
  const { phone } = req.body;

  // check duplicate phone number
  const user = await User.findOne({
    phone,
  });

  if (user) {
    return next({ status: 400, message: "Phone number already exists" });
  }

  // create new user
  const newUser = new User({
    phone,
  });

  await newUser.save();

  // generate 6 digit  otp

  // save otp in db

  return res.status(201).json({
    status: "success",
    message: "6 digit otp sent on your phone number.",
    data: {
      userId: newUser.id,
    },
  });
};


module.exports ={
  signup
}