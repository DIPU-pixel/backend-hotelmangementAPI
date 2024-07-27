const mongoose = require("mongoose");
require("dotenv").config();
const MongoURLServer = process.env.MongoURLServer;
const MongoURLLocal = process.env.MongoURLLocal;

mongoose.connect(MongoURLServer, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true, // Ensure SSL is enabled
  tlsAllowInvalidCertificates: false, // Ensure proper SSL certificate validation
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("db is connected");
});
db.on("error", (error) => {
  console.log(`db is getting ${error}`);
});

db.on("disconnected", () => {
  console.log("db is Disconnected");
});

module.exports = db;
