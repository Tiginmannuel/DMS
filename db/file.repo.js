const File = require("../models/file");

const createFile = (fileRequest) => {
  return File.create({ content: fileRequest.content });
};

const getFile = (fileId) => {
  return File.findOne({ _id: fileId });
};

module.exports = {
  createFile,
  getFile
};
