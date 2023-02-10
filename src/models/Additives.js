const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  category: String,
  name: String,
  description: String,
  price: Number,
  image: String,
});

const AdditivesModel = mongoose.model("additives", schema);

module.exports = AdditivesModel;
