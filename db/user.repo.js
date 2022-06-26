const User = require("../models/user");

const getUserDetails = (userName) => {
  return User.findOne({ name: userName }).populate(["folders", "files"]);
};

const findByIdAndUpdateFolder = (userName, folderImage) => {
  return User.findOneAndUpdate(
    { name: userName },
    {
      $push: {
        folders: folderImage,
      },
    },
    { new: true, useFindAndModify: false }
  );
};

const findByIdAndUpdateFile = (userName, fileImage) => {
  return User.findOneAndUpdate(
    { name: userName },
    {
      $push: {
        files: fileImage,
      },
    },
    { new: true, useFindAndModify: false }
  );
};

const removeFile = (userName, fileImage) => {
  User.findOneAndUpdate(
    { name: userName },
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
