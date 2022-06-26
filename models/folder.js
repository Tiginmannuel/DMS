const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FolderSchema = mongoose.Schema({
  folderName: String,
  files: [{ type: Schema.Types.ObjectId, ref: "File" }],
});

module.exports = mongoose.model("Folder", FolderSchema);
