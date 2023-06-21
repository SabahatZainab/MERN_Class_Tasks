const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const todo = new Schema({
    title: String,
    list: Array

});
module.exports = mongoose.model('Todo',todo);


// const Schema = mongoose.Schema;
// // module.exports = mongoose.model('Post',new Schema({
// //     title: String,
// //     description: String

// // })); 

// const post = new Schema({
//     title: String,
//     description: String
// });

// module.exports = mongoose.model('Post', post);


