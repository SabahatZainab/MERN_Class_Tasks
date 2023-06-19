const mongoose = require('mongoose');
//await is only used in async functions

mongoose.connect('mongodb://localhost/my_database');
try {
    if(mongoose.connect('mongodb://localhost/my_database')){
    console.log('connected successfully')
    }
  } catch (error) {
    handleError(error);   
  }



// await MyModel.findOne();
   

// const connection = async() =>{
//     try{
//         mongoose.connect('mongodb://localhost/my_database');
//         console.log("Connected to database");
//     }catch(err){
//         console.log("Error connection to database",err);
//     }
// }
// module.exports = connection; //set the enviroment variable for connection

        // const Schema = mongoose.Schema;
        // // const ObjectId = Schema.ObjectId;

        // const post = new Schema({
        //     title: String,
        //     description: String

        // });
// module.exports = mongoose.model('Post',post); //create model named Post and use the above post schema


