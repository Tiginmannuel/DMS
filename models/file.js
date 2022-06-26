const mongoose = require("mongoose");

const FileSchema = mongoose.Schema({
  content: String
});

module.exports = mongoose.model("File", FileSchema);
