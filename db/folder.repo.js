const file = require("../models/file");
const Folder = require("../models/folder");

const getFolderDetails = (folderName) => {
  return Folder.findOne({ folderName: folderName }).populate({
    path: "files",
    select: "content",
  });
};

const createFolder = (folderWithUserName) => {
  return Folder.create({ folderName: folderWithUserName.folderName });
};

const findByIdAndUpdateFile = (folderName, fileImage) => {
  return Folder.findOneAndUpdate(
    { folderName: folderName },
    {
      $push: {
        files: fileImage,
      },
    },
    { new: true, useFindAndModify: false }
  );
};

const removeFile = (currFolderName, fileImage) => {
  Folder.update(
    { folderName: currFolderName },
    {
      $pull: {
        files: fileImage,
      },
    },
    { safe: true }
  );
};

const moveFile = (destFolderName, fileImage) => {
  return Folder.findOneAndUpdate(
    { folderName: destFolderName },
    {
      $push: {
        files: fileImage,
      },
    },
    { new: true, useFindAndModify: false }
  );
};

module.exports = {
  createFolder,
  removeFile,
  moveFile,
  getFolderDetails,
  findByIdAndUpdateFile,
};
