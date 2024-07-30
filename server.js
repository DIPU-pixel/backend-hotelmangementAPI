const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const personRouter = require("./routes/personRoutes");
const menuRouter = require("./routes/menuItemRoutes");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(bodyParser.json());
// Allow all origins
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.use(express.json()); // Parse JSON bodies
// Middleware function
const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} - Request made to ${req.originalUrl}`
  );
  next(); // Call next to pass control to the next middleware
};

// Register middleware
app.use(logRequest);

// Route definition
app.get("/", (req, res) => {
  res.send("Welcome to my page");
});
app.use("/person", personRouter);
app.use("/menuitem", menuRouter);

//!FOR Menu Item :
app.listen(PORT, () => {
  console.log("app is start");
});
