const mongoose = require("mongoose");
// const path = require("path");
// require("dotenv").config({ path: path.join(__dirname, "..", "config.env") });

const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`MongoDB connection succesfull :${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`error connecting to the database ${err}`);
    });
};

module.exports = dbConnect;
