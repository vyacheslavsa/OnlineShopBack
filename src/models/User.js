const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    login: String,
    userId: String,
    passHash: String
});

module.exports = UserSchema = mongoose.model('user', schema);