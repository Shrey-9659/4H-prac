const express = require("express");
const mongoose = require("mongoose");
const PORT = 5050;
const cors = require("cors");
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

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors());

app.post("/register", async (req, res) => {
    const dataToAdd = req.body
    const addedData = new userModel(dataToAdd);
    await addedData.save();
    res.send(addedData);
})
app.post("/login", (req, res) => {})
// Logic to check the credentials from database

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
