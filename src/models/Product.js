const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    category: String,
    market: String,
    type: String,
    weight: Number,
    components: Object,
    count: Number
});

module.exports = ProductSchema = mongoose.model('product', schema);