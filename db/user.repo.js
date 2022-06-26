const User = require("../models/user");

const getUserDetails = (userId) => {
  return User.findOne({ userId: userId }).populate(["folders", "files"]);
};

const findByIdAndUpdateFolder = (userId, folderImage) => {
  return User.findOneAndUpdate(
    { userId: userId },
    {
      $push: {
        folders: folderImage,
      },
    },
    { new: true, useFindAndModify: false }
  );
};

const findByIdAndUpdateFile = (userId, fileImage) => {
  return User.findOneAndUpdate(
    { userId: userId },
    {
      $push: {
        files: fileImage,
      },
    },
    { new: true, useFindAndModify: false }
  );
};

const removeFile = (userId, fileImage) => {
  User.findOneAndUpdate(
    { userId: userId },
    {
      $pull: {
        files: fileImage,
      },
    },
    { new: true }
  );
};

module.exports = {
  getUserDetails,
  removeFile,
  findByIdAndUpdateFolder,
  findByIdAndUpdateFile,
};
