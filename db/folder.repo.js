const file = require("../models/file");
const Folder = require("../models/folder");

const getFolderDetails = (folderId) => {
  return Folder.findOne({ folderId: folderId }).populate({
    path: "files",
    select: "content",
  });
};

const createFolder = (folderWithUserName) => {
  return Folder.create({ folderName: folderWithUserName.folderName });
};

const findByIdAndUpdateFile = (folderId, fileImage) => {
  return Folder.findOneAndUpdate(
    { folderId: folderId },
    {
      $push: {
        files: fileImage,
      },
    },
    { new: true, useFindAndModify: false }
  );
};

const removeFile = (currFolderId, fileImage) => {
  Folder.findOneAndUpdate(
    { folderId: currFolderId },
    {
      $pull: {
        files: fileImage,
      },
    },
    { safe: true }
  );
};

module.exports = {
  createFolder,
  removeFile,
  getFolderDetails,
  findByIdAndUpdateFile,
};
