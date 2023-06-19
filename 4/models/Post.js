const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// module.exports = mongoose.model('Post',new Schema({
//     title: String,
//     description: String

// })); 

const post = new Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Post', post);