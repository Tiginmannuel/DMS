const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  name: String,
  folders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Folder",
    },
  ],
  files: [
    {
      type: Schema.Types.ObjectId,
      ref: "File",
    },
  ]
});

module.exports = mongoose.model("User", UserSchema);
