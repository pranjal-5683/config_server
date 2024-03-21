const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://vaibhavthorat115:Svaibhav2017@cluster0.jr16bvu.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose
    .connect(mongoUrl, {})
    .then(() => console.log("mongodb connected..."))
    .catch((err) => console.log("something is wrong at mongodb..." + err));
};
module.exports = connectToMongo;
