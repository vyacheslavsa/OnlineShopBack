const mongoose = require('mongoose');

const { Schema } = mongoose;

const TestSchema = new Schema({
    title: String
});

module.exports = DataSchema = mongoose.model('getdata', TestSchema);