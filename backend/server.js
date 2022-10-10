const { json } = require("body-parser");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
const app = express();
const { errorHandler } = require("../backend/middleware/errorMiddleware");
const connectDB = require("../backend/config/db");
connectDB();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
