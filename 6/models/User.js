const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});
module.exports = mongoose.model('User',user);