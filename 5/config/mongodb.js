const mongoose = require('mongoose');
//await is only used in async functions

mongoose.connect('mongodb://0.0.0.0:27017/my_database');
try {
    if(mongoose.connect('mongodb://0.0.0.0:27017/my_database')){
    console.log('connected successfully')
    }
  } catch (error) {
    handleError(error);   
  }
 
 
// mongoose.connect('mongodb://localhost/my_database');
// try {
//     if(mongoose.connect('mongodb://localhost/my_database')){
//     console.log('connected successfully')
//     }
//   } catch (error) {
//     handleError(error);   
//   }
// async function dbConnect()
// {
//     let result = await client.connect();
//     let db = result.db(dbName);
//     return db.collection('products');
// }

// module.exports = client.connect();

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

//         const Schema = mongoose.Schema;
//         const ObjectId = Schema.ObjectId;

//         const post = new Schema({
//             title: String,
//             description: String

//         });
// module.exports = mongoose.model('post',post); //create model named Post and use the above post schema


