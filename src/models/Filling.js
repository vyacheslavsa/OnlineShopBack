const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

module.exports = FillingSchema = mongoose.model('filling', schema);