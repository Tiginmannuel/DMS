const fileRepo = require("../db/file.repo");
const folderRepo = require("../db/folder.repo");
const userRepo = require("../db/user.repo");

class FileService {
  createFile(_, callback) {
    var fileRequest = _.request;

    var newFile = fileRepo.createFile(fileRequest).then((fileImage) => {
      console.log("\n>> Created File:\n", fileImage);

      if (
        fileRequest.folderId !== null &&
        fileRequest.folderId !== undefined
      ) {
        return folderRepo.findByIdAndUpdateFile(
          +fileRequest.folderId,
          fileImage
        );
      } else {
        return userRepo.findByIdAndUpdateFile(+fileRequest.userId, fileImage);
      }
    });
    callback(null, newFile);
  }

  async moveFile(_, callback) {
    var fileRequest = _.request;
    var fileImage = await fileRepo.getFile(+fileRequest.fileId);
    if (
      fileRequest.currFolderId != null &&
      fileRequest.currFolderId != undefined
    ) {
      folderRepo.removeFile(+fileRequest.currFolderId, fileImage);
    } else {
      userRepo.removeFile(+fileRequest.userId, fileImage);
    }
    folderRepo.findByIdAndUpdateFile(+fileRequest.destFolderId, fileImage);
    callback(null, {});
  }
}

module.exports = FileService;
