//express
const express = require('express');
const bodyParser = require('./middlewares/bodyParser');
const morgan = require('./middlewares/morgan');
const route = require('./routes');
const user = require('./routes/user');
const app = express();

//two methods to write
// app.use(morgan);
app.use(morgan.morgan);


app.use(bodyParser.parser); //for parsing application/json
app.use('/',route); //add route using express route //sab routes main ma use karo '/' here
app.use('/user',user);





app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
});