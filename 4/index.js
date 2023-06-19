//express
const express = require('express');
const bodyParser = require('./middlewares/bodyParser');
const morgan = require('./middlewares/morgan');
const route = require('./routes');
const user = require('./routes/user');
const config = require('./config/mongodb');
const Post = require('./models/Post');
const controllers = require('./controllers/main');
const app = express();

//two methods to write
// app.use(morgan);
app.use(morgan.morgan);


app.use(bodyParser.parser); //for parsing application/json
app.use('/',route); //add route using express route //sab routes main ma use karo '/' here
app.use('/user',user);

//save data in database
// const post = new Post({
//     title: "hello world",
//     description : "this is title description"
// })
// post.save().then(
//     () => {
//     //   app.use(controllers.success);
//     console.log('saved')
//     }
//   ).catch(
//     (error) => {
//         // app.use(controllers.error);
//         console.log(error)
//     }
//   );

  //Get Single Data from Database
  // Select * from Post where title = "hello world"
  // Post.findOne({title: "hello world"}).then(post=>{
  //   console.log(post);
  // }).catch(err =>{
  //   console.log(err);
  // })

    //Get All Data from Database
//find return an array
  // Post.find({title: "hello world"}).then(post=>{
  //   console.log(post);
  // }).catch(err =>{
  //   console.log(err);
  // })
 
  // Update single Data from database
  // Post.updateOne({title: "hello world update"}, {title: "hello world"}).then(
  //   post =>{console.log(post)}
  // );

  //Delete Data From database - Task



// const myJson = {
//     "123": {
//         firstname: "Sabahat",
//         lastname: "Zainab"
//     },
//     "456" : {
//         firstname: "Muhammad",
//         lastname: "Waryal"
//     }
// }
// console.log(myJson['123'])
// console.log(myJson['456'])





app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
});