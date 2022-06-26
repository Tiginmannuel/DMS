var grpc = require("grpc");
var protoLoader = require("@grpc/proto-loader");
require("./lib/mongo");

const user = require("./services/user.service");
const userService = new user();

const folder = require("./services/folder.service");
const folderService = new folder();

const file = require("./services/file.service");
const fileService = new file();

// User Proto
var userPackageDefinition = protoLoader.loadSync("./protos/user.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
var usersProto = grpc.loadPackageDefinition(userPackageDefinition);

// Folder Proto
var folderPackageDefinition = protoLoader.loadSync("./protos/folder.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
var foldersProto = grpc.loadPackageDefinition(folderPackageDefinition);

// File Proto
var filePackageDefinition = protoLoader.loadSync("./protos/file.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
var filesProto = grpc.loadPackageDefinition(filePackageDefinition);

const server = new grpc.Server();
server.addService(usersProto.UserService.service, {
  getUserDetails: userService.getUserDetails,
});
server.addService(foldersProto.FolderService.service, {
  createFolder: folderService.createFolder,
  getFolderDetails: folderService.getFolderDetails,
});

server.addService(filesProto.FileService.service, {
  createFile: fileService.createFile,
  moveFile: fileService.moveFile,
});

server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:30043");
server.start();
