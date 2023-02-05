const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    name: String,
    image: String
});

module.exports = MarketSchema = mongoose.model('market', schema);