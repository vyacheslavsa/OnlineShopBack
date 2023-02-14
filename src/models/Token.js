const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    user: String,
    refreshToken: String
});

module.exports = UserSchema = mongoose.model('token', schema);