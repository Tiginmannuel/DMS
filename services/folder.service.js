const folderRepo = require("../db/folder.repo");
const userRepo = require("../db/user.repo");

class FolderService {
  createFolder(_, callback) {
    var folderRequest = _.request;

    var newFolder = folderRepo
      .createFolder(folderRequest)
      .then((folderImage) => {
        console.log("\n>> Created Folder:\n", folderImage);
        return userRepo.findByIdAndUpdateFolder(
          +folderRequest.userId,
          folderImage
        );
      });
    callback(null, { newFolder });
  }

  async getFolderDetails(_, callback) {
    var request = _.request;

    var folder = await folderRepo.getFolderDetails(+request.folderId);
    console.log(folder);
    callback(null, folder);
  }
}

module.exports = FolderService;
