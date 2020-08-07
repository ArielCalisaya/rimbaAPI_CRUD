const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const mongodburl = process.env.MONGODB_URL;
mongoose
  .connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("DB has been created succesfully"))
  .catch((err) => console.log(err.reason));

module.exports = mongoose;
