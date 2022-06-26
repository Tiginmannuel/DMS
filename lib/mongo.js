const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB!");
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  console.log(err.message);
});
