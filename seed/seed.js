const mongoose = require("mongoose");
const User = require("../models/user");

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true }, () => {
  console.log("Connected to DB!");
});

const users = [
  new User({
    userId: 1,
    name: "testuser",
  }),
];

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(users);
};

seedDB().then(() => {
  mongoose.connection.close();
});
