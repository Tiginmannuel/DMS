const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const FileSchema = mongoose.Schema({
  content: String,
});

FileSchema.plugin(AutoIncrement, { inc_field: "fileId" });
module.exports = mongoose.model("File", FileSchema);
