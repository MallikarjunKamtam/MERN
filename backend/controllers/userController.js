const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, city } = req.body;

  if (!name || !email || !password || !city) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //check if user exist

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("user already exist with this email id");
  }

  //hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPW = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    city,
    password: hashedPW,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      city: user.city,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //chcekc for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.name,
      name: user.name,
      city: user.city,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user credentials");
  }

  res.json({
    message: "Login User",
  });
});

const getMe = asyncHandler(async (req, res) => {
  res.json({
    message: "user get me",
  });
});

//generate token and jwt

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "20d",
  });
};

module.exports = {
  registerUser,
  getMe,
  loginUser,
};
