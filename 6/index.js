//express
const express = require('express');
const bodyParser = require('./middlewares/bodyParser');
const morgan = require('./middlewares/morgan');
require('./config/mongodb');
const todo = require('./routes/todo');
const user = require('./routes/user');
const app = express();


app.use(morgan.morgan);
app.use(bodyParser.parser); //for parsing application/json



app.use('/user',user);
app.use('/todo',todo);


app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 3000");
});