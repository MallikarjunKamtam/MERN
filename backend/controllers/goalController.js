const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.json(goals);
});

const postGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.create({
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
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
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
