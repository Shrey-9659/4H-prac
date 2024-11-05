const express = require("express");
const mongoose = require("mongoose");
const PORT = 5050;
const MONGO_URI = "mongodb://localhost:27017/mydatabase";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("DB connection established");
  })
  .catch(() => {
    console.log("DB connection failed");
  });

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

const app = express();

app.post("/register", (req, res) => {
    // Logic to register in database
})
app.post("/login", (req, res) => {})
// Logic to check the credentials from database

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
