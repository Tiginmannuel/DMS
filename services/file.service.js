const fileRepo = require("../db/file.repo");
const folderRepo = require("../db/folder.repo");
const userRepo = require("../db/user.repo");

class FileService {
  createFile(_, callback) {
    var fileRequest = _.request;

    var newFile = fileRepo.createFile(fileRequest).then((fileImage) => {
      console.log("\n>> Created File:\n", fileImage);

      if (fileRequest.folderName && fileRequest.folderName.length > 0) {
        return folderRepo.findByIdAndUpdateFile(
          fileRequest.folderName,
          fileImage
        );
      } else {
        return userRepo.findByIdAndUpdateFile(fileRequest.userName, fileImage);
      }
    });
    callback(null, newFile);
  }

  async moveFile(_, callback) {
    var fileRequest = _.request;
    var fileImage = await fileRepo.getFile(fileRequest.fileId);
    if (fileRequest.currFolderName && fileRequest.currFolderName.length > 0) {
      folderRepo.removeFile(fileRequest.currFolderName, fileImage);
    } else {
      userRepo.removeFile(fileRequest.userName, fileImage);
    }
    folderRepo.moveFile(fileRequest.destFolderName, fileImage);
    callback(null, {});
  }
}

module.exports = FileService;
