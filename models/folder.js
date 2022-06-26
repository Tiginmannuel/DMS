const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const FolderSchema = mongoose.Schema({
  folderName: String,
  files: [{ type: Schema.Types.ObjectId, ref: "File" }],
});

FolderSchema.plugin(AutoIncrement, { inc_field: "folderId" });
module.exports = mongoose.model("Folder", FolderSchema);
