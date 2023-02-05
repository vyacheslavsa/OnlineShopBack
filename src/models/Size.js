const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: String,
    price: Number,
    image: String
});

module.exports = SizeSchema = mongoose.model('size', schema);