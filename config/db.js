const mongoose = require("mongoose");
require("dotenv").config({ path: path.join(__dirname, "..", "config.env") });

// const DB_URL = "mongodb+srv://AaooChale:DL11P7C5U22YSBzB@aaoochaledb.wxcfmcd.mongodb.net/aaoochale";
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
