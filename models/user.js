const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

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
  ],
});

UserSchema.plugin(AutoIncrement, { inc_field: "userId" });
module.exports = mongoose.model("User", UserSchema);
