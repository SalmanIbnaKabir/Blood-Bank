const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
// dot env config
dotenv.config();

const app = express();

// mongodb connection
connectDB();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// PORT
const PORT = process.env.PORT || 5000;

// default route
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "WELCOME TO BLOOD BANK Application",
  });
});

// server listening
app.listen(PORT, () => {
  console.log(`Blood Bank Server running on http://localhost:${PORT}`);
});
