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

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// PORT
const PORT = process.env.PORT || 5000;

// all routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

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
