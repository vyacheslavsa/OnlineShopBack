const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

module.exports = BreadSchema = mongoose.model('bread', schema);