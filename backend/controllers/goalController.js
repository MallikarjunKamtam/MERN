const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({
    user: req.user.id,
  });
  res.status(200).json(goals);
});

const postGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });

  if (req.body.text) {
    res.json(goal);
  } else {
    res.status(400);
    throw new Error("Please add text");
  }
});

const putGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id);

  //Checking for user

  if (!user) {
    res.status(401);
    throw new Error("Not authorized user");
  }

  // making sure the login user matches the goal user

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  const user = await User.findById(req.user.id);

  //Checking for user

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  if (!user) {
    res.status(401);
    throw new Error("Not authorized user");
  }

  // making sure the login user matches the goal user

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();

  res.status(200).json({
    message: ` ${req.params.id} is Deleted succesfully`,
  });
});

module.exports = {
  getGoals,
  putGoals,
  postGoals,
  deleteGoals,
};
