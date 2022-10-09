const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.json({
    message: "Getting the goals",
  });
});

const postGoals = asyncHandler(async (req, res) => {
  if (req.body.text) {
    res.json({
      ...req.body,
    });
  } else {
    res.status(400);
    throw new Error("Please add text");
  }
});

const putGoals = asyncHandler(async (req, res) => {
  res.json({
    message: "Putting goals",
    id: req.params.id,
  });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.json({
    message: "Deleting goals",
    id: req.params.id,
  });
});

module.exports = {
  getGoals,
  putGoals,
  postGoals,
  deleteGoals,
};
