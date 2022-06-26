const mongoose = require("mongoose");
const User = require("../models/user");
// const Folder = require("../models/folder");

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true }, () => {
  console.log("Connected to DB!");
});

const users = [
  new User({
    name: "testuser",
  }),
];

// const folder = {
//   folderName: "_nonFolderFiles",
// };

// const file = {
//   content: "Test Data",
// };

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(users);
  // var user = User.findOne({ name: users[0].name });
  // var newFolder = new Folder(folder);
  // newFolder.user = user;
  // await newFolder.save();
};

seedDB().then(() => {
  mongoose.connection.close();
});
